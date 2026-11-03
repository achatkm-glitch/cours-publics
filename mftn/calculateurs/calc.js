/* Noyau numérique des calculateurs MFTN (aucune dépendance).
   Utilisable dans le navigateur (window.Calc) et sous Node (module.exports) pour les tests. */
(function (root) {
  'use strict';

  /* Résolution d'un système tridiagonal (algorithme de Thomas).
     a : sous-diagonale (a[0] inutilisé), b : diagonale, c : sur-diagonale (c[n-1] inutilisé). */
  function thomas(a, b, c, d) {
    const n = b.length;
    const cp = new Array(n), dp = new Array(n), x = new Array(n);
    cp[0] = (n > 1 ? c[0] : 0) / b[0];
    dp[0] = d[0] / b[0];
    for (let i = 1; i < n; i++) {
      const m = b[i] - a[i] * cp[i - 1];
      cp[i] = (i < n - 1 ? c[i] : 0) / m;
      dp[i] = (d[i] - a[i] * dp[i - 1]) / m;
    }
    x[n - 1] = dp[n - 1];
    for (let i = n - 2; i >= 0; i--) x[i] = dp[i] - cp[i] * x[i + 1];
    return x;
  }

  /* Élimination de Gauss avec pivot partiel (système plein, petite taille). */
  /* Système tridiagonal cyclique (domaine périodique) : a = sous-diagonale (a[0] est le coin de la ligne 0), c = sur-diagonale
     (c[n-1] est le coin de la dernière ligne) ; formule de Sherman-Morrison. */
  function thomasCyclique(a, b, c, d) {
    const n = b.length, alpha = c[n - 1], beta = a[0], gamma = -b[0];
    const bb = b.slice(); bb[0] = b[0] - gamma; bb[n - 1] = b[n - 1] - alpha * beta / gamma;
    const x = thomas(a, bb, c, d.slice());
    const w = new Array(n).fill(0); w[0] = gamma; w[n - 1] = alpha;
    const z = thomas(a, bb, c, w);
    const f = (x[0] + beta * x[n - 1] / gamma) / (1 + z[0] + beta * z[n - 1] / gamma);
    return x.map((xi, i) => xi - f * z[i]);
  }

  function gauss(A, b) {
    const n = b.length;
    const M = A.map((r, i) => r.slice().concat([b[i]]));
    for (let k = 0; k < n; k++) {
      let p = k;
      for (let i = k + 1; i < n; i++) if (Math.abs(M[i][k]) > Math.abs(M[p][k])) p = i;
      [M[k], M[p]] = [M[p], M[k]];
      for (let i = k + 1; i < n; i++) {
        const f = M[i][k] / M[k][k];
        if (f !== 0) for (let j = k; j <= n; j++) M[i][j] -= f * M[k][j];
      }
    }
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let s = M[i][n];
      for (let j = i + 1; j < n; j++) s -= M[i][j] * x[j];
      x[i] = s / M[i][i];
    }
    return x;
  }

  const linspace = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * i / (n - 1));
  const maxAbs = v => v.reduce((m, e) => Math.max(m, Math.abs(e)), 0);

  /* 1. Barre 1D : lambda T'' + q = 0, T(0)=T0, T(L)=TL, N intervalles, schéma centré. */
  function barre({ N, T0, TL, L = 1, lambda = 1, q = 0 }) {
    const h = L / N, n = N - 1;
    const a = new Array(n).fill(-1), b = new Array(n).fill(2), c = new Array(n).fill(-1);
    const d = new Array(n).fill(h * h * q / lambda);
    d[0] += T0; d[n - 1] += TL;
    const Ti = thomas(a, b, c, d);
    const x = Array.from({ length: N + 1 }, (_, i) => i * h);
    const T = [T0].concat(Ti, [TL]);
    const exact = x.map(xi => T0 + (TL - T0) * xi / L + q / (2 * lambda) * xi * (L - xi));
    const err = T.map((t, i) => t - exact[i]);
    return { h, x, T, exact, err, maxErr: maxAbs(err) };
  }

  /* 2. Jacobi / Gauss-Seidel pour -u''=f, u(0)=u(1)=0, n nœuds intérieurs. */
  function jacobiGS({ n, method, iters, f = 1 }) {
    const h = 1 / (n + 1), rhs = h * h * f;
    const x = Array.from({ length: n + 2 }, (_, i) => i * h);
    let u = new Array(n).fill(0);
    const history = [{ k: 0, u: u.slice(), res: maxAbs(residu(u, rhs)) }];
    for (let k = 1; k <= iters; k++) {
      if (method === 'jacobi') {
        const old = u;
        u = old.map((_, i) => (rhs + (i > 0 ? old[i - 1] : 0) + (i < n - 1 ? old[i + 1] : 0)) / 2);
      } else {
        for (let i = 0; i < n; i++) u[i] = (rhs + (i > 0 ? u[i - 1] : 0) + (i < n - 1 ? u[i + 1] : 0)) / 2;
      }
      history.push({ k, u: u.slice(), res: maxAbs(residu(u, rhs)) });
    }
    const exact = x.slice(1, n + 1).map(xi => f * xi * (1 - xi) / 2);
    return { h, x, history, exact };
  }
  function residu(u, rhs) {
    const n = u.length;
    return u.map((_, i) => rhs - (2 * u[i] - (i > 0 ? u[i - 1] : 0) - (i < n - 1 ? u[i + 1] : 0)));
  }

  /* 3. Ordre d'une différence finie : erreur en x=0 pour u=exp(x). */
  function ordreExp(hs) {
    const rows = hs.map(h => ({
      h,
      prog: Math.abs((Math.exp(h) - 1) / h - 1),
      centree: Math.abs((Math.exp(h) - Math.exp(-h)) / (2 * h) - 1),
      regr3: Math.abs((3 - 4 * Math.exp(-h) + Math.exp(-2 * h)) / (2 * h) - 1),
      /* dérivée seconde centrée en x = 0 (u'' = 1) : (e^h - 2 + e^-h)/h^2 = (2 sinh(h/2)/h)^2, forme sans annulation */
      seconde: Math.abs(Math.pow(2 * Math.sinh(h / 2) / h, 2) - 1)
    }));
    rows.forEach((r, i) => {
      if (i > 0) {
        r.ordreProg = Math.log2(rows[i - 1].prog / r.prog);
        r.ordreCentree = Math.log2(rows[i - 1].centree / r.centree);
        r.ordreRegr3 = Math.log2(rows[i - 1].regr3 / r.regr3);
        r.ordreSeconde = Math.log2(rows[i - 1].seconde / r.seconde);
      }
    });
    return rows;
  }

  /* 4. Fermetures de Neumann : -u''=cos x, u(0)=1, u'(1)=1-sin 1, solution exacte cos x + x.
     ordre 1 : u_N = u_{N-1} + h g ; ordre 2 : différence régressive à trois points ;
     ordre 3 (« fantôme ») : point fantôme u_{N+1} = u_{N-1} + 2 h g, différence centrée en x = 1 (ordre 2). */
  function neumann(N, ordre, opts) {
    const h = 1 / N, g = 1 - Math.sin(1), ug = 1;
    const x = Array.from({ length: N + 1 }, (_, i) => i * h);
    const f = x.map(Math.cos);
    let full;
    if (opts && opts.bc === 'fourier') {
      /* condition de Fourier (Robin, échange convectif) : u'(1) + kappa u(1) = gR, gR = u'(1) + kappa u(1) de la solution exacte cos x + x ;
         N inconnues u_1..u_N, la dernière ligne est la condition au bord discrétisée (ordre 1, ordre 2, point fantôme). */
      const kappa = opts.kappa, gR = g + kappa * (Math.cos(1) + 1), n = N;
      const A = Array.from({ length: n }, () => new Array(n).fill(0));
      const d = new Array(n).fill(0);
      for (let i = 0; i < n - 1; i++) { A[i][i] = 2; if (i > 0) A[i][i - 1] = -1; A[i][i + 1] = -1; d[i] = h * h * f[i + 1]; }
      d[0] += ug;
      if (ordre === 1) { A[n - 1][n - 2] = -1; A[n - 1][n - 1] = 1 + kappa * h; d[n - 1] = h * gR; }
      else if (ordre === 3) { A[n - 1][n - 2] = -2; A[n - 1][n - 1] = 2 + 2 * h * kappa; d[n - 1] = h * h * f[n] + 2 * h * gR; }
      else { A[n - 1][n - 3] = 1; A[n - 1][n - 2] = -4; A[n - 1][n - 1] = 3 + 2 * h * kappa; d[n - 1] = 2 * h * gR; }
      full = [ug].concat(gauss(A, d));
    } else if (ordre === 1) {
      const n = N - 1;
      const a = new Array(n).fill(-1), b = new Array(n).fill(2), c = new Array(n).fill(-1);
      const d = Array.from({ length: n }, (_, i) => h * h * f[i + 1]);
      d[0] += ug; b[n - 1] = 1; d[n - 1] += h * g;
      const u = thomas(a, b, c, d);
      full = [ug].concat(u, [u[n - 1] + h * g]);
    } else if (ordre === 3) {
      const n = N;
      const A = Array.from({ length: n }, () => new Array(n).fill(0));
      const d = new Array(n).fill(0);
      for (let i = 0; i < n - 1; i++) { A[i][i] = 2; if (i > 0) A[i][i - 1] = -1; A[i][i + 1] = -1; d[i] = h * h * f[i + 1]; }
      d[0] += ug;
      A[n - 1][n - 1] = 2; A[n - 1][n - 2] = -2; d[n - 1] = h * h * f[n] + 2 * h * g;
      full = [ug].concat(gauss(A, d));
    } else {
      const n = N;
      const A = Array.from({ length: n }, () => new Array(n).fill(0));
      const d = new Array(n).fill(0);
      for (let i = 0; i < n - 1; i++) {
        A[i][i] = 2;
        if (i > 0) A[i][i - 1] = -1;
        A[i][i + 1] = -1;
        d[i] = h * h * f[i + 1];
      }
      d[0] += ug;
      A[n - 1][n - 1] = 3; A[n - 1][n - 2] = -4; A[n - 1][n - 3] = 1; d[n - 1] = 2 * h * g;
      full = [ug].concat(gauss(A, d));
    }
    const err = full.map((v, i) => Math.abs(v - (Math.cos(x[i]) + x[i])));
    return { N, h, x, u: full, errs: err, err: maxAbs(err) };
  }
  function neumannOrdres(Ns, opts) {
    const rows = Ns.map(N => ({ N, e1: neumann(N, 1, opts).err, e2: neumann(N, 2, opts).err, e3: neumann(N, 3, opts).err }));
    rows.forEach((r, i) => {
      if (i > 0) { r.p1 = Math.log2(rows[i - 1].e1 / r.e1); r.p2 = Math.log2(rows[i - 1].e2 / r.e2); r.p3 = Math.log2(rows[i - 1].e3 / r.e3); }
    });
    return rows;
  }

  /* 5. Chaleur 1D : u_t = alpha u_xx, u(x,0)=sin(pi x/L), u=0 aux bords. */
  function chaleur({ alpha, L, h, dt, steps, scheme }) {
    const N = Math.max(2, Math.round(L / h)), hh = L / N, n = N - 1;
    const Fo = alpha * dt / (hh * hh);
    const x = Array.from({ length: N + 1 }, (_, i) => i * hh);
    let u = x.slice(1, N).map(xi => Math.sin(Math.PI * xi / L));
    const u0 = u.slice();
    let uprev = null;
    for (let s = 0; s < steps; s++) {
      if (scheme === 'df' || scheme === 'ri') {
        const Lg = (i) => (i > 0 ? u[i - 1] : 0), Rg = (i) => (i < n - 1 ? u[i + 1] : 0);
        const nu = uprev === null
          ? u.map((v, i) => v + Fo * (Rg(i) - 2 * v + Lg(i)))                                   // première étape : FTCS
          : (scheme === 'df'
            ? u.map((v, i) => ((1 - 2 * Fo) * uprev[i] + 2 * Fo * (Rg(i) + Lg(i))) / (1 + 2 * Fo)) // Dufort-Frankel
            : u.map((v, i) => uprev[i] + 2 * Fo * (Rg(i) - 2 * v + Lg(i))));                        // Richardson
        uprev = u; u = nu;
      } else if (scheme === 'ftcs') {
        u = u.map((v, i) => v + Fo * ((i < n - 1 ? u[i + 1] : 0) - 2 * v + (i > 0 ? u[i - 1] : 0)));
      } else if (scheme === 'btcs') {
        const a = new Array(n).fill(-Fo), b = new Array(n).fill(1 + 2 * Fo), c = new Array(n).fill(-Fo);
        u = thomas(a, b, c, u.slice());
      } else {
        const a = new Array(n).fill(-Fo / 2), b = new Array(n).fill(1 + Fo), c = new Array(n).fill(-Fo / 2);
        const d = u.map((v, i) => Fo / 2 * (i > 0 ? u[i - 1] : 0) + (1 - Fo) * v + Fo / 2 * (i < n - 1 ? u[i + 1] : 0));
        u = thomas(a, b, c, d);
      }
    }
    const t = steps * dt;
    const decay = Math.exp(-alpha * Math.pow(Math.PI / L, 2) * t);
    const exact = x.slice(1, N).map(xi => Math.sin(Math.PI * xi / L) * decay);
    const err = u.map((v, i) => v - exact[i]);
    return { N, h: hh, Fo, t, x: x.slice(1, N), u, u0, exact, maxErr: maxAbs(err), decay,
             dtMax: hh * hh / (2 * alpha), stable: scheme === 'ri' ? false : (scheme !== 'ftcs' || Fo <= 0.5) };
  }

  /* 6. Chemin de raffinement dt = c0 h^r : termes décisifs de Dufort-Frankel et de Lax-Friedrichs. */
  function chemins({ c0, r, alpha, hs }) {
    return hs.map(h => {
      const dt = c0 * Math.pow(h, r);
      return { h, dt, dtSurH: dt / h, dfTerme: alpha * Math.pow(dt / h, 2), lxfTerme: h * h / (2 * dt) };
    });
  }
  function verdictsChemin(r) {
    return {
      df: r > 1 ? 'consistant (Δt/h → 0)' : (r === 1 ? 'non consistant avec la diffusion (équation limite modifiée)' : 'non consistant'),
      lxf: (r > 0 && r < 2) ? 'consistant (h²/Δt → 0)' : (r === 2 ? 'non consistant avec l\'advection pure (convection–diffusion)' : 'non consistant')
    };
  }

  /* 7. Advection périodique d'une gaussienne, domaine [-2, 8], u_t + a u_x = 0, a non nul (a < 0 : écoulement vers la gauche). */
  function advection({ scheme, a = 1, Nx, Co, tf, sigma0 = 0.15, U0 = 1 }) {
    if (!(Math.abs(a) > 1e-9)) throw new Error('la vitesse a doit être non nulle');
    const Lx = 10, h = Lx / Nx, dt = Co * h / Math.abs(a);
    const steps = Math.max(1, Math.round(tf / dt)), t = steps * dt, C = a * dt / h; // C signé
    const x = Array.from({ length: Nx }, (_, i) => -2 + i * h);
    let u = x.map(xi => U0 * Math.exp(-xi * xi / (2 * sigma0 * sigma0)));
    const at = i => u[(i + Nx) % Nx];
    for (let s = 0; s < steps; s++) {
      const old = u;
      if (scheme === 'cimp') {   // centré implicite : -C/2 u_{i-1} + u_i + C/2 u_{i+1} = u_i^n (domaine périodique)
        u = thomasCyclique(new Array(Nx).fill(-C / 2), new Array(Nx).fill(1), new Array(Nx).fill(C / 2), old);
        continue;
      }
      u = old.map((_, i) => {
        const um = old[(i - 1 + Nx) % Nx], u0 = old[i], up = old[(i + 1) % Nx], umm = old[(i - 2 + Nx) % Nx], upp = old[(i + 2) % Nx];
        if (scheme === 'amont') return C >= 0 ? u0 - C * (u0 - um) : u0 - C * (up - u0); // différence prise du côté amont
        if (scheme === 'ftcs') return u0 - C / 2 * (up - um);
        if (scheme === 'lxf') return 0.5 * (up + um) - C / 2 * (up - um);
        if (scheme === 'bw') return C >= 0 ? u0 - C / 2 * (3 * u0 - 4 * um + umm) + C * C / 2 * (u0 - 2 * um + umm)   // amont d'ordre 2
                                           : u0 - C / 2 * (-3 * u0 + 4 * up - upp) + C * C / 2 * (u0 - 2 * up + upp);
        return u0 - C / 2 * (up - um) + C * C / 2 * (up - 2 * u0 + um); // Lax-Wendroff
      });
    }
    const exact = x.map(xi => {
      let d = xi - a * t; d -= Lx * Math.round(d / Lx);
      return U0 * Math.exp(-d * d / (2 * sigma0 * sigma0));
    });
    const err = u.map((v, i) => v - exact[i]);
    return { h, dt, steps, t, C, x, u, exact, max: Math.max.apply(null, u), min: Math.min.apply(null, u), maxErr: maxAbs(err) };
  }


  /* 8. Chapitre 1 : advection-diffusion d'une gaussienne sur la droite réelle (solution exacte).
     u(x,t) = U0 s0/sqrt(s0^2+2Dt) exp(-(x-at)^2 / (2 (s0^2+2Dt))). */
  function sigmaAt(sigma0, D, t) { return Math.sqrt(sigma0 * sigma0 + 2 * D * t); }
  function gaussAD({ a, D, sigma0, U0 = 1, t, xs }) {
    const s = sigmaAt(sigma0, D, t);
    return xs.map(x => U0 * sigma0 / s * Math.exp(-Math.pow(x - a * t, 2) / (2 * s * s)));
  }

  /* 9. Chapitre 1 : conduction stationnaire dans une barre, lambda T'' + q = 0, T(0) = T0,
     condition en x = L de type Dirichlet, Neumann (flux sortant qL imposé) ou Robin (h, Tinf).
     Solution : T(x) = T0 + C1 x - q x^2 / (2 lambda). */
  function barreCL({ L, lambda, q, T0, type, TL, qL, h, Tinf, n = 101 }) {
    let C1;
    if (type === 'dirichlet') C1 = (TL - T0) / L + q * L / (2 * lambda);
    else if (type === 'neumann') C1 = (q * L - qL) / lambda;
    else C1 = (q * L + h * (Tinf - T0) + h * q * L * L / (2 * lambda)) / (lambda + h * L);
    const x = Array.from({ length: n }, (_, i) => L * i / (n - 1));
    const T = x.map(xi => T0 + C1 * xi - q * xi * xi / (2 * lambda));
    const xm = q !== 0 ? lambda * C1 / q : NaN;
    const interior = isFinite(xm) && xm > 0 && xm < L;
    const Tmax = interior ? T0 + C1 * xm - q * xm * xm / (2 * lambda) : Math.max(T[0], T[n - 1]);
    return { x, T, C1, TL: T[n - 1], xmax: interior ? xm : (T[0] >= T[n - 1] ? 0 : L), Tmax,
             q0out: lambda * C1, qLout: q * L - lambda * C1 };
  }

  /* 10. Barre 1D en volumes finis (cellules centrées, N cellules de largeur h = L/N) :
     lambda T'' + q = 0, T(0) = T0, T(L) = TL imposées aux faces (demi-cellule aux bords).
     Bilan sur la cellule i : lambda[(T_{i+1}-T_i)/h - (T_i-T_{i-1})/h] + q h = 0. */
  function barreVF({ N, T0, TL, L = 1, lambda = 1, q = 0 }) {
    const h = L / N, n = N;
    const a = new Array(n).fill(-1), b = new Array(n).fill(2), c = new Array(n).fill(-1);
    const d = new Array(n).fill(h * h * q / lambda);
    b[0] = 3; d[0] += 2 * T0;
    b[n - 1] = 3; d[n - 1] += 2 * TL;
    const T = thomas(a, b, c, d);
    const x = Array.from({ length: n }, (_, i) => (i + 0.5) * h);
    const exact = x.map(xi => T0 + (TL - T0) * xi / L + q / (2 * lambda) * xi * (L - xi));
    const err = T.map((t, i) => t - exact[i]);
    // flux sortants aux deux faces de bord (convention de barreCL : q0out = lambda T'(0), qLout = -lambda T'(L))
    const q0out = lambda * (T[0] - T0) / (h / 2), qLout = lambda * (T[n - 1] - TL) / (h / 2);
    return { h, x, T, exact, err, maxErr: maxAbs(err), q0out, qLout, bilan: q0out + qLout - q * L };
  }
  /* Bilan de flux du schéma aux différences finies (différences d'ordre 1 aux bords). */
  function bilanDF({ N, T0, TL, L = 1, lambda = 1, q = 0 }) {
    const r = barre({ N, T0, TL, L, lambda, q }), h = r.h;
    const q0out = lambda * (r.T[1] - T0) / h, qLout = -lambda * (TL - r.T[N - 1]) / h;
    return { q0out, qLout, bilan: q0out + qLout - q * L };
  }

  /* 11. Convection-diffusion stationnaire 1D en volumes finis (cellules centrées) :
     F phi' = Gamma phi'', phi(0) = 0, phi(L) = 1, F = rho u = 1, Gamma = L/PeL.
     Schémas convectifs : 'centre' ou 'amont' ; PeL = rho u L / Gamma ; Pe de maille = PeL/N. */
  function peclet({ N, PeL, scheme }) {
    const L = 1, F = 1, G = L / PeL, h = L / N, D = G / h, n = N;
    const A = new Array(n), Bd = new Array(n), Cd = new Array(n), d = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      if (scheme === 'centre') { A[i] = -F / 2 - D; Bd[i] = 2 * D; Cd[i] = F / 2 - D; }
      else { A[i] = -F - D; Bd[i] = F + 2 * D; Cd[i] = -D; }
    }
    // cellule 1 : face ouest imposée phi0 = 0 (demi-cellule)
    Bd[0] = scheme === 'centre' ? F / 2 + 3 * D : F + 3 * D; d[0] = 0;
    // cellule N : face est imposée phiL = 1 (demi-cellule)
    // amont : la valeur convectée à la face est celle de la cellule amont (phi_N), même au bord
    Bd[n - 1] = scheme === 'centre' ? 3 * D - F / 2 : F + 3 * D;
    d[n - 1] = scheme === 'centre' ? -F * 1 + 2 * D * 1 : 2 * D * 1;
    const phi = thomas(A, Bd, Cd, d);
    const x = Array.from({ length: n }, (_, i) => (i + 0.5) * h);
    const exact = x.map(xi => (Math.exp(PeL * (xi - L)) - Math.exp(-PeL * L)) / (1 - Math.exp(-PeL * L)));
    const err = phi.map((v, i) => v - exact[i]);
    return { h, PeH: PeL / N, x, phi, exact, err, maxErr: maxAbs(err), min: Math.min.apply(null, phi), max: Math.max.apply(null, phi),
             oscille: phi.some((v, i) => i > 0 && v < phi[i - 1] - 1e-12) };
  }

  /* 12. Introduction : advection d'un signal mixte (bosse lisse et créneau) sur le domaine périodique [0,1],
     u_t + u_x = 0, a = 1 ; une période = un tour. Test classique inspiré de la figure 6.1 de LeVeque (2002) ;
     les paramètres (bosse exp(-200 (x-0,3)^2), créneau sur ]0,6 ; 0,8[) sont ceux de ce site. */
  function signalMixte(x) {
    const g = Math.exp(-200 * Math.pow(x - 0.3, 2));
    return g + (x > 0.6 + 1e-9 && x < 0.8 - 1e-9 ? 1 : 0); // bords exclus, avec tolérance d'arrondi
  }
  function advection1d({ scheme, Nx, Co, t }) {
    const h = 1 / Nx, dt = Co * h, steps = Math.max(1, Math.round(t / dt)), tt = steps * dt, C = Co;
    const x = Array.from({ length: Nx }, (_, i) => i * h);
    let u = x.map(signalMixte);
    for (let s = 0; s < steps; s++) {
      const o = u;
      u = o.map((_, i) => {
        const u0 = o[i], um = o[(i - 1 + Nx) % Nx], um2 = o[(i - 2 + Nx) % Nx], up = o[(i + 1) % Nx];
        if (scheme === 'amont') return u0 - C * (u0 - um);
        if (scheme === 'lw') return u0 - C / 2 * (up - um) + C * C / 2 * (up - 2 * u0 + um);
        if (scheme === 'bw') return u0 - C / 2 * (3 * u0 - 4 * um + um2) + C * C / 2 * (u0 - 2 * um + um2);
        if (scheme === 'lxf') return 0.5 * (up + um) - C / 2 * (up - um);
        return u0 - C / 2 * (up - um); // FTCS centré
      });
    }
    const wrap = (v) => v - Math.floor(v);
    const exact = x.map(xi => signalMixte(wrap(xi - tt)));
    const err = u.map((v, i) => v - exact[i]);
    const centre = wrap(0.3 + tt);
    let bump = -Infinity;
    x.forEach((xi, i) => { let d = Math.abs(xi - centre); d = Math.min(d, 1 - d); if (d <= 0.12 && u[i] > bump) bump = u[i]; });
    return { h, dt, steps, t: tt, x, u, exact, max: Math.max.apply(null, u), min: Math.min.apply(null, u), bump,
             errL1: err.reduce((a, e) => a + Math.abs(e), 0) / Nx, maxErr: maxAbs(err) };
  }

  /* 13. Chapitre 1 : classification et comportement des EDP. */
  /* EDP d'ordre 2 : A u_xx + 2B u_xy + C u_yy + ... = 0 ; discriminant Delta = B^2 - A C. */
  function classifyPDE(A, B, C) {
    const delta = B * B - A * C, tol = 1e-9 * (1 + Math.abs(B * B) + Math.abs(A * C));
    const type = Math.abs(delta) <= tol ? 'parabolique' : (delta < 0 ? 'elliptique' : 'hyperbolique');
    return { delta, type };
  }
  /* Laplace sur le carré unité, Dirichlet constant sur chaque côté (N x N nœuds intérieurs), sur-relaxation. */
  function laplace2d({ N, left, right, top, bottom }) {
    const M = N + 2, u = Array.from({ length: M }, () => new Array(M).fill(0));
    const mean = (left + right + top + bottom) / 4;
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) u[j][i] = mean;
    for (let k = 0; k < M; k++) { u[k][0] = left; u[k][M - 1] = right; u[0][k] = bottom; u[M - 1][k] = top; }
    const w = 2 / (1 + Math.sin(Math.PI / (N + 1)));
    let diff = Infinity, it = 0;
    while (diff > 1e-9 && it < 5000) {
      diff = 0;
      for (let j = 1; j <= N; j++) for (let i = 1; i <= N; i++) {
        const nv = (1 - w) * u[j][i] + w * 0.25 * (u[j][i - 1] + u[j][i + 1] + u[j - 1][i] + u[j + 1][i]);
        diff = Math.max(diff, Math.abs(nv - u[j][i])); u[j][i] = nv;
      }
      it++;
    }
    let lo = Infinity, hi = -Infinity;
    u.forEach(r => r.forEach(v => { lo = Math.min(lo, v); hi = Math.max(hi, v); }));
    const c = Math.floor((M - 1) / 2);
    return { N, M, u, iters: it, min: lo, max: hi, centre: u[c][c], ligneCentrale: u[c].slice() };
  }
  /* Bosse cosinus à support compact : f=0 hors de [centre-rayon, centre+rayon]. */
  function bosseCompacte(x, centre = 0, rayon = 0.5) {
    if (!(rayon > 0)) return 0;
    const z = (x - centre) / rayon;
    return Math.abs(z) < 1 ? 0.5 * (1 + Math.cos(Math.PI * z)) : 0;
  }
  /* Chaleur sur R : convolution d'une bosse compacte avec le noyau fondamental.
     L'intégrale sur le support initial est évaluée par Simpson composite. */
  function chaleurCompacte({ D, rayon = 0.5, centres = [0], t, xs }) {
    if (!(D > 0) || !(t > 0)) return xs.map(x => centres.reduce((s, c0) => s + bosseCompacte(x, c0, rayon), 0));
    const n = 160, dt = 2 * rayon / n, norm = 1 / Math.sqrt(4 * Math.PI * D * t);
    return xs.map(x => centres.reduce((sum, c0) => {
      let q = 0;
      for (let i = 0; i <= n; i++) {
        const y = c0 - rayon + i * dt;
        const kernel = norm * Math.exp(-Math.pow(x - y, 2) / (4 * D * t));
        const w = i === 0 || i === n ? 1 : (i % 2 ? 4 : 2);
        q += w * kernel * bosseCompacte(y, c0, rayon);
      }
      return sum + q * dt / 3;
    }, 0));
  }
  /* Hyperbolique : formule de d'Alembert pour une bosse initiale compacte au repos. */
  function ondeDAlembert({ c, rayon = 0.5, centre = 0, t, xs }) {
    return xs.map(x => 0.5 * (bosseCompacte(x - c * t, centre, rayon) + bosseCompacte(x + c * t, centre, rayon)));
  }

  const API = { thomas, gauss, linspace, maxAbs, barre, jacobiGS, ordreExp, neumann, neumannOrdres, chaleur, chemins, verdictsChemin, advection, sigmaAt, gaussAD, barreCL, barreVF, bilanDF, peclet, signalMixte, advection1d, classifyPDE, thomasCyclique, laplace2d, bosseCompacte, chaleurCompacte, ondeDAlembert };
  if (typeof module !== 'undefined' && module.exports) module.exports = API; else root.Calc = API;
})(typeof window !== 'undefined' ? window : this);
