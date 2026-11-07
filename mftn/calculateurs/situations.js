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
    `<path d="M276 65 H286 C291 65 291 56 298 56 C305 56 305 65 310 65 H360" fill="none" stroke="var(--orange)" stroke-width="2.6"/>` +
    t(266, 40, 'tube : bosse initiale', 'font-weight="600"') + t(266, 118, '1 bosse → 2 bosses') + t(266, 132, 'propagation (± c)'));

  const S = {
    transport: {
      video: { page: 'https://today.ucsd.edu/story/pink-dye-experiment-to-reveal-mysteries-of-coastal-ocean-dynamics', titre: 'Voir l’expérience du traceur rose à la sortie d’une lagune (UC San Diego)', legende: 'À Los Peñasquitos Lagoon, des chercheurs suivent un traceur rose emporté vers la côte à l’aide de drones, de dériveurs et de capteurs. Les vagues, les courants et la marée agissent ensemble : cette observation montre un transport et un mélange réels, sans isoler la diffusion moléculaire D du modèle. Vidéo et présentation : Scripps Oceanography, UC San Diego (2023).' },
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
    edpc: { texte: "Trois situations, trois types : un équilibre (plaque aux bords à températures imposées), une évolution diffusive (barre qui se refroidit) et une bosse initiale qui se propage dans un tube.", svg: trois },
    edpb: {
      texte: "Un pictogramme par type : une plaque en régime permanent (elliptique), une barre qui diffuse la chaleur (parabolique), une bosse initiale dans un tube (hyperbolique). Le pictogramme affiché suit le type choisi.",
      svg: [
        ['elliptique', grad('g3a', '--red', '--blue') + `<rect x="95" y="36" width="190" height="100" rx="3" fill="url(#g3a)" opacity="0.55"/><rect x="95" y="36" width="190" height="100" rx="3" fill="none" stroke="var(--plot-axis)" stroke-width="4"/>` + t(100, 26, 'plaque chauffée, régime permanent', 'font-weight="600"') + t(100, 156, 'chaque côté agit sur toute la plaque')],
        ['parabolique', `<rect x="60" y="64" width="260" height="28" rx="3" fill="var(--blue)" opacity="0.22" stroke="var(--plot-axis)" stroke-width="1.5"/><rect id="k-sit-hot-left" x="181.875" y="65" width="16.25" height="26" rx="3" fill="var(--orange)" opacity="0.8"/><rect id="k-sit-hot-right" x="191.875" y="65" width="16.25" height="26" rx="3" fill="var(--orange)" opacity="0.8"/><path id="k-sit-profile-initial" d="M60 130 H320" fill="none" stroke="var(--orange)" stroke-width="2" stroke-dasharray="5 4"/><path id="k-sit-profile" d="M60 130 H320" fill="none" stroke="var(--green)" stroke-width="2.8"/><path d="M60 130 H320" stroke="var(--plot-axis)" stroke-width="1" stroke-dasharray="2 4"/>` + t(60, 46, 'barre : zones chaudes initiales', 'font-weight="600"') + `<text id="k-sit-caption" x="60" y="151" fill="var(--ink)" font-size="14">profil initial fourni au calcul</text>`],
        ['hyperbolique', `<rect x="40" y="62" width="300" height="34" rx="17" fill="var(--blue)" opacity="0.18" stroke="var(--plot-axis)" stroke-width="1.5"/><path id="k-sit-wave-initial" d="M48 91 H190 C204 91 204 69 208 64 C212 69 212 91 226 91 H332" fill="none" stroke="var(--plot-axis)" stroke-width="2" stroke-dasharray="5 4"/><path id="k-sit-wave-profile" d="M48 91 H190 C204 91 204 69 208 64 C212 69 212 91 226 91 H332" fill="none" stroke="var(--blue)" stroke-width="2.8"/><path d="M190 111 H118 M190 111 H262" fill="none" stroke="var(--muted)" stroke-width="1.6"/>` + arr(190, 111, 118, 111, 'var(--muted)', 1.6) + arr(190, 111, 262, 111, 'var(--muted)', 1.6) + t(40, 46, 'tube : profil initial et propagation') + `<text id="k-sit-wave-caption" x="40" y="151" fill="var(--ink)" font-size="13">départ : une bosse</text>`]
      ].map(q => `<svg class="sit-svg" data-kt="${q[0]}" viewBox="0 0 380 170" role="img" aria-hidden="true">${q[1]}</svg>`).join('')
    },
    cl: {
      photo: { src: 'img/FensterIR_Blower_Door.jpg', alt: 'Thermogramme d’une fenêtre de toit pendant un essai de dépression : fuite d’air visible autour de la fenêtre', legende: 'Thermogramme d’une fenêtre de toit pendant un essai de dépression : la fuite d’air autour de l’ouvrant apparaît dans l’image. Cet exemple réel illustre un échange avec l’extérieur ; le schéma ci-dessus présente séparément les modèles de condition au bord. Sönke Krüll, <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>, <a href="https://commons.wikimedia.org/wiki/File:FensterIR_Blower_Door.jpg">Wikimedia Commons</a>.' },
      texte: "Une paroi qui produit de la chaleur (résistance électrique, réaction) : à chaque extrémité on peut imposer la température, le flux, ou un échange convectif avec l'air ambiant.",
      svg: wrap(
        grad('gcl', '--red', '--orange') +
        `<rect x="14" y="50" width="40" height="70" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)" stroke-width="1.2"/>` + t(8, 40, 'bloc thermostaté') + t(8, 138, 'T imposée', 'font-weight="600"') + t(8, 152, '(Dirichlet)') +
        `<rect x="54" y="50" width="200" height="70" fill="url(#gcl)" opacity="0.55" stroke="var(--plot-axis)" stroke-width="1.2"/>` + t(100, 90, 'paroi avec production q') +
        `<rect x="254" y="50" width="10" height="70" fill="var(--orange)"/>` + t(262, 40, 'film chauffant', 'text-anchor="end"') + t(214, 138, 'flux imposé', 'font-weight="600"') + t(214, 152, '(Neumann)') +
        `<path d="M290 70 q10 -8 20 0 t20 0 M290 90 q10 -8 20 0 t20 0 M290 110 q10 -8 20 0 t20 0" fill="none" stroke="var(--blue)" stroke-width="2"/>` + t(292, 40, 'air ambiant') + t(284, 138, 'échange convectif', 'font-weight="600"') + t(284, 152, '(Robin)'))
    },
    barre: {
      texte: "Dans le cas étalon de S1, une barre homogène en régime permanent, sans source, relie T(0) = 300 K à T(L) = 400 K. Le préréglage q = 100 W/m³ correspond ensuite aux explorations S1-X5 et X6 : le curseur q permet de revenir au cas sans source. Les différences finies calculent aux nœuds ; les volumes finis, aux centres des cellules. Cette barre sert à vérifier les méthodes, pas à simuler une cellule industrielle.",
      svg: wrap(
        grad('gb', '--blue', '--orange') +
        `<rect x="10" y="40" width="40" height="60" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)"/>` + `<rect x="330" y="40" width="40" height="60" fill="var(--red)" opacity="0.45" stroke="var(--plot-axis)"/>` +
        `<rect x="50" y="55" width="280" height="30" rx="3" fill="url(#gb)" opacity="0.55" stroke="var(--plot-axis)"/>` +
        [0, 1, 2, 3, 4].map(i => `<circle cx="${50 + i * 70}" cy="70" r="4.5" fill="var(--ink)"/>`).join('') +
        t(8, 30, 'T(0) = 300 K') + t(286, 30, 'T(L) = 400 K') + t(98, 120, 'q = 0 : cas étalon') + t(82, 140, 'q = 100 pour S1-X5/X6'))
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
      texte: "Dans le modèle thermique stationnaire de S2, la température est imposée à une face et le flux à l'autre. Un flux nul correspond à une face isolée ; une condition de Fourier (Robin) représente l'échange avec le fluide. Pour le calcul, le flux imposé est traduit par une dérivée puis discrétisé au bord.",
      svg: wrap(
        grad('gn', '--blue', '--orange') + hatch('hn') +
        `<rect x="14" y="50" width="30" height="70" fill="var(--blue)" opacity="0.5" stroke="var(--plot-axis)"/>` + t(8, 40, 'T imposée') +
        `<rect x="44" y="60" width="240" height="50" fill="url(#gn)" opacity="0.5" stroke="var(--plot-axis)"/>` +
        `<rect x="284" y="50" width="40" height="70" fill="url(#hn)" stroke="var(--plot-axis)"/>` + t(280, 40, 'isolant ou') + t(280, 140, 'film chauffant') +
        arr(310, 150, 340, 150, 'var(--orange)', 2.2) + t(272, 164, 'flux imposé : T′ connue'))
    },
    jg: {
      texte: "Cet onglet isole la résolution itérative d'un système tridiagonal de diffusion, exercice numérique de S2 ; il ne résout pas à lui seul toute la paroi à source uniforme et à flux imposé décrite dans la mise en situation. À chaque itération, une valeur nodale est corrigée à partir de ses voisines : Jacobi utilise l'ancienne itération, Gauss–Seidel les valeurs déjà mises à jour.",
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
      texte: "Un paquet de fluide chaud est transporté dans une conduite. La référence se déplace sans changer de forme ; les trois schémas calculent son évolution et révèlent lissage, oscillations ou instabilité.",
      legende: "Comparaison numérique sur un domaine périodique, avec un paquet compact et des fronts raccordés par un cosinus. Le cas illustré fixe a = 1, N = 100 et Co = 0,8 ; t* = at/L évolue de 0 à 0,4. La courbe pointillée est la solution exacte. L’échelle verticale reste fixe pour rendre visible l’instabilité de FTCS. Ce cas périodique isole l’effet du schéma et ne représente pas une entrée avec condition imposée.",
      svg: wrap(
        `<rect x="10" y="50" width="360" height="60" rx="30" fill="none" stroke="var(--plot-axis)" stroke-width="3"/>` +
        `<rect x="14" y="54" width="170" height="52" rx="26" fill="var(--red)" opacity="0.4"/><rect x="184" y="54" width="172" height="52" rx="26" fill="var(--blue)" opacity="0.25"/>` +
        `<line x1="184" y1="52" x2="184" y2="108" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>` +
        arr(40, 80, 150, 80, 'var(--orange)', 3) + t(30, 36, 'fluide chaud') + t(204, 36, 'fluide froid') + t(150, 132, 'front à la vitesse de l’écoulement') + t(84, 150, 'un schéma le lisse, le déforme ou explose'))
    }
  };
  window.SITUATIONS = S;
})();
