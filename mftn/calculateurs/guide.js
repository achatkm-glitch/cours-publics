window.GUIDE = {
  "competences": {
    "C1.1": "distinguer une grandeur extensive de sa grandeur spécifique",
    "C1.2": "établir la forme locale et la forme intégrale d'une équation de transport",
    "C1.3": "identifier les termes d'accumulation, de convection, de diffusion et de source, et contrôler leurs unités",
    "C1.4": "reconnaître le caractère elliptique, parabolique ou hyperbolique d'une EDP scalaire d'ordre 2",
    "C1.5": "choisir des conditions initiales et aux limites compatibles avec le type d'EDP",
    "C1.6": "construire un premier schéma de diffusion 1D par différences finies et par volumes finis",
    "C1.7": "expliquer les étapes et les principales sources d'erreur d'un calcul CFD",
    "C2.1": "construire une approximation de dérivée à partir d'un développement de Taylor",
    "C2.2": "choisir le stencil, construire le schéma, puis déterminer son erreur de troncature et son ordre",
    "C2.3": "discrétiser des conditions de Dirichlet et de Neumann et en lire l'effet sur la matrice",
    "C2.4": "assembler le système de Poisson en une et deux dimensions",
    "C2.5": "choisir et appliquer Jacobi ou Gauss–Seidel, puis contrôler la convergence par le résidu",
    "C2.6": "définir le défaut local d'un schéma et déterminer son ordre de consistance par Taylor",
    "C2.7": "mesurer un ordre observé par raffinement",
    "C3.1": "construire les schémas explicite, implicite et de Crank–Nicolson pour la chaleur 1D",
    "C3.2": "appliquer la condition pratique sur le pas de temps de FTCS et dimensionner un calcul",
    "C3.3": "comparer les défauts des schémas FTCS, BTCS, Dufort–Frankel et de la famille θ",
    "C3.4": "reconnaître une consistance qui dépend du chemin de raffinement",
    "C3.5": "établir l'ordre des schémas d'advection sans le confondre avec leur stabilité"
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
            "C1.2",
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
          "consigne": "Les deux courbes ont la même vitesse a = 1 et le même instant t = 4, mais des diffusivités D = 0,01 et D = 0,05. Relevez dans les cartes de résultats le centre, la largeur σ(t) et le pic de chacune, et repérez leur nombre de Péclet sur la jauge.",
          "question": "Quel mécanisme fixe la position du centre ? Lequel fixe la largeur ? Que devient le pic quand D augmente, et pourquoi ?",
          "main": "Avec σ₀ = 0,15 et t = 4, calculez le centre a·t, la largeur σ(t) = √(σ₀² + 2Dt) pour D = 0,01 puis 0,05, et le nombre de Péclet Pe = |a|σ₀/D."
        },
        {
          "id": "S1-X2",
          "titre": "Quand la diffusion devient-elle comparable à l'advection ?",
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
          "question": "Que dire du rôle de la diffusion devant celui de l'advection quand Pe vaut 1 ?",
          "main": "Avec D = 0,15, calculez Pe, σ(4) et le pic σ₀/σ."
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
          "main": "Pour q = 10⁵ W/m³ et L = 0,1 m, calculez la puissance produite par unité de surface q·L, que doivent se partager les deux faces."
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
          "titre": "Les différences finies sont-elles exactes ?",
          "comp": [
            "C1.6"
          ],
          "reglages": {
            "b-N": "4",
            "b-Nx": "8 16",
            "b-T0": "300",
            "b-TL": "400",
            "b-L": "1",
            "b-lambda": "1",
            "b-q": "100"
          },
          "consigne": "Avec une production q = 100 W/m³ (la solution devient quadratique), ne gardez que les différences finies et superposez N = 4, 8 et 16. Lisez l'erreur sur le graphique de droite et dans le message.",
          "question": "Que valent les erreurs ? Pourquoi ne diminuent-elles pas quand N augmente ?",
          "checks": {
            "b-s": [
              "fd"
            ]
          },
          "main": "Pour −λT'' = q avec q constant, T est un polynôme de degré 2. Calculez T'''' et dites ce que devient le terme d'erreur (h²/12) T'''' de la dérivée seconde centrée."
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
            "b-Nx": "8 16",
            "b-T0": "300",
            "b-TL": "400",
            "b-L": "1",
            "b-lambda": "1",
            "b-q": "100"
          },
          "checks": {
            "b-s": [
              "fd",
              "vf"
            ]
          },
          "consigne": "Ajoutez les volumes finis (carrés) aux différences finies (cercles). Comparez les deux graphiques d'erreur et lisez les erreurs maximales et les bilans de flux dans le message.",
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
          "question": "Que valent les deux résidus à k = 20 ? À partir de quelle itération le résidu passe-t-il sous 1e-3 pour chaque méthode ?",
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
          "question": "Comment le nombre d'itérations évolue-t-il avec n ? Quel est le rapport entre Jacobi et Gauss–Seidel ?",
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
        "défaut local"
      ],
      "exercices": "exercices A, D",
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
          "consigne": "Gardez h$_0$ = 0,1 et quatre pas. Lisez dans les cartes l'ordre observé et l'erreur au plus petit pas pour chacune des trois différences.",
          "question": "Quels ordres lisez-vous ? Pourquoi l'erreur de la régressive à trois points est-elle voisine du double de celle de la centrée ?",
          "main": "Pour u = exp(x) en x = 0 et h = 0,1, déduisez de Taylor le terme d'erreur dominant de chaque différence et calculez sa valeur."
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
        "ordre de la condition aux limites"
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
        }
      ]
    },
    "chaleur": {
      "seance": 3,
      "fiche": "Séance 3 (instationnaire), exercices A, B, D",
      "competences": [
        "C3.1",
        "C3.2",
        "C3.3"
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
            "c-L": "0.1",
            "c-h": "5",
            "c-tf": "200",
            "c-dt": "2",
            "c-dtx": ""
          },
          "checks": {
            "c-s": [
              "ftcs",
              "btcs",
              "cn"
            ]
          },
          "consigne": "Avec h = 5 mm et un temps final de 200 s, prenez Δt = 2 s (Fo = 0,8), puis Δt = 1 s (Fo = 0,4). Relevez l'erreur maximale de chaque schéma dans les cartes de résultats.",
          "question": "Que se passe-t-il pour FTCS quand Fo dépasse 1/2 ? Les schémas implicites sont-ils concernés ?",
          "main": "Pour α = 10⁻⁵ m²/s et h = 5 mm, calculez Fo = αΔt/h² pour Δt = 2 s et 1 s, ainsi que le pas de temps maximal de FTCS."
        },
        {
          "id": "S3-X2",
          "titre": "Lire l'ordre en temps",
          "comp": [
            "C3.1",
            "C3.3"
          ],
          "reglages": {
            "c-alpha": "-5",
            "c-L": "0.1",
            "c-h": "1",
            "c-tf": "1",
            "c-dt": "1",
            "c-dtx": "0.5 0.25"
          },
          "checks": {
            "c-s": [
              "ftcs",
              "btcs",
              "cn"
            ]
          },
          "consigne": "Prenez h = 1 mm, un temps final de 1 s et les pas Δt = 1, 0,5 et 0,25 s. Lisez les erreurs dans les cartes et la pente du second graphique.",
          "question": "Quel ordre en temps lit-on pour FTCS et BTCS ? Pourquoi l'erreur de Crank–Nicolson ne diminue-t-elle plus ?",
          "main": "Avec h = 1 mm, calculez Fo pour Δt = 1 ; 0,5 et 0,25 s. FTCS respecte-t-il Fo ≤ 1/2 ? Prévoyez l'ordre en temps de FTCS, BTCS et Crank–Nicolson."
        }
      ]
    },
    "chemin": {
      "seance": 3,
      "fiche": "Séance 3 (instationnaire), exercices C et E",
      "competences": [
        "C3.3",
        "C3.4"
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
            "p-c0": "1",
            "p-alpha": "1",
            "p-h0": "0.1",
            "p-hk": "4"
          },
          "consigne": "Comparez les chemins r = 1, 1,5 et 2 avec c₀ = 1 et α = 1. Pour chacun, observez comment les deux termes évoluent quand h diminue.",
          "question": "Pour quels r chaque schéma (Dufort–Frankel, Lax–Friedrichs) est-il consistant ? Que vaut chaque terme quand il ne tend pas vers zéro ?",
          "main": "Pour α = c₀ = 1, calculez, en fonction de h, les termes α(Δt/h)² et h²/(2Δt) avec Δt = c₀ fois h puissance r, pour r = 1, 1,5 et 2."
        }
      ]
    },
    "adv": {
      "seance": 3,
      "fiche": "Séance 3 (instationnaire), exercices E et G",
      "competences": [
        "C3.4",
        "C3.5"
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
              "lw"
            ]
          },
          "consigne": "Avec Co = 0,4 et Nx = 100, superposez les quatre schémas. Lisez le maximum et le minimum indiqués dans chaque carte.",
          "question": "Classez chaque schéma : instable, diffusion numérique ou dispersion ?",
          "main": "Avant de lancer le calcul, prévoyez pour chaque schéma (FTCS centré, amont, Lax–Friedrichs, Lax–Wendroff) s'il sera instable, diffusif ou dispersif, d'après ce que dit le polycopié."
        },
        {
          "id": "S3-X5",
          "titre": "Co = 1 : le décalage exact",
          "comp": [
            "C3.4",
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
          "consigne": "Gardez seulement le schéma centré, avec Pe = 50. Superposez N = 10, 20, 24, 25 et 26 et lisez dans les cartes le nombre de Péclet de maille et la présence d'oscillations (voir aussi la jauge).",
          "question": "À partir de quel N les oscillations disparaissent-elles ? Que vaut alors Pe_h ? Quel lien avec le signe du coefficient du voisin aval ?",
          "main": "Pour Pe = 50, calculez le nombre de Péclet de maille Pe_h = Pe/N pour N = 10, 20, 24, 25 et 26, et comparez à 2."
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
          "consigne": "Gardez les deux schémas et prenez N = 100 puis 200 (Pe_h = 0,5 puis 0,25). Lisez les erreurs maximales dans les cartes de résultats.",
          "question": "Quel schéma est le plus précis ? Comment l'erreur de chacun évolue-t-elle quand N double ?",
          "main": "Calculez Pe_h pour N = 100 et 200 (Pe = 50) et prévoyez de quel facteur l'erreur de chaque schéma est divisée quand N double (centré d'ordre 2, amont d'ordre 1)."
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
          "consigne": "Avec Pe = 50 et N = 10 (Pe_h = 5), comparez les deux schémas sur les deux graphiques.",
          "question": "Que fait chaque schéma près de la paroi x = 1 ? Quel prix paie l'amont pour éviter les oscillations ?",
          "main": "Pour Pe_h = 5, calculez le coefficient du voisin aval du schéma centré, D(1 − Pe_h/2), et donnez son signe."
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
        "type qui dépend de la solution"
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
            "d-A": "1",
            "d-B": "0",
            "d-C": "4",
            "d-u": "0.5"
          },
          "consigne": "Réglez A = 1, B = 0, C = 4 (équation u_xx + 4 u_yy = 0). Lisez le discriminant, le type, les données nécessaires et la forme de la conique.",
          "question": "Quel est le type ? Quelles conditions faut-il fournir, et que dit-on de l'influence de la frontière ?",
          "main": "Calculez à la main le discriminant Δ = B² − AC pour A = 1, B = 0, C = 4, et donnez le type."
        },
        {
          "id": "S1-D2",
          "titre": "Un cas parabolique",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-A": "-1",
            "d-B": "0",
            "d-C": "0",
            "d-u": "0.5"
          },
          "consigne": "Réglez A = −1, B = 0, C = 0 (équation de la chaleur u_t − α u_xx avec α = 1). Lisez le discriminant et la forme de la conique.",
          "question": "Quel est le type ? Pourquoi la conique est-elle dégénérée ? Quelles données faut-il ?",
          "main": "Calculez Δ pour A = −1, B = 0, C = 0 et donnez le type."
        },
        {
          "id": "S1-D3",
          "titre": "Un cas hyperbolique",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-A": "-3",
            "d-B": "0",
            "d-C": "1",
            "d-u": "0.5"
          },
          "consigne": "Réglez A = −3, B = 0, C = 1 (équation des ondes u_tt − 3 u_xx, de vitesse c = √3). Lisez le discriminant et la forme de la conique.",
          "question": "Quel est le type ? Quelles données initiales et aux limites faut-il ?",
          "main": "Calculez Δ pour A = −3, B = 0, C = 1 et donnez le type et la vitesse c."
        },
        {
          "id": "S1-D4",
          "titre": "Quand le type dépend de la solution",
          "comp": [
            "C1.4"
          ],
          "reglages": {
            "d-A": "1",
            "d-B": "0",
            "d-C": "1",
            "d-u": "1.5"
          },
          "consigne": "Faites glisser le curseur de u de −2 à 2 et observez la jauge du cas non linéaire (1 − u²) u_xx + u_yy = 0 ; arrêtez-vous en u = 1,5.",
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
        "domaine de dépendance",
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
          "consigne": "Deux sources chaudes en x = ±2 diffusent (D = 0,05). Lisez la largeur σ(t) et la valeur en x = 5 à t = 2, puis portez t à 8 et comparez ; regardez les deux graphiques, dont celui en échelle logarithmique.",
          "question": "La solution est-elle nulle en x = 5 ? Comment la valeur évolue-t-elle avec t ? Que montre l'échelle logarithmique ?",
          "main": "Avec σ₀ = 0,15 et D = 0,05, calculez la largeur σ(t) = √(σ₀² + 2Dt) à t = 2 puis à t = 8."
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
          "consigne": "Avec c = 1, t = 2 et le point P en x = 2, lisez la position des impulsions, le domaine de dépendance de P et la valeur de u en x = 3. Doublez ensuite c.",
          "question": "Où sont les impulsions ? Que vaut u en x = 3 ? Qu'est-ce que le domaine de dépendance, et que change c ?",
          "main": "Avec c = 1, t = 2 et P en x = 2, calculez la position des impulsions (±c·t) et le domaine de dépendance de P, [x − ct ; x + ct]."
        }
      ]
    }
  }
};
