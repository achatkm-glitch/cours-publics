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
      o.textContent = (r.dataset.log ? '1e' + (Math.round(v * 10) / 10) : String(v).replace('.', ',')) + unit;
    });
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
  const pal = () => ['--blue', '--orange', '--green', '--red', '--c5', '--c6'].map(css);
  const SCHEME = { ftcs: 'FTCS', btcs: 'BTCS', cn: 'Crank–Nicolson', amont: 'Amont', lxf: 'Lax–Friedrichs', lw: 'Lax–Wendroff', jacobi: 'Jacobi', gs: 'Gauss–Seidel' };

  /* ---------- tracé : cadre d'axes carré, axes linéaires ou logarithmiques ---------- */
  function niceTicks(lo, hi, n) {
    const span = hi - lo, raw = span / n, mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 5, 10].map(k => k * mag).find(s => s >= raw) || raw;
    const t = [];
    for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-12 * step; v += step) t.push(Math.abs(v) < 1e-12 * step ? 0 : v);
    return t;
  }
  function plot(canvas, series, o) {
    o = o || {};
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
      g.stroke();
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
  }
  function legend(el, items) {
    el.innerHTML = items.map(s => `<span><i style="border-color:${s.color};border-top-style:${s.dash ? 'dashed' : 'solid'}"></i>${s.label}</span>`).join('');
  }
  const draw = (canvasId, legId, series, opts) => { plot($(canvasId), series, opts); legend($(legId), series); };

  /* ---------- résultats : cartes colorées (pas de tableaux) et jauge du nombre de Péclet ---------- */
  function cards(el, items) {
    el.className = 'cards';
    el.innerHTML = items.map(it => `<div class="rcard" style="border-left-color:${it.color || 'var(--blue)'}"><b>${it.title}</b>${it.lines.map(l => `<span>${l}</span>`).join('')}</div>`).join('');
  }
  /* Jauge logarithmique : zones colorées, repères par cas, texte d'interprétation. */
  function gauge(el, o) {
    const lo = Math.log10(o.min), hi = Math.log10(o.max), pos = v => Math.max(0, Math.min(100, (Math.log10(v) - lo) / (hi - lo) * 100));
    const zones = o.zones.map(z => `<span class="zone" style="left:${pos(z.from)}%;width:${pos(z.to) - pos(z.from)}%;background:${z.color}"></span>`).join('');
    const marks = o.marks.map(m => `<i class="gmark" style="left:${pos(m.v)}%;background:${m.color}" title="${m.label}"></i>`).join('');
    const labels = o.zones.map(z => `<span style="left:${(pos(z.from) + pos(z.to)) / 2}%">${z.label}</span>`).join('');
    el.className = 'gauge';
    el.innerHTML = `<div class="gtitle">${o.title}</div><div class="gbar">${zones}${marks}</div><div class="glabels">${labels}</div><div class="gtext">${o.text}</div>`;
  }

  /* ---------- Chapitre 1 : transport (advection-diffusion d'une gaussienne) ---------- */
  function runTransport() {
    const c = pal(), A = vals('t-a'), Ds = vals('t-D'), Ts = vals('t-t').sort((p, q) => p - q), s0 = num('t-s0'), U0 = 1;
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
    draw('t-plot', 't-leg', S, { xlabel: 'x', ylabel: 'c', title: 'Advection–diffusion' });
    cards($('t-table'), use.map((k, i) => { const s = Calc.sigmaAt(s0, k.D, k.t);
      return { color: c[i % 6], title: `a = ${fmt(k.a, 3)} · D = ${fmt(k.D, 3)} · t = ${fmt(k.t, 3)}`, lines: [`centre a·t = <b>${fmt(k.a * k.t, 3)}</b>`, `largeur σ(t) = <b>${fmt(s, 4)}</b>`, `pic = <b>${fmt(U0 * s0 / s, 4)}</b>`] }; }));
    // jauge du nombre de Péclet : un repère par couple (a, D)
    const pairs = []; A.forEach(a => Ds.forEach(D => { if (D > 0 && a !== 0) pairs.push({ a, D, Pe: Math.abs(a) * s0 / D }); }));
    const mk = pairs.slice(0, 6).map((p, i) => ({ v: p.Pe, color: c[i % 6], label: `a = ${fmt(p.a, 3)}, D = ${fmt(p.D, 3)}` }));
    const P0 = pairs.length ? pairs[0].Pe : NaN;
    const meaning = !isFinite(P0) ? 'Pe n\u2019est pas défini (vitesse ou diffusivité nulle).' : P0 > 2 ? 'Pe > 2 : l\u2019advection domine, le profil est surtout transporté.' : P0 < 0.5 ? 'Pe < 0,5 : la diffusion domine, le profil est surtout étalé.' : 'Pe voisin de 1 : advection et diffusion sont comparables.';
    gauge($('t-gauge'), { min: 0.1, max: 100, title: `Nombre de Péclet Pe = |a|σ₀/D = ${pairs.length ? pairs.slice(0, 6).map(p => fmt(p.Pe, 3)).join(' ; ') : '—'}`,
      zones: [{ from: 0.1, to: 0.5, color: 'color-mix(in srgb, var(--green) 35%, transparent)', label: 'diffusion' }, { from: 0.5, to: 2, color: 'color-mix(in srgb, var(--orange) 35%, transparent)', label: 'comparables' }, { from: 2, to: 100, color: 'color-mix(in srgb, var(--blue) 35%, transparent)', label: 'advection' }],
      marks: mk, text: meaning });
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
    cards($('l-table'), res.map(o => ({ color: colorOf[o.t], title: names[o.t], lines: [`T(L) = <b>${fmt(o.r.TL, 3)} K</b>`, `T max = <b>${fmt(o.r.Tmax, 3)} K</b> en x = ${fmt(o.r.xmax, 4)} m`, `flux sortant en x = 0 : <b>${fmt(o.r.q0out, 1)} W/m²</b>`, `flux sortant en x = L : <b>${fmt(o.r.qLout, 1)} W/m²</b>`] })));
    const same = res.length > 1 && res.every(o => Math.abs(o.r.C1 - res[0].r.C1) < 1e-6 * (1 + Math.abs(res[0].r.C1)));
    $('l-msg').className = same ? 'msg good' : 'msg';
    $('l-msg').textContent = same ? 'Les conditions choisies sont équivalentes : les courbes se superposent.' :
      'Le bilan se vérifie : flux sortant en x = 0 plus flux sortant en x = L égale la puissance produite q·L = ' + fmt(base.q * base.L, 1) + ' W/m².';
  }

  /* ---------- Chapitre 1 : barre 1D (différences finies et volumes finis), comparaison de maillages ---------- */
  function runBarre() {
    const c = pal(), Ns = vals('b-N').map(Math.round).filter(v => v >= 2 && v <= 2000).slice(0, 5), schemes = checked('b-s');
    if (!Ns.length || !schemes.length) return;
    const p = { T0: num('b-T0'), TL: num('b-TL'), L: num('b-L'), lambda: num('b-lambda'), q: num('b-q') };
    const fine = Calc.barre(Object.assign({ N: 400 }, p));
    const S1 = [{ x: fine.x, y: fine.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution analytique' }], S2 = [], items = [];
    Ns.forEach((N, i) => {
      if (schemes.includes('fd')) {
        const r = Calc.barre(Object.assign({ N }, p)), bl = Calc.bilanDF(Object.assign({ N }, p)), col = tint(c[0], 0.16 * i);
        S1.push({ x: r.x, y: r.T, color: col, points: true, label: `DF, N = ${N}` });
        S2.push({ x: r.x, y: r.err, color: col, points: true, label: `DF, N = ${N}` });
        items.push({ color: col, title: `Différences finies · N = ${N}`, lines: [`erreur maximale = <b>${fmt(r.maxErr)} K</b>`, `bilan de flux = <b>${fmt(bl.bilan, 3)} W/m²</b>`] });
      }
      if (schemes.includes('vf')) {
        const r = Calc.barreVF(Object.assign({ N }, p)), col = tint(c[1], 0.16 * i);
        S1.push({ x: r.x, y: r.T, color: col, points: true, marker: 'square', dash: [3, 3], width: 1.6, label: `VF, N = ${N}` });
        S2.push({ x: r.x, y: r.err, color: col, points: true, marker: 'square', dash: [3, 3], width: 1.6, label: `VF, N = ${N}` });
        items.push({ color: col, title: `Volumes finis · N = ${N}`, lines: [`erreur maximale = <b>${fmt(r.maxErr)} K</b>`, `bilan de flux = <b>${fmt(r.bilan, 3)} W/m²</b>`] });
      }
    });
    $('b-msg').innerHTML = 'Bleu, cercles : différences finies (nœuds) ; orange, carrés : volumes finis (centres des cellules). Les nuances plus claires correspondent aux maillages plus fins. Erreur = solution calculée − solution analytique ; bilan de flux = flux sortants − q·L.';
    draw('b-plot', 'b-leg', S1, { xlabel: 'x (m)', ylabel: 'T (K)', title: 'Solution' });
    draw('b-plot2', 'b-leg2', S2, { xlabel: 'x (m)', ylabel: 'erreur (K)', title: 'Erreur / solution analytique' });
    cards($('b-cards'), items);
  }

  /* ---------- Chapitre 1 : Péclet, convection-diffusion en volumes finis ---------- */
  function runPeclet() {
    const c = pal(), PeL = num('e-PeL'), schemes = checked('e-s'), Ns = vals('e-N').map(Math.round).filter(v => v >= 4 && v <= 400).slice(0, 5);
    if (!schemes.length || !Ns.length) return;
    const xf = Calc.linspace(0, 1, 400), exf = xf.map(x => (Math.exp(PeL * (x - 1)) - Math.exp(-PeL)) / (1 - Math.exp(-PeL)));
    const S1 = [{ x: xf, y: exf, color: css('--plot-axis'), dash: [6, 4], label: 'solution analytique' }], S2 = [], items = [];
    const names = { centre: 'Centré', amont: 'Amont' };
    Ns.forEach((N, i) => schemes.forEach(s => {
      const r = Calc.peclet({ N, PeL, scheme: s }), col = tint(s === 'centre' ? c[0] : c[1], 0.16 * i);
      const sty = s === 'centre' ? { points: true } : { points: true, marker: 'square', dash: [3, 3], width: 1.6 };
      S1.push(Object.assign({ x: r.x, y: r.phi, color: col, label: `${names[s]}, N = ${N}` }, sty));
      S2.push(Object.assign({ x: r.x, y: r.err, color: col, label: `${names[s]}, N = ${N}` }, sty));
      items.push({ color: col, title: `${names[s]} · N = ${N}`, lines: [`Pe de maille = <b>${fmt(r.PeH, 3)}</b>`, `erreur maximale = <b>${fmt(r.maxErr, 4)}</b>`, `φ minimum = <b>${fmt(r.min, 4)}</b>`, r.oscille ? '<b>oscille</b>' : 'monotone'] });
    }));
    const bad = schemes.includes('centre') && Ns.some(N => PeL / N > 2);
    $('e-msg').className = bad ? 'msg warn' : 'msg';
    $('e-msg').textContent = 'Bleu, cercles : centré ; orange, carrés : amont ; nuances plus claires : maillages plus fins. ' +
      (bad ? 'Pe de maille > 2 : le coefficient du voisin aval du schéma centré devient négatif, les oscillations sont possibles.' : 'Pe de maille ≤ 2 : les coefficients du schéma centré restent positifs.');
    draw('e-plot', 'e-leg', S1, { xlabel: 'x', ylabel: 'φ', title: 'Solution' });
    draw('e-plot2', 'e-leg2', S2, { xlabel: 'x', ylabel: 'erreur', title: 'Erreur / solution analytique' });
    cards($('e-table'), items);
    gauge($('e-gauge'), { min: 0.1, max: 100, title: `Nombre de Péclet de maille Pe_h = Pe/N = ${Ns.map(N => fmt(PeL / N, 3)).join(' ; ')}`,
      zones: [{ from: 0.1, to: 2, color: 'color-mix(in srgb, var(--green) 35%, transparent)', label: 'Pe_h ≤ 2 : centré monotone' }, { from: 2, to: 100, color: 'color-mix(in srgb, var(--orange) 35%, transparent)', label: 'Pe_h > 2 : oscillations possibles' }],
      marks: Ns.map((N, i) => ({ v: PeL / N, color: tint(c[0], 0.16 * i), label: `N = ${N}` })), text: 'Les repères indiquent Pe_h de chaque maillage ; la limite 2 sépare coefficients positifs et négatifs du schéma centré.' });
  }

  /* ---------- Chapitre 2 : Jacobi / Gauss-Seidel, comparaison des deux méthodes ---------- */
  function runJG() {
    const c = pal(), n = Math.max(1, Math.round(num('j-n'))), K = Math.max(0, Math.round(num('j-k'))), f = num('j-f');
    const methods = checked('j-m');
    const runs = methods.map(m => ({ m, r: Calc.jacobiGS({ n, method: m, iters: K, f }) }));
    if (!runs.length) return;
    const ref = runs[0].r;
    $('j-msg').textContent = `Après ${K} itération(s), pour n = ${n} nœuds intérieurs et f = ${fmt(f, 3)}.`;
    cards($('j-table'), runs.map((o, i) => {
      const h = o.r.history[K], long = Calc.jacobiGS({ n, method: o.m, iters: 1000, f }).history.findIndex(x => x.res < 1e-3);
      return { color: c[i], title: SCHEME[o.m], lines: [`résidu ‖r‖∞ = <b>${fmt(h.res, 5)}</b>`, `erreur algébrique max = <b>${fmt(Calc.maxAbs(h.u.map((v, j) => v - o.r.exact[j])), 5)}</b>`,
        `itération où ‖r‖∞ < 1e-3 : <b>${long < 0 ? '> 1000' : long}</b>`, n <= 8 ? `u⁽${K}⁾ = (${h.u.map(v => fmt(v, 5)).join(' ; ')})` : ''].filter(Boolean) };
    }));
    const xs = [0].concat(ref.x.slice(1, n + 1), [1]);
    const S1 = [{ x: xs, y: [0].concat(ref.exact, [0]), color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(runs.map((o, i) => ({ x: xs, y: [0].concat(o.r.history[K].u, [0]), color: c[i], points: true, label: SCHEME[o.m] + ' (k = ' + K + ')' })));
    draw('j-plot', 'j-leg', S1, { xlabel: 'x', ylabel: 'u', title: 'Itérés' });
    const S2 = runs.map((o, i) => ({ x: o.r.history.map(h => h.k), y: o.r.history.map(h => h.res), color: c[i], label: SCHEME[o.m] }));
    draw('j-plot2', 'j-leg2', S2, { logy: true, xlabel: 'itération k', ylabel: 'résidu ‖r‖∞', title: 'Convergence' });
  }

  /* ---------- Chapitre 2 : ordre de trois différences finies ---------- */
  function runOrdre() {
    const c = pal(), hs = Array.from({ length: Math.round(num('o-k')) }, (_, i) => num('o-h0') / Math.pow(2, i));
    const rows = Calc.ordreExp(hs), o = (v) => v === undefined ? '' : ` (ordre <b>${fmt(v, 3)}</b>)`;
    $('o-msg').textContent = 'L\u2019ordre est lu comme log₂ du rapport des erreurs entre deux pas consécutifs dont le rapport est 2.';
    const defs = [['prog', 'ordreProg', 'Progressive', c[1]], ['centree', 'ordreCentree', 'Centrée', c[0]], ['regr3', 'ordreRegr3', 'Régressive à 3 points', c[2]]];
    cards($('o-table'), defs.map(d => ({ color: d[3], title: d[2], lines: rows.map(r => `h = ${fmt(r.h, 5)} : erreur <b>${fmt(r[d[0]], 4)}</b>${o(r[d[1]])}`) })));
    const S = defs.map(d => ({ x: rows.map(r => r.h), y: rows.map(r => r[d[0]]), color: d[3], label: d[2], points: true }));
    draw('o-plot', 'o-leg', S, { logx: true, logy: true, xlabel: 'h', ylabel: 'erreur en x = 0', title: 'u = exp(x)' });
  }

  /* ---------- Chapitre 2 : fermetures de Neumann ---------- */
  function runNeumann() {
    const c = pal(), Ns = Array.from({ length: Math.round(num('n-k')) }, (_, i) => Math.round(num('n-N0') * Math.pow(2, i))).filter(v => v >= 4 && v <= 400);
    const rows = Calc.neumannOrdres(Ns), o = (v) => v === undefined ? '' : ` (ordre <b>${fmt(v, 3)}</b>)`;
    cards($('n-table'), [{ color: c[1], title: 'Fermeture d\u2019ordre 1', lines: rows.map(r => `N = ${r.N} : erreur <b>${fmt(r.e1, 4)}</b>${o(r.p1)}`) },
                         { color: c[0], title: 'Fermeture d\u2019ordre 2', lines: rows.map(r => `N = ${r.N} : erreur <b>${fmt(r.e2, 4)}</b>${o(r.p2)}`) }]);
    const S = [{ x: rows.map(r => 1 / r.N), y: rows.map(r => r.e1), color: c[1], label: 'Neumann ordre 1', points: true },
               { x: rows.map(r => 1 / r.N), y: rows.map(r => r.e2), color: c[0], label: 'Neumann ordre 2', points: true }];
    draw('n-plot', 'n-leg', S, { logx: true, logy: true, xlabel: 'h = 1/N', ylabel: 'erreur maximale', title: 'cos x + x' });
  }

  /* ---------- Chapitre 3 : chaleur 1D, comparaison de schémas et de pas de temps ---------- */
  function runChaleur() {
    const c = pal(), alpha = num('c-alpha'), L = num('c-L'), h = num('c-h'), tf = num('c-tf');
    const dts = vals('c-dt').filter(v => v > 0), schemes = checked('c-s');
    if (!dts.length || !schemes.length) return;
    const run = (s, dt) => Calc.chaleur({ alpha, L, h, dt, steps: Math.max(1, Math.round(tf / dt)), scheme: s });
    const first = schemes.map(s => ({ s, r: run(s, dts[0]) }));
    const r0 = first[0].r, mid = Math.floor(r0.u.length / 2);
    const warn = first.some(o => o.s === 'ftcs' && o.r.Fo > 0.5);
    $('c-msg').className = warn ? 'msg bad' : 'msg good';
    $('c-msg').textContent = `Δt = ${fmt(dts[0], 4)} s : Fo = ${fmt(r0.Fo, 4)} ; pas de temps maximal de FTCS = ${fmt(r0.dtMax, 4)} s.` + (warn ? ' Fo > 1/2 : FTCS est instable.' : '');
    const lim = Math.max(1.2, ...first.flatMap(o => o.r.u.map(Math.abs)).filter(isFinite));
    const S1 = [{ x: r0.x, y: r0.u0, color: c[5], dash: [2, 4], label: 'état initial' },
                { x: r0.x, y: r0.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(first.map((o, i) => ({ x: o.r.x, y: o.r.u, color: c[i], points: true, label: SCHEME[o.s] })));
    draw('c-plot', 'c-leg', S1, { xlabel: 'x (m)', ylabel: 'u', ylim: lim > 5 ? [-1.5, 1.5] : null, title: `Profils à t ≈ ${fmt(r0.t, 3)} s` });
    const rows = [];
    schemes.forEach((s, i) => dts.forEach(dt => rows.push({ s, i, dt, r: run(s, dt) })));
    cards($('c-table'), rows.map(o => ({ color: c[o.i], title: `${SCHEME[o.s]} · Δt = ${fmt(o.dt, 4)} s`, lines: [`Fo = <b>${fmt(o.r.Fo, 4)}</b> (${Math.max(1, Math.round(tf / o.dt))} pas)`, `erreur maximale = <b>${fmt(o.r.maxErr, 4)}</b>`, `u au centre = ${fmt(o.r.u[Math.floor(o.r.u.length / 2)], 6)}`, o.r.stable ? 'critère Fo ≤ 1/2 respecté' : '<b>Fo > 1/2 : critère de FTCS non respecté</b>'] })));
    const S2 = schemes.map((s, i) => { const pr = rows.filter(o => o.s === s).sort((p, q) => p.dt - q.dt); return { x: pr.map(o => o.dt), y: pr.map(o => o.r.maxErr), color: c[i], label: SCHEME[s], points: true }; });
    draw('c-plot2', 'c-leg2', S2, { logx: true, logy: true, xlabel: 'Δt (s)', ylabel: 'erreur maximale', title: 'Erreur selon Δt' });
    $('c-mid').textContent = `Au nœud central pour Δt = ${fmt(dts[0], 4)} s : ` + first.map(o => `${SCHEME[o.s]} ${fmt(o.r.u[mid], 6)}`).join(' ; ') + ` ; exacte ${fmt(r0.exact[mid], 6)}.`;
  }

  /* ---------- Chapitre 3 : chemin de raffinement, comparaison de plusieurs exposants r ---------- */
  function runChemin() {
    const c = pal(), rs = vals('p-r').slice(0, 6), c0 = num('p-c0'), alpha = num('p-alpha'), hs = Array.from({ length: Math.round(num('p-hk')) }, (_, i) => num('p-h0') / Math.pow(2, i));
    if (!rs.length) return;
    const all = rs.map(r => Calc.chemins({ c0, r, alpha, hs }));
    cards($('p-summary'), rs.map((r, i) => { const v = Calc.verdictsChemin(r), last = all[i][all[i].length - 1];
      return { color: c[i], title: `r = ${fmt(r, 3)}`, lines: [`Dufort–Frankel : <b>${v.df}</b>`, `Lax–Friedrichs : <b>${v.lxf}</b>`, `pour h = ${fmt(last.h, 4)} : α(Δt/h)² = ${fmt(last.dfTerme, 4)} ; h²/(2Δt) = ${fmt(last.lxfTerme, 4)}`] }; }));
    const S1 = all.map((rows, i) => ({ x: rows.map(r => r.h), y: rows.map(r => r.dfTerme), color: c[i], points: true, label: `r = ${fmt(rs[i], 3)}` }));
    const S2 = all.map((rows, i) => ({ x: rows.map(r => r.h), y: rows.map(r => r.lxfTerme), color: c[i], points: true, label: `r = ${fmt(rs[i], 3)}` }));
    draw('p-plot', 'p-leg', S1, { logx: true, logy: true, xlabel: 'h', ylabel: 'α(Δt/h)²', title: 'Dufort–Frankel' });
    draw('p-plot2', 'p-leg2', S2, { logx: true, logy: true, xlabel: 'h', ylabel: 'h²/(2Δt)', title: 'Lax–Friedrichs' });
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
    $('a-msg').textContent = `Nx = ${Nxs[0]} : Δx = ${fmt(r0.h, 5)} ; Δt = ${fmt(r0.dt, 5)} ; ${r0.steps} pas ; t = ${fmt(r0.t, 4)} s.` + (bad ? ' Au moins un schéma est instable : l\u2019échelle verticale est limitée.' : '');
    const S = [{ x: r0.x, y: r0.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(first.map((o, i) => ({ x: o.r.x, y: o.r.u, color: c[i], label: SCHEME[o.s] })));
    draw('a-plot', 'a-leg', S, { xlabel: 'x (m)', ylabel: 'u', ylim: bad ? [-1.5, 1.5] : null, title: `Nx = ${Nxs[0]}, Co = ${fmt(Co, 3)}` });
    const items = [];
    schemes.forEach((s, i) => Nxs.forEach(Nx => { const r = run(s, Nx); items.push({ color: c[i], title: `${SCHEME[s]} · Nx = ${Nx}`, lines: [`maximum = <b>${fmt(r.max, 4)}</b>`, `minimum = <b>${fmt(r.min, 4)}</b>`, `erreur maximale = <b>${fmt(r.maxErr, 4)}</b>`] }); }));
    cards($('a-table'), items);
  }

  const RUN = { transport: runTransport, cl: runCL, barre: runBarre, peclet: runPeclet, jg: runJG, ordre: runOrdre, neumann: runNeumann, chaleur: runChaleur, chemin: runChemin, adv: runAdv };

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
      const comps = t.competences.map(k => `<li><b>${k}</b> ${G.competences[k]}</li>`).join('');
      const notions = t.notions.map(n => `<li>${n}</li>`).join('');
      const ex = t.explorations.map((e, i) => `<div class="explo"><b>${e.id} · ${e.titre}</b> <span class="codes">(${e.comp.join(', ')})</span>
        <p>${e.consigne}</p><p><i>Question :</i> ${e.question}</p><button type="button" class="btn alt" data-explo="${tab}|${i}">Appliquer ces réglages</button></div>`).join('');
      box.innerHTML = `<h3>Pour approfondir : ${t.fiche}</h3>
        <div class="two"><div><h4>Compétences travaillées</h4><ul>${comps}</ul></div>
        <div><h4>Notions à définir et à retrouver sur la fiche</h4><ul>${notions}</ul><p>Exercices liés : ${t.exercices}.</p></div></div>
        <h4>Explorations guidées</h4>${ex}<p class="preset-note" aria-live="polite"></p>
        <p class="repere">Notez vos réponses dans la rubrique « Explorations au calculateur » de la fiche de séance.</p>`;
      panel.appendChild(box);
      box.querySelectorAll('[data-explo]').forEach(b => b.addEventListener('click', () => { const [tb, i] = b.dataset.explo.split('|'); applyPreset(tb, parseInt(i, 10)); }));
    });
  }

  let current = 'transport';
  function safe(name) {
    try { RUN[name](); } catch (e) { const p = $('p-' + name).querySelector('.msg'); if (p) { p.className = 'msg bad'; p.textContent = 'Paramètres invalides : ' + e.message; } }
  }
  function show(name) {
    current = name;
    document.querySelectorAll('section.panel').forEach(s => s.classList.toggle('active', s.id === 'p-' + name));
    document.querySelectorAll('nav button[data-tab]').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === name ? 'true' : 'false'));
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* ignoré */ }
    safe(name);
  }
  function init() {
    document.querySelectorAll('nav button[data-tab]').forEach(b => b.addEventListener('click', () => show(b.dataset.tab)));
    document.querySelectorAll('section.panel form').forEach(f => {
      f.addEventListener('submit', e => { e.preventDefault(); safe(current); });
      f.addEventListener('input', () => safe(current));
      f.addEventListener('change', () => safe(current));
    });
    document.querySelectorAll('[data-reset]').forEach(b => b.addEventListener('click', () => { b.closest('form').reset(); syncSliders(); safe(current); }));
    document.querySelectorAll('input[type="range"]').forEach(r => r.addEventListener('input', syncSliders));
    syncSliders();
    $('theme').addEventListener('click', () => {
      const r = document.documentElement, dark = (r.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
      r.dataset.theme = dark ? 'light' : 'dark'; safe(current);
    });
    renderGuides();
    window.addEventListener('resize', () => safe(current));
    const h = location.hash.replace('#', '');
    show(RUN[h] ? h : 'transport');
  }
  document.addEventListener('DOMContentLoaded', init);
})();
