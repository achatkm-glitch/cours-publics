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
  function table(el, head, rows) {
    el.innerHTML = '<table><thead><tr>' + head.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</tbody></table>';
  }
  const draw = (canvasId, legId, series, opts) => { plot($(canvasId), series, opts); legend($(legId), series); };

  /* ---------- Chapitre 1 : transport (advection-diffusion d'une gaussienne) ---------- */
  function runTransport() {
    const c = pal(), A = vals('t-a'), Ds = vals('t-D'), Ts = vals('t-t').sort((p, q) => p - q), s0 = num('t-s0'), U0 = 1;
    const combos = [];
    A.forEach(a => Ds.forEach(D => Ts.forEach(t => combos.push({ a, D, t }))));
    const use = combos.slice(0, 6);
    $('t-msg').className = combos.length > 6 ? 'msg warn' : 'msg';
    $('t-msg').textContent = (combos.length > 6 ? `Seules les 6 premières combinaisons sur ${combos.length} sont tracées. ` : '') +
      'Le centre se déplace à la vitesse a (advection) ; la largeur σ(t) = √(σ₀² + 2Dt) augmente (diffusion) ; l’aire sous la courbe est conservée.';
    let lo = Infinity, hi = -Infinity;
    use.forEach(k => { const s = Calc.sigmaAt(s0, k.D, k.t); lo = Math.min(lo, k.a * k.t - 4 * s); hi = Math.max(hi, k.a * k.t + 4 * s); });
    const xs = Calc.linspace(lo, hi, 400);
    const S = use.map((k, i) => ({ x: xs, y: Calc.gaussAD({ a: k.a, D: k.D, sigma0: s0, U0, t: k.t, xs }), color: c[i % 6], width: 2.4,
      label: `a = ${fmt(k.a, 3)}, D = ${fmt(k.D, 3)}, t = ${fmt(k.t, 3)}` }));
    draw('t-plot', 't-leg', S, { xlabel: 'x', ylabel: 'c', title: 'Advection–diffusion' });
    table($('t-table'), ['a', 'D', 't', 'centre a·t', 'σ(t)', 'pic', 'Pe = |a|σ₀/D'],
      use.map(k => { const s = Calc.sigmaAt(s0, k.D, k.t); return [fmt(k.a, 3), fmt(k.D, 3), fmt(k.t, 3), fmt(k.a * k.t, 3), fmt(s, 4), fmt(U0 * s0 / s, 4), k.D > 0 ? fmt(Math.abs(k.a) * s0 / k.D, 3) : '∞']; }));
  }

  /* ---------- Chapitre 1 : conditions aux limites sur la barre ---------- */
  function runCL() {
    const c = pal(), base = { L: num('l-L'), lambda: num('l-lambda'), q: num('l-q'), T0: num('l-T0') };
    const types = checked('l-type');
    const names = { dirichlet: 'Dirichlet', neumann: 'Neumann (flux imposé)', robin: 'Robin (échange convectif)' };
    const par = { dirichlet: { TL: num('l-TL') }, neumann: { qL: num('l-qL') }, robin: { h: num('l-h'), Tinf: num('l-Tinf') } };
    const style = { dirichlet: { width: 6, dash: [] }, neumann: { width: 3.5, dash: [9, 5] }, robin: { width: 1.6, dash: [2, 4] } };
    const res = types.map((t, i) => ({ t, r: Calc.barreCL(Object.assign({ type: t }, base, par[t])) }));
    const colorOf = { dirichlet: c[0], neumann: c[1], robin: c[2] };
    const S = res.map(o => ({ x: o.r.x, y: o.r.T, color: colorOf[o.t], width: style[o.t].width, dash: style[o.t].dash, label: names[o.t] }));
    draw('l-plot', 'l-leg', S, { xlabel: 'x (m)', ylabel: 'T (K)', title: 'Barre avec production' });
    table($('l-table'), ['condition en x = L', 'T(L) (K)', 'T max (K)', 'x de T max (m)', 'flux sortant x=0 (W/m²)', 'flux sortant x=L (W/m²)'],
      res.map(o => [names[o.t], fmt(o.r.TL, 3), fmt(o.r.Tmax, 3), fmt(o.r.xmax, 4), fmt(o.r.q0out, 1), fmt(o.r.qLout, 1)]));
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
    const S1 = [{ x: fine.x, y: fine.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution analytique' }], S2 = [], lines = [];
    let first = null;
    Ns.forEach((N, i) => {
      let msg = `N = ${N}`;
      if (schemes.includes('fd')) {
        const r = Calc.barre(Object.assign({ N }, p)), bl = Calc.bilanDF(Object.assign({ N }, p));
        S1.push({ x: r.x, y: r.T, color: tint(c[0], 0.16 * i), points: true, label: `DF, N = ${N}` });
        S2.push({ x: r.x, y: r.err, color: tint(c[0], 0.16 * i), points: true, label: `DF, N = ${N}` });
        msg += ` : différences finies, erreur ${fmt(r.maxErr)} K, bilan de flux ${fmt(bl.bilan, 3)} W/m²`;
        if (!first) first = { fd: r };
        else if (!first.fd) first.fd = r;
      }
      if (schemes.includes('vf')) {
        const r = Calc.barreVF(Object.assign({ N }, p));
        S1.push({ x: r.x, y: r.T, color: tint(c[1], 0.16 * i), points: true, marker: 'square', dash: [3, 3], width: 1.6, label: `VF, N = ${N}` });
        S2.push({ x: r.x, y: r.err, color: tint(c[1], 0.16 * i), points: true, marker: 'square', dash: [3, 3], width: 1.6, label: `VF, N = ${N}` });
        msg += `${schemes.includes('fd') ? ' ;' : ' :'} volumes finis, erreur ${fmt(r.maxErr)} K, bilan de flux ${fmt(r.bilan, 3)} W/m²`;
        if (!first) first = { vf: r };
        else if (!first.vf) first.vf = r;
      }
      lines.push(msg);
    });
    $('b-msg').innerHTML = lines.join('<br>') + '<br><small>Bleu, cercles : différences finies (nœuds) ; orange, carrés : volumes finis (centres des cellules). Les nuances plus claires correspondent aux maillages plus fins. Erreur = solution calculée − solution analytique.</small>';
    draw('b-plot', 'b-leg', S1, { xlabel: 'x (m)', ylabel: 'T (K)', title: 'Solution' });
    draw('b-plot2', 'b-leg2', S2, { xlabel: 'x (m)', ylabel: 'erreur (K)', title: 'Erreur / solution analytique' });
    const Nf = Ns[0];
    $('b-table-title').textContent = `Valeurs pour N = ${Nf}`;
    const tb = (r, id, name) => table($(id), [name + ' : i', 'x (m)', 'T (K)', 'T exacte (K)', 'erreur (K)'], r.x.map((x, i) => [i, fmt(x, 4), fmt(r.T[i], 4), fmt(r.exact[i], 4), fmt(r.err[i], 4)]));
    if (schemes.includes('fd')) tb(Calc.barre(Object.assign({ N: Nf }, p)), 'b-table', 'DF'); else $('b-table').innerHTML = '';
    if (schemes.includes('vf')) tb(Calc.barreVF(Object.assign({ N: Nf }, p)), 'b-table2', 'VF'); else $('b-table2').innerHTML = '';
  }

  /* ---------- Chapitre 1 : Péclet, convection-diffusion en volumes finis ---------- */
  function runPeclet() {
    const c = pal(), PeL = num('e-PeL'), schemes = checked('e-s'), Ns = vals('e-N').map(Math.round).filter(v => v >= 4 && v <= 400).slice(0, 5);
    if (!schemes.length || !Ns.length) return;
    const xf = Calc.linspace(0, 1, 400), exf = xf.map(x => (Math.exp(PeL * (x - 1)) - Math.exp(-PeL)) / (1 - Math.exp(-PeL)));
    const S1 = [{ x: xf, y: exf, color: css('--plot-axis'), dash: [6, 4], label: 'solution analytique' }], S2 = [], rows = [];
    const names = { centre: 'Centré', amont: 'Amont' };
    Ns.forEach((N, i) => schemes.forEach(s => {
      const r = Calc.peclet({ N, PeL, scheme: s });
      const sty = s === 'centre' ? { points: true } : { points: true, marker: 'square', dash: [3, 3], width: 1.4 };
      S1.push(Object.assign({ x: r.x, y: r.phi, color: tint(s === 'centre' ? c[0] : c[1], 0.16 * i), label: `${names[s]}, N = ${N}` }, sty));
      S2.push(Object.assign({ x: r.x, y: r.err, color: tint(s === 'centre' ? c[0] : c[1], 0.16 * i), label: `${names[s]}, N = ${N}` }, sty));
      rows.push([names[s], N, fmt(r.PeH, 3), fmt(r.maxErr, 4), fmt(r.min, 4), r.oscille ? 'oui' : 'non']);
    }));
    const r0 = Calc.peclet({ N: Ns[0], PeL, scheme: 'centre' });
    const bad = schemes.includes('centre') && r0.PeH > 2;
    $('e-msg').className = bad ? 'msg warn' : 'msg';
    $('e-msg').textContent = `N = ${Ns[0]} : Pe_h = Pe/N = ${fmt(r0.PeH, 3)}.` + (bad ? ' Pe_h > 2 : le coefficient du voisin aval du schéma centré devient négatif, les oscillations sont possibles.' : ' Pe_h ≤ 2 : les coefficients du schéma centré restent positifs.') +
      ' Bleu, cercles : centré ; orange, carrés : amont ; nuances plus claires : maillages plus fins.';
    draw('e-plot', 'e-leg', S1, { xlabel: 'x', ylabel: 'φ', title: 'Solution', ylim: null });
    draw('e-plot2', 'e-leg2', S2, { xlabel: 'x', ylabel: 'erreur', title: 'Erreur / solution analytique' });
    table($('e-table'), ['schéma', 'N', 'Pe_h', 'erreur max', 'φ minimum', 'oscille'], rows);
  }

  /* ---------- Chapitre 2 : Jacobi / Gauss-Seidel, comparaison des deux méthodes ---------- */
  function runJG() {
    const c = pal(), n = Math.max(1, Math.round(num('j-n'))), K = Math.max(0, Math.round(num('j-k'))), f = num('j-f');
    const methods = checked('j-m');
    const runs = methods.map(m => ({ m, r: Calc.jacobiGS({ n, method: m, iters: K, f }) }));
    if (!runs.length) return;
    const ref = runs[0].r;
    $('j-msg').innerHTML = runs.map(o => { const h = o.r.history[K]; return `${SCHEME[o.m]} : ‖r‖∞ = ${fmt(h.res, 5)}, erreur algébrique maximale = ${fmt(Calc.maxAbs(h.u.map((v, i) => v - o.r.exact[i])), 5)}`; }).join(' ; ') + ` (après ${K} itération(s)).`;
    table($('j-table'), ['nœud', 'x'].concat(runs.map(o => SCHEME[o.m]), ['exacte']),
      ref.exact.map((e, i) => [i + 1, fmt(ref.x[i + 1], 4)].concat(runs.map(o => fmt(o.r.history[K].u[i], 6)), [fmt(e, 6)])));
    const kmax = Math.min(K, 40);
    table($('j-hist'), ['k'].concat(runs.map(o => '‖r‖∞ ' + SCHEME[o.m])),
      Array.from({ length: kmax + 1 }, (_, k) => [k].concat(runs.map(o => fmt(o.r.history[k].res, 5)))));
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
    const rows = Calc.ordreExp(hs), o = (v) => v === undefined ? '—' : fmt(v, 3);
    table($('o-table'), ['h', 'progressive', 'ordre', 'centrée', 'ordre', 'régressive 3 pts', 'ordre'],
      rows.map(r => [fmt(r.h, 5), fmt(r.prog, 4), o(r.ordreProg), fmt(r.centree, 4), o(r.ordreCentree), fmt(r.regr3, 4), o(r.ordreRegr3)]));
    $('o-msg').textContent = 'L’ordre est lu comme log₂ du rapport des erreurs entre deux pas consécutifs dont le rapport est 2.';
    const S = [{ x: rows.map(r => r.h), y: rows.map(r => r.prog), color: c[1], label: 'progressive (ordre 1)', points: true },
               { x: rows.map(r => r.h), y: rows.map(r => r.centree), color: c[0], label: 'centrée (ordre 2)', points: true },
               { x: rows.map(r => r.h), y: rows.map(r => r.regr3), color: c[2], label: 'régressive à 3 points (ordre 2)', points: true }];
    draw('o-plot', 'o-leg', S, { logx: true, logy: true, xlabel: 'h', ylabel: 'erreur en x = 0', title: 'u = exp(x)' });
  }

  /* ---------- Chapitre 2 : fermetures de Neumann ---------- */
  function runNeumann() {
    const c = pal(), Ns = Array.from({ length: Math.round(num('n-k')) }, (_, i) => Math.round(num('n-N0') * Math.pow(2, i))).filter(v => v >= 4 && v <= 400);
    const rows = Calc.neumannOrdres(Ns);
    table($('n-table'), ['N', 'erreur ordre 1', 'ordre observé', 'erreur ordre 2', 'ordre observé'],
      rows.map(r => [r.N, fmt(r.e1, 4), r.p1 === undefined ? '—' : fmt(r.p1, 3), fmt(r.e2, 4), r.p2 === undefined ? '—' : fmt(r.p2, 3)]));
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
    schemes.forEach(s => dts.forEach(dt => { const r = run(s, dt); rows.push({ s, dt, r }); }));
    table($('c-table'), ['schéma', 'Δt (s)', 'pas', 'Fo', 'u au centre', 'erreur max', 'stable'],
      rows.map(o => [SCHEME[o.s], fmt(o.dt, 4), Math.max(1, Math.round(tf / o.dt)), fmt(o.r.Fo, 4), fmt(o.r.u[Math.floor(o.r.u.length / 2)], 6), fmt(o.r.maxErr, 4), o.r.stable ? 'oui' : 'non']));
    const S2 = schemes.map((s, i) => { const pr = rows.filter(o => o.s === s).sort((p, q) => p.dt - q.dt); return { x: pr.map(o => o.dt), y: pr.map(o => o.r.maxErr), color: c[i], label: SCHEME[s], points: true }; });
    draw('c-plot2', 'c-leg2', S2, { logx: true, logy: true, xlabel: 'Δt (s)', ylabel: 'erreur maximale', title: 'Erreur selon Δt' });
    $('c-mid').textContent = `Au nœud central pour Δt = ${fmt(dts[0], 4)} s : ` + first.map(o => `${SCHEME[o.s]} ${fmt(o.r.u[mid], 6)}`).join(' ; ') + ` ; exacte ${fmt(r0.exact[mid], 6)}.`;
  }

  /* ---------- Chapitre 3 : chemin de raffinement, comparaison de plusieurs exposants r ---------- */
  function runChemin() {
    const c = pal(), rs = vals('p-r').slice(0, 6), c0 = num('p-c0'), alpha = num('p-alpha'), hs = Array.from({ length: Math.round(num('p-hk')) }, (_, i) => num('p-h0') / Math.pow(2, i));
    if (!rs.length) return;
    table($('p-summary'), ['r', 'Dufort–Frankel (diffusion)', 'Lax–Friedrichs (advection)'],
      rs.map(r => { const v = Calc.verdictsChemin(r); return [fmt(r, 3), v.df, v.lxf]; }));
    const rows0 = Calc.chemins({ c0, r: rs[0], alpha, hs });
    table($('p-table'), ['h', 'Δt = c₀hʳ', 'Δt/h', 'α(Δt/h)² (DF)', 'h²/(2Δt) (LxF)'],
      rows0.map(r => [fmt(r.h, 5), fmt(r.dt, 5), fmt(r.dtSurH, 5), fmt(r.dfTerme, 5), fmt(r.lxfTerme, 5)]));
    $('p-table-title').textContent = `Détail pour r = ${fmt(rs[0], 3)}`;
    const all = rs.map(r => Calc.chemins({ c0, r, alpha, hs }));
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
    $('a-msg').textContent = `Nx = ${Nxs[0]} : Δx = ${fmt(r0.h, 5)} ; Δt = ${fmt(r0.dt, 5)} ; ${r0.steps} pas ; t = ${fmt(r0.t, 4)} s.` + (bad ? ' Au moins un schéma est instable : l’échelle verticale est limitée.' : '');
    const S = [{ x: r0.x, y: r0.exact, color: css('--plot-axis'), dash: [6, 4], label: 'solution exacte' }]
      .concat(first.map((o, i) => ({ x: o.r.x, y: o.r.u, color: c[i], label: SCHEME[o.s] })));
    draw('a-plot', 'a-leg', S, { xlabel: 'x (m)', ylabel: 'u', ylim: bad ? [-1.5, 1.5] : null, title: `Nx = ${Nxs[0]}, Co = ${fmt(Co, 3)}` });
    const rows = [];
    schemes.forEach(s => Nxs.forEach(Nx => { const r = run(s, Nx); rows.push([SCHEME[s], Nx, fmt(r.max, 4), fmt(r.min, 4), fmt(r.maxErr, 4)]); }));
    table($('a-table'), ['schéma', 'Nx', 'maximum', 'minimum', 'erreur max'], rows);
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

  const RUN = { transport: runTransport, cl: runCL, barre: runBarre, peclet: runPeclet, jg: runJG, ordre: runOrdre, neumann: runNeumann, chaleur: runChaleur, chemin: runChemin, adv: runAdv };
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
