/* Situations physiques (thermique, mécanique des fluides) illustrant chaque onglet.
   Schémas vectoriels illustratifs, sans valeur numérique : ils ne remplacent ni une mesure ni une photographie. */
(function () {
  const arr = (x1, y1, x2, y2, c, w) => {
    c = c || 'var(--orange)'; w = w || 3;
    const a = Math.atan2(y2 - y1, x2 - x1), s = 9;
    const p = [[x2, y2], [x2 - s * Math.cos(a - 0.45), y2 - s * Math.sin(a - 0.45)], [x2 - s * Math.cos(a + 0.45), y2 - s * Math.sin(a + 0.45)]].map(q => q.map(v => v.toFixed(1)).join(',')).join(' ');
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}"/><polygon points="${p}" fill="${c}"/>`;
  };
  const t = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="11.5" fill="var(--ink)" ${o || ''}>${s}</text>`;
  const grad = (id, a, b) => `<defs><linearGradient id="${id}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" style="stop-color:var(${a})"/><stop offset="1" style="stop-color:var(${b})"/></linearGradient></defs>`;
  const wrap = body => `<svg class="sit-svg" viewBox="0 0 380 170" role="img" aria-hidden="true">${body}</svg>`;
  const wall = (x, y, w, h, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${fill}" stroke="var(--plot-axis)" stroke-width="1.2"/>`;
  const hatch = (id) => `<defs><pattern id="${id}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="var(--muted)" stroke-width="1.6"/></pattern></defs>`;

  /* trois pictogrammes : équilibre, évolution diffusive, propagation */
  const trois = wrap(
    grad('g3a', '--red', '--blue') + hatch('h3') +
    `<rect x="14" y="30" width="100" height="70" rx="3" fill="url(#g3a)" opacity="0.55"/><rect x="14" y="30" width="100" height="70" rx="3" fill="none" stroke="var(--plot-axis)" stroke-width="3"/>` +
    t(14, 20, 'plaque chauffée', 'font-weight="600"') + t(14, 118, 'régime permanent :') + t(14, 132, 'équilibre (elliptique)') +
    grad('g3b', '--red', '--blue') +
    `<rect x="140" y="52" width="104" height="26" rx="3" fill="url(#g3b)" opacity="0.6" stroke="var(--plot-axis)" stroke-width="1.5"/>` +
    arr(150, 100, 232, 100, 'var(--muted)', 1.6) + t(140, 40, 'barre qui se refroidit', 'font-weight="600"') + t(140, 118, 'évolution diffusive') + t(140, 132, '(parabolique)') +
    `<rect x="270" y="52" width="96" height="26" rx="13" fill="var(--blue)" opacity="0.18" stroke="var(--plot-axis)" stroke-width="1.5"/>` +
    `<path d="M278 65 q6 -16 12 0 t12 0 t12 0 t12 0 t12 0 t12 0" fill="none" stroke="var(--orange)" stroke-width="2.6"/>` +
    t(266, 40, 'onde dans un tube', 'font-weight="600"') + t(266, 118, 'propagation à vitesse') + t(266, 132, 'finie (hyperbolique)'));

  const S = {
    transport: {
      video: { page: 'https://www.usgs.gov/media/videos/usgs-missouri-river-dye-tracing-assessment', legende: 'Exemple réel : un colorant traceur est transporté et dispersé dans le Missouri. Cette observation à l’échelle du fleuve ne mesure pas la diffusivité D du modèle. U.S. Geological Survey, 5 mai 2021, 1 min 42, domaine public.' },
      photo: { src: 'img/Sediment_plume_at_sea_1280px.jpg', alt: 'Panache de sédiments en mer vu par satellite', legende: 'Panache de sédiments en mer vu par le satellite Sentinel-2B (5 février 2019). ESA, « Contains modified Copernicus Sentinel data (2019), processed by ESA », <a href="https://creativecommons.org/licenses/by-sa/3.0/igo/deed.en">CC BY-SA 3.0 IGO</a>, <a href="https://commons.wikimedia.org/wiki/File:Sediment_plume_at_sea.jpg">via Wikimedia Commons</a> (miniature de 1280 px).' },
      texte: "Mise en problème simplifiée. Un polluant ou une eau chaude est rejeté dans un courant uniforme. Où le signal est-il transporté ? Comment s'étale-t-il ? Le nombre de Péclet compare advection et diffusion dans le modèle.",
      svg: wrap(
        `<rect x="10" y="40" width="360" height="90" fill="var(--blue)" opacity="0.14"/>` +
        `<path d="M10 40 H370 M10 130 H370" stroke="var(--blue)" stroke-width="2.2"/>` +
        `<path d="M40 82 C140 70 230 48 366 44 L366 126 C230 108 140 92 40 88 Z" fill="var(--orange)" opacity="0.38"/>` +
        `<circle cx="38" cy="85" r="6" fill="var(--red)"/>` + t(14, 150, 'rejet') +
        arr(60, 62, 130, 62, 'var(--blue)', 2.4) + arr(60, 112, 130, 112, 'var(--blue)', 2.4) +
        t(150, 150, 'courant : advection') + t(262, 150, 'étalement : diffusion'))
    },
    edpc: { texte: "Trois situations, trois types : un équilibre (plaque aux bords à températures imposées), une évolution diffusive (barre qui se refroidit) et une propagation (onde dans un tube).", svg: trois },
    edpb: {
      texte: "Un pictogramme par type : une plaque en régime permanent (elliptique), une barre qui diffuse la chaleur (parabolique), une onde dans un tube (hyperbolique). Le pictogramme affiché suit le type choisi.",
      svg: [
        ['elliptique', grad('g3a', '--red', '--blue') + `<rect x="95" y="36" width="190" height="100" rx="3" fill="url(#g3a)" opacity="0.55"/><rect x="95" y="36" width="190" height="100" rx="3" fill="none" stroke="var(--plot-axis)" stroke-width="4"/>` + t(100, 26, 'plaque chauffée, régime permanent', 'font-weight="600"') + t(100, 156, 'chaque côté agit sur toute la plaque')],
        ['parabolique', `<rect x="60" y="64" width="260" height="28" rx="3" fill="var(--blue)" opacity="0.22" stroke="var(--plot-axis)" stroke-width="1.5"/><rect id="k-sit-hot-left" x="109" y="65" width="32" height="26" rx="3" fill="var(--orange)" opacity="0.8"/><rect id="k-sit-hot-right" x="239" y="65" width="32" height="26" rx="3" fill="var(--orange)" opacity="0.8"/><path id="k-sit-profile" d="M60 130 C138 130 158 98 190 98 C222 98 242 130 320 130" fill="none" stroke="var(--orange)" stroke-width="2.5"/><path d="M60 130 H320" stroke="var(--plot-axis)" stroke-width="1" stroke-dasharray="3 3"/>` + t(60, 46, 'barre : zones chaudes initiales', 'font-weight="600"') + `<text id="k-sit-caption" x="60" y="151" fill="var(--ink)" font-size="14">profil initial t = 0</text>`],
        ['hyperbolique', `<rect x="40" y="62" width="300" height="34" rx="17" fill="var(--blue)" opacity="0.18" stroke="var(--plot-axis)" stroke-width="1.5"/><path d="M52 79 q8 -22 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" fill="none" stroke="var(--orange)" stroke-width="2.6"/>` + t(40, 46, 'onde dans un tube', 'font-weight="600"') + t(40, 148, 'propagation à vitesse finie')]
      ].map(q => `<svg class="sit-svg" data-kt="${q[0]}" viewBox="0 0 380 170" role="img" aria-hidden="true">${q[1]}</svg>`).join('')
    },
    cl: {
      photo: { src: 'img/Aqua_Tower_thermal_imaging.jpg', alt: 'Thermographie infrarouge d’une tour', legende: 'Thermographie infrarouge (caméra FLIR b60) d’une tour : la chaleur s’échappe par les dalles de balcons qui traversent l’enveloppe isolée. Jim D’Aloisio, <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0</a>, <a href="https://commons.wikimedia.org/wiki/File:Aqua_Tower_thermal_imaging.jpg">via Wikimedia Commons</a>.' },
      texte: "Une paroi qui produit de la chaleur (résistance électrique, réaction) : à chaque extrémité on peut imposer la température, le flux, ou un échange convectif avec l'air ambiant.",
      svg: wrap(
        grad('gcl', '--red', '--orange') +
        `<rect x="14" y="50" width="40" height="70" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)" stroke-width="1.2"/>` + t(8, 40, 'bloc thermostaté') + t(8, 138, 'T imposée', 'font-weight="600"') + t(8, 152, '(Dirichlet)') +
        `<rect x="54" y="50" width="200" height="70" fill="url(#gcl)" opacity="0.55" stroke="var(--plot-axis)" stroke-width="1.2"/>` + t(100, 90, 'paroi avec production q') +
        `<rect x="254" y="50" width="10" height="70" fill="var(--orange)"/>` + t(262, 40, 'film chauffant', 'text-anchor="end"') + t(214, 138, 'flux imposé', 'font-weight="600"') + t(214, 152, '(Neumann)') +
        `<path d="M290 70 q10 -8 20 0 t20 0 M290 90 q10 -8 20 0 t20 0 M290 110 q10 -8 20 0 t20 0" fill="none" stroke="var(--blue)" stroke-width="2"/>` + t(292, 40, 'air ambiant') + t(284, 138, 'échange convectif', 'font-weight="600"') + t(284, 152, '(Robin)'))
    },
    barre: {
      texte: "Une barre métallique parcourue par un courant s'échauffe par effet Joule ; ses deux extrémités sont maintenues à des températures connues. On calcule T(x) sur des nœuds (différences finies) ou sur des cellules (volumes finis).",
      svg: wrap(
        grad('gb', '--blue', '--orange') +
        `<rect x="10" y="40" width="40" height="60" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)"/>` + `<rect x="330" y="40" width="40" height="60" fill="var(--red)" opacity="0.45" stroke="var(--plot-axis)"/>` +
        `<rect x="50" y="55" width="280" height="30" rx="3" fill="url(#gb)" opacity="0.55" stroke="var(--plot-axis)"/>` +
        [0, 1, 2, 3, 4].map(i => `<circle cx="${50 + i * 70}" cy="70" r="4.5" fill="var(--ink)"/>`).join('') +
        `<path d="M70 60 l6 10 l6 -10 l6 10 l6 -10" fill="none" stroke="var(--orange)" stroke-width="1.6"/>` +
        t(8, 30, 'T₀ imposée') + t(300, 30, 'T_L imposée') + t(104, 120, 'effet Joule : production q') + t(104, 138, 'nœuds (●) ou cellules'))
    },
    peclet: {
      photo: { src: 'img/Schlieren-color-candle-plume.jpg', alt: 'Panache thermique d’une bougie par strioscopie', legende: 'Panache thermique d’une bougie visualisé par strioscopie. Settles1, <a href="https://creativecommons.org/licenses/by/3.0/deed.en">CC BY 3.0</a>, <a href="https://commons.wikimedia.org/wiki/File:Schlieren-color-candle-plume.jpg">via Wikimedia Commons</a>.' },
      texte: "Un fluide s'écoule le long d'une paroi chaude : près de la paroi, la température passe de celle de la paroi à celle du fluide sur une couche mince, d'autant plus mince que Pe est grand. Un schéma centré trop grossier y oscille.",
      svg: wrap(
        `<rect x="10" y="120" width="360" height="24" fill="var(--red)" opacity="0.5" stroke="var(--plot-axis)"/>` + t(14, 160, 'paroi chaude') +
        arr(24, 50, 120, 50, 'var(--blue)', 2.4) + arr(24, 80, 120, 80, 'var(--blue)', 2.4) + t(130, 44, 'fluide en mouvement') +
        `<path d="M10 120 C60 118 160 98 370 80" fill="none" stroke="var(--orange)" stroke-width="2.6" stroke-dasharray="1 0"/>` +
        `<path d="M10 120 C60 120 160 112 370 104" fill="none" stroke="var(--green)" stroke-width="2.2" stroke-dasharray="5 4"/>` +
        t(230, 74, 'couche limite (Pe petit)', 'fill="var(--orange)"') + t(214, 100, 'couche plus mince (Pe grand)', 'fill="var(--green)"'))
    },
    ordre: {
      texte: "Dans une paroi, les températures aux nœuds permettent d’estimer la pente T′ ou la courbure T″ du profil. À l’intérieur, on dispose de points de chaque côté ; au bord, on construit une formule avec le nœud de bord et les nœuds intérieurs, sans point extérieur.",
      svg: wrap(
        grad('go', '--red', '--blue') +
        `<rect x="20" y="50" width="340" height="50" rx="3" fill="url(#go)" opacity="0.45" stroke="var(--plot-axis)"/>` +
        [0, 1, 2].map(i => `<circle cx="${100 + i * 90}" cy="75" r="7" fill="var(--ink)"/><line x1="${100 + i * 90}" y1="82" x2="${100 + i * 90}" y2="112" stroke="var(--muted)" stroke-dasharray="3 3"/>`).join('') +
        t(86, 125, 'T<tspan baseline-shift="sub" font-size="9">i−1</tspan>') + t(180, 125, 'T<tspan baseline-shift="sub" font-size="9">i</tspan>') + t(268, 125, 'T<tspan baseline-shift="sub" font-size="9">i+1</tspan>') +
        arr(100, 142, 190, 142, 'var(--orange)', 1.8) + arr(190, 142, 100, 142, 'var(--orange)', 1.8) + t(130, 160, 'pas h') + t(20, 38, 'capteurs de température dans une paroi'))
    },
    neumann: {
      texte: "À une extrémité on connaît le flux de chaleur (film chauffant ; paroi isolée si le flux est nul), pas la température : la loi de Fourier le transforme en une dérivée imposée, qu'il faut discrétiser par une formule au bord dont l'ordre compte.",
      svg: wrap(
        grad('gn', '--blue', '--orange') + hatch('hn') +
        `<rect x="14" y="50" width="30" height="70" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)"/>` + t(8, 40, 'T imposée') +
        `<rect x="44" y="60" width="240" height="50" fill="url(#gn)" opacity="0.5" stroke="var(--plot-axis)"/>` +
        `<rect x="284" y="50" width="40" height="70" fill="url(#hn)" stroke="var(--plot-axis)"/>` + t(280, 40, 'isolant ou') + t(280, 140, 'film chauffant') +
        arr(310, 150, 340, 150, 'var(--orange)', 2.2) + t(272, 164, 'flux imposé : T′ connue'))
    },
    jg: {
      texte: "Une barre découpée en nœuds : à chaque itération, la valeur d'un nœud est corrigée à partir de ses voisins ; on répète jusqu'à ce que le résidu soit petit. Jacobi lit l'ancienne itération, Gauss–Seidel les valeurs déjà mises à jour.",
      svg: wrap(
        [0, 1, 2, 3, 4, 5, 6].map(i => `<circle cx="${40 + i * 50}" cy="60" r="11" fill="var(--blue)" opacity="${0.25 + 0.1 * (i % 3)}" stroke="var(--plot-axis)"/>`).join('') +
        `<line x1="40" y1="60" x2="340" y2="60" stroke="var(--plot-axis)" stroke-width="1.2" opacity="0.5"/>` +
        arr(140, 100, 190, 76, 'var(--orange)', 2.2) + arr(240, 100, 190, 76, 'var(--orange)', 2.2) + t(164, 118, 'nouvelle valeur du nœud') +
        t(100, 150, 'itération 1, 2, 3, … jusqu’à résidu petit'))
    },
    chaleur: {
      texte: "Une barre chaude, aux extrémités tenues à la température de l'ambiance, se refroidit : le profil s'aplatit au cours du temps. Les schémas diffèrent par le pas de temps qu'ils admettent.",
      svg: wrap(
        `<rect x="14" y="56" width="30" height="50" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)"/><rect x="336" y="56" width="30" height="50" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)"/>` +
        `<path d="M44 106 C130 20 250 20 336 106" fill="none" stroke="var(--red)" stroke-width="2.6"/>` +
        `<path d="M44 106 C130 56 250 56 336 106" fill="none" stroke="var(--orange)" stroke-width="2.6"/>` +
        `<path d="M44 106 C130 86 250 86 336 106" fill="none" stroke="var(--green)" stroke-width="2.6"/>` +
        t(150, 28, 't = 0', 'fill="var(--red)"') + t(150, 62, 'plus tard', 'fill="var(--orange)"') + t(150, 84, 'plus tard encore', 'fill="var(--green)"') + t(24, 130, 'bord à température ambiante') + t(24, 148, 'u = 0 aux deux extrémités'))
    },
    chemin: {
      texte: "Raffiner un calcul, c'est diminuer h et Δt ensemble : la façon dont Δt suit h (Δt = c₀h^r) peut décider si un schéma reste consistant avec l'équation de la chaleur ou de l'advection.",
      svg: wrap(
        [0, 1, 2, 3].map(i => `<line x1="${30 + i * 40}" y1="30" x2="${30 + i * 40}" y2="130" stroke="var(--plot-axis)"/>`).join('') + [0, 1, 2].map(j => `<line x1="30" y1="${30 + j * 50}" x2="150" y2="${30 + j * 50}" stroke="var(--plot-axis)"/>`).join('') +
        [...Array(9).keys()].map(i => `<line x1="${220 + i * 15}" y1="30" x2="${220 + i * 15}" y2="130" stroke="var(--blue)"/>`).join('') + [...Array(5).keys()].map(j => `<line x1="220" y1="${30 + j * 25}" x2="340" y2="${30 + j * 25}" stroke="var(--blue)"/>`).join('') +
        arr(160, 80, 210, 80, 'var(--orange)', 2.4) + t(28, 148, 'maillage grossier') + t(218, 148, 'maillage fin') + t(160, 70, 'h ↘, Δt ↘'))
    },
    adv: {
      texte: "Un fluide chaud pénètre dans une conduite : le front se déplace à la vitesse de l'écoulement. Selon le schéma, il est lissé, déformé par des oscillations, ou le calcul explose.",
      video: {
        src: 'media/advection_front_schemes.mp4',
        poster: 'media/advection_front_schemes_poster.png',
        alt: "Comparaison animée des schémas amont, Lax–Wendroff et FTCS centré sur un paquet chaud à support compact, transporté sur un domaine périodique.",
        legende: "Analogie numérique d'un paquet de fluide chaud transporté : le profil initial est exactement nul hors de [0,55 ; 0,80] et ses fronts sont lissés par un raccord cosinus. Le domaine périodique sert à isoler l'effet du schéma ; il ne modélise pas une entrée avec condition imposée. Équation u_t + a u_x = 0, a = 1, N = 100, Co = 0,8, t* = at/L = 0,4. Les pointillés représentent la solution exacte ; les traits, les valeurs calculées. Échelle verticale fixe pour montrer l'instabilité de FTCS."
      },
      svg: wrap(
        `<rect x="10" y="50" width="360" height="60" rx="30" fill="none" stroke="var(--plot-axis)" stroke-width="3"/>` +
        `<rect x="14" y="54" width="170" height="52" rx="26" fill="var(--red)" opacity="0.4"/><rect x="184" y="54" width="172" height="52" rx="26" fill="var(--blue)" opacity="0.25"/>` +
        `<line x1="184" y1="52" x2="184" y2="108" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>` +
        arr(40, 80, 150, 80, 'var(--orange)', 3) + t(30, 36, 'fluide chaud') + t(204, 36, 'fluide froid') + t(150, 132, 'front à la vitesse de l’écoulement') + t(84, 150, 'un schéma le lisse, le déforme ou explose'))
    }
  };
  window.SITUATIONS = S;
})();
