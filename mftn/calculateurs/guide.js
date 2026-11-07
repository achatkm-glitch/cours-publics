window.GUIDE = {
  "competences": {
    "C1.1": "distinguer une grandeur extensive de sa grandeur spécifique",
    "C1.2": "établir les formes locale et intégrale d'un bilan de transport (approfondissement : exercice A4 facultatif)",
    "C1.3": "identifier les termes d'accumulation, de convection, de diffusion et de source, et contrôler leurs unités",
    "C1.4": "reconnaître le caractère elliptique, parabolique ou hyperbolique d'une EDP scalaire d'ordre 2",
    "C1.5": "choisir des conditions initiales et aux limites compatibles avec le type d'EDP",
    "C1.6": "construire un premier schéma de diffusion 1D par différences finies et par volumes finis",
    "C1.7": "expliquer les étapes et les principales sources d'erreur d'un calcul CFD",
    "C2.1": "construire une approximation de dérivée à partir d'un développement de Taylor",
    "C2.2": "choisir le stencil, construire le schéma, puis déterminer son erreur de troncature et son ordre",
    "C2.3": "discrétiser des conditions de Dirichlet et de Neumann et en lire l'effet sur la matrice",
    "C2.4": "assembler le système de Poisson en une dimension (le cas 2D est un approfondissement, exercice G)",
    "C2.5": "choisir et appliquer Jacobi ou Gauss–Seidel, puis contrôler la convergence par le résidu",
    "C2.6": "définir le défaut local d'un schéma et déterminer son ordre de consistance par Taylor",
    "C2.7": "(approfondissement : exercices D et H) mesurer un ordre observé par raffinement",
    "C3.1": "construire les schémas explicite, implicite et de Crank–Nicolson pour la chaleur 1D",
    "C3.2": "appliquer la condition pratique sur le pas de temps de FTCS et dimensionner un calcul",
    "C3.3": "établir le défaut local de FTCS et analyser ceux de Dufort–Frankel et Lax–Friedrichs selon le chemin de raffinement (Lax–Friedrichs : approfondissement, exercice E)",
    "C3.4": "reconnaître une consistance qui dépend du chemin de raffinement",
    "C3.5": "(approfondissement) distinguer, pour les schémas d'advection, le comportement observé (diffusion, dispersion, instabilité) de l'analyse de leur ordre",
    "C4.1": "calculer le défaut local par Taylor et en déduire les ordres",
    "C4.2": "tester la consistance, y compris lorsqu'elle dépend du chemin de raffinement",
    "C4.3": "calculer un facteur d'amplification et établir une condition de stabilité par Von Neumann",
    "C4.4": "dériver une équation équivalente et interpréter diffusion et dispersion numériques",
    "C4.5": "relier consistance, stabilité et convergence dans le cadre du théorème de Lax"
  },
  "reperes": {
    "S1-I1": "Mise en situation : étapes d'une étude CFD ; polycopié, chapitre 1, section 1.7.",
    "S1-I2": "Mise en situation : coût du calcul et raffinement ; polycopié, chapitre 1, section 1.7.",
    "S1-I3": "Mise en situation : diagnostic du comportement des schémas ; polycopié, chapitre 1, section 1.7.",
    "S1-I4": "Mise en situation : nombre de Courant et déplacement du signal ; polycopié, chapitre 1, section 1.7.",
    "S1-X1": "Transport et étalement d'un signal ; polycopié, chapitre 1, sections 1.3–1.4.",
    "S1-X2": "Nombres sans dimension en transport ; polycopié, chapitre 1, section 1.4.",
    "S1-X3": "Condition de Neumann et paroi adiabatique ; polycopié, chapitre 1, section 1.5.",
    "S1-X4": "Condition d'échange thermique de Robin ; polycopié, chapitre 1, section 1.5.",
    "S1-X5": "Différences finies pour une barre ; polycopié, chapitre 1, section 1.8.",
    "S1-X6": "Bilan de cellule en volumes finis ; polycopié, chapitre 1, section 1.8.",
    "S1-X7": "Convection–diffusion stationnaire et Péclet de maille ; polycopié, chapitre 2, section 2.11.",
    "S1-X8": "Ordre et erreur en convection–diffusion ; polycopié, chapitre 2, sections 2.11 et 2.12.",
    "S1-X9": "Monotonie et oscillations en convection–diffusion ; polycopié, chapitre 2, section 2.11.",
    "S1-D1": "Classification des EDP elliptiques ; polycopié, chapitre 1, section 1.6.",
    "S1-D2": "Classification des EDP paraboliques ; polycopié, chapitre 1, section 1.6.",
    "S1-D3": "Classification des EDP hyperboliques ; polycopié, chapitre 1, section 1.6.",
    "S1-D4": "Classification d'une EDP dont le type varie ; polycopié, chapitre 1, section 1.6.",
    "S1-K1": "Problème elliptique et influence de la frontière ; polycopié, chapitre 1, section 1.6.",
    "S1-K2": "Équation de la chaleur et domaine d'influence ; polycopié, chapitre 1, section 1.6.",
    "S1-K3": "Équation des ondes et domaine de dépendance ; polycopié, chapitre 1, section 1.6.",
    "S2-X1": "Développements de Taylor et ordre d'une différence ; polycopié, chapitre 2, sections 2.1–2.2 et 2.6.",
    "S2-X2": "Discrétisation de Neumann et ordre global ; polycopié, chapitre 2, sections 2.3 et 2.6.",
    "S2-X3": "Erreur au bord et raffinement ; polycopié, chapitre 2, sections 2.3 et 2.6.",
    "S2-X4": "Résolution itérative du système de Poisson ; polycopié, chapitre 2, section 2.5.",
    "S2-X5": "Convergence de Jacobi et Gauss–Seidel ; polycopié, chapitre 2, section 2.5.",
    "S2-X6": "Condition de Fourier (Robin) discrétisée ; polycopié, chapitre 2, section 2.3.",
    "S3-X1": "Schémas temporels de la chaleur et stabilité FTCS ; polycopié, chapitre 2, section 2.10, et chapitre 4, stabilité.",
    "S3-X2": "Défaut local et ordre des schémas de chaleur ; polycopié, chapitre 3, sections 3.1 et 3.3.",
    "S3-X3": "Consistance de Dufort–Frankel selon le raffinement ; polycopié, chapitre 3, section 3.5.",
    "S3-X4": "Diffusion et dispersion des schémas d'advection ; polycopié, chapitres 2 et 4.",
    "S3-X5": "Schémas d'advection au nombre de Courant égal à un ; polycopié, chapitre 2, section 2.11.",
    "S3-X6": "Comparaison des schémas temporels de la chaleur ; polycopié, chapitre 2, section 2.10, et chapitre 4, stabilité.",
    "S3-X7": "Stabilité modale des schémas d'advection ; polycopié, chapitre 4, méthode de Von Neumann.",
    "S4-X1": "Consistance des schémas selon le raffinement ; polycopié, chapitre 3, sections 3.1, 3.5 et 3.7.",
    "S4-X2": "Facteur d'amplification et stabilité de Von Neumann ; polycopié, chapitre 4, sections « Méthode de Von Neumann » et « Application aux schémas de référence ».",
    "S4-X3": "Développement et interprétation de l'équation équivalente ; polycopié, chapitre 4, sections « Équation équivalente » et « Équations équivalentes des schémas d'advection »."
  },
  "tabs": {
    "transport": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), bloc A",
      "competences": [
        "C1.1",
        "C1.2",
        "C1.3"
      ],
      "notions": [
        "grandeur spécifique",
        "diffusivité",
        "nombre de Péclet",
        "advection et diffusion"
      ],
      "exercices": "bloc A (A1 à A4)",
      "explorations": [
        {
          "id": "S1-X1",
          "titre": "Qui déplace, qui élargit ?",
          "comp": [
            "C1.3"
          ],
          "reglages": {
            "t-a": "1",
            "t-D": "0.01",
            "t-Dx": "0.05",
            "t-t": "4",
            "t-tx": "",
            "t-s0": "0.15"
          },
          "consigne": "Les deux courbes ont la même vitesse a = 1 et le même instant t = 4, mais des diffusivités D = 0,01 et D = 0,05. Relevez dans les cartes de résultats le centre, la largeur σ(t) et le pic de chacune, et repérez Peσ₀ sur la jauge.",
          "question": "Quel mécanisme fixe la position du centre ? Lequel fixe la largeur ? Que devient le pic quand D augmente, et pourquoi ?",
          "main": "Avec σ₀ = 0,15 et t = 4, calculez le centre a·t, la largeur σ(t) = √(σ₀² + 2Dt) pour D = 0,01 puis 0,05, et le nombre de Péclet du profil Peσ₀ = |a|σ₀/D."
        },
        {
          "id": "S1-X2",
          "titre": "Que compare le nombre de Péclet ?",
          "comp": [
            "C1.3"
          ],
          "reglages": {
            "t-a": "1",
            "t-D": "0.15",
            "t-Dx": "",
            "t-t": "4",
            "t-tx": "0",
            "t-s0": "0.15"
          },
          "consigne": "Avec D = 0,15, le nombre de Péclet |a|σ₀/D vaut 1. Relevez σ(4) et le pic, et comparez la courbe à t = 4 à celle de t = 0.",
          "question": "Que compare Peσ₀ = 1 à l'échelle initiale ? Que montrent séparément le déplacement du centre et l'élargissement à t = 4 ?",
          "main": "Avec D = 0,15, calculez Peσ₀, σ(4) et le pic σ₀/σ.",
          "corr": true
        }
      ]
    },
    "cl": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), bloc B",
      "competences": [
        "C1.4",
        "C1.5"
      ],
      "notions": [
        "condition de Dirichlet",
        "condition de Neumann",
        "condition de Robin",
        "flux sortant"
      ],
      "exercices": "bloc B (B2, B3, B4)",
      "explorations": [
        {
          "id": "S1-X3",
          "titre": "Paroi adiabatique",
          "comp": [
            "C1.5"
          ],
          "reglages": {
            "l-L": "0.1",
            "l-lambda": "10",
            "l-q": "0",
            "l-T0": "300",
            "l-TL": "331",
            "l-qL": "0",
            "l-h": "50",
            "l-Tinf": "293"
          },
          "checks": {
            "l-type": [
              "neumann"
            ]
          },
          "consigne": "Ne gardez que la condition de Neumann, avec une production nulle et un flux imposé nul en x = L.",
          "question": "Que représente un flux imposé nul ? Pourquoi le profil est-il plat ?",
          "main": "Pour une barre sans production avec T(0) = 300 K et T'(L) = 0, résolvez T'' = 0 à la main et donnez T(x) et les flux."
        },
        {
          "id": "S1-X4",
          "titre": "Échange convectif fort ou faible",
          "comp": [
            "C1.4",
            "C1.5"
          ],
          "reglages": {
            "l-L": "0.1",
            "l-lambda": "10",
            "l-q": "100000",
            "l-T0": "300",
            "l-TL": "331",
            "l-qL": "1900",
            "l-h": "200",
            "l-Tinf": "293"
          },
          "checks": {
            "l-type": [
              "dirichlet",
              "neumann",
              "robin"
            ]
          },
          "consigne": "Revenez aux valeurs initiales de la paroi (les trois courbes coïncident), puis augmentez h jusqu'à 200 W/(m²·K).",
          "question": "Quelle courbe change ? Pourquoi les deux autres restent-elles identiques ? Que vaut le bilan des flux ?",
          "main": "Pour q = 100 000 W/m³ et L = 0,1 m, calculez la puissance produite par unité de surface q·L, que doivent se partager les deux faces."
        }
      ]
    },
    "barre": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), bloc C",
      "competences": [
        "C1.6"
      ],
      "notions": [
        "stencil",
        "flux numérique",
        "erreur de discrétisation",
        "schéma conservatif"
      ],
      "exercices": "bloc C (C1, C2, C3)",
      "explorations": [
        {
          "id": "S1-X5",
          "titre": "Comparer les maillages en différences finies",
          "comp": [
            "C1.6"
          ],
          "reglages": {
            "b-N": "4",
            "b-Nx": "8 16",
            "b-T0": "300",
            "b-TL": "400",
            "b-lambda": "1",
            "b-q": "100"
          },
          "consigne": "Avec q = 100 W/m³, comparez les différences finies sur maillage uniforme et non uniforme pour N = 4, 8 et 16. Lisez l’erreur sur le graphique de droite et dans le message.",
          "question": "Que valent les erreurs ? Pourquoi ne diminuent-elles pas quand N augmente ?",
          "checks": {
            "b-s": [
              "fd"
            ],
            "b-mesh": ["uniforme", "nonuniforme"]
          },
          "main": "Avec λ = 1, q = 100 W/m³, L = 1 m, T(0) = 300 et T(1) = 400, déterminez T(x) pour −λT'' = q. Pour h = 0,25, calculez T_1 et T_2 puis vérifiez à la main que −λ(T_2 − 2T_1 + T_0)/h² = q. Cet essai exact sur un profil quadratique suffit-il à établir l'ordre général du schéma ?"
        },
        {
          "id": "S1-X6",
          "titre": "Volumes finis : même problème, autre erreur",
          "comp": [
            "C1.6",
            "C1.7"
          ],
          "reglages": {
            "b-N": "4",
            "b-Nx": "8",
            "b-T0": "300",
            "b-TL": "400",
            "b-lambda": "1",
            "b-q": "100"
          },
          "checks": {
            "b-s": [
              "fd",
              "vf"
            ],
            "b-mesh": ["uniforme", "nonuniforme"]
          },
          "consigne": "Comparez les différences finies (cercles) et les volumes finis (carrés) sur maillages uniforme et non uniforme, pour N = 4 et 8. Lisez les erreurs et les bilans de flux.",
          "question": "Les volumes finis sont-ils exacts ici ? Comment leur erreur évolue-t-elle quand N double ? Que valent les bilans de flux des deux schémas ?",
          "main": "Avec q = 100 W/m³, λ = 1 W/(m·K) et L = 1 m, calculez q h²/(8λ) pour N = 4, 8, 16 (h = L/N) et prévoyez comment cette quantité évolue quand N double."
        }
      ]
    },
    "jg": {
      "seance": 2,
      "fiche": "Séance 2 (stationnaire), exercice C",
      "competences": [
        "C2.4",
        "C2.5"
      ],
      "notions": [
        "résidu",
        "erreur algébrique",
        "matrice tridiagonale"
      ],
      "exercices": "exercice C",
      "explorations": [
        {
          "id": "S2-X4",
          "titre": "Qui converge plus vite ?",
          "comp": [
            "C2.5"
          ],
          "reglages": {
            "j-n": "5",
            "j-f": "1",
            "j-k": "20"
          },
          "checks": {
            "j-m": [
              "jacobi",
              "gs"
            ]
          },
          "consigne": "Avec n = 5, f = 1 et k = 20, comparez les deux méthodes dans les cartes de résultats et sur le graphique de convergence.",
          "question": "Que valent les deux résidus à k = 20 ? À partir de quelle itération le résidu passe-t-il sous 1e-3 pour chaque méthode ? Cette convergence du solveur prouve-t-elle la convergence de la discrétisation vers l'EDP ?",
          "main": "Pour n = 5, f = 1 (h = 1/6, h²f = 1/36), calculez à la main la première itération de Jacobi à partir du vecteur nul."
        },
        {
          "id": "S2-X5",
          "titre": "Effet du nombre de nœuds",
          "comp": [
            "C2.5"
          ],
          "reglages": {
            "j-n": "20",
            "j-f": "1",
            "j-k": "100"
          },
          "checks": {
            "j-m": [
              "jacobi",
              "gs"
            ]
          },
          "consigne": "Passez à n = 20 nœuds et k = 100 itérations. Lisez dans les cartes (ou sur le graphique logarithmique) l'itération où chaque courbe franchit 1e-3.",
          "question": "Comment le nombre d'itérations évolue-t-il avec n ? Quel est le rapport entre Jacobi et Gauss–Seidel ? Distinguez la décroissance du résidu (solveur) de l'erreur de discrétisation (maillage).",
          "main": "Pour n = 5 puis n = 20, calculez le résidu initial ‖b‖∞ = h²f (vecteur nul) avec h = 1/(n+1)."
        }
      ]
    },
    "ordre": {
      "seance": 2,
      "fiche": "Séance 2 (stationnaire), exercices A, D et E",
      "competences": [
        "C2.1",
        "C2.2",
        "C2.7"
      ],
      "notions": [
        "erreur de troncature",
        "ordre formel d'un schéma",
        "défaut local",
        "dérivée seconde centrée",
        "schéma unilatéral au bord",
        "maillage non uniforme"
      ],
      "exercices": "exercices A, D, E",
      "explorations": [
        {
          "id": "S2-X1",
          "titre": "Mesurer un ordre",
          "comp": [
            "C2.1",
            "C2.2",
            "C2.7"
          ],
          "reglages": {
            "o-h0": "0.1",
            "o-k": "4"
          },
          "consigne": "Gardez h₀ = 0,1 et quatre pas. Comparez séparément les courbes de dérivée première et de dérivée seconde. Lisez les pentes observées et les erreurs au plus petit pas ; confrontez-les aux ordres inscrits au-dessus des formules. Repérez les deux formules de dérivée seconde utilisables au bord et le cas non uniforme.",
          "question": "Quelles pentes observez-vous pour les différences centrées et unilatérales ? Pourquoi les formules unilatérales de dérivée seconde sont-elles utiles au bord ? Sur le maillage non uniforme, que devient le terme en u‴ lorsque h₊ = h₋ ? Ces ordres de consistance suffisent-ils à établir la stabilité d’un schéma d’évolution ?",
          "main": "Pour la dérivée première centrée, développez u(x+h) et u(x−h) par Taylor et identifiez les termes qui s’annulent. Au bord gauche, faites de même avec u₀, u₁ et u₂ : cherchez une combinaison qui annule la valeur et la dérivée première, puis donnez le premier terme d’erreur et l’ordre.",
          "corr": true
        }
      ]
    },
    "neumann": {
      "seance": 2,
      "fiche": "Séance 2 (stationnaire), exercices B, F et H",
      "competences": [
        "C2.3",
        "C2.7"
      ],
      "notions": [
        "point fantôme",
        "condition de Neumann",
        "ordre global",
        "ordre de la condition aux limites",
        "loi de Fourier",
        "condition aux limites discrétisée",
        "condition de Fourier (Robin)"
      ],
      "exercices": "exercices B, F, H",
      "explorations": [
        {
          "id": "S2-X2",
          "titre": "La frontière commande l'ordre global",
          "comp": [
            "C2.3",
            "C2.7"
          ],
          "reglages": {
            "n-N0": "10",
            "n-k": "5"
          },
          "consigne": "Gardez N = 10, 20, 40, 80, 160 et lisez dans les cartes l'ordre observé des trois fermetures : ordre 1, ordre 2 (régressive) et point fantôme.",
          "question": "Quel ordre global obtient-on avec chaque fermeture ? Pourquoi l'ordre 1 de la fermeture limite-t-il l'ordre global alors que le schéma intérieur est d'ordre 2 ? Quel avantage le point fantôme a-t-il sur la formule régressive à trois points ?",
          "main": "Écrivez la dernière ligne de chacun des trois systèmes (fermeture d'ordre 1, ordre 2 régressive, point fantôme) et prévoyez l'ordre global de chacun."
        },
        {
          "id": "S2-X3",
          "titre": "Où l'erreur se forme",
          "comp": [
            "C2.3",
            "C2.7"
          ],
          "reglages": {
            "n-N0": "10",
            "n-k": "5",
            "n-Np": "20"
          },
          "consigne": "Avec N du profil d'erreur égal à 20, lisez sur le second graphique où l'erreur est la plus grande, et dans le texte « Que montrent vos réglages ? » sa valeur à x = 1 pour les trois fermetures. Doublez ensuite N du profil (40).",
          "question": "Où l'erreur est-elle la plus grande avec chaque fermeture ? Comment son niveau à x = 1 change-t-il quand N double ?",
          "main": "Prévoyez de quel facteur l'erreur en x = 1 est divisée quand N double, pour la fermeture d'ordre 1 puis pour les deux d'ordre 2."
        },
        {
          "id": "S2-X6",
          "titre": "Fourier : l'échange convectif au bord",
          "comp": [
            "C2.3",
            "C2.7"
          ],
          "reglages": {
            "n-bc": "fourier",
            "n-kappa": "2",
            "n-N0": "10",
            "n-k": "5",
            "n-Np": "20"
          },
          "checks": {
            "n-bc": [
              "fourier"
            ]
          },
          "main": "Pour la condition de Fourier u'(1) + κ u(1) = g_R, écrivez la dernière ligne du système pour la fermeture d'ordre 1, puis pour le point fantôme (κ = 2).",
          "consigne": "Choisissez la condition de Fourier avec κ = 2, N = 10, 20, 40, 80, 160, et lisez dans les cartes l'ordre observé des trois fermetures.",
          "question": "Quels ordres obtient-on ? Comment la condition de Fourier se compare-t-elle à celle de Neumann ? Que devient la condition quand κ devient très grand ?",
          "corr": true
        }
      ]
    },
    "chaleur": {
      "seance": 3,
      "fiche": "Séance 3 (instationnaire) et séance 4 (stabilité)",
      "competences": [
        "C3.1",
        "C3.2",
        "C3.3",
        "C4.3"
      ],
      "notions": [
        "nombre de Fourier de maille",
        "schéma explicite et implicite",
        "stabilité"
      ],
      "exercices": "exercices A, B, D",
      "explorations": [
        {
          "id": "S3-X1",
          "titre": "FTCS explose, BTCS et Crank–Nicolson restent stables",
          "comp": [
            "C3.1",
            "C3.2"
          ],
          "reglages": {
            "c-alpha": "-5",
            "c-L": "1",
            "c-h": "5",
            "c-tf": "200",
            "c-Fo": "0.8",
            "c-Fox": ""
          },
          "checks": {
            "c-s": [
              "ftcs",
              "btcs",
              "cn"
            ]
          },
          "consigne": "Avec h = 5 mm et un temps final de 200 s, réglez Fo = 0,8 (Δt = 2 s), puis Fo = 0,4 (Δt = 1 s). Relevez les erreurs dans les cartes et comparez les facteurs d'amplification |G(θ)| pour tous les nombres d'onde.",
          "question": "Que révèle |G(θ)| > 1 sur la stabilité, et pourquoi le profil initial peut-il masquer un mode instable ? Que se passe-t-il pour FTCS quand Fo dépasse 1/2 ? Une méthode stable est-elle forcément précise à grand Δt ?",
          "main": "Pour α = 1e-5 m²/s et h = 5 mm, calculez Fo = αΔt/h² pour Δt = 2 s et 1 s, ainsi que le pas de temps maximal de FTCS.",
          "corr": true
        },
        {
          "id": "S4-X2",
          "titre": "Calculer le gain avant de lire la courbe",
          "comp": ["C4.3"],
          "reglages": {"c-alpha": "-5", "c-L": "1", "c-h": "5", "c-tf": "200", "c-Fo": "0.6", "c-Fox": ""},
          "checks": {"c-s": ["ftcs"]},
          "main": "Pour le mode φ = π et Fo = 0,4 puis 0,6, calculez G = 1 − 4Fo sin²(φ/2), son module et votre prévision après plusieurs pas.",
          "consigne": "Appliquez les réglages. Comparez le facteur modal au seuil |G| = 1 et au profil calculé ; recommencez avec Fo = 0,4.",
          "question": "Quelle valeur de Fo rend tous les modes stables selon le chapitre ? Pourquoi un profil particulier peut-il masquer un mode amplifié ?"
        },
        {
          "id": "S3-X2",
          "titre": "Lire l'ordre en temps",
          "comp": [
            "C3.1"
          ],
          "reglages": {
            "c-alpha": "-5",
            "c-L": "1",
            "c-h": "1",
            "c-tf": "1",
            "c-Fo": "10",
            "c-Fox": "5 2.5"
          },
          "checks": {
            "c-s": [
              "ftcs",
              "btcs",
              "cn"
            ]
          },
          "consigne": "Prenez h = 1 mm, un temps final de 1 s et les valeurs Fo = 10, 5 et 2,5 (Δt = 1 ; 0,5 et 0,25 s). Lisez les erreurs dans les cartes et la pente du second graphique.",
          "question": "Quel ordre en temps lit-on pour FTCS et BTCS ? Pourquoi l'erreur de Crank–Nicolson ne diminue-t-elle plus ? Fo > 1/2 pour FTCS : pourquoi son erreur reste-t-elle pourtant petite ici ?",
          "main": "Avec h = 1 mm, calculez Fo pour Δt = 1 ; 0,5 et 0,25 s. FTCS respecte-t-il Fo ≤ 1/2 ? Prévoyez l'ordre en temps de FTCS, BTCS et Crank–Nicolson.",
          "corr": true
        },
        {
          "id": "S3-X6",
          "titre": "Explicite ou implicite ?",
          "comp": [
            "C3.1",
            "C3.3"
          ],
          "reglages": {
            "c-alpha": "-5",
            "c-L": "1",
            "c-h": "5",
            "c-tf": "200",
            "c-Fo": "0.8",
            "c-Fox": ""
          },
          "checks": {
            "c-s": [
              "ftcs",
              "btcs",
              "cn",
              "df",
              "ri"
            ]
          },
          "main": "Pour chacun des cinq schémas (FTCS, BTCS, Crank–Nicolson, Dufort–Frankel, Richardson), dites s'il est explicite ou implicite et, pour Fo = 0,8, si le cours annonce une limite sur Fo.",
          "consigne": "Avec h = 5 mm, un temps final de 200 s et Fo = 0,8 (Δt = 2 s), cochez les cinq schémas et relevez dans les cartes l'erreur maximale et l'indication de stabilité de chacun.",
          "question": "Quels facteurs |G(θ)| dépassent 1 ? Pourquoi l'essai à Fo = 0,8 ne suffit-il pas à établir la stabilité modale ? Une méthode stable est-elle nécessairement précise à grand pas de temps ?",
          "corr": true
        }
      ]
    },
    "chemin": {
      "seance": 3,
      "fiche": "Séances 3 et 4 : chemin de raffinement et consistance",
      "competences": [
        "C3.3",
        "C3.4",
        "C4.2"
      ],
      "notions": [
        "chemin de raffinement",
        "consistance",
        "défaut local normalisé"
      ],
      "exercices": "exercices C, E",
      "explorations": [
        {
          "id": "S3-X3",
          "titre": "Le chemin décide",
          "comp": [
            "C3.4"
          ],
          "reglages": {
            "p-r": "1",
            "p-rx": "1.5 2",
            "p-co": "0.8",
            "p-fo": "8",
            "p-h0": "0.1",
            "p-hk": "4"
          },
          "consigne": "Après le calcul à la main des deux termes, comparez r = 1, 1,5 et 2 avec Co_ref = 0,8 et Fo_ref = 8 (h_ref = 0,1). Dans le bloc « Conséquence sur les solutions », réglez successivement r = 1, 1,5 et 2 pour observer les profils numériques et l'erreur par rapport à la solution exacte.",
          "question": "Pour quels r chaque schéma (Dufort–Frankel, Lax–Friedrichs) est-il consistant ? Dans les deux exemples non consistants, l'erreur vers la solution de l'équation cible diminue-t-elle ? Quelle équation modifiée suggère le terme qui reste ?",
          "main": "Avec h_ref = 0,1, Co_ref = 0,8, Fo_ref = 8 et a = 1, déduisez c0 en multipliant Co_ref par h_ref à la puissance 1 moins r, puis alpha en multipliant Fo_ref par h_ref et en divisant par Co_ref. Pour r = 1, 1,5 et 2, exprimez ensuite en fonction de h le terme alpha fois (delta_t/h) au carré et le terme h au carré divisé par 2 delta_t, avec delta_t = c0 fois h à la puissance r."
        },
        {
          "id": "S4-X1",
          "titre": "Consistance : quel terme disparaît au raffinement ?",
          "comp": ["C4.2"],
          "reglages": {"p-r": "1", "p-rx": "1.5 2", "p-co": "0.8", "p-fo": "8", "p-h0": "0.1", "p-hk": "4"},
          "main": "Pour Δt = c₀hʳ, réécrivez α(Δt/h)² et h²/(2Δt) en puissances de h. Classez les deux schémas pour r = 1, 1,5 et 2.",
          "consigne": "Appliquez les réglages et comparez d'abord les graphes des termes du défaut, puis les profils de solution aux mêmes exposants r.",
          "question": "Pour quels chemins les termes décisifs tendent-ils vers zéro ? Que montrent les profils pour les chemins non consistants, et pourquoi l'observation numérique ne remplace-t-elle pas le critère limite ?"
        }
      ]
    },
    "adv": {
      "seance": 3,
      "fiche": "Séances 3 et 4 : advection, stabilité et équation équivalente",
      "competences": [
        "C3.4",
        "C3.5",
        "C4.4"
      ],
      "notions": [
        "nombre de Courant",
        "diffusion numérique",
        "dispersion numérique"
      ],
      "exercices": "exercices E, G",
      "explorations": [
        {
          "id": "S3-X4",
          "titre": "Reconnaître le comportement de chaque schéma",
          "comp": [
            "C3.5"
          ],
          "reglages": {
            "a-a": "1",
            "a-Co": "0.4",
            "a-tf": "5",
            "a-Nx": "100",
            "a-Nxx": "200"
          },
          "checks": {
            "a-s": [
              "amont",
              "ftcs",
              "lxf",
              "lw",
              "bw",
              "cimp"
            ]
          },
          "consigne": "Avec Co = 0,4 et Nx = 100, superposez les six schémas. Comparez les profils, |G(θ)| et l'erreur de phase sur toute la plage des nombres d'onde.",
          "question": "Quels schémas amplifient au moins un mode ? Lesquels amortissent les modes ou produisent une erreur de phase ? Pourquoi une oscillation près d'un front ne suffit-elle pas à conclure à une instabilité ? Quelles courbes étudient la stabilité et la dispersion, et quelle vérification distincte établit consistance puis convergence ?",
          "main": "Avant de lancer le calcul, prévoyez pour chacun des six schémas (FTCS centré, amont, Lax–Friedrichs, Lax–Wendroff, Beam–Warming, centré implicite) une condition de stabilité et son effet sur l'amplitude ou la phase. Indiquez aussi ce que les courbes modales ne permettent pas de conclure : consistance par Taylor, convergence par l'erreur au raffinement à temps final commun."
        },
        {
          "id": "S3-X5",
          "titre": "Co = 1 : le décalage exact",
          "comp": [
            "C3.5"
          ],
          "reglages": {
            "a-a": "1",
            "a-Co": "1",
            "a-tf": "5",
            "a-Nx": "100",
            "a-Nxx": ""
          },
          "checks": {
            "a-s": [
              "amont",
              "lxf",
              "lw"
            ]
          },
          "consigne": "Prenez Co = 1 et gardez l'amont, Lax–Friedrichs et Lax–Wendroff. Lisez l'erreur maximale.",
          "question": "Pourquoi les trois schémas deviennent-ils exacts ? Que devient l'amont pour Co = 1,2 ?",
          "main": "Pour Co = 1 (a = 1), écrivez la nouvelle valeur du nœud i avec le schéma amont et montrez qu'elle est égale à l'ancienne valeur du nœud i−1. Faites de même pour Lax–Friedrichs et Lax–Wendroff."
        },
        {
          "id": "S3-X7",
          "titre": "Explicite ou implicite en advection",
          "comp": [
            "C3.5"
          ],
          "reglages": {
            "a-a": "1",
            "a-Co": "1.2",
            "a-tf": "5",
            "a-Nx": "100",
            "a-Nxx": ""
          },
          "checks": {
            "a-s": [
              "amont",
              "ftcs",
              "lxf",
              "lw",
              "bw",
              "cimp"
            ]
          },
          "main": "Pour Co = 1,2, calculez le déplacement du signal par pas, en nombre de mailles. Comparez-le à la portée de chaque stencil, notamment aux deux nœuds amont de Beam–Warming ; ne déduisez pas la stabilité de cette seule comparaison géométrique.",
          "consigne": "Prenez Co = 1,2 (a = 1, Nx = 100, temps final 5 s), cochez les six schémas et relevez le maximum et le minimum de chacun dans les cartes. Puis recommencez à Co = 2,1 et comparez les courbes |G(θ)|.",
          "question": "Quels facteurs |G(θ)| dépassent 1 ? Pourquoi Beam–Warming reste-t-il stable à Co = 1,2 alors que les stencils explicites de rayon 1 ne le sont plus ? Le profil borné du centré implicite prouve-t-il sa précision ?",
          "corr": true
        },
        {
          "id": "S4-X3",
          "titre": "Du développement de Taylor à l'effet sur le profil",
          "comp": ["C4.4"],
          "reglages": {"a-a": "1", "a-Co": "0.5", "a-tf": "5", "a-Nx": "100", "a-Nxx": "200"},
          "checks": {"a-s": ["ftcs", "lxf", "lw"]},
          "main": "À la main, dérivez u_tt = a²u_xx pour l'advection, puis remplacez u_tt dans l'erreur de Taylor. Prévoir le signe du coefficient de u_xx pour Euler centré.",
          "consigne": "Appliquez les réglages. Lisez l'équation équivalente calculée pour Euler centré, Lax–Friedrichs et Lax–Wendroff ; confrontez les coefficients aux courbes d'amplification, de phase et aux profils.",
          "question": "Quel terme explique l'amortissement ou l'amplification ? Quel terme explique l'erreur de phase ? Les observations concordent-elles avec les coefficients dérivés ?"
        }
      ]
    },
    "peclet": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), bloc A (nombre de Péclet)",
      "competences": [
        "C1.3",
        "C1.6"
      ],
      "notions": [
        "nombre de Péclet global et de maille",
        "reconstruction convective (centrée, amont)",
        "flux numérique",
        "diffusion numérique"
      ],
      "exercices": "bloc A (A3) et bloc C",
      "explorations": [
        {
          "id": "S1-X7",
          "titre": "Quand le schéma centré oscille-t-il ?",
          "comp": [
            "C1.3",
            "C1.6"
          ],
          "reglages": {
            "e-PeL": "50",
            "e-N": "10",
            "e-Nx": "20 24 25 26"
          },
          "checks": {
            "e-s": [
              "centre"
            ]
          },
          "consigne": "Gardez seulement le schéma centré, avec Pe_L signé = 50 (a > 0). Superposez N = 10, 20, 24, 25 et 26 et lisez dans les cartes Pe_h signé et la présence d'oscillations (voir aussi la jauge).",
          "question": "À partir de quel N les oscillations disparaissent-elles ? Que vaut alors Pe_h signé ? Quel lien avec le signe du coefficient du voisin aval ? Dans ce problème stationnaire, s'agit-il de stabilité temporelle ou de monotonie spatiale ?",
          "main": "Pour Pe_L signé = 50, calculez Pe_h signé = Pe_L/N pour N = 10, 20, 24, 25 et 26, et comparez à 2."
        },
        {
          "id": "S1-X8",
          "titre": "Amont ou centré ?",
          "comp": [
            "C1.3",
            "C1.6"
          ],
          "reglages": {
            "e-PeL": "50",
            "e-N": "100",
            "e-Nx": "200"
          },
          "checks": {
            "e-s": [
              "centre",
              "amont"
            ]
          },
          "consigne": "Gardez les deux schémas et prenez N = 100 puis 200 (Pe_L signé = 50, donc Pe_h signé = 0,5 puis 0,25). Lisez les erreurs maximales dans les cartes de résultats.",
          "question": "Quel schéma est le plus précis ? Comment l'erreur de chacun évolue-t-elle quand N double ?",
          "main": "Calculez Pe_h signé pour N = 100 et 200 (Pe_L signé = 50) et prévoyez de quel facteur l'erreur de chaque schéma est divisée quand N double (centré d'ordre 2, amont d'ordre 1)."
        },
        {
          "id": "S1-X9",
          "titre": "L'amont reste-t-il monotone ?",
          "comp": [
            "C1.3"
          ],
          "reglages": {
            "e-PeL": "50",
            "e-N": "10",
            "e-Nx": ""
          },
          "checks": {
            "e-s": [
              "centre",
              "amont"
            ]
          },
          "consigne": "Avec Pe_L signé = 50 et N = 10 (Pe_h signé = 5), comparez les deux schémas sur les deux graphiques.",
          "question": "Que fait chaque schéma près de la paroi x = 1 ? Quel prix paie l'amont pour éviter les oscillations ?",
          "main": "Pour Pe_h signé = 5, calculez le coefficient du voisin aval du schéma centré, (D/h)(1 − Pe_h signé/2), et donnez son signe."
        }
      ]
    },
    "intro": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), introduction du cours",
      "competences": [
        "C1.7"
      ],
      "notions": [
        "schéma numérique",
        "diffusion numérique",
        "dispersion numérique",
        "instabilité",
        "nombre de Courant"
      ],
      "exercices": "mise en route (introduction)",
      "explorations": [
        {
          "id": "S1-I1",
          "titre": "Trois schémas, trois comportements",
          "comp": [
            "C1.7"
          ],
          "reglages": {
            "i-N": "100",
            "i-Co": "0.8",
            "i-t1": "1",
            "i-t2": "5"
          },
          "checks": {
            "i-s": [
              "amont",
              "lw",
              "bw"
            ]
          },
          "consigne": "Observez les schémas A, B et C après 1 puis 5 tours (N = 100, C = 0,8). Relevez dans les cartes le pic de la bosse et le minimum de chacun.",
          "question": "Lequel lisse le signal sans oscillation ? Lesquels créent des oscillations ? Comment évoluent le pic et le minimum entre 1 et 5 tours ? Proposez un nom pour chaque phénomène observé, puis cherchez le terme exact dans le polycopié.",
          "main": "Pour N = 100 points et C = 0,8 (vitesse 1, domaine de longueur 1) : calculez le pas de temps, le déplacement du signal à chaque pas exprimé en nombre de mailles, et le nombre de pas pour un tour."
        },
        {
          "id": "S1-I2",
          "titre": "Affiner le maillage suffit-il ?",
          "comp": [
            "C1.7"
          ],
          "reglages": {
            "i-N": "200",
            "i-Co": "0.8",
            "i-t1": "1",
            "i-t2": "5"
          },
          "checks": {
            "i-s": [
              "amont",
              "lw",
              "bw"
            ]
          },
          "consigne": "Passez à N = 200 points en gardant C = 0,8 et comparez les pics de la bosse et les minimums des schémas A, B et C aux résultats de N = 100.",
          "question": "Qu'améliore le raffinement ? Que ne supprime-t-il pas ?",
          "main": "Même question pour N = 200 et C = 0,8 : pas de temps et nombre de pas pour un tour."
        },
        {
          "id": "S1-I3",
          "titre": "Tous les schémas ne se valent pas",
          "comp": [
            "C1.7"
          ],
          "reglages": {
            "i-N": "100",
            "i-Co": "0.8",
            "i-t1": "1",
            "i-t2": "5"
          },
          "checks": {
            "i-s": [
              "amont",
              "lw",
              "bw",
              "lxf",
              "ftcs"
            ]
          },
          "consigne": "Ajoutez les schémas D et E aux trois premiers (N = 100, C = 0,8). Comparez le pic de la bosse à t = 1.",
          "question": "Le schéma D lisse-t-il plus ou moins que le schéma A ? Que devient le schéma E ? Peut-on utiliser n'importe quel schéma pour ce problème ?",
          "main": "Sur une feuille, dessinez la solution exacte après un demi-tour : où se trouvent la bosse (centre 0,3 au départ) et le créneau (de 0,6 à 0,8) ? Prévoyez ce qu'un « bon » schéma devrait montrer."
        },
        {
          "id": "S1-I4",
          "titre": "Le nombre de Courant décide",
          "comp": [
            "C1.7"
          ],
          "reglages": {
            "i-N": "100",
            "i-Co": "1",
            "i-t1": "1",
            "i-t2": "5"
          },
          "checks": {
            "i-s": [
              "amont",
              "lw",
              "bw",
              "lxf"
            ]
          },
          "consigne": "Prenez C = 1 et gardez les schémas A, B, C et D. Lisez le comportement indiqué dans chaque carte.",
          "question": "Que devient chaque schéma pour C = 1 ? Que conclure sur le rôle du nombre de Courant dans le choix et l'usage d'un schéma ?",
          "main": "Pour C = 1, écrivez ce que vaut le déplacement du signal à chaque pas, en nombre de mailles, et le nombre de pas pour un tour avec N = 100."
        }
      ]
    },
    "edpc": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), bloc B",
      "competences": [
        "C1.4"
      ],
      "notions": [
        "discriminant",
        "EDP elliptique, parabolique, hyperbolique",
        "données nécessaires",
        "type qui dépend de la solution",
        "domaine de dépendance"
      ],
      "exercices": "bloc B (B1, B5)",
      "explorations": [
        {
          "id": "S1-D1",
          "titre": "Un cas elliptique",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-delta": "-4",
            "d-u": "0.5"
          },
          "consigne": "Réglez Δ = −4. Lisez le type, les données nécessaires, la conique repère et le schéma de dépendance. Le calcul à la main vous fait retrouver Δ pour A = 1, B = 0, C = 4.",
          "question": "Quel est le type ? Quelles conditions faut-il fournir, et que dit-on de l'influence de la frontière ? Quel est le domaine de dépendance du point P (schéma sous la conique) ?",
          "main": "Calculez à la main le discriminant Δ = B² − AC pour A = 1, B = 0, C = 4, et donnez le type.",
          "corr": true
        },
        {
          "id": "S1-D2",
          "titre": "Un cas parabolique",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-delta": "0",
            "d-u": "0.5"
          },
          "consigne": "Réglez Δ = 0. Lisez le type, la conique dégénérée et le schéma de dépendance ; reliez ce cas à l’équation de la chaleur.",
          "question": "Quel est le type ? Pourquoi la conique est-elle dégénérée ? Quelles données faut-il ? Quel est le domaine de dépendance du point P ?",
          "main": "Calculez Δ pour A = −1, B = 0, C = 0 et donnez le type.",
          "corr": true
        },
        {
          "id": "S1-D3",
          "titre": "Un cas hyperbolique",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-delta": "3",
            "d-u": "0.5"
          },
          "consigne": "Réglez Δ = 3. Lisez le type, la conique repère et le schéma de dépendance ; reliez ce cas à l’équation des ondes.",
          "question": "Quel est le type ? Quelles données initiales et aux limites faut-il ? Quel est le domaine de dépendance du point P ?",
          "main": "Calculez Δ pour A = −3, B = 0, C = 1 et donnez le type et la vitesse c.",
          "corr": true
        },
        {
          "id": "S1-D4",
          "titre": "Quand le type dépend de la solution",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-delta": "-4",
            "d-u": "1.5"
          },
          "consigne": "Dans (1 − u²) u_xx + u_yy = 0, u=u(x,y) est l’inconnue. Faites varier sa valeur locale u(P) et observez comment le discriminant et le type en P changent ; arrêtez-vous en u(P)=1,5.",
          "question": "Pour quelles valeurs de u l'équation est-elle elliptique, parabolique, hyperbolique ? Que vaut Δ pour u = 1,5 ?",
          "main": "Pour (1 − u²) u_xx + u_yy = 0, écrivez A, B, C et Δ en fonction de u, puis évaluez Δ pour u = 1,5."
        }
      ]
    },
    "edpb": {
      "seance": 1,
      "fiche": "Séance 1 (chapitre 1), bloc B",
      "competences": [
        "C1.4",
        "C1.5"
      ],
      "notions": [
        "principe du maximum",
        "propagation instantanée ou à vitesse finie",
        "influence de la frontière"
      ],
      "exercices": "bloc B (B1 à B4)",
      "explorations": [
        {
          "id": "S1-K1",
          "titre": "Elliptique : toute la frontière agit",
          "comp": [
            "C1.4",
            "C1.5"
          ],
          "reglages": {
            "k-Tl": "100",
            "k-Tr": "0",
            "k-Tt": "0",
            "k-Tb": "0",
            "k-n": "31",
            "k-D": "0.05",
            "k-tp": "2",
            "k-gap": "4",
            "k-c": "1",
            "k-th": "2",
            "k-xp": "2"
          },
          "checks": {
            "k-type": [
              "elliptique"
            ]
          },
          "consigne": "Avec le côté gauche à 100 °C et les trois autres à 0 °C, lisez la température au centre. Portez ensuite le côté droit à 100 °C, puis le côté haut.",
          "question": "Quelle est la température au centre dans chaque cas ? Pourquoi dit-on qu'une EDP elliptique dépend de toute la frontière ?",
          "main": "Par symétrie du carré, prévoyez la température au centre quand un côté, deux côtés opposés, puis trois côtés sont à 100 °C (les autres à 0 °C)."
        },
        {
          "id": "S1-K2",
          "titre": "Parabolique : vitesse infinie, effet minuscule",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "k-Tl": "100",
            "k-Tr": "0",
            "k-Tt": "0",
            "k-Tb": "0",
            "k-n": "31",
            "k-D": "0.05",
            "k-tp": "2",
            "k-gap": "4",
            "k-c": "1",
            "k-th": "2",
            "k-xp": "2"
          },
          "checks": {
            "k-type": [
              "parabolique"
            ]
          },
          "consigne": "Deux bosses cosinus de rayon 0,5 m, centrées en x = ±2 m, diffusent avec D = 0,05 m²/s. Vérifiez d'abord que x = 5 m est hors du support initial. Lisez ensuite u(5) à t = 2 s puis à t = 8 s et comparez avec les profils tracés.",
          "question": "La température en x = 5 est-elle nulle au départ ? Que devient-elle dès t > 0 ? Comment évolue-t-elle entre t = 2 et t = 8 ?",
          "main": "Les supports initiaux sont [−2,5 ; −1,5] et [1,5 ; 2,5]. En déduire u(5,0) = 0. Pour l'équation de la chaleur sur la droite réelle, prévoir si u(5,t) reste nul ou devient non nul pour t > 0.",
          "corr": true
        },
        {
          "id": "S1-K3",
          "titre": "Hyperbolique : vitesse finie et cône de dépendance",
          "comp": [
            "C1.4",
            "C1.5"
          ],
          "reglages": {
            "k-Tl": "100",
            "k-Tr": "0",
            "k-Tt": "0",
            "k-Tb": "0",
            "k-n": "31",
            "k-D": "0.05",
            "k-tp": "2",
            "k-gap": "4",
            "k-c": "1",
            "k-th": "2",
            "k-xp": "2"
          },
          "checks": {
            "k-type": [
              "hyperbolique"
            ]
          },
          "consigne": "La bosse initiale est nulle hors de [−0,5 ; 0,5]. Avec c = 1 et t = 2, lisez les maxima des deux bosses, leurs supports et u en x = 3. Doublez ensuite c et observez le déplacement des supports.",
          "question": "Où se trouvent les maxima et les fronts ? Que vaut u en x = 3 ? Comment le déplacement des supports change-t-il quand c double ?",
          "main": "À partir de la formule de d'Alembert, prévoir les maxima en x = ±ct et le rayon 0,5 m de chaque bosse pour c = 1 et t = 2, puis leurs supports et la valeur en x = 3.",
          "corr": true
        }
      ]
    }
  }
};
