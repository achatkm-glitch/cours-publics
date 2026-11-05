/* Interface des calculateurs MFTN. Dépend de calc.js (window.Calc). */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const num = (id) => {
    const e = $(id), v = parseFloat(String(e.value).replace(',', '.'));
    if (e.dataset.log) return Math.pow(10, v);
    return e.dataset.scale ? v * parseFloat(e.dataset.scale) : v;
  };
  /* Barres glissantes : affichage de la valeur courante à côté de chaque curseur. */
  function syncSliders() {
    document.querySelectorAll('input[type="range"]').forEach(r => {
      const o = r.parentElement.querySelector('output'); if (!o) return;
      const v = parseFloat(r.value), unit = r.dataset.unit ? ' ' + r.dataset.unit : '';
      const value = r.dataset.log ? '1e' + (Math.round(v * 10) / 10) : r.dataset.digits ? v.toFixed(Number(r.dataset.digits)).replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1').replace('.', ',') : String(v).replace('.', ',');
      o.textContent = value + unit;
    });
  }
  function updateTransportPe(source) {
    const pe = $('t-Pe'), D = $('t-D'), speed = Math.abs(num('t-a')), sigma0 = num('t-s0');
    if (!pe || !D) return;
    if (source === 't-Pe') {
      if (speed > 0) {
        const value = Number(pe.value);
        if (value > 0) { D.value = String(speed * sigma0 / value); pe.dataset.lastNonzero = String(value); }
      }
      return;
    }
    if (speed === 0) {
      if (Number(pe.value) > 0) pe.dataset.lastNonzero = pe.value;
      pe.value = '0'; pe.disabled = true;
      return;
    }
    pe.disabled = false;
    const value = Number(pe.value) > 0 ? Number(pe.value) : Number(pe.dataset.lastNonzero) || 3;
    pe.value = String(value);
    pe.dataset.lastNonzero = String(value);
    D.value = String(speed * sigma0 / value);
  }
  const list = (id) => String($(id).value).split(/[;\s]+/).map(s => parseFloat(s.replace(',', '.'))).filter(v => isFinite(v));
  /* Valeur du curseur, suivie des valeurs supplémentaires du champ « id + x » (comparaison). */
  const vals = (id) => { const o = [num(id)].concat($(id + 'x') ? list(id + 'x') : []); return o.filter((v, i) => o.indexOf(v) === i); };
  const checked = (name) => Array.from(document.querySelectorAll('input[name="' + name + '"]:checked')).map(e => e.value);
  const fmt = (v, d = 4) => {
    if (!isFinite(v)) return '—';
    if (v === 0) return '0';
    const a = Math.abs(v);
    return (a >= 1e5 || a < 1e-3) ? v.toExponential(3).replace('.', ',') : v.toFixed(d).replace('.', ',');
  };
  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  /* Éclaircit une couleur #rrggbb (f entre 0 et 1) : nuances d'une même famille pour distinguer les maillages. */
  const tint = (col, f) => {
    const m = /^#([0-9a-f]{6})$/i.exec(col); if (!m) return col;
    const n = parseInt(m[1], 16), mix = v => Math.round(v + (255 - v) * f);
    return 'rgb(' + mix((n >> 16) & 255) + ',' + mix((n >> 8) & 255) + ',' + mix(n & 255) + ')';
  };
  const pal = () => ['--blue', '--orange', '--green', '--red', '--c5', '--c6', '--c7', '--c8'].map(css);   // huit couleurs bien séparées : jamais deux courbes de même couleur sur un graphique
  const SCHEME = { ftcs: 'FTCS (explicite)', btcs: 'BTCS (implicite)', cn: 'Crank–Nicolson (θ = 1/2)', df: 'Dufort–Frankel (explicite)', ri: 'Richardson (explicite)', amont: 'Amont (explicite)', lxf: 'Lax–Friedrichs (explicite)', lw: 'Lax–Wendroff (explicite)', bw: 'Beam–Warming (explicite)', cimp: 'Centré implicite', jacobi: 'Jacobi', gs: 'Gauss–Seidel' };

  /* ---------- tracé : cadre d'axes carré, axes linéaires ou logarithmiques ---------- */
  function niceTicks(lo, hi, n) {
    const span = hi - lo, raw = span / n, mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 5, 10].map(k => k * mag).find(s => s >= raw) || raw;
    const t = [];
    for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-12 * step; v += step) t.push(Math.abs(v) < 1e-12 * step ? 0 : v);
    return t;
  }
  function observedLogSlope(s) {
    const p = s.x.map((x, i) => [x, s.y[i]]).filter(([x, y]) => isFinite(x) && isFinite(y) && x > 0 && y > 0).map(([x, y]) => [Math.log(x), Math.log(y)]);
    if (p.length < 2) return NaN;
    const mx = p.reduce((a, v) => a + v[0], 0) / p.length, my = p.reduce((a, v) => a + v[1], 0) / p.length;
    const den = p.reduce((a, v) => a + (v[0] - mx) ** 2, 0);
    return den > 0 ? p.reduce((a, v) => a + (v[0] - mx) * (v[1] - my), 0) / den : NaN;
  }
  /* Repères de lecture au survol : décrire les axes et l'objet du graphe sans conclure à la place de l'étudiant. */
  const FIGURE_NOTES = {
    't-plot': 'Profil transporté : x est la position et φ la variable représentée. Comparez les instants affichés.',
    'd-plot': 'Coniques associées à l’équation affichée. Repérez leur forme et leur orientation pour les comparer au curseur Δ.',
    'd-dep': 'Schéma dans le plan (x,t) autour du point P. Suivez les zones tracées et les axes pour lire le domaine représenté.',
    'k-heat': 'Carte de température dans la plaque : x et y donnent la position ; la couleur et l’échelle indiquent T.',
    'k-line': 'Température le long de la ligne médiane de la plaque ; x repère la position sur cette ligne.',
    'k-par': 'Profils de température selon le temps : x est la position et u la valeur du profil. La légende associe chaque courbe à son instant.',
    'k-hyp': 'Profils de u en fonction de x. La légende distingue l’état initial et l’instant sélectionné.',
    'l-plot': 'Température le long de la barre avec production. x repère la position et T la température.',
    'b-plot': 'Solution calculée et référence en fonction de x. La légende identifie chaque méthode et le maillage.',
    'b-plot2': 'Écart à la solution analytique selon x. Comparez les méthodes et les maillages sans déduire une tendance d’un seul point.',
    'e-plot': 'Profil de la solution stationnaire selon x. La légende précise la méthode et le maillage.',
    'e-plot2': 'Écart à la solution analytique selon x ; les valeurs négatives et positives gardent leur signe.',
    'e-conv': 'Erreur maximale en fonction du pas spatial h pour les cas affichés.',
    'j-plot': 'Valeurs des itérés selon x ; la légende permet de suivre les étapes et de les comparer à la référence.',
    'j-plot2': 'Résidu en fonction du numéro d’itération k. L’axe vertical logarithmique facilite la lecture des ordres de grandeur.',
    'o-first-plot': 'Erreur des approximations de dérivée première en fonction du pas h. Chaque série correspond à une formule.',
    'o-second-plot': 'Erreur des approximations de dérivée seconde en fonction du pas h. Chaque série correspond à une formule.',
    'n-plot': 'Erreur maximale selon h pour les formules de bord sélectionnées. Les deux axes sont logarithmiques.',
    'n-plot2': 'Répartition de l’erreur le long du domaine pour le maillage indiqué.',
    'c-plot': 'Profils calculés de température au temps indiqué ; x est la position et u la température normalisée.',
    'c-amp': 'Module du facteur d’amplification selon le nombre d’onde θ. Comparez les courbes sur l’intervalle tracé.',
    'c-g-signed': 'Facteur d’amplification signé selon θ ; le signe conserve l’information sur l’alternance du mode.',
    'c-plot2': 'Erreur maximale selon le pas de temps Δt pour les schémas affichés.',
    'c-refine': 'Erreur maximale au même temps final selon le maillage. La légende distingue les schémas.',
    'p-plot': 'Valeur du terme associé à Dufort–Frankel selon h, pour les chemins de raffinement affichés.',
    'p-plot2': 'Valeur du terme associé à Lax–Friedrichs selon h, pour les chemins de raffinement affichés.',
    'p-effect-df': 'Profils calculés par Dufort–Frankel selon le maillage ; la légende indique les valeurs de r.',
    'p-effect-lxf': 'Profils calculés par Lax–Friedrichs selon le maillage ; la légende indique les valeurs de r.',
    'a-plot': 'Profils calculés d’advection selon x. La légende distingue les schémas et les maillages.',
    'a-modal-amp': 'Module du facteur d’amplification selon θ pour les modes affichés.',
    'a-modal-phase': 'Erreur de phase par pas selon θ ; l’axe vertical est exprimé en radians.',
    'a-conv': 'Erreur maximale à temps final commun selon h pour les schémas affichés.'
  };
  function figureContext(canvas) {
    const id = canvas.id;
    const value = inputId => {
      const e = $(inputId); if (!e) return '';
      const raw = parseFloat(e.value), digits = Number(e.dataset.digits);
      const text = e.dataset.log ? `1e${Math.round(raw * 10) / 10}` : e.dataset.digits
        ? raw.toFixed(digits).replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1').replace('.', ',')
        : String(raw).replace('.', ',');
      const unit = e.dataset.unit ? ` ${e.dataset.unit}` : '';
      return `${text}${unit}`;
    };
    const shown = (inputId, label) => $(inputId) ? `${label} ${value(inputId)}` : '';
    const selected = (name, labels) => {
      const inputs = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`));
      const names = inputs.map(e => e.value === 'fd' ? 'différences finies' : e.value === 'vf' ? 'volumes finis' : e.value === 'centre' ? 'centré' : SCHEME[e.value] || e.value);
      return names.length ? `${labels} ${names.slice(0, 3).join(', ')}${names.length > 3 ? ` et ${names.length - 3} autres` : ''}` : '';
    };
    const type = (name, labels) => {
      const e = document.querySelector(`input[name="${name}"]:checked`);
      return e ? `${labels} ${e.closest('label')?.querySelector('strong')?.textContent || e.closest('label')?.textContent.trim() || e.value}` : '';
    };
    const mesh = () => {
      const values = checked('b-mesh').map(v => v === 'uniforme' ? 'uniforme' : 'non uniforme');
      return values.length ? `maillage ${values.join(' et ')}` : '';
    };
    let items = [];
    if (id === 't-plot') items = [shown('t-Pe', 'Peσ₀ ='), shown('t-t', 't ='), shown('t-s0', 'σ₀ =')];
    else if (id === 'd-plot') items = [shown('d-delta', 'Δ =')];
    else if (id === 'd-dep') items = [shown('d-delta', 'Δ du modèle :')];
    else if (id === 'k-hyp') items = [type('k-type', 'cas :'), shown('k-c', 'c ='), shown('k-th', 't =')];
    else if (id === 'k-par') items = [type('k-type', 'cas :'), shown('k-D', 'D ='), shown('k-tp', 't ='), shown('k-gap', 'écart :')];
    else if (id === 'k-heat' || id === 'k-line') items = [type('k-type', 'cas :'), `T(g, d, h, b) = ${['k-Tl', 'k-Tr', 'k-Tt', 'k-Tb'].map(value).join(' / ')} °C`, shown('k-n', 'nœuds par direction :')];
    else if (id === 'l-plot') items = [shown('l-L', 'L ='), shown('l-q', 'production q ='), `bords : ${checked('l-type').join(', ')}`];
    else if (id === 'b-plot' || id === 'b-plot2') items = [shown('b-N', 'N ='), selected('b-s', 'méthodes :'), mesh()];
    else if (id === 'e-plot' || id === 'e-plot2') items = [shown('e-PeL', 'PeL ='), shown('e-N', 'N ='), selected('e-s', 'schémas :')];
    else if (id === 'e-conv') items = [shown('e-PeL', 'PeL =')];
    else if (id === 'j-plot' || id === 'j-plot2') items = [shown('j-n', 'n ='), shown('j-k', 'itérations k ='), selected('j-m', 'méthodes :')];
    else if (id.startsWith('o-')) items = [type('o-kind', 'approximation :'), shown('o-h0', 'pas initial h₀ ='), shown('o-k', 'niveaux de raffinement :')];
    else if (id === 'n-plot') items = [type('n-bc', 'condition :'), shown('n-kappa', 'κ ='), shown('n-N0', 'N₀ ='), shown('n-k', 'raffinements =')];
    else if (id === 'n-plot2') items = [type('n-bc', 'condition :'), shown('n-Np', 'N du profil =')];
    else if (id === 'c-amp' || id === 'c-g-signed') items = [shown('c-Fo', 'Fo ='), `${checked('c-s').length} schémas sélectionnés`];
    else if (id === 'c-refine') items = [shown('c-Fo', 'Fo ='), shown('c-tf', 'temps final ='), `${checked('c-s').length} schémas sélectionnés`];
    else if (id.startsWith('c-')) items = [shown('c-Fo', 'Fo ='), shown('c-h', 'h ='), shown('c-tf', 'temps final ='), `${checked('c-s').length} schémas sélectionnés`];
    else if ((id.startsWith('p-') && id.includes('plot')) || id.startsWith('p-effect-')) items = [shown('p-r', 'r ='), shown('p-co', 'Co ='), shown('p-fo', 'Fo ='), shown('p-h0', 'h₀ =')];
    else if (id === 'a-modal-amp' || id === 'a-modal-phase') items = [shown('a-Co', 'Co ='), `${checked('a-s').length} schémas sélectionnés`];
    else if (id.startsWith('a-')) items = [shown('a-Co', 'Co ='), shown('a-tf', 'temps final ='), shown('a-Nx', 'maillage Nx ='), `${checked('a-s').length} schémas sélectionnés`];
    else if (id.startsWith('i-c-')) items = [shown('i-N', 'N ='), shown('i-Co', 'C ='), shown(id.endsWith('-0') ? 'i-t1' : 'i-t2', 'instant =')];
    return items.filter(Boolean).join(' · ');
  }
  function figureNote(canvas, title) {
    const note = FIGURE_NOTES[canvas.id] || (title ? `Graphe « ${title} » : lisez les axes et la légende, puis comparez les courbes affichées.` : 'Lisez les axes et la légende pour identifier les grandeurs représentées.');
    const context = figureContext(canvas);
    return context ? `${note}\nRéglages affichés : ${context}.` : note;
  }
  function attachPlotInteraction(canvas, points, area, labels) {
    let wrap = canvas.parentElement;
    if (!wrap.classList.contains('interactive-plot-wrap')) {
      const next = document.createElement('div'); next.className = 'interactive-plot-wrap';
      canvas.parentNode.insertBefore(next, canvas); next.appendChild(canvas); wrap = next;
    }
    let state = canvas._plotInteraction;
    if (!state) {
      const tip = document.createElement('div'); tip.id = canvas.id + '-tooltip'; tip.className = 'plot-tooltip'; tip.setAttribute('role', 'tooltip'); tip.hidden = true;
      const marker = document.createElement('span'); marker.className = 'plot-marker'; marker.setAttribute('aria-hidden', 'true'); marker.hidden = true;
      wrap.appendChild(tip);
      wrap.appendChild(marker);
      canvas.tabIndex = canvas.tabIndex < 0 ? 0 : canvas.tabIndex;
      canvas.setAttribute('aria-describedby', tip.id);
      canvas._plotInteraction = state = { tip, marker, points: [], area: null, labels: {}, pinned: false, keyboardIndex: -1 };
      const show = (p, px, py) => {
        if (!p) {
          state.marker.hidden = true;
          if (isFinite(px) && isFinite(py) && state.area && px >= state.area.l && px <= state.area.r && py >= state.area.t && py <= state.area.b) {
            state.tip.textContent = state.labels.note;
            state.tip.hidden = false;
            const wr = wrap.getBoundingClientRect(), cr = canvas.getBoundingClientRect();
            state.tip.style.left = Math.max(2, Math.min(cr.left - wr.left + px + 10, Math.max(2, wrap.clientWidth - state.tip.offsetWidth - 2))) + 'px';
            state.tip.style.top = Math.max(2, Math.min(cr.top - wr.top + py + 10, Math.max(2, cr.height - state.tip.offsetHeight - 2))) + 'px';
          } else state.tip.hidden = true;
          return;
        }
        const note = typeof p.commentAt === 'function' ? p.commentAt(p) : p.commentAt;
        state.tip.textContent = p.tooltipTextOnly
          ? `${p.label}${note ? `\n${note}` : ''}`
          : `${p.label} · ${state.labels.x} = ${fmt(p.x, 5)} · ${state.labels.y} = ${fmt(p.y, 5)}${note ? `\n${note}` : ''}`;
        state.tip.hidden = false;
        const wr = wrap.getBoundingClientRect(), cr = canvas.getBoundingClientRect();
        state.marker.hidden = false;
        state.marker.style.left = (cr.left - wr.left + p.px - 5) + 'px';
        state.marker.style.top = (cr.top - wr.top + p.py - 5) + 'px';
        const left = cr.left - wr.left + px + 10, top = cr.top - wr.top + py + 10;
        state.tip.style.left = Math.max(2, Math.min(left, Math.max(2, wrap.clientWidth - state.tip.offsetWidth - 2))) + 'px';
        state.tip.style.top = Math.max(2, Math.min(top, Math.max(2, cr.height - state.tip.offsetHeight - 2))) + 'px';
      };
      const nearest = (x, y) => {
        const a = state.area; if (!a || x < a.l || x > a.r || y < a.t || y > a.b) return null;
        let best = null, d2 = 22 * 22;
        state.points.forEach(p => { const dx = p.px - x, dy = p.py - y, d = dx * dx + dy * dy; if (d < d2) { best = p; d2 = d; } });
        return best;
      };
      canvas.addEventListener('pointermove', e => {
        const r = canvas.getBoundingClientRect(), sx = canvas.clientWidth / r.width, sy = canvas.clientHeight / r.height;
        const x = (e.clientX - r.left) * sx, y = (e.clientY - r.top) * sy;
        const p = nearest(x, y); if (e.pointerType === 'touch' && p) state.pinned = true;
        if (!state.pinned || e.pointerType === 'touch') show(p, x, y);
      });
      canvas.addEventListener('pointerleave', () => { if (!state.pinned) { state.tip.hidden = true; state.marker.hidden = true; } });
      canvas.addEventListener('click', e => {
        const r = canvas.getBoundingClientRect(), sx = canvas.clientWidth / r.width, sy = canvas.clientHeight / r.height;
        const x = (e.clientX - r.left) * sx, y = (e.clientY - r.top) * sy, p = nearest(x, y);
        const inside = state.area && x >= state.area.l && x <= state.area.r && y >= state.area.t && y <= state.area.b;
        if (!p && state.pinned) { state.pinned = false; state.tip.hidden = true; state.marker.hidden = true; return; }
        state.pinned = !!p || !!inside; show(p, x, y);
      });
      canvas.addEventListener('keydown', e => {
        if (e.key === 'Escape') { state.pinned = false; state.tip.hidden = true; state.marker.hidden = true; return; }
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault(); if (!state.points.length) return;
        state.keyboardIndex = (state.keyboardIndex + (e.key === 'ArrowRight' ? 1 : -1) + state.points.length) % state.points.length;
        const p = state.points[state.keyboardIndex]; show(p, p.px, p.py); state.pinned = true;
      });
    }
    state.points = points; state.area = area; state.labels = labels; state.pinned = false; state.tip.hidden = true; state.marker.hidden = true;
  }
  function attachFigureNote(canvas, note) {
    if (!canvas) return;
    let wrap = canvas.parentElement;
    if (!wrap.classList.contains('interactive-plot-wrap')) {
      const next = document.createElement('div'); next.className = 'interactive-plot-wrap';
      canvas.parentNode.insertBefore(next, canvas); next.appendChild(canvas); wrap = next;
    }
    let tip = wrap.querySelector('.figure-note-tooltip');
    if (!tip) {
      tip = document.createElement('div'); tip.className = 'plot-tooltip figure-note-tooltip'; tip.setAttribute('role', 'tooltip'); tip.hidden = true; wrap.appendChild(tip);
      tip._pinned = false;
      const show = () => { tip.textContent = tip._note; tip.hidden = false; };
      canvas.tabIndex = canvas.tabIndex < 0 ? 0 : canvas.tabIndex;
      canvas.addEventListener('pointerenter', show);
      canvas.addEventListener('pointerleave', () => { if (!tip._pinned) tip.hidden = true; });
      canvas.addEventListener('click', () => { tip._pinned = !tip._pinned; if (tip._pinned) show(); else tip.hidden = true; });
      canvas.addEventListener('focus', show);
      canvas.addEventListener('blur', () => { if (!tip._pinned) tip.hidden = true; });
      canvas.addEventListener('keydown', e => { if (e.key === 'Escape') { tip._pinned = false; tip.hidden = true; } });
      canvas.setAttribute('aria-describedby', canvas.id + '-figure-note'); tip.id = canvas.id + '-figure-note';
    }
    tip._note = note;
    if (!tip.hidden) tip.textContent = note;
  }
  function plot(canvas, series, o) {
    o = o || {};
    (window.__plotLog = window.__plotLog || {})[canvas.id] = (series || []).map(s => s.color); // contrôle des couleurs en double
    const dpr = window.devicePixelRatio || 1, W = canvas.clientWidth || 440;
    canvas.width = W * dpr; canvas.height = W * dpr;
    const g = canvas.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, W);
    const L = 58, R = 14, T = 26, Bm = 46, pw = W - L - R, ph = W - T - Bm;
    const tx = o.logx ? Math.log10 : (v => v), ty = o.logy ? Math.log10 : (v => v);
    const xs = [], ys = [];
    series.forEach(s => s.x.forEach((v, i) => {
      const y = s.y[i];
      if (isFinite(v) && isFinite(y) && (!o.logx || v > 0) && (!o.logy || y > 0)) { xs.push(tx(v)); ys.push(ty(y)); }
    }));
    if (!xs.length) return;
    let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    if (o.ylim) { y0 = o.ylim[0]; y1 = o.ylim[1]; }
    if (x1 === x0) { x0 -= 1; x1 += 1; }
    if (y1 === y0) { y0 -= 1; y1 += 1; }
    const padY = o.ylim ? 0 : 0.06 * (y1 - y0); y0 -= padY; y1 += padY;
    const X = v => L + (tx(v) - x0) / (x1 - x0) * pw, Y = v => T + ph - (ty(v) - y0) / (y1 - y0) * ph;
    const hitPoints = [], context = figureContext(canvas), defaultNote = figureNote(canvas, o.title);
    series.forEach(s => s.x.forEach((v, i) => {
      const y = s.y[i]; if (!isFinite(v) || !isFinite(y) || (o.logx && v <= 0) || (o.logy && y <= 0)) return;
      const baseComment = s.commentAt || defaultNote;
      hitPoints.push({ px: X(v), py: Y(y), x: v, y, label: s.label || 'Courbe', commentAt: context && s.commentAt ? `${baseComment}\nRéglages affichés : ${context}.` : baseComment, tooltipTextOnly: !!s.tooltipTextOnly });
    }));
    const grid = css('--plot-grid'), axis = css('--plot-axis'), muted = css('--muted');
    g.font = '12px system-ui, sans-serif'; g.lineWidth = 1;
    const ticksOf = (a, b, log) => {
      if (!log) return niceTicks(a, b, 5);
      const t = []; for (let e = Math.ceil(a); e <= Math.floor(b); e++) t.push(e); return t;
    };
    const tickLabel = (v, log) => log ? '1e' + v : fmt(v, 2);
    ticksOf(x0, x1, o.logx).forEach(v => {
      const px = L + (v - x0) / (x1 - x0) * pw;
      g.strokeStyle = grid; g.beginPath(); g.moveTo(px, T); g.lineTo(px, T + ph); g.stroke();
      g.fillStyle = muted; g.textAlign = 'center'; g.fillText(tickLabel(v, o.logx), px, T + ph + 16);
    });
    ticksOf(y0, y1, o.logy).forEach(v => {
      const py = T + ph - (v - y0) / (y1 - y0) * ph;
      g.strokeStyle = grid; g.beginPath(); g.moveTo(L, py); g.lineTo(L + pw, py); g.stroke();
      g.fillStyle = muted; g.textAlign = 'right'; g.fillText(tickLabel(v, o.logy), L - 6, py + 4);
    });
    g.strokeStyle = axis; g.lineWidth = 1.2; g.strokeRect(L, T, pw, ph);
    g.save(); g.beginPath(); g.rect(L, T, pw, ph); g.clip();
    series.forEach(s => {
      g.strokeStyle = s.color; g.fillStyle = s.color; g.lineWidth = s.width || 2;
      g.setLineDash(s.dash || []);
      g.beginPath();
      let started = false;
      s.x.forEach((v, i) => {
        const y = s.y[i];
        if (!isFinite(v) || !isFinite(y) || (o.logx && v <= 0) || (o.logy && y <= 0)) return;
        const px = X(v), py = Y(y);
        if (!started) { g.moveTo(px, py); started = true; } else g.lineTo(px, py);
      });
      if (!s.noline) g.stroke();
      g.setLineDash([]);
      if (s.points || (s.x.length <= 24 && !s.dash)) s.x.forEach((v, i) => {
        const y = s.y[i]; if (!isFinite(v) || !isFinite(y) || (o.logx && v <= 0) || (o.logy && y <= 0)) return;
        if (s.marker === 'square') g.fillRect(X(v) - 3.2, Y(y) - 3.2, 6.4, 6.4);
        else { g.beginPath(); g.arc(X(v), Y(y), 3, 0, 6.2832); g.fill(); }
      });
    });
    g.restore();
    g.fillStyle = muted; g.textAlign = 'center';
    if (o.xlabel) g.fillText(o.xlabel, L + pw / 2, W - 8);
    if (o.ylabel) { g.save(); g.translate(14, T + ph / 2); g.rotate(-Math.PI / 2); g.fillText(o.ylabel, 0, 0); g.restore(); }
    if (o.title) { g.fillStyle = axis; g.textAlign = 'left'; g.fillText(o.title, L, 16); }
    attachPlotInteraction(canvas, hitPoints, { l: L, r: L + pw, t: T, b: T + ph }, { x: o.xlabel || 'x', y: o.ylabel || 'y', note: figureNote(canvas, o.title) });
  }
  function legend(el, items, o) {
    el.innerHTML = items.map(s => {
      const m = o && o.showSlope ? observedLogSlope(s) : NaN;
      const slope = isFinite(m) ? ` · pente observée ≈ ${fmt(m, 2)}` : '';
      const help = isFinite(m) ? `Pente de régression des points affichés : ${fmt(m, 3)}. Elle décrit cet essai et cette plage de maillages.` : '';
      return `<span${help ? ` class="slope-help" title="${help}"` : ''}><i style="border-color:${s.color};border-top-style:${s.dash ? 'dashed' : 'solid'}"></i>${s.label}${slope}</span>`;
    }).join('');
  }
  const draw = (canvasId, legId, series, opts) => { plot($(canvasId), series, opts); legend($(legId), series, opts); };

  /* ---------- résultats : cartes colorées (pas de tableaux) et jauge du nombre de Péclet ---------- */
  function cards(el, items) {
    el.className = 'cards';
    el.innerHTML = items.map(it => `<div class="rcard" style="border-left-color:${it.color || 'var(--blue)'}"><b>${it.title}</b>${it.lines.map(l => `<span>${l}</span>`).join('')}</div>`).join('');
  }
  /* Jauge logarithmique : zones colorées, repères par cas, texte d'interprétation. */
  function gauge(el, o) {
    const f = o.linear ? (v => v) : Math.log10, lo = f(o.min), hi = f(o.max), pos = v => Math.max(0, Math.min(100, (f(v) - lo) / (hi - lo) * 100));
    const zones = o.zones.map(z => `<span class="zone" style="left:${pos(z.from)}%;width:${pos(z.to) - pos(z.from)}%;background:${z.color}"></span>`).join('');
    const marks = o.marks.map(m => `<i class="gmark" style="left:${pos(m.v)}%;background:${m.color}" title="${m.label}"></i>`).join('');
    const labels = o.zones.map(z => `<span style="left:${(pos(z.from) + pos(z.to)) / 2}%">${z.label}</span>`).join('');
    el.className = 'gauge';
    el.innerHTML = `<div class="gtitle">${o.title}</div><div class="gbar">${zones}${marks}</div><div class="glabels">${labels}</div><div class="gtext">${o.text}</div>`;
  }

  /* Interprétation automatique des réglages : texte calculé à partir des résultats, sans IA ni serveur. */
  function explain(tab, lines) {
    const panel = $('p-' + tab); if (!panel) return;
    let box = panel.querySelector('.interp');
    if (!box) {
      box = document.createElement('div'); box.className = 'interp';
      const g = panel.querySelector('.grid');
      const results = g?.children[1];
      if (results) results.appendChild(box);
      else if (g) g.appendChild(box);
      else panel.appendChild(box);
    }
    box.innerHTML = '<h3>Que montrent vos réglages ?</h3><ul>' + lines.filter(Boolean).map(l => `<li>${l}</li>`).join('') + '</ul>';
  }
  const ord2 = (e1, e2, r) => (isFinite(e1) && isFinite(e2) && e1 > 0 && e2 > 0) ? Math.log(e1 / e2) / Math.log(r) : NaN;

  /* ---------- Chapitre 1 : transport (advection-diffusion d'une gaussienne) ---------- */
  function runTransport() {
    const c = pal(), A = vals('t-a'), Ds = vals('t-D'), Ts = vals('t-t').sort((p, q) => p - q), s0 = num('t-s0'), U0 = 1;
    $('t-D-derived').textContent = `Pour le cas principal, Peσ₀ = |a|σ₀/D impose D = ${fmt(num('t-D'), 4)} m²/s. Les autres valeurs de D saisies servent uniquement de courbes de comparaison.`;
    const combos = [];
    A.forEach(a => Ds.forEach(D => Ts.forEach(t => combos.push({ a, D, t }))));
    const use = combos.slice(0, 6);
    $('t-msg').className = combos.length > 6 ? 'msg warn' : 'msg';
    $('t-msg').textContent = (combos.length > 6 ? `Seules les 6 premières combinaisons sur ${combos.length} sont tracées. ` : '') +
      'Le centre se déplace à la vitesse a (advection) ; la largeur σ(t) = √(σ₀² + 2Dt) augmente (diffusion) ; l\u2019aire sous la courbe est conservée.';
    let lo = Infinity, hi = -Infinity;
    use.forEach(k => { const s = Calc.sigmaAt(s0, k.D, k.t); lo = Math.min(lo, k.a * k.t - 4 * s); hi = Math.max(hi, k.a * k.t + 4 * s); });
    const xs = Calc.linspace(lo, hi, 400);
    const S = use.map((k, i) => ({ x: xs, y: Calc.gaussAD({ a: k.a, D: k.D, sigma0: s0, U0, t: k.t, xs }), color: c[i % 6], width: 2.4,
      label: `a = ${fmt(k.a, 3)}, D = ${fmt(k.D, 3)}, t = ${fmt(k.t, 3)}` }));
    draw('t-plot', 't-leg', S, { xlabel: 'x', ylabel: 'φ', title: 'Advection–diffusion' });
    cards($('t-table'), use.map((k, i) => { const s = Calc.sigmaAt(s0, k.D, k.t);
      return { color: c[i % 6], title: `a = ${fmt(k.a, 3)} · D = ${fmt(k.D, 3)} · t = ${fmt(k.t, 3)}`, lines: [`centre a·t = <b>${fmt(k.a * k.t, 3)}</b>`, `largeur σ(t) = <b>${fmt(s, 4)}</b>`, `pic = <b>${fmt(U0 * s0 / s, 4)}</b>`] }; }));
    // Jauge du nombre de Péclet : un repère par couple (a, D).
    const pairs = []; A.forEach(a => Ds.forEach(D => { if (D > 0) pairs.push({ a, D, Pe: Math.abs(a) * s0 / D }); }));
    const mk = pairs.filter(p => p.Pe > 0).slice(0, 6).map((p, i) => ({ v: p.Pe, color: c[i % 6], label: `a = ${fmt(p.a, 3)}, D = ${fmt(p.D, 3)}` }));
    const P0 = pairs.length ? pairs[0].Pe : NaN;
    const meaning = !isFinite(P0) ? 'Peσ₀ n’est pas défini pour D = 0.' : P0 === 0 ? 'Peσ₀ = 0 : a = 0, il n’y a pas d’advection ; le profil diffuse sans se déplacer.' : P0 > 1 ? 'Peσ₀ > 1 : à l’échelle σ₀, le transport par advection est plus rapide que la diffusion.' : P0 < 1 ? 'Peσ₀ < 1 : à l’échelle σ₀, la diffusion agit plus vite que le transport par advection.' : 'Peσ₀ = 1 : advection et diffusion ont la même importance à l’échelle σ₀.';
    gauge($('t-gauge'), { min: 0.1, max: 100, title: `Péclet du profil Peσ₀ = |a|σ₀/D = ${pairs.length ? pairs.slice(0, 6).map(p => fmt(p.Pe, 3)).join(' ; ') : '—'}`,
      zones: [{ from: 0.1, to: 0.9, color: 'color-mix(in srgb, var(--green) 35%, transparent)', label: 'Peσ₀ < 1' }, { from: 0.9, to: 1.1, color: 'color-mix(in srgb, var(--orange) 35%, transparent)', label: 'Peσ₀ ≈ 1' }, { from: 1.1, to: 100, color: 'color-mix(in srgb, var(--blue) 35%, transparent)', label: 'Peσ₀ > 1' }],
      marks: mk, text: meaning });
    const k0 = { a: A[0], D: Ds[0], t: num('t-t') }, sg0 = Calc.sigmaAt(s0, k0.D, k0.t);
    const pe0 = k0.D > 0 ? Math.abs(k0.a) * s0 / k0.D : k0.a === 0 ? NaN : Infinity;
    const timescale = k0.D === 0 ? 'D = 0 : aucune diffusion ; la largeur reste constante.' : k0.a === 0 ? 'a = 0 : Peσ₀ = 0 ; le profil diffuse sans se déplacer.' : pe0 > 1 ? 'Peσ₀ > 1 : à l’échelle σ₀, le transport par advection est plus rapide que la diffusion.' : pe0 < 1 ? 'Peσ₀ < 1 : à l’échelle σ₀, la diffusion agit plus vite que le transport par advection.' : 'Peσ₀ = 1 : advection et diffusion ont la même importance à l’échelle σ₀.';
    const peText = k0.D > 0 ? fmt(pe0, 3) : k0.a === 0 ? 'indéfini' : '∞';
    $('t-dynamic').textContent = `Lecture de la courbe principale — Peσ₀ = ${peText}. ${timescale} À t = ${fmt(k0.t, 3)} s : t* = ${fmt(Math.abs(k0.a) * k0.t / s0, 3)}` + (k0.a < 0 ? ' (sens négatif)' : '') + ` ; centre x = at = ${fmt(k0.a * k0.t, 3)} m ; largeur σ(t) = ${fmt(sg0, 3)} m.`;
    explain('transport', [
      `Premier cas (a = ${fmt(k0.a, 3)}, D = ${fmt(k0.D, 3)}, t = ${fmt(k0.t, 3)}) : le centre s\u2019est déplacé de a·t = <b>${fmt(k0.a * k0.t, 3)}</b> (advection) ; la largeur est passée de σ₀ = ${fmt(s0, 3)} à <b>${fmt(sg0, 4)}</b> et le pic est à <b>${fmt(100 * s0 / sg0, 3)} %</b> de sa valeur initiale (diffusion).`,
      k0.D === 0 ? 'D = 0 : pas de diffusion, le profil est transporté sans se déformer.' : (k0.a === 0 ? 'a = 0 : pas de transport, le profil reste centré et s\u2019étale seulement.' : 'L\u2019aire sous la courbe ne change pas : la diffusion abaisse le pic mais conserve la quantité transportée.'),
      meaning]);
  }

  /* ---------- Chapitre 1 : conditions aux limites sur la barre ---------- */
  function runCL() {
    const c = pal(), base = { L: num('l-L'), lambda: num('l-lambda'), q: num('l-q'), T0: num('l-T0') };
    const types = checked('l-type');
    const names = { dirichlet: 'Dirichlet', neumann: 'Neumann (flux imposé)', robin: 'Robin (échange convectif)' };
    const par = { dirichlet: { TL: num('l-TL') }, neumann: { qL: num('l-qL') }, robin: { h: num('l-h'), Tinf: num('l-Tinf') } };
    const style = { dirichlet: { width: 6, dash: [] }, neumann: { width: 3.5, dash: [9, 5] }, robin: { width: 1.6, dash: [2, 4] } };
    const res = types.map(t => ({ t, r: Calc.barreCL(Object.assign({ type: t }, base, par[t])) }));
    const colorOf = { dirichlet: c[0], neumann: c[1], robin: c[2] };
    const S = res.map(o => ({ x: o.r.x, y: o.r.T, color: colorOf[o.t], width: style[o.t].width, dash: style[o.t].dash, label: names[o.t] }));
    draw('l-plot', 'l-leg', S, { xlabel: 'x (m)', ylabel: 'T (K)', title: 'Barre avec production' });
    cards($('l-table'), res.map(o => ({ color: colorOf[o.t], title: names[o.t], lines: [`T(L) = <b>${fmt(o.r.TL, 3)} K</b>`, `T max = <b>${fmt(o.r.Tmax, 3)} K</b>`, `flux sortant en L : <b>${fmt(o.r.qLout, 1)} W/m²</b>`] })));
    const same = res.length > 1 && res.every(o => Math.abs(o.r.C1 - res[0].r.C1) < 1e-6 * (1 + Math.abs(res[0].r.C1)));
    $('l-msg').className = same ? 'msg good' : 'msg';
    $('l-msg').textContent = same ? 'Les conditions choisies sont équivalentes : les courbes se superposent.' :
      'Le bilan se vérifie : flux sortant en x = 0 plus flux sortant en x = L égale la puissance produite q·L = ' + fmt(base.q * base.L, 1) + ' W/m².';
    explain('cl', [
      same ? 'Ces conditions sont équivalentes : même solution, courbes superposées.' : 'Chaque condition fixe différemment la constante d\u2019intégration : les courbes diffèrent.',
      ...res.map(o => `${names[o.t]} : flux sortant en x = 0 : <b>${fmt(o.r.q0out, 1)}</b>, en x = L : <b>${fmt(o.r.qLout, 1)} W/m²</b>.`),
      `Leur somme vaut la puissance produite q·L = ${fmt(base.q * base.L, 1)} W/m².`]);
  }

  /* ---------- Chapitre 1 : barre 1D (différences finies et volumes finis), comparaison de maillages ---------- */
  function runBarre() {
    const c = pal(), Ns = vals('b-N').map(Math.round).filter(v => v >= 2 && v <= 2000).slice(0, 4), schemes = checked('b-s'), meshes = checked('b-mesh');
    if (!Ns.length || !schemes.length || !meshes.length) return;
    const p = { T0: num('b-T0'), TL: num('b-TL'), L: 1, lambda: num('b-lambda'), q: num('b-q') };
    const fine = Calc.barre(Object.assign({ N: 400 }, p));
    const S1 = [{ x: fine.x, y: fine.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution analytique' }], S2 = [], items = [], er = { fd: {}, vf: {} };
    const meshNames = { uniforme: 'uniforme', nonuniforme: 'non uniforme' }, meshStyle = { uniforme: [], nonuniforme: [5, 3] };
    Ns.forEach((N, i) => meshes.forEach(mesh => {
      const col = c[i % 8], dash = meshStyle[mesh];
      if (schemes.includes('fd')) {
        const r = Calc.barre(Object.assign({ N, mesh }, p)), bl = Calc.bilanDF(Object.assign({ N, mesh }, p));
        const label = `DF, ${meshNames[mesh]}, N = ${N}`;
        S1.push({ x: r.x, y: r.T, color: col, points: true, dash, label });
        S2.push({ x: r.x, y: r.err, color: col, points: true, dash, label });
        (er.fd[mesh] ||= {})[N] = r.maxErr;
        items.push({ color: col, title: `Différences finies · ${meshNames[mesh]} · N = ${N}`, lines: [`erreur maximale = <b>${fmt(r.maxErr)} K</b>`, `bilan de flux = <b>${fmt(bl.bilan, 3)} W/m²</b>`] });
      }
      if (schemes.includes('vf')) {
        const r = Calc.barreVF(Object.assign({ N, mesh }, p));
        const label = `VF, ${meshNames[mesh]}, N = ${N}`;
        S1.push({ x: r.x, y: r.T, color: col, points: true, marker: 'square', dash, width: 1.6, label });
        S2.push({ x: r.x, y: r.err, color: col, points: true, marker: 'square', dash, width: 1.6, label });
        (er.vf[mesh] ||= {})[N] = r.maxErr;
        items.push({ color: col, title: `Volumes finis · ${meshNames[mesh]} · N = ${N}`, lines: [`erreur maximale = <b>${fmt(r.maxErr)} K</b>`, `bilan de flux = <b>${fmt(r.bilan, 3)} W/m²</b>`] });
      }
    }));
    $('b-msg').innerHTML = 'Cercles : différences finies aux nœuds ; carrés : volumes finis aux centres des cellules. Trait plein : maillage uniforme ; tirets : non uniforme ; couleur : valeur de N. L = 1 m. Erreur = solution calculée − solution analytique ; bilan de flux = flux sortants − q·L.';
    draw('b-plot', 'b-leg', S1, { xlabel: 'x (m)', ylabel: 'T (K)', title: 'Solution' });
    // erreurs de l'ordre de l'arrondi : on fige l'axe pour ne pas amplifier le bruit machine en « courbes » trompeuses
    const eMax = Math.max.apply(null, S2.map(q => Calc.maxAbs(q.y)));
    const arrondi = eMax < 1e-9;
    if (arrondi) $('b-msg').innerHTML += ' <b>Les erreurs sont inférieures à 10⁻⁹ K : les schémas sélectionnés reproduisent ce profil à l’arrondi.</b> Les points peuvent différer en x, car les nœuds de différences finies et les centres de volumes finis ne sont pas aux mêmes positions.';
    draw('b-plot2', 'b-leg2', S2, { xlabel: 'x (m)', ylabel: 'erreur (K)', ylim: arrondi ? [-1e-6, 1e-6] : null, title: 'Erreur / solution analytique' });
    cards($('b-cards'), items);
    const L = [], sorted = Ns.slice().sort((p, q) => p - q);
    [['fd', 'Différences finies'], ['vf', 'Volumes finis']].filter(m => schemes.includes(m[0])).forEach(m => meshes.forEach(mesh => {
      const e = er[m[0]][mesh], N1 = sorted[sorted.length - 2], N2 = sorted[sorted.length - 1], eN = e[N2];
      if (eN < 1e-8) L.push(`${m[1]} · maillage ${meshNames[mesh]} : erreur ${fmt(eN)} K, de l’ordre de l’arrondi pour ce profil.`);
      else if (sorted.length > 1) L.push(`${m[1]} · maillage ${meshNames[mesh]} : erreur ${fmt(eN)} K pour N = ${N2} ; entre N = ${N1} et N = ${N2}, ordre observé <b>${fmt(ord2(e[N1], eN, N2 / N1), 3)}</b>.`);
      else L.push(`${m[1]} · maillage ${meshNames[mesh]} : erreur ${fmt(eN)} K pour N = ${N2}. Ajoutez un second maillage pour estimer l’ordre.`);
    }));
    L.push('Le bilan de flux vérifie la différence entre flux sortants et production totale ; pour les volumes finis, il doit être nul à l’arrondi car le bilan cellule par cellule se télescope.');
    explain('barre', L);
  }

  /* ---------- Chapitre 1 : Péclet, convection-diffusion en volumes finis ---------- */
  function runPeclet() {
    const c = pal(), PeL = num('e-PeL'), schemes = checked('e-s'), Ns = vals('e-N').map(Math.round).filter(v => v >= 4 && v <= 400).slice(0, 4);
    if (!schemes.length || !Ns.length) return;
    const xf = Calc.linspace(0, 1, 400), exf = xf.map(x => (Math.exp(PeL * (x - 1)) - Math.exp(-PeL)) / (1 - Math.exp(-PeL)));
    const S1 = [{ x: xf, y: exf, color: css('--plot-axis'), dash: [6, 4], label: 'solution analytique' }], S2 = [], items = [], rec = [];
    const names = { centre: 'Centré', amont: 'Amont' };
    let kc = 0;
    Ns.forEach((N, i) => schemes.forEach(s => {
      const r = Calc.peclet({ N, PeL, scheme: s }), col = c[kc++ % 8];
      const sty = s === 'centre' ? { points: true } : { points: true, marker: 'square', dash: [3, 3], width: 1.6 };
      S1.push(Object.assign({ x: r.x, y: r.phi, color: col, label: `${names[s]}, N = ${N}` }, sty));
      S2.push(Object.assign({ x: r.x, y: r.err, color: col, label: `${names[s]}, N = ${N}` }, sty));
      rec.push({ N, s, PeH: r.PeH, osc: r.oscille, err: r.maxErr });
      items.push({ color: col, title: `${names[s]} · N = ${N}`, lines: [`Pe_h signé (a > 0) = <b>${fmt(r.PeH, 3)}</b>`, `erreur maximale = <b>${fmt(r.maxErr, 4)}</b>`, r.oscille ? `<b>oscille</b> (φ min = ${fmt(r.min, 3)})` : 'monotone'] });
    }));
    const bad = schemes.includes('centre') && Ns.some(N => PeL / N > 2);
    $('e-msg').className = bad ? 'msg warn' : 'msg';
    $('e-msg').textContent = 'Courant a > 0 : Pe_L signé = aL/D > 0. Cercles : centré ; carrés : amont ; une couleur par courbe (quatre maillages au plus). ' +
      (bad ? 'Pe_h signé > 2 : le coefficient du voisin aval du schéma centré devient négatif, les oscillations sont possibles.' : 'Pe_h signé ≤ 2 : les coefficients du schéma centré restent positifs.');
    draw('e-plot', 'e-leg', S1, { xlabel: 'x', ylabel: 'φ', title: 'Solution' });
    draw('e-plot2', 'e-leg2', S2, { xlabel: 'x', ylabel: 'erreur', title: 'Erreur / solution analytique' });
    cards($('e-table'), items);
    gauge($('e-gauge'), { min: 0.1, max: 100, title: `Péclet de maille signé Pe_h = Pe_L/N = ${Ns.map(N => fmt(PeL / N, 3)).join(' ; ')}`,
      zones: [{ from: 0.1, to: 2, color: 'color-mix(in srgb, var(--green) 35%, transparent)', label: 'Pe_h ≤ 2 : centré monotone' }, { from: 2, to: 100, color: 'color-mix(in srgb, var(--orange) 35%, transparent)', label: 'Pe_h > 2 : oscillations possibles' }],
      marks: Ns.map((N, i) => ({ v: PeL / N, color: c[(schemes.length * i) % 8], label: `N = ${N}` })), text: 'Les repères indiquent Pe_h de chaque maillage ; la limite 2 sépare coefficients positifs et négatifs du schéma centré.' });
    const cen = rec.filter(o => o.s === 'centre'), amo = rec.filter(o => o.s === 'amont'), lst = arr => arr.map(o => o.N).join(', ');
    const L = [`Pe_L signé = ${fmt(PeL, 3)} : la solution exacte a une couche limite près de x = L.`];
    if (cen.length) { const os = cen.filter(o => o.osc), mo = cen.filter(o => !o.osc); L.push(`Centré : ${os.length ? 'oscille pour N = ' + lst(os) + ' (Pe_h > 2 : un coefficient devient négatif)' : ''}${os.length && mo.length ? ' ; ' : ''}${mo.length ? 'monotone pour N = ' + lst(mo) + ' (Pe_h ≤ 2)' : ''}.`); }
    if (amo.length) L.push(`Amont : ${amo.every(o => !o.osc) ? 'monotone pour tous les N' : 'oscille pour N = ' + lst(amo.filter(o => o.osc))}, mais il étale davantage la couche limite.`);
    explain('peclet', L);
  }

  /* ---------- Chapitre 2 : Jacobi / Gauss-Seidel, comparaison des deux méthodes ---------- */
  function runJG() {
    const c = pal(), n = Math.max(1, Math.round(num('j-n'))), K = Math.max(0, Math.round(num('j-k'))), f = num('j-f');
    const methods = checked('j-m');
    const runs = methods.map(m => ({ m, r: Calc.jacobiGS({ n, method: m, iters: K, f }) }));
    if (!runs.length) return;
    const need = {};
    const ref = runs[0].r;
    $('j-msg').textContent = `Après ${K} itération(s), pour n = ${n} nœuds intérieurs et f = ${fmt(f, 3)}.`;
    cards($('j-table'), runs.map((o, i) => {
      const h = o.r.history[K], long = Calc.jacobiGS({ n, method: o.m, iters: 1000, f }).history.findIndex(x => x.res < 1e-3);
      need[o.m] = long;
      return { color: c[i], title: SCHEME[o.m], lines: [`résidu ‖r‖∞ = <b>${fmt(h.res, 5)}</b>`, `erreur algébrique max = <b>${fmt(Calc.maxAbs(h.u.map((v, j) => v - o.r.exact[j])), 5)}</b>`,
        `itération où ‖r‖∞ < 1e-3 : <b>${long < 0 ? '> 1000' : long}</b>`].filter(Boolean) };
    }));
    const xs = [0].concat(ref.x.slice(1, n + 1), [1]);
    const S1 = [{ x: xs, y: [0].concat(ref.exact, [0]), color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(runs.map((o, i) => ({ x: xs, y: [0].concat(o.r.history[K].u, [0]), color: c[i], points: true, label: SCHEME[o.m] + ' (k = ' + K + ')' })));
    draw('j-plot', 'j-leg', S1, { xlabel: 'x', ylabel: 'u', title: 'Itérés' });
    const S2 = runs.map((o, i) => ({ x: o.r.history.map(h => h.k), y: o.r.history.map(h => h.res), color: c[i], label: SCHEME[o.m] }));
    draw('j-plot2', 'j-leg2', S2, { logy: true, xlabel: 'itération k', ylabel: 'résidu ‖r‖∞', title: 'Convergence' });
    const nn = m => need[m] < 0 ? '> 1000' : need[m];
    const L = runs.map(o => `${SCHEME[o.m]} : après ${K} itération(s), résidu ${fmt(o.r.history[K].res, 3)} ; seuil 1e-3 franchi à l\u2019itération <b>${nn(o.m)}</b>.`);
    if (need.jacobi > 0 && need.gs > 0) L.push(`Rapport Jacobi / Gauss–Seidel = <b>${fmt(need.jacobi / need.gs, 3)}</b> : Gauss–Seidel réutilise les valeurs déjà mises à jour ; pour ce problème (Poisson 1D) son facteur de convergence est le carré de celui de Jacobi, d\u2019où un rapport voisin de 2.`);
    L.push(`Le résidu mesure à quel point l\u2019équation discrète est vérifiée ; l\u2019erreur algébrique mesure l\u2019écart à la solution du système. Plus n est grand, plus il faut d\u2019itérations : comparez n = 5 et n = 20.`);
    explain('jg', L);
  }

  /* ---------- Chapitre 2 : ordre de trois différences finies ---------- */
  function syncOrdreSelector() {
    const kind = document.querySelector('#p-ordre input[name="o-kind"]:checked')?.value || 'premiere';
    document.querySelectorAll('#p-ordre .edp-type-option').forEach(option => {
      option.classList.toggle('selected', option.querySelector('input:checked') !== null);
    });
    document.querySelectorAll('#p-ordre [data-ordre-kind]').forEach(section => {
      section.hidden = section.dataset.ordreKind !== kind;
    });
  }

  function runOrdre() {
    syncOrdreSelector();
    const c = pal(), hs = Array.from({ length: Math.round(num('o-k')) }, (_, i) => num('o-h0') / Math.pow(2, i));
    const rows = Calc.ordreSin(hs);
    $('o-msg').textContent = 'La pente observée sur chaque courbe log-log estime l’ordre dans la plage de pas affichée.';
    const last = rows[rows.length - 1];
    const first = [['prog', 'ordreProg', 'Progressive (2 points)', c[1]], ['centree', 'ordreCentree', 'Centrée (2 points)', c[0]], ['regr3', 'ordreRegr3', 'Régressive (3 points)', c[2]]];
    const second = [['seconde', 'ordreSeconde', 'Centrée, ordre 2', c[3]], ['secondeProg', 'ordreSecondeProg', 'Progressive (3 points), ordre 1', c[4]], ['secondeRegr', 'ordreSecondeRegr', 'Régressive (3 points), ordre 1', c[5]]];
    const updateFamily = (defs, prefix) => {
      cards($(prefix + '-table'), defs.map(d => ({ color: d[3], title: d[2], lines: [`ordre observé : <b>${last[d[1]] === undefined ? '—' : fmt(last[d[1]], 3)}</b>`, `erreur pour h = ${fmt(last.h, 4)} : <b>${fmt(last[d[0]], 3)}</b>`] })));
      const series = defs.map(d => ({ x: rows.map(r => r.h), y: rows.map(r => r[d[0]]), color: d[3], label: d[2], points: true }));
      draw(prefix + '-plot', prefix + '-leg', series, { logx: true, logy: true, showSlope: true, xlabel: 'h', ylabel: 'erreur en x = 1', title: 'u = sin(x)' });
    };
    updateFamily(first, 'o-first'); updateFamily(second, 'o-second');
    const order = v => v === undefined ? 'à estimer avec au moins deux pas' : fmt(v, 3);
    $('o-first-note').textContent = `Ordres observés : progressive ${order(last.ordreProg)} ; centrée ${order(last.ordreCentree)} ; régressive à trois points ${order(last.ordreRegr3)}.`;
    $('o-second-note').textContent = `Ordres observés : centrée ${order(last.ordreSeconde)} ; unilatérale progressive ${order(last.ordreSecondeProg)} ; unilatérale régressive ${order(last.ordreSecondeRegr)}. Attendus du polycopié : 2 pour la formule centrée uniforme, 1 pour les formules unilatérales à trois points.`;
  }

  /* ---------- Chapitre 2 : fermetures de Neumann ---------- */
  function runNeumann() {
    const c = pal(), bc = checked('n-bc')[0] || 'neumann', kappa = num('n-kappa'), opts = { bc, kappa };
    document.querySelectorAll('[data-bc]').forEach(el => { el.style.display = el.dataset.bc === bc ? '' : 'none'; });
    const nom = bc === 'fourier' ? 'Fourier' : 'Neumann';
    const Ns = Array.from({ length: Math.round(num('n-k')) }, (_, i) => Math.round(num('n-N0') * Math.pow(2, i))).filter(v => v >= 4 && v <= 400);
    const rows = Calc.neumannOrdres(Ns, opts);
    const defs = [['e1', 'p1', `${nom} : fermeture d\u2019ordre 1`, c[1]], ['e2', 'p2', `${nom} : ordre 2 (régressive)`, c[0]], ['e3', 'p3', `${nom} : point fantôme`, c[2]]];
    const lastN = rows[rows.length - 1];
    cards($('n-table'), defs.map(d => ({ color: d[3], title: d[2], lines: [`ordre observé : <b>${lastN[d[1]] === undefined ? '—' : fmt(lastN[d[1]], 3)}</b>`, `erreur pour N = ${lastN.N} : <b>${fmt(lastN[d[0]], 3)}</b>`] })));
    draw('n-plot', 'n-leg', defs.map(d => ({ x: rows.map(r => 1 / r.N), y: rows.map(r => r[d[0]]), color: d[3], label: d[2], points: true })), { logx: true, logy: true, showSlope: true, xlabel: 'h = 1/N', ylabel: 'erreur maximale', title: 'Erreur globale selon h (cos x + x)' });
    const Np = Math.round(num('n-Np')), prof = [1, 2, 3].map(k => Calc.neumann(Np, k, opts));
    draw('n-plot2', 'n-leg2', defs.map((d, k) => ({ x: prof[k].x, y: prof[k].errs.map(v => Math.max(v, 1e-16)), color: d[3], label: d[2], points: true })), { logy: true, xlabel: 'x', ylabel: 'erreur en chaque nœud', title: `Où l\u2019erreur se forme (N = ${Np})` });
    const lr = rows[rows.length - 1], tx = v => v === undefined ? 'à mesurer avec au moins deux maillages' : `<b>${fmt(v, 3)}</b>`;
    const L = bc === 'fourier' ? [
      `Fourier d\u2019ordre 1 : (u<sub>N</sub> − u<sub>N−1</sub>)/h + κ u<sub>N</sub> = g<sub>R</sub>, ordre global observé ${tx(lr.p1)}. La condition au bord est d\u2019ordre 1 et limite l\u2019ordre global, comme pour Neumann ; ici u<sub>N</sub> reste une inconnue de la dernière ligne (κ = ${fmt(kappa, 3)}).`,
      `Fourier d\u2019ordre 2 (régressive à trois points) : ordre global observé ${tx(lr.p2)}. La dernière ligne fait intervenir u<sub>N−2</sub>, u<sub>N−1</sub> et u<sub>N</sub> : la matrice sort de la structure tridiagonale.`,
      `Point fantôme : u<sub>N+1</sub> = u<sub>N−1</sub> + 2h (g<sub>R</sub> − κ u<sub>N</sub>), ordre global observé ${tx(lr.p3)}. La dernière ligne (−2 ; 2 + 2hκ) garde la matrice tridiagonale.`,
      `À x = 1, N = ${Np} : ordre 1 <b>${fmt(prof[0].errs[Np], 3)}</b>, ordre 2 <b>${fmt(prof[1].errs[Np], 3)}</b>, point fantôme <b>${fmt(prof[2].errs[Np], 3)}</b> : l\u2019erreur se forme au bord.`,
      'Retenir : la condition de Fourier (Robin) mêle la valeur et la dérivée au bord ; son ordre de discrétisation compte autant que pour Neumann. κ → ∞ redonne une condition de Dirichlet, κ = 0 une condition de Neumann homogène.'] : [
      `Neumann d\u2019ordre 1 (u<sub>N</sub> = u<sub>N−1</sub> + h g) : ordre global observé ${tx(lr.p1)}. Le schéma intérieur est d\u2019ordre 2, mais cette fermeture est d\u2019ordre 1 : l\u2019erreur née au bord se propage dans tout le domaine et limite l\u2019ordre global.`,
      `Neumann d\u2019ordre 2 (différence régressive à trois points) : ordre global observé ${tx(lr.p2)}. Elle fait intervenir trois nœuds : la dernière ligne de la matrice sort de la structure tridiagonale.`,
      `Point fantôme (nœud fictif u<sub>N+1</sub> éliminé par la différence centrée en x = 1) : ordre global observé ${tx(lr.p3)}. La matrice reste tridiagonale, avec la dernière ligne (−2 ; 2) : on gagne l\u2019ordre 2 sans changer la structure.`,
      `Sur le profil d\u2019erreur (N = ${Np}), à x = 1 : ordre 1 <b>${fmt(prof[0].errs[Np], 3)}</b>, ordre 2 <b>${fmt(prof[1].errs[Np], 3)}</b>, point fantôme <b>${fmt(prof[2].errs[Np], 3)}</b> : l\u2019erreur se forme près de la frontière et dépend directement de l\u2019ordre de la fermeture.`,
      'Retenir : l\u2019ordre global est celui du maillon le plus faible, schéma intérieur ou condition aux limites.'];
    explain('neumann', L);
  }

  /* ---------- Chapitre 3 : chaleur 1D, comparaison de schémas et de pas de temps ---------- */
  function runChaleur() {
    const c = pal(), alpha = num('c-alpha'), L = num('c-L'), h = num('c-h'), tf = num('c-tf');
    const dts = vals('c-Fo').filter(v => v > 0).map(F => F * h * h / alpha), schemes = checked('c-s');   // Fo est la variable ; Δt = Fo h²/α
    if (!dts.length || !schemes.length) return;
    const run = (s, dt) => { const steps = Math.max(1, Math.round(tf / dt)); return Calc.chaleur({ alpha, L, h, dt: tf / steps, steps, scheme: s }); };
    const first = schemes.map(s => ({ s, r: run(s, dts[0]) }));
    const r0 = first[0].r, mid = Math.floor(r0.u.length / 2);
    const warn = first.some(o => (o.s === 'ftcs' && o.r.Fo > 0.5) || o.s === 'ri');
    $('c-msg').className = warn ? 'msg bad' : 'msg good';
    $('c-msg').textContent = `Fo = ${fmt(r0.Fo, 4)} (Δt = ${fmt(dts[0], 4)} s) ; pas de temps maximal de FTCS = ${fmt(r0.dtMax, 4)} s.` + (warn ? (first.some(o => o.s === 'ri') ? ' Richardson est instable quel que soit Fo' + (first.some(o => o.s === 'ftcs' && o.r.Fo > 0.5) ? ' ; FTCS aussi, car Fo > 1/2.' : '.') : ' Fo > 1/2 : FTCS est instable.') : '');
    const lim = Math.max(1.2, ...first.flatMap(o => o.r.u.map(Math.abs)).filter(isFinite));
    const S1 = [{ x: r0.x, y: r0.u0, color: c[5], dash: [2, 4], label: 'état initial' },
                { x: r0.x, y: r0.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(first.map((o, i) => ({ x: o.r.x, y: o.r.u, color: c[i], points: true, label: SCHEME[o.s] })));
    draw('c-plot', 'c-leg', S1, { xlabel: 'x (m)', ylabel: 'u', ylim: lim > 5 ? [-1.5, 1.5] : null, title: `Profils à t ≈ ${fmt(r0.t, 3)} s` });
    const theta = Array.from({ length: 81 }, (_, i) => i * Math.PI / 80);
    const modal = schemes.map((s, i) => ({ x: theta, y: theta.map(th => Calc.heatAmplification(s, r0.Fo, th)), color: c[i], label: SCHEME[s] }));
    modal.push({ x: theta, y: theta.map(() => 1), color: css('--plot-axis'), dash: [5, 4], label: 'seuil |G| = 1' });
    modal.push({ x: theta, y: theta.map(th => Math.exp(-r0.Fo * th * th)), color: css('--muted'), dash: [2, 4], label: 'chaleur continue, même mode' });
    draw('c-amp', 'c-amp-leg', modal, { xlabel: 'nombre d’onde θ', ylabel: '|G(θ)|', title: `Fo = ${fmt(r0.Fo, 3)}` });
    const oneLevel = schemes.filter(s => ['ftcs', 'btcs', 'cn'].includes(s));
    const signed = oneLevel.map((s, i) => ({ x: theta, y: theta.map(th => Calc.heatAmplificationSigned(s, r0.Fo, th)), color: c[schemes.indexOf(s)], label: SCHEME[s] }));
    signed.push({ x: theta, y: theta.map(() => 1), color: css('--plot-axis'), dash: [5, 4], label: 'G = 1' });
    signed.push({ x: theta, y: theta.map(() => -1), color: css('--muted'), dash: [2, 4], label: 'G = −1' });
    draw('c-g-signed', 'c-g-signed-leg', signed, { xlabel: 'nombre d’onde θ', ylabel: 'G(θ)', ylim: [-1.1, 1.1], title: `G signé · Fo = ${fmt(r0.Fo, 3)}` });
    const rows = [];
    schemes.forEach((s, i) => dts.forEach(dt => { const r = run(s, dt); rows.push({ s, i, dt: tf / Math.max(1, Math.round(tf / dt)), r }); }));
    cards($('c-table'), rows.map(o => ({ color: c[o.i], title: `${SCHEME[o.s]} · Δt = ${fmt(o.dt, 4)} s`, lines: [`Fo = <b>${fmt(o.r.Fo, 4)}</b> (${Math.max(1, Math.round(tf / o.dt))} pas ; temps final = ${fmt(o.r.t, 4)} s)`, `erreur maximale = <b>${fmt(o.r.maxErr, 4)}</b>`, o.s === 'ri' ? '<b>instable pour tout Fo</b>' : (o.s === 'ftcs' ? (o.r.stable ? 'critère Fo ≤ 1/2 respecté' : '<b>Fo > 1/2 : critère de FTCS non respecté</b>') : (o.s === 'df' ? 'erreur bornée dans ce calcul (stabilité vue au chapitre 4)' : 'stable pour tout Fo'))] })));
    const S2 = schemes.map((s, i) => { const pr = rows.filter(o => o.s === s).sort((p, q) => p.dt - q.dt); return { x: pr.map(o => o.dt), y: pr.map(o => o.r.maxErr), color: c[i], label: SCHEME[s], points: true }; });
    draw('c-plot2', 'c-leg2', S2, { logx: true, logy: true, showSlope: true, xlabel: 'Δt (s)', ylabel: 'erreur maximale', title: 'Erreur selon Δt' });
    const Lx = [];
    schemes.forEach(s => { const pr = rows.filter(o => o.s === s).sort((p, q) => q.dt - p.dt), o0 = pr[0];
      const st = s === 'ftcs' ? (o0.r.stable ? `Fo = ${fmt(o0.r.Fo, 3)} ≤ 1/2 : stable` : `Fo = ${fmt(o0.r.Fo, 3)} > 1/2 : <b>instable</b>, l’erreur explose`) : (s === 'ri' ? `<b>instable</b> pour tout Fo (Fo = ${fmt(o0.r.Fo, 3)}), l’erreur explose` : (s === 'df' ? `erreur bornée dans ce calcul (Fo = ${fmt(o0.r.Fo, 3)})` : `inconditionnellement stable (Fo = ${fmt(o0.r.Fo, 3)})`));
      const p = pr.length > 1 && pr[0].r.stable && pr[1].r.stable ? ` ; entre Δt = ${fmt(pr[0].dt, 3)} et ${fmt(pr[1].dt, 3)}, pente de l’erreur ${fmt(ord2(pr[0].r.maxErr, pr[1].r.maxErr, pr[0].dt / pr[1].dt), 3)} (inclut aussi l’erreur spatiale)` : '';
      Lx.push(`${SCHEME[s]} : ${st}${p}.`); });
    Lx.push('Lecture : comparez |G| au facteur exact exp(−Fo θ²) du même mode pour isoler l’amortissement numérique de l’amortissement physique. Le graphe est une analyse de stabilité modale, pas une mesure d’ordre ; l’erreur selon Δt est tracée à temps final commun, mais inclut l’erreur spatiale. FTCS est stable si Fo ≤ 1/2 ; Dufort–Frankel reste borné dans ces essais, mais sa consistance dépend du chemin de raffinement et son schéma complet inclut une première étape FTCS ; Richardson est instable. BTCS est stable pour tout Δt et d’ordre 1 en temps ; Crank–Nicolson est stable pour tout Δt et d’ordre 2, mais peut changer le signe de G et alterner temporellement lorsque Fo est grand.');
    explain('chaleur', Lx);
    $('c-mid').textContent = '';
  }

  /* ---------- Chapitre 3 : chemin de raffinement, comparaison de plusieurs exposants r ---------- */
  function runChemin() {
    const c = pal(), rs = vals('p-r').slice(0, 6), coRef = num('p-co'), foRef = num('p-fo'), hRef = 0.1;
    const alpha = foRef * hRef / coRef, hs = Array.from({ length: Math.round(num('p-hk')) }, (_, i) => num('p-h0') / Math.pow(2, i));
    if (!rs.length || !(coRef > 0)) return;
    const c0For = r => coRef * Math.pow(hRef, 1 - r);
    const all = rs.map(r => Calc.chemins({ c0: c0For(r), r, alpha, hs }));
    cards($('p-summary'), rs.map((r, i) => { const v = Calc.verdictsChemin(r), last = all[i][all[i].length - 1];
      return { color: c[i], title: `r = ${fmt(r, 3)}`, lines: [`Dufort–Frankel : <b>${v.df}</b>`, `Lax–Friedrichs : <b>${v.lxf}</b>`, `pour h = ${fmt(last.h, 4)} : α(Δt/h)² = ${fmt(last.dfTerme, 4)} ; h²/(2Δt) = ${fmt(last.lxfTerme, 4)}`] }; }));
    const S1 = all.map((rows, i) => ({ x: rows.map(r => r.h), y: rows.map(r => r.dfTerme), color: c[i], points: true, label: `r = ${fmt(rs[i], 3)}` }));
    const S2 = all.map((rows, i) => ({ x: rows.map(r => r.h), y: rows.map(r => r.lxfTerme), color: c[i], points: true, label: `r = ${fmt(rs[i], 3)}` }));
    draw('p-plot', 'p-leg', S1, { logx: true, logy: true, showSlope: true, xlabel: 'h', ylabel: 'α(Δt/h)²', title: 'Dufort–Frankel' });
    draw('p-plot2', 'p-leg2', S2, { logx: true, logy: true, showSlope: true, xlabel: 'h', ylabel: 'h²/(2Δt)', title: 'Lax–Friedrichs' });
    explain('chemin', [...rs.map(r => { const v = Calc.verdictsChemin(r); return `r = ${fmt(r, 3)} : Dufort–Frankel <b>${v.df}</b> ; Lax–Friedrichs <b>${v.lxf}</b>.`; }),
      'Dufort–Frankel est consistant avec l\u2019équation de la chaleur seulement si α(Δt/h)² tend vers 0 ; Lax–Friedrichs seulement si h²/(2Δt) tend vers 0. Le chemin de raffinement, c\u2019est-à-dire la façon dont Δt décroît avec h, décide donc de la consistance.']);

    // Les profils suivent le chemin actif et les mêmes tailles de maillage que les graphes du défaut local.
    const profileR = num('p-r'), c0 = c0For(num('p-r')), T = 1, workLimit = 1200000;
    const profileSteps = h => Math.max(1, Math.round(T / (c0 * Math.pow(h, profileR))));
    const fitResolution = (targetN, L, minN) => {
      let N = targetN, h = L / N, steps = profileSteps(h), adjusted = false;
      while (N > minN && N * steps > workLimit) {
        N = Math.max(minN, Math.floor(N / 2)); h = L / N; steps = profileSteps(h); adjusted = true;
      }
      return { N, h, steps, adjusted };
    };
    const dfRows = [], lxfRows = [], adjustedMeshes = [], seenDf = new Set(), seenLxf = new Set();
    hs.forEach(hTarget => {
      const heat = fitResolution(Math.max(2, Math.round(1 / hTarget)), 1, 2);
      if (heat.adjusted) adjustedMeshes.push(`chaleur N≤${heat.N}`);
      if (!seenDf.has(heat.N)) {
        seenDf.add(heat.N);
        const dt = T / heat.steps, result = Calc.chaleur({ alpha, L: 1, h: heat.h, dt, steps: heat.steps, scheme: 'df' });
        dfRows.push({ N: heat.N, h: result.h, x: [0].concat(result.x, [1]), u: [0].concat(result.u, [0]), err: result.maxErr, coeff: alpha * Math.pow(dt / result.h, 2) });
      }
      const adv = fitResolution(Math.max(20, Math.round(10 / hTarget)), 10, 20);
      if (adv.adjusted) adjustedMeshes.push(`advection N≤${adv.N}`);
      if (!seenLxf.has(adv.N)) {
        seenLxf.add(adv.N);
        const dt = T / adv.steps, result = Calc.advection({ scheme: 'lxf', a: 1, Nx: adv.N, Co: dt / adv.h, tf: T });
        lxfRows.push({ N: adv.N, h: result.h, x: result.x, u: result.u, err: result.maxErr, coeff: result.h * result.h / (2 * dt) });
      }
    });
    const heatX = Calc.linspace(0, 1, 201);
    const heatExact = heatX.map(x => Math.sin(Math.PI * x) * Math.exp(-alpha * Math.PI * Math.PI * T));
    const dfSeries = [{ x: heatX, y: heatExact, color: css('--plot-axis'), dash: [6, 4], label: 'chaleur exacte' }]
      .concat(dfRows.map((r, i) => ({ x: r.x, y: r.u, color: c[i % c.length], label: `N = ${r.N}` })));
    draw('p-effect-df', 'p-effect-df-leg', dfSeries, { xlabel: 'x/L', ylabel: 'u', title: `Dufort–Frankel · r = ${fmt(profileR, 2)} · t = 1` });
    const advX = Calc.linspace(-2, 8, 401);
    const advExact = advX.map(x => {
      let d = x - T; d -= 10 * Math.round(d / 10);
      return Math.exp(-d * d / (2 * 0.15 * 0.15));
    });
    const lxfSeries = [{ x: advX, y: advExact, color: css('--plot-axis'), dash: [6, 4], label: 'advection exacte' }]
      .concat(lxfRows.map((r, i) => ({ x: r.x, y: r.u, color: c[i % c.length], label: `N = ${r.N}` })));
    draw('p-effect-lxf', 'p-effect-lxf-leg', lxfSeries, { xlabel: 'x (période 10)', ylabel: 'u', title: `Lax–Friedrichs · r = ${fmt(profileR, 2)} · t = 1` });
    $('p-effects-msg').className = adjustedMeshes.length ? 'msg warn' : 'msg';
    $('p-effects-msg').textContent = `Calculs adimensionnels au temps final t = 1, avec Co_ref = ${fmt(coRef, 2)}, Fo_ref = ${fmt(foRef, 2)} et r = ${fmt(profileR, 2)}. h_ref = 0,1 et a = 1 ; c₀ et α sont déduits en interne. h₀ et le nombre de maillages modifient les résolutions. ${adjustedMeshes.length ? `Résolution automatiquement réduite pour garder le calcul réactif (N effectif) : ${adjustedMeshes.join(', ')}.` : ''}`;
    cards($('p-effects-summary'), [
      { color: c[0], title: `Dufort–Frankel : chaleur, r = ${fmt(profileR, 2)}`, lines: dfRows.map(r => `N = ${r.N} : erreur maximale <b>${fmt(r.err, 4)}</b> (α(Δt/h)² = ${fmt(r.coeff, 3)})`) },
      { color: c[1], title: `Lax–Friedrichs : advection, r = ${fmt(profileR, 2)}`, lines: lxfRows.map(r => `N = ${r.N} : erreur maximale <b>${fmt(r.err, 4)}</b> (h²/(2Δt) = ${fmt(r.coeff, 3)})`) }
    ]);
  }

  /* ---------- Chapitre 3 : advection, comparaison de schémas et de maillages ---------- */
  function runAdv() {
    const c = pal(), schemes = checked('a-s'), Nxs = vals('a-Nx').map(Math.round).filter(v => v >= 10 && v <= 2000);
    const a = num('a-a'), Co = num('a-Co'), tf = num('a-tf');
    if (!schemes.length || !Nxs.length) return;
    const run = (s, Nx) => Calc.advection({ scheme: s, a, Nx, Co, tf });
    const first = schemes.map(s => ({ s, r: run(s, Nxs[0]) }));
    const bad = first.some(o => !isFinite(o.r.max) || Math.abs(o.r.max) > 3 || Math.abs(o.r.min) > 3);
    const r0 = first[0].r;
    $('a-msg').className = bad ? 'msg warn' : 'msg';
    $('a-msg').textContent = `Nx = ${Nxs[0]} : Δx = ${fmt(r0.h, 5)} ; Δt = ${fmt(r0.dt, 5)} ; ${r0.steps} pas ; t = ${fmt(r0.t, 4)} s.` + (bad ? ' Au moins un profil dépasse l’échelle ±3 dans cet essai ; observez son facteur modal pour analyser la stabilité.' : '');
    const S = [{ x: r0.x, y: r0.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(first.map((o, i) => ({ x: o.r.x, y: o.r.u, color: c[i], label: SCHEME[o.s] })));
    draw('a-plot', 'a-leg', S, { xlabel: 'x (m)', ylabel: 'u', ylim: bad ? [-1.5, 1.5] : null, title: `Nx = ${Nxs[0]}, Co = ${fmt(Co, 3)}` });
    const theta = Array.from({ length: 81 }, (_, i) => i * Math.PI / 80), C = Math.sign(a) * Co;
    const modalAmp = schemes.map((s, i) => ({ x: theta, y: theta.map(th => Calc.advectionAmplification(s, C, th).modulus), color: c[i], label: SCHEME[s] }));
    modalAmp.push({ x: theta, y: theta.map(() => 1), color: css('--plot-axis'), dash: [5, 4], label: 'seuil |G| = 1' });
    draw('a-modal-amp', 'a-modal-amp-leg', modalAmp, { xlabel: 'nombre d’onde θ', ylabel: '|G(θ)|', title: `Co signé = ${fmt(C, 3)}` });
    const modalPhase = schemes.map((s, i) => ({ x: theta, y: theta.map(th => Calc.advectionAmplification(s, C, th).phaseError), color: c[i], label: SCHEME[s] }));
    modalPhase.push({ x: theta, y: theta.map(() => 0), color: css('--plot-axis'), dash: [5, 4], label: 'phase exacte' });
    draw('a-modal-phase', 'a-modal-phase-leg', modalPhase, { xlabel: 'nombre d’onde θ', ylabel: 'erreur de phase (rad/pas)', ylim: [-Math.PI, Math.PI], title: 'Erreur de phase modulo 2π' });
    const Nbase = Math.min(500, Nxs[0]), convNs = [Nbase, 2 * Nbase, 4 * Nbase];
    const conv = schemes.map((s, i) => {
      const rows = convNs.map(Nx => {
        const h = 10 / Nx, steps = Math.max(1, Math.round(tf / (Co * h / Math.abs(a))));
        const CoFinal = Math.abs(a) * tf / (steps * h);
        const r = Calc.advection({ scheme: s, a, Nx, Co: CoFinal, tf });
        return { Nx, h, err: r.maxErr, t: r.t };
      });
      const observed = rows.slice(1).map((r, j) => Math.log(rows[j].err / r.err) / Math.log(rows[j].h / r.h));
      return { s, i, rows, observed };
    });
    draw('a-conv', 'a-conv-leg', conv.map(o => ({ x: o.rows.map(r => r.h), y: o.rows.map(r => r.err), color: c[o.i], points: true, label: SCHEME[o.s] })),
      { logx: true, logy: true, showSlope: true, xlabel: 'h = 10/Nx (m)', ylabel: 'erreur maximale', title: `Erreur au temps t = ${fmt(tf, 3)} s` });
    const items = [];
    schemes.forEach((s, i) => Nxs.forEach(Nx => { const r = run(s, Nx); items.push({ color: c[i], title: `${SCHEME[s]} · Nx = ${Nx}`, lines: [`max <b>${fmt(r.max, 3)}</b> · min <b>${fmt(r.min, 3)}</b>`, `erreur maximale = <b>${fmt(r.maxErr, 3)}</b>`] }); }));
    conv.forEach(o => items.push({ color: c[o.i], title: `${SCHEME[o.s]} · erreur au raffinement`, lines: [`Nx = ${o.rows.map(r => r.Nx).join(' ; ')}`, `ordres observés : ${o.observed.map(v => `<b>${fmt(v, 3)}</b>`).join(' ; ')}`, `temps finaux vérifiés : ${o.rows.map(r => fmt(r.t, 6)).join(' ; ')} s`] }));
    cards($('a-table'), items);
    const hMod = r0.h, dtMod = r0.dt, ca = Math.sign(a) * Co, eq = [];
    if (schemes.includes('ftcs')) {
      const D = -a * a * dtMod / 2;
      eq.push(`<p><b>Euler explicite centré :</b> u<sub>t</sub> + a u<sub>x</sub> = D u<sub>xx</sub> + …, avec D = −a²Δt/2 = <b>${fmt(D, 6)}</b> m²/s. Ce coefficient négatif est anti-dissipatif.</p>`);
    }
    if (schemes.includes('lxf')) {
      const nu = hMod * hMod * (1 - ca * ca) / (2 * dtMod);
      eq.push(`<p><b>Lax–Friedrichs :</b> u<sub>t</sub> + a u<sub>x</sub> = ν u<sub>xx</sub> + …, avec ν = h²(1 − Co²)/(2Δt) = <b>${fmt(nu, 6)}</b> m²/s. Signe positif : diffusion et lissage ; signe négatif : anti-diffusion.</p>`);
    }
    if (schemes.includes('lw')) {
      const beta = -a * hMod * hMod * (1 - ca * ca) / 6;
      eq.push(`<p><b>Lax–Wendroff :</b> u<sub>t</sub> + a u<sub>x</sub> = β u<sub>xxx</sub> + …, avec β = −a h²(1 − Co²)/6 = <b>${fmt(beta, 6)}</b> m³/s. Le terme impair agit sur la phase : comparez à la courbe d'erreur de phase et aux oscillations du profil.</p>`);
    }
    $('a-modified').innerHTML = `<h3>Équation équivalente : la conséquence du calcul de Taylor</h3><p>Avec a = ${fmt(a, 4)} m/s, Co = ${fmt(ca, 4)}, h = ${fmt(hMod, 5)} m et Δt = ${fmt(dtMod, 6)} s. Ces expressions gardent seulement le terme dominant établi dans le chapitre 4 ; elles ne constituent pas une équation exacte du schéma.</p>${eq.join('') || '<p>Sélectionnez Euler centré, Lax–Friedrichs ou Lax–Wendroff pour afficher le calcul du terme dominant correspondant.</p>'}`;
    const limits = { amont: '|Co| ≤ 1', lxf: '|Co| ≤ 1', lw: '|Co| ≤ 1', bw: '|Co| ≤ 2', cimp: 'stable pour tout Co', ftcs: 'instable pour tout Co non nul fixé (analyse de von Neumann)' };
    explain('adv', [
      'Analyse modale théorique pour le problème linéaire périodique : ' + first.map(o => `${SCHEME[o.s]} : ${limits[o.s]}`).join(' ; ') + '.',
      'Courbes : |G| > 1 indique un mode amplifié ; |G| < 1 indique un amortissement numérique ; l’erreur de phase décrit le décalage du mode par rapport au transport exact. La stabilité est contrôlée sur tous les nombres d’onde, pas déduite d’un seul profil.',
      `Convergence numérique : erreur maximale mesurée à temps final commun sur Nx = ${convNs.join(', ')} ; ces pentes observées contrôlent cet essai, tandis que la consistance s'établit séparément par le défaut local de Taylor.`,
      ...first.map(o => `${SCHEME[o.s]}, profil calculé : maximum ${fmt(o.r.max, 3)}, minimum ${fmt(o.r.min, 3)}, erreur maximale ${fmt(o.r.maxErr, 3)} à t = ${fmt(o.r.t, 4)} s.`)
    ]);
  }

  const RUN = { intro: runIntro, edpc: runEdpc, edpb: runEdpb, transport: runTransport, cl: runCL, barre: runBarre, peclet: runPeclet, jg: runJG, ordre: runOrdre, neumann: runNeumann, chaleur: runChaleur, chemin: runChemin, adv: runAdv };


  /* ---------- Situations physiques (schémas illustratifs) ---------- */
  function renderSituations() {
    const S = window.SITUATIONS || {};
    const notes = {
      transport: 'Illustration d’un rejet dans un courant, avec transport et étalement.',
      edpc: 'Trois pictogrammes de situations modèles à comparer.',
      edpb: 'Pictogramme de la situation physique sélectionnée.',
      cl: 'Paroi, source thermique et conditions aux limites.',
      barre: 'Barre chauffée entre deux températures imposées, avec son maillage.',
      peclet: 'Écoulement le long d’une paroi chaude ; la couche limite est schématisée.',
      ordre: 'Points d’un maillage et pas h pour construire une différence.',
      neumann: 'Flux thermique représenté au bord de la paroi.',
      jg: 'Nœuds d’une barre et mise à jour par itérations.',
      chaleur: 'Profils schématiques de température à plusieurs instants.',
      chemin: 'Comparaison de maillages et diminution des pas.',
      adv: 'Paquet de fluide chaud et front dans une conduite.'
    };
    Object.keys(S).forEach(tab => {
      const panel = $('p-' + tab); if (!panel || panel.querySelector('.sit2')) return;
      const lead = panel.querySelector('.lead'); if (!lead) return;
      const box = document.createElement('div'); box.className = 'sit2';
      const ph = S[tab].photo ? `<figure class="sit-photo"><img src="${S[tab].photo.src}" alt="${S[tab].photo.alt}"><figcaption>${S[tab].photo.legende}</figcaption></figure>` : '';
      const v = S[tab].video ? (tab === 'transport'
        ? `<figure class="sit-video"><a class="btn alt" href="${S[tab].video.page}" target="_blank" rel="noopener">${S[tab].video.titre}</a><figcaption>${S[tab].video.legende} <a href="${S[tab].video.page}" target="_blank" rel="noopener">Source officielle UC San Diego</a>.</figcaption></figure>`
        : `<figure class="sit-video"><video controls playsinline preload="metadata" poster="${S[tab].video.poster}" aria-label="${S[tab].video.alt}"><source src="${S[tab].video.src}" type="video/mp4">Votre navigateur ne peut pas lire cette vidéo. <a href="${S[tab].video.src}">Télécharger la vidéo MP4</a>.</video><figcaption>${S[tab].video.legende}</figcaption></figure>`) : '';
      box.innerHTML = tab === 'transport'
        ? `${ph}${v}<div class="sit-txt"><b>Situation physique.</b> ${S[tab].texte}</div>${S[tab].svg}`
        : `<div class="sit-txt"><b>Situation physique.</b> ${S[tab].texte}</div>${S[tab].svg}${ph}${v}`;
      box.querySelectorAll('.sit-svg').forEach(svg => {
        svg.setAttribute('title', notes[tab] || 'Schéma de la situation physique associée à cet onglet.');
        svg.setAttribute('aria-label', notes[tab] || 'Schéma de la situation physique associée à cet onglet.');
      });
      box.querySelectorAll('.sit-photo img').forEach(img => { img.title = img.alt + '. La légende précise le contexte et la source.'; });
      box.querySelectorAll('.sit-video video').forEach(video => { video.title = video.getAttribute('aria-label') || 'Vidéo illustrative ; la légende précise le contexte et la source.'; });
      if (tab === 'edpb') {
        const selector = panel.querySelector('.edp-type-selector');
        const situation = box.querySelector('.sit-txt');
        if (selector && situation) situation.after(selector);
      }
      lead.after(box);
    });
  }

  /* ---------- Équations affichées en pleine ligne (KaTeX si disponible) ---------- */
  function renderEquationEntry(box, equation) {
    if (!box || !equation) return;
    box.innerHTML = `<div><div class="eq-label">${equation.titre}</div><div class="eq-math"></div></div>`;
    const el = box.querySelector('.eq-math');
    if (window.katex) { try { window.katex.render(equation.tex, el, { displayMode: true, throwOnError: false }); } catch (err) { el.textContent = equation.tex; el.classList.add('plain'); } }
    else { el.textContent = equation.tex; el.classList.add('plain'); }
  }
  function renderEquations() {
    const E = window.EQUATIONS || {};
    document.querySelectorAll('[data-eq]').forEach(box => {
      const tab = box.dataset.eq, list = E[tab] || [];
      box.innerHTML = list.map((e, i) => `<div><div class="eq-label">${e.titre}</div><div class="eq-math" data-i="${i}"></div></div>`).join('');
      list.forEach((e, i) => {
        const el = box.querySelector(`.eq-math[data-i="${i}"]`);
        if (window.katex) { try { window.katex.render(e.tex, el, { displayMode: true, throwOnError: false }); } catch (err) { el.textContent = e.tex; el.classList.add('plain'); } }
        else { el.textContent = e.tex; el.classList.add('plain'); }
      });
    });
  }
  let renderedEdpbType = null;
  function renderSelectedEdpbEquation(type) {
    const equation = (window.EQUATIONS.edpb || []).find(e => e.type === type);
    renderEquationEntry($('k-equation'), equation);
    document.querySelectorAll('.edp-type-option').forEach(option => option.classList.toggle('selected', option.querySelector('input:checked') !== null));
    const situation = document.querySelector('#p-edpb .sit-txt');
    if (situation) {
      const gap = num('k-gap');
      const profileSvg = document.querySelector('#p-edpb .sit2 svg[data-kt="parabolique"]');
      if (profileSvg) {
        const hotLeft = profileSvg.querySelector('#k-sit-hot-left'), hotRight = profileSvg.querySelector('#k-sit-hot-right');
        const profile = profileSvg.querySelector('#k-sit-profile'), caption = profileSvg.querySelector('#k-sit-caption');
        const xLeft = 190 - 16.25 * gap, xRight = 190 + 16.25 * gap;
        if (hotLeft) hotLeft.setAttribute('x', String(Math.max(60, Math.min(284, xLeft - 16))));
        if (hotRight) { hotRight.style.display = gap === 0 ? 'none' : ''; hotRight.setAttribute('x', String(Math.max(60, Math.min(284, xRight - 16)))); }
        if (profile) profile.setAttribute('d', gap === 0
          ? 'M60 130 C135 130 152 98 190 98 C228 98 245 130 320 130'
          : `M60 130 C${xLeft - 26} 130 ${xLeft - 16} 98 ${xLeft} 98 C${xLeft + 16} 98 ${xLeft + 26} 130 190 130 C${xRight - 26} 130 ${xRight - 16} 98 ${xRight} 98 C${xRight + 16} 98 ${xRight + 26} 130 320 130`);
        if (caption) caption.textContent = gap === 0 ? 'profil initial t = 0 : un pic' : gap < 1 ? 'profil initial t = 0 : bosses rapprochées' : 'profil initial t = 0 : deux pics';
      }
      const texts = {
        elliptique: '<b>Situation physique.</b> La plaque est à l’équilibre : on impose sa température sur les bords, puis on observe le champ intérieur. Il n’y a pas de profil initial à faire évoluer.',
        parabolique: gap === 0
          ? '<b>Situation physique.</b> Au départ, on prescrit la température le long de la barre : une zone chaude en forme de bosse cosinus, de rayon 0,5 m. La courbe « Profil initial » à t = 0 montre ce pic ; la diffusion l’élargit et l’abaisse. Ici, on ne prescrit pas une température à l’entrée de la barre.'
          : gap < 1
            ? `<b>Situation physique.</b> Au départ, on prescrit la température le long de la barre : deux bosses cosinus de rayon 0,5 m, séparées de ${fmt(gap, 1)} m. Elles se recouvrent ; le profil initial est leur somme, et ses sommets peuvent se confondre. Les courbes suivantes montrent la diffusion de ce profil. Ici, on ne prescrit pas une température à l’entrée de la barre.`
            : `<b>Situation physique.</b> Au départ, on prescrit la température le long de la barre : deux zones chaudes en forme de bosse cosinus, de rayon 0,5 m, séparées de ${fmt(gap, 1)} m (écart réglable ci-dessous). La courbe « Profil initial » à t = 0 montre donc deux pics, un par zone chaude. Les courbes suivantes montrent leur évolution : la diffusion élargit et abaisse les pics. Ici, on ne prescrit pas une température à l’entrée de la barre.`,
        hyperbolique: '<b>Situation physique.</b> Au départ, une seule bosse est présente dans le tube et sa vitesse initiale est nulle. La courbe initiale a un seul pic ; l’équation des ondes la partage ensuite en deux bosses qui partent en sens opposés.'
      };
      situation.innerHTML = texts[type];
    }
    const readings = {
      elliptique: { title: 'Équilibre spatial', text: 'Pas d’évolution temporelle dans ce modèle : les conditions imposées sur la frontière déterminent le champ à l’intérieur.' },
      parabolique: { title: 'Diffusion au cours du temps', text: 'Le profil évolue depuis son état initial et s’étale. Dans le modèle continu de la chaleur sur la droite, l’influence devient non nulle à toute distance dès t > 0.' },
      hyperbolique: { title: 'Propagation à vitesse finie', text: 'L’information avance dans un domaine de dépendance délimité par les fronts : hors de ce domaine, elle n’est pas encore arrivée.' }
    };
    const reading = readings[type], changed = renderedEdpbType !== type, panel = $('k-type-dynamic');
    panel.dataset.type = type;
    panel.innerHTML = `<strong>${reading.title}</strong><span>${reading.text}</span>`;
    if (changed) {
      [$('k-equation'), panel].forEach(el => {
        el.classList.remove('edp-dynamic-enter');
        void el.offsetWidth;
        el.classList.add('edp-dynamic-enter');
      });
      renderedEdpbType = type;
    }
  }

  /* ---------- Introduction : le même signal, plusieurs schémas ---------- */
  const INTRO = { amont: 'Schéma A', lw: 'Schéma B', bw: 'Schéma C', lxf: 'Schéma D', ftcs: 'Schéma E' };
  function runIntro() {
    const c = pal(), schemes = checked('i-s'), N = Math.round(num('i-N')), Co = num('i-Co'), ts = [num('i-t1'), num('i-t2')];
    if (!schemes.length) return;
    $('i-grid').innerHTML = schemes.map(s => ts.map((t, k) => `<canvas id="i-c-${s}-${k}" aria-label="${INTRO[s]} à t = ${t}"></canvas>`).join('')).join('');
    const items = []; let bad = false;
    schemes.forEach((s, si) => ts.forEach((t, k) => {
      const r = Calc.advection1d({ scheme: s, Nx: N, Co, t });
      const unstable = !isFinite(r.max) || Math.abs(r.max) > 3 || Math.abs(r.min) > 3; bad = bad || unstable;
      const comp = unstable ? 'instable' : (r.maxErr < 1e-9 ? 'exact (décalage d\u2019une maille par pas)' : (r.min < -0.02 || r.max > 1.05 ? 'oscillations (dispersion)' : 'lissage (diffusion numérique)'));
      const exactComment = 'Référence du problème : utilisez cette courbe pour comparer les profils calculés.';
      const numericComment = `Profil calculé avec ${INTRO[s]}. Comparez sa forme à la référence.`;
      plot($(`i-c-${s}-${k}`), [{ x: r.x.concat([1]), y: r.exact.concat([r.exact[0]]), color: css('--plot-axis'), width: 1.4, label: 'exacte', commentAt: exactComment },
        { x: r.x, y: r.u, color: c[si % 6], noline: true, points: true, label: INTRO[s], commentAt: numericComment }], { xlabel: 'x', ylabel: 'u', ylim: [-0.5, 1.5], title: `${INTRO[s]} à t = ${fmt(t, 3)}` });
      items.push({ color: c[si % 6], title: `${INTRO[s]} · t = ${fmt(t, 3)}`, lines: [unstable ? 'valeurs hors échelle' : `pic <b>${fmt(r.bump, 3)}</b> (exact 1) · minimum <b>${fmt(r.min, 3)}</b>`, `<b>${comp}</b>`] });
    }));
    $('i-msg').className = bad ? 'msg warn' : 'msg';
    $('i-msg').textContent = `N = ${N} points, C = ${fmt(Co, 3)}. Ligne : solution exacte ; cercles : schéma. Un tour entier correspond à t = 1.` + (bad ? ' Au moins un schéma est instable : ses valeurs sortent de l\u2019échelle.' : '');
    cards($('i-cards'), items);
    const L = schemes.map(s => { const r = Calc.advection1d({ scheme: s, Nx: N, Co, t: ts[0] }), un = !isFinite(r.max) || Math.abs(r.max) > 3 || Math.abs(r.min) > 3;
      return `${INTRO[s]} à t = ${fmt(ts[0], 3)} : pic ${fmt(r.bump, 3)} (exact 1), ${un ? '<b>instable</b>' : (r.min < -0.02 || r.max > 1.05 ? 'minimum ' + fmt(r.min, 3) + ' : <b>oscillations</b> (dispersion numérique)' : '<b>lissage</b> sans dépassement (diffusion numérique)')}.`; });
    if (Math.abs(Co - 1) < 1e-9) L.push('C = 1 : les schémas A, B, C et D se réduisent à un décalage exact d\u2019une maille par pas de temps, donc leur erreur est nulle (aux arrondis).');
    const rs = schemes.map(s => Calc.advection1d({ scheme: s, Nx: N, Co, t: ts[0] }));
    if (rs.some(r => isFinite(r.min) && r.min < -0.02 && Math.abs(r.min) <= 3)) L.push('Dans la situation du rejet, un minimum négatif est une concentration négative : impossible physiquement, même si le schéma « conserve » bien la bosse.');
    if (rs.some(r => isFinite(r.bump) && r.bump < 0.9)) L.push('Un pic trop bas veut dire qu\u2019on sous-estimerait la concentration maximale qui arrive en aval.');
    if (rs.some(r => !isFinite(r.max) || Math.abs(r.max) > 3)) L.push('Un schéma qui explose ne donne aucune prévision exploitable.');
    L.push('Pour une même équation, le choix du schéma change le résultat : certains lissent (diffusion numérique), d\u2019autres oscillent (dispersion numérique), d\u2019autres explosent (instabilité). C\u2019est la raison d\u2019être du cours.');
    explain('intro', L);
  }

  /* ---------- EDP : classer ---------- */
  function drawConic(canvas, delta) {
    const dpr = window.devicePixelRatio || 1, W = canvas.clientWidth || 440;
    canvas.width = W * dpr; canvas.height = W * dpr;
    const g = canvas.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, W);
    const R = 3, m = 30, S = W - 2 * m, X = x => m + (x + R) / (2 * R) * S, Y = y => m + (R - y) / (2 * R) * S;
    const grid = css('--plot-grid'), axis = css('--plot-axis'), muted = css('--muted');
    g.strokeStyle = grid; g.lineWidth = 1;
    for (let v = -R; v <= R; v++) { g.beginPath(); g.moveTo(X(v), Y(-R)); g.lineTo(X(v), Y(R)); g.stroke(); g.beginPath(); g.moveTo(X(-R), Y(v)); g.lineTo(X(R), Y(v)); g.stroke(); }
    g.strokeStyle = axis; g.lineWidth = 1.2; g.strokeRect(m, m, S, S);
    g.beginPath(); g.moveTo(X(-R), Y(0)); g.lineTo(X(R), Y(0)); g.moveTo(X(0), Y(-R)); g.lineTo(X(0), Y(R)); g.stroke();
    g.save(); g.beginPath(); g.rect(m, m, S, S); g.clip();
    const curve = (sign, color, dash) => {
      g.strokeStyle = color; g.lineWidth = 2.4; g.setLineDash(dash); let pen = false; g.beginPath();
      for (let k = 0; k <= 1440; k++) {
        const th = k / 1440 * 2 * Math.PI, ct = Math.cos(th), st = Math.sin(th), den = sign * (ct * ct - delta * st * st);
        if (den > 1e-3) { const r = Math.min(1 / Math.sqrt(den), 20); const px = X(r * ct), py = Y(r * st); if (!pen) { g.moveTo(px, py); pen = true; } else g.lineTo(px, py); } else pen = false;
      }
      g.stroke(); g.setLineDash([]);
    };
    curve(1, css('--blue'), []); curve(-1, css('--orange'), [6, 5]);
    g.restore();
    g.fillStyle = muted; g.font = '12px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText('x', X(R) - 8, Y(0) - 6); g.fillText('y', X(0) + 10, Y(R) + 12);
    g.fillStyle = axis; g.textAlign = 'left'; g.fillText('Conique repère x² − Δ y² = ±1', m, 18);
    attachFigureNote(canvas, figureNote(canvas, 'conique associée à Δ'));
  }
  /* Domaine de dépendance du point P selon le type (notion du cours : poly 1.6, diapositive « Domaine de dépendance »). */
  function drawDep(canvas, type) {
    if (type === 'parabolique') { drawXT(canvas, 0, 0, 3, true); attachFigureNote(canvas, figureNote(canvas)); return; }
    if (type === 'hyperbolique') { drawXT(canvas, 1, 0, 3, false); attachFigureNote(canvas, figureNote(canvas)); return; }
    const dpr = window.devicePixelRatio || 1, W = canvas.clientWidth || 440;
    canvas.width = W * dpr; canvas.height = W * dpr;
    const g = canvas.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, W);
    const m = 40, S = W - 2 * m, axis = css('--plot-axis'), blue = css('--blue'), orange = css('--orange'), muted = css('--muted');
    g.fillStyle = 'rgba(111,179,242,0.10)'; g.fillRect(m, m, S, S);
    g.strokeStyle = blue; g.lineWidth = 6; g.strokeRect(m, m, S, S);
    const cx = m + S / 2, cy = m + S / 2;
    g.strokeStyle = orange; g.fillStyle = orange; g.lineWidth = 2.4;
    [[m + 8, cy, cx - 10, cy], [m + S - 8, cy, cx + 10, cy], [cx, m + 8, cx, cy - 10], [cx, m + S - 8, cx, cy + 10]].forEach(q => {
      g.beginPath(); g.moveTo(q[0], q[1]); g.lineTo(q[2], q[3]); g.stroke();
      const an = Math.atan2(q[3] - q[1], q[2] - q[0]); g.beginPath(); g.moveTo(q[2], q[3]); g.lineTo(q[2] - 9 * Math.cos(an - 0.45), q[3] - 9 * Math.sin(an - 0.45)); g.lineTo(q[2] - 9 * Math.cos(an + 0.45), q[3] - 9 * Math.sin(an + 0.45)); g.closePath(); g.fill();
    });
    g.fillStyle = css('--red'); g.beginPath(); g.arc(cx, cy, 6, 0, 6.2832); g.fill();
    g.fillStyle = axis; g.font = 'bold 13px system-ui, sans-serif'; g.textAlign = 'left'; g.fillText('P', cx + 10, cy - 8);
    g.fillStyle = muted; g.font = '12px system-ui, sans-serif'; g.fillText('x', m + S + 6, m + S / 2 + 4); g.fillText('y', m + S / 2 + 6, m - 8);
    g.fillStyle = axis; g.fillText('Domaine de dépendance de P : toute la frontière', m, 20);
    attachFigureNote(canvas, figureNote(canvas));
  }
  function runEdpc() {
    const delta = num('d-delta'), u = num('d-u'), c = pal();
    const r = Calc.classifyPDE(1, 0, -delta), col = { elliptique: c[0], parabolique: c[2], hyperbolique: c[1] }[r.type];
    const info = {
      elliptique: ['Laplace, Poisson : équilibre spatial', 'conditions sur toute la frontière fermée', 'influence globale : toute la frontière agit sur chaque point', 'ellipse'],
      parabolique: ['chaleur : évolution diffusive, dissipative', 'état initial et conditions aux limites', 'les gradients s\u2019atténuent ; propagation instantanée mais très faible', 'droites parallèles (cas dégénéré)'],
      hyperbolique: ['ondes, advection : propagation à vitesse finie', 'données initiales et une condition à chaque frontière (en 1D, à chaque extrémité)', 'l\u2019information suit les caractéristiques, dans un cône de dépendance', 'hyperbole'] }[r.type];
    $('d-msg').className = 'msg'; $('d-msg').innerHTML = `Pour le représentant A = 1, B = 0, C = −Δ, on a Δ = <b>${fmt(delta, 3)}</b> : l’EDP est <b>${r.type}</b>.`;
    cards($('d-cards'), [{ color: col, title: `Type : ${r.type}`, lines: [`prototype : ${info[0]}`, `données nécessaires : ${info[1]}`, `conique associée : ${info[3]}`] }]);
    drawConic($('d-plot'), delta);
    drawDep($('d-dep'), r.type);
    $('d-dep-leg').textContent = { elliptique: 'Elliptique : toute la frontière (bord épais) influence P.', parabolique: 'Parabolique : toute la ligne initiale (et les conditions aux limites jusqu\u2019à t) influence P.', hyperbolique: 'Hyperbolique : seul le segment limité par les caractéristiques influence P.' }[r.type];
    $('d-leg').innerHTML = `<span><i style="border-color:${css('--blue')}"></i>x² − Δ y² = 1</span><span><i style="border-color:${css('--orange')};border-top-style:dashed"></i>x² − Δ y² = −1</span>`;
    const rn = Calc.classifyPDE(1 - u * u, 0, 1), nonlinearDelta = u * u - 1;
    const deltaEquation = delta === 0 ? 'u_{xx}=0' : `u_{xx}${delta < 0 ? '+' + fmt(-delta, 3) : '−' + fmt(delta, 3)}\\,u_{yy}=0`;
    renderEquationEntry($('d-canonical-equation'), { titre: 'Équation représentative associée au curseur Δ', tex: deltaEquation });
    gauge($('d-gauge'), { linear: true, min: -2, max: 2, title: `Exemple quasi linéaire : (1 − u²) u_xx + u_yy = 0 ; en u(P) = ${fmt(u, 3)}, Δ(P) = u(P)² − 1 = ${fmt(nonlinearDelta, 3)} → ${rn.type}`,
      zones: [{ from: -2, to: -1, color: 'color-mix(in srgb, var(--orange) 35%, transparent)', label: 'hyperbolique' }, { from: -1, to: 1, color: 'color-mix(in srgb, var(--blue) 35%, transparent)', label: 'elliptique' }, { from: 1, to: 2, color: 'color-mix(in srgb, var(--orange) 35%, transparent)', label: 'hyperbolique' }],
      marks: [{ v: u, color: css('--plot-axis'), label: 'u(P)' }, { v: -1, color: css('--green'), label: 'parabolique' }, { v: 1, color: css('--green'), label: 'parabolique' }],
      text: `u(P) est la valeur de la solution au point P ; elle fixe localement A(P)=1−u(P)², B=0 et C=1. Donc Δ(P)=u(P)²−1. Aux valeurs u(P)=±1, Δ(P)=0 et le type est parabolique.` });
    explain('edpc', [`Avec le représentant A=1, B=0, C=−Δ, l’équation affichée a le discriminant Δ=${fmt(delta, 3)} : ${r.type}.`,
      `Données à fournir : ${info[1]}.`,
      `Dans l’exemple quasi linéaire, u(P)=${fmt(u, 3)} est la valeur locale de l’inconnue : A(P)=1−u(P)², B=0, C=1, donc Δ(P)=u(P)²−1=${fmt(nonlinearDelta, 3)} et le type local est ${rn.type}. Il peut varier d’un point à l’autre si u varie.`]);
  }

  /* ---------- EDP : comportement des trois types ---------- */
  function drawHeat(canvas, u, vmin, vmax) {
    const dpr = window.devicePixelRatio || 1, W = canvas.clientWidth || 440;
    canvas.width = W * dpr; canvas.height = W * dpr;
    const g = canvas.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, W);
    const L = 40, T = 26, S = W - L - 56, M = u.length, cell = S / M, axis = css('--plot-axis'), muted = css('--muted');
    const colr = v => { const t = Math.max(0, Math.min(1, (v - vmin) / ((vmax - vmin) || 1))); return `hsl(${240 * (1 - t)}, 80%, ${46 + 6 * Math.sin(Math.PI * t)}%)`; };
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) { g.fillStyle = colr(u[j][i]); g.fillRect(L + i * cell, T + (M - 1 - j) * cell, Math.ceil(cell) + 0.5, Math.ceil(cell) + 0.5); }
    g.strokeStyle = axis; g.lineWidth = 4; g.strokeRect(L, T, S, S);
    for (let k = 0; k < 50; k++) { g.fillStyle = colr(vmin + (vmax - vmin) * (1 - k / 49)); g.fillRect(L + S + 14, T + k * S / 50, 12, S / 50 + 1); }
    g.fillStyle = muted; g.font = '12px system-ui, sans-serif'; g.textAlign = 'left';
    g.fillText(fmt(vmax, 3), L + S + 30, T + 10); g.fillText(fmt(vmin, 3), L + S + 30, T + S);
    g.textAlign = 'center'; g.fillText('x', L + S / 2, T + S + 16); g.fillText('y', L - 14, T + S / 2);
    g.fillStyle = axis; g.textAlign = 'left'; g.fillText('Température (°C)', L, 16);
    attachFigureNote(canvas, figureNote(canvas));
  }
  function drawXT(canvas, c, xp, tp, par) {
    const dpr = window.devicePixelRatio || 1, W = canvas.clientWidth || 440;
    canvas.width = W * dpr; canvas.height = W * dpr;
    const g = canvas.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, W);
    const L = 52, R = 14, T = 26, Bm = 46, pw = W - L - R, ph = W - T - Bm, XR = 6, TM = 6;
    const X = x => L + (x + XR) / (2 * XR) * pw, Y = t => T + ph - t / TM * ph;
    const grid = css('--plot-grid'), axis = css('--plot-axis'), muted = css('--muted');
    g.strokeStyle = grid; g.lineWidth = 1;
    for (let v = -XR; v <= XR; v += 2) { g.beginPath(); g.moveTo(X(v), T); g.lineTo(X(v), T + ph); g.stroke(); g.fillStyle = muted; g.font = '12px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(v, X(v), T + ph + 16); }
    for (let v = 0; v <= TM; v += 2) { g.beginPath(); g.moveTo(L, Y(v)); g.lineTo(L + pw, Y(v)); g.stroke(); g.fillStyle = muted; g.textAlign = 'right'; g.fillText(v, L - 6, Y(v) + 4); }
    g.save(); g.beginPath(); g.rect(L, T, pw, ph); g.clip();
    g.strokeStyle = grid; g.lineWidth = 1.2;
    if (!par) for (let x0 = -2 * XR; x0 <= 2 * XR; x0 += 1) { [-1, 1].forEach(sg => { g.strokeStyle = 'rgba(120,130,140,0.35)'; g.beginPath(); g.moveTo(X(x0), Y(0)); g.lineTo(X(x0 + sg * c * TM), Y(TM)); g.stroke(); }); }
    if (par) {
      g.fillStyle = 'rgba(190,100,0,0.14)'; g.fillRect(L, Y(tp), pw, Y(0) - Y(tp));
      g.strokeStyle = css('--blue'); g.lineWidth = 5; g.beginPath(); g.moveTo(L, Y(0)); g.lineTo(L + pw, Y(0)); g.stroke();
      g.strokeStyle = css('--orange'); g.lineWidth = 1.6; g.setLineDash([4, 4]); [[-XR, 0], [XR, 0]].forEach(q => { g.beginPath(); g.moveTo(X(q[0]), Y(0)); g.lineTo(X(q[0]), Y(tp)); g.stroke(); }); g.setLineDash([]);
    } else {
    g.fillStyle = 'rgba(190,100,0,0.22)'; g.beginPath(); g.moveTo(X(xp), Y(tp)); g.lineTo(X(xp - c * tp), Y(0)); g.lineTo(X(xp + c * tp), Y(0)); g.closePath(); g.fill();
    g.strokeStyle = css('--orange'); g.lineWidth = 2.2;
    g.beginPath(); g.moveTo(X(xp - c * tp), Y(0)); g.lineTo(X(xp), Y(tp)); g.lineTo(X(xp + c * tp), Y(0)); g.stroke();
    g.strokeStyle = css('--blue'); g.lineWidth = 5; g.beginPath(); g.moveTo(X(xp - c * tp), Y(0)); g.lineTo(X(xp + c * tp), Y(0)); g.stroke();
    }
    g.fillStyle = css('--red'); g.beginPath(); g.arc(X(xp), Y(tp), 5, 0, 6.2832); g.fill();
    g.restore();
    g.strokeStyle = axis; g.lineWidth = 1.2; g.strokeRect(L, T, pw, ph);
    g.fillStyle = muted; g.textAlign = 'center'; g.fillText('x (m)', L + pw / 2, W - 8);
    g.save(); g.translate(14, T + ph / 2); g.rotate(-Math.PI / 2); g.fillText('t (s)', 0, 0); g.restore();
    g.fillStyle = axis; g.textAlign = 'left'; g.fillText(par ? 'Domaine de dépendance de P : toute la ligne initiale' : 'Caractéristiques et domaine de dépendance de P', L, 16);
  }
  function runEdpb() {
    const type = checked('k-type')[0] || 'elliptique', c = pal();
    renderSelectedEdpbEquation(type);
    document.querySelectorAll('[data-kt]').forEach(el => { el.style.display = el.dataset.kt === type ? '' : 'none'; });
    if (type === 'elliptique') {
      const N = Math.round(num('k-n')), r = Calc.laplace2d({ N, left: num('k-Tl'), right: num('k-Tr'), top: num('k-Tt'), bottom: num('k-Tb') });
      drawHeat($('k-heat'), r.u, Math.min(r.min, num('k-Tl'), num('k-Tr'), num('k-Tt'), num('k-Tb')), Math.max(r.max, num('k-Tl'), num('k-Tr'), num('k-Tt'), num('k-Tb')));
      $('k-heat-leg').textContent = '';
      const xs = Calc.linspace(0, 1, r.M);
      draw('k-line', 'k-line-leg', [{ x: xs, y: r.ligneCentrale, color: c[0], label: 'u(x, y = 0,5)' }], { xlabel: 'x', ylabel: 'T (°C)', title: 'Ligne médiane' });
      $('k-msg').className = 'msg'; $('k-msg').textContent = 'Principe du maximum : les valeurs restent comprises entre la plus petite et la plus grande valeur imposée. Changez un seul côté : tout le champ change aussitôt, y compris loin de ce côté (influence globale).';
      explain('edpb', [`Température au centre : <b>${fmt(r.centre, 4)} °C</b> ; moyenne des quatre côtés : ${fmt((num('k-Tl') + num('k-Tr') + num('k-Tt') + num('k-Tb')) / 4, 4)} °C (égales par symétrie du carré).`, `Valeurs comprises entre ${fmt(r.min, 4)} et ${fmt(r.max, 4)} °C : principe du maximum, pas de valeur intérieure hors des valeurs imposées.`, 'Chaque côté agit sur tout le domaine : une EDP elliptique est un problème d’équilibre global.']);
      cards($('k-cards'), [{ color: c[0], title: 'Température au centre', lines: [`valeur = <b>${fmt(r.centre, 4)} °C</b>`, `minimum = <b>${fmt(r.min, 4)}</b> ; maximum = <b>${fmt(r.max, 4)}</b>`, `${r.iters} itérations de sur-relaxation`] }]);
    } else if (type === 'parabolique') {
      const D = num('k-D'), tp = num('k-tp'), gap = num('k-gap'), rayon = 0.5, ctr = gap === 0 ? [0] : [-gap / 2, gap / 2];
      const xs = Calc.linspace(-8, 8, 800), times = [0, tp / 4, tp / 2, tp].filter((t, i, a) => a.indexOf(t) === i);
      const S = times.map((t, i) => ({
        x: xs, y: Calc.chaleurCompacte({ D, rayon, centres: ctr, t, xs }), color: c[i % 6], width: 2.2,
        label: `t = ${fmt(t, 3)}${t === 0 ? '' : ' s'}`, tooltipTextOnly: true,
        commentAt: t === 0
          ? 'Profil initial fourni au calcul. Observez sa forme avant de la comparer aux autres instants.'
          : `Profil calculé à t = ${fmt(t, 3)} s avec D = ${fmt(D, 3)} m²/s. Comparez sa forme au profil initial et aux autres instants.`
      }));
      draw('k-par', 'k-par-leg', S, { xlabel: 'x (m)', ylabel: 'u', title: 'Diffusion d’une bosse à support compact' });
      const lecture = $('k-par-curve-explanation');
      const cle = times.map((t, i) => `<span class="curve-time"><i style="--curve-color:${c[i % 6]}"></i>${t === 0 ? 'Profil initial' : `Profil à t = ${fmt(t, 3)} s`}</span>`).join('');
      const situation = gap === 0
        ? 'À t = 0, une bosse est centrée en x = 0.'
        : gap < 2 * rayon
          ? `À t = 0, les deux bosses centrées en x = ±${fmt(gap / 2, 3)} m se recouvrent déjà : le profil initial est leur somme.`
          : `À t = 0, les deux bosses sont distinctes, centrées en x = ±${fmt(gap / 2, 3)} m.`;
      lecture.innerHTML = `<strong>Lire les courbes</strong><div class="curve-times">${cle}</div><p>${situation} Quand le temps augmente, la diffusion élargit le profil et abaisse ses maxima. À temps égal, augmenter D accentue cet étalement.</p><p>La symétrie par rapport à x = 0 est conservée. Si les sources sont proches ou si la diffusion agit longtemps, leurs profils peuvent se rejoindre.</p><p>Seule la courbe initiale est exactement nulle hors de ses supports. Pour tout t &gt; 0, la solution continue idéale de l’équation de la chaleur est très faible mais non nulle à toute distance ; l’échelle du graphe peut la faire paraître nulle.</p>`;
      const far = Calc.chaleurCompacte({ D, rayon, centres: ctr, t: tp, xs: [5, 0] });
      const far2 = Calc.chaleurCompacte({ D, rayon, centres: ctr, t: 2, xs: [5] })[0];
      const far8 = Calc.chaleurCompacte({ D, rayon, centres: ctr, t: 8, xs: [5] })[0];
      $('k-msg').className = 'msg'; $('k-msg').textContent = 'Au départ, le profil est exactement nul hors de ses intervalles de support. Pour tout t > 0, la solution de l’équation de la chaleur sur la droite réelle est non nulle à toute distance ; si elle est extrêmement faible, l’arrondi numérique peut toutefois afficher zéro.';
      explain('edpb', [`Chaque profil initial est nul hors de [centre − ${fmt(rayon, 2)} ; centre + ${fmt(rayon, 2)}] m. Ainsi u(5,0) = 0.`, `Après diffusion, u(5,2) ≈ ${far2.toExponential(2).replace('.', ',')} et u(5,8) ≈ ${far8.toExponential(2).replace('.', ',')} : l’effet apparaît à distance dès t > 0.`, 'La chaleur a une vitesse de propagation infinie dans le modèle continu : à tout t > 0, la solution idéale est non nulle sur toute la droite.']);
      cards($('k-cards'), [{ color: c[3], title: `À t = ${fmt(tp, 3)} s`, lines: [`u(5, 0) = <b>0</b> : x = 5 est hors du support initial`, `u(5, ${fmt(tp, 3)}) = <b>${far[0].toExponential(2).replace('.', ',')}</b>`, `u(0, ${fmt(tp, 3)}) = <b>${far[1].toExponential(2).replace('.', ',')}</b>`, `repères : u(5, 2) ≈ ${far2.toExponential(2).replace('.', ',')} ; u(5, 8) ≈ ${far8.toExponential(2).replace('.', ',')}`] }]);
    } else {
      const cc = num('k-c'), th = num('k-th'), rayon = 0.5, xs = Calc.linspace(-8, 8, 800);
      const S = [{ x: xs, y: Calc.ondeDAlembert({ c: cc, rayon, t: 0, xs }), color: css('--plot-axis'), dash: [6, 4], label: 'Initiale (t = 0)' },
                 { x: xs, y: Calc.ondeDAlembert({ c: cc, rayon, t: th, xs }), color: c[0], width: 2.4, label: `Solution (t = ${fmt(th, 3)} s)` }];
      draw('k-hyp', 'k-hyp-leg', S, { xlabel: 'x (m)', ylabel: 'u', title: 'Équation des ondes' });
      const u3 = Calc.ondeDAlembert({ c: cc, rayon, t: th, xs: [3] })[0];
      const centre = cc * th, separees = centre >= rayon;
      const lecture = $('k-hyp-curve-explanation');
      lecture.innerHTML = `<strong>Lire les deux courbes</strong><p><span class="curve-key curve-key-dashed">Pointillés — initiale, t = 0.</span> Une bosse centrée en 0, de hauteur 1, nulle hors de [−${fmt(rayon, 2)} ; ${fmt(rayon, 2)}] m.</p><p><span class="curve-key curve-key-solid">Trait plein — solution à t = ${fmt(th, 3)} s.</span> La formule de d’Alembert partage l’état initial en deux copies décalées :</p><div class="curve-formula">u(x,t) = ½ f(x − ct) + ½ f(x + ct)</div><p>Leurs centres sont en x = ±ct = ±${fmt(centre, 3)} m ; les supports sont [${fmt(-centre - rayon, 3)} ; ${fmt(-centre + rayon, 3)}] et [${fmt(centre - rayon, 3)} ; ${fmt(centre + rayon, 3)}] m. ${separees ? `Ici, ct ≥ rayon : les deux bosses sont séparées et leur hauteur maximale vaut 0,5.` : `Ici, ct < rayon : les deux copies se recouvrent ; la courbe est leur somme et ne forme pas deux bosses séparées.`}</p><p>En dehors de ces supports, u reste exactement nul : les fronts n’ont pas encore atteint ces points.</p>`;
      $('k-msg').className = 'msg'; $('k-msg').textContent = separees
        ? `La bosse initiale est partagée en deux copies de hauteur maximale 0,5. Ici ct = ${fmt(centre, 3)} m ≥ rayon ${fmt(rayon, 2)} m : elles sont séparées et se déplacent aux vitesses ±c.`
        : `La solution est la somme de deux copies décalées de ±ct. Ici ct = ${fmt(centre, 3)} m < rayon ${fmt(rayon, 2)} m : leurs supports se recouvrent.`;
      explain('edpb', [separees ? `Deux bosses séparées, centrées en x = ±c·t = <b>±${fmt(centre, 3)} m</b>, de hauteur maximale 0,5.` : `Les copies décalées de ±ct = ±${fmt(centre, 3)} m se recouvrent (ct < rayon) ; leurs contributions s’additionnent.`, `En x = 3, u = ${u3 === 0 ? '0 exactement : ce point est hors des supports transportés' : u3.toExponential(2).replace('.', ',')}.`, 'Hors des supports transportés, la solution reste exactement nulle : la propagation a une vitesse finie.']);
      cards($('k-cards'), [{ color: c[0], title: `À t = ${fmt(th, 3)} s`, lines: [separees ? `bosses séparées, centres ±ct = <b>±${fmt(centre, 3)} m</b>, hauteur maximale 0,5` : `copies superposées, décalées de ±ct = ±${fmt(centre, 3)} m`, `supports : [${fmt(-centre - rayon, 3)} ; ${fmt(-centre + rayon, 3)}] et [${fmt(centre - rayon, 3)} ; ${fmt(centre + rayon, 3)}] m`, `u(x = 3) = <b>${u3 === 0 ? '0' : u3.toExponential(2).replace('.', ',')}</b>`] }]);
    }
  }

  /* ---------- Guide : notions, compétences, explorations avec réglages prêts à l'emploi ---------- */
  function applyPreset(tab, idx) {
    const e = window.GUIDE.tabs[tab].explorations[idx];
    Object.keys(e.reglages || {}).forEach(id => { const el = $(id); if (el) el.value = e.reglages[id]; });
    Object.keys(e.checks || {}).forEach(name => document.querySelectorAll('input[name="' + name + '"]').forEach(cb => { cb.checked = e.checks[name].indexOf(cb.value) >= 0; }));
    syncSliders(); safe(current);
    const m = $('p-' + tab).querySelector('.preset-note'); if (m) m.textContent = 'Réglages de ' + e.id + ' appliqués : lisez le résultat, puis répondez sur la fiche.';
    $('p-' + tab).querySelector('.grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function renderGuides() {
    const G = window.GUIDE; if (!G) return;
    Object.keys(G.tabs).forEach(tab => {
      const panel = $('p-' + tab); if (!panel) return;
      const t = G.tabs[tab], box = document.createElement('div'); box.className = 'guide';
      const tabName = document.querySelector('button[data-tab="' + tab + '"]').textContent.trim();
      const comps = t.competences.map(k => `<li><b>${k}</b> ${G.competences[k]}</li>`).join('');
      const notions = t.notions.map(n => `<li>${n}</li>`).join('');
      const ex = t.explorations.map((e, i) => `<div class="explo"><p class="repere"><b>Repère avant l’activité :</b> ${G.reperes[e.id].replace(/[.]$/, '')} ; calculateur : onglet « ${tabName} ».</p><b>${e.id} · ${e.titre}</b> <span class="codes">(${e.comp.join(', ')})</span>
        ${e.main ? `<p class="main"><b>D\u2019abord, à la main :</b> ${e.main}</p>` : ''}<p>${e.consigne}</p><p><i>Question :</i> ${e.question}</p><button type="button" class="btn alt" data-explo="${tab}|${i}">Appliquer ces réglages</button></div>`).join('');
      box.innerHTML = `<h3>Pour approfondir : ${t.fiche}</h3>
        <div class="two"><div><h4>Compétences travaillées</h4><ul>${comps}</ul></div>
        <div><h4>Notions à définir et à retrouver sur la fiche</h4><ul>${notions}</ul><p>Exercices liés : ${t.exercices}.</p></div></div>
        <h4>Explorations guidées</h4>${ex}<p class="preset-note" aria-live="polite"></p>
        <p class="repere">Notez vos réponses dans la rubrique « Explorations au calculateur » de la fiche de séance.</p>`;
      panel.appendChild(box);
      box.querySelectorAll('[data-explo]').forEach(b => b.addEventListener('click', () => { const [tb, i] = b.dataset.explo.split('|'); applyPreset(tb, parseInt(i, 10)); }));
    });
  }

  let current = 'home';
  function safe(name) {
    try { if (RUN[name]) RUN[name](); } catch (e) { const panel = $('p-' + name); const p = panel && panel.querySelector('.msg'); if (p) { p.className = 'msg bad'; p.textContent = 'Paramètres invalides : ' + e.message; } }
  }
  function show(name) {
    current = name;
    document.querySelectorAll('section.panel').forEach(s => s.classList.toggle('active', s.id === 'p-' + name));
    document.querySelectorAll('nav button[data-tab]').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === name ? 'true' : 'false'));
    document.querySelectorAll('nav details.session-nav').forEach(group => {
      group.open = Array.from(group.querySelectorAll('button[data-tab]')).some(b => b.dataset.tab === name);
    });
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* ignoré */ }
    safe(name);
  }
  function init() {
    const transportForm = document.querySelector('#p-transport form.params');
    if (transportForm) transportForm.addEventListener('input', e => {
      if (['t-Pe', 't-a', 't-s0'].includes(e.target.id)) { updateTransportPe(e.target.id); syncSliders(); }
    }, true);
    document.querySelectorAll('nav button[data-tab]').forEach(b => b.addEventListener('click', () => show(b.dataset.tab)));
    document.querySelectorAll('[data-go-tab]').forEach(b => b.addEventListener('click', () => {
      const target = b.dataset.goTab;
      show(target);
      const tabButton = document.querySelector(`nav button[data-tab="${target}"]`);
      if (tabButton) tabButton.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }));
    document.querySelectorAll('section.panel form').forEach(f => {
      f.addEventListener('submit', e => { e.preventDefault(); safe(current); });
      f.addEventListener('input', () => safe(current));
      f.addEventListener('change', () => safe(current));
    });
    document.querySelectorAll('[data-reset]').forEach(b => b.addEventListener('click', () => { b.closest('form').reset(); if (b.closest('#p-edpb')) { const first = document.querySelector('#p-edpb input[name="k-type"][value="elliptique"]'); if (first) first.checked = true; } if (b.closest('#p-ordre')) { const first = document.querySelector('#p-ordre input[name="o-kind"][value="premiere"]'); if (first) first.checked = true; syncOrdreSelector(); } if (b.closest('#p-transport')) updateTransportPe('t-a'); syncSliders(); safe(current); }));
    document.querySelectorAll('input[name="k-type"]').forEach(input => input.addEventListener('change', () => safe('edpb')));
    document.querySelectorAll('input[type="range"]').forEach(r => r.addEventListener('input', syncSliders));
    syncSliders();
    $('theme').addEventListener('click', () => {
      const r = document.documentElement, dark = (r.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
      r.dataset.theme = dark ? 'light' : 'dark'; safe(current);
    });
    renderEquations();
    renderSituations();
    // onglets à deux graphiques : commandes en haut, graphiques côte à côte sur toute la largeur
    document.querySelectorAll('.grid').forEach(g => { if (g.querySelector('.plots2')) g.classList.add('grid2'); });
    window.addEventListener('load', renderEquations);
    renderGuides();
    window.addEventListener('resize', () => safe(current));
    const h = location.hash.replace('#', '');
    show(RUN[h] ? h : 'home');
  }
  document.addEventListener('DOMContentLoaded', init);
})();
