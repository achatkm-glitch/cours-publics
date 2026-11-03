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
          "consigne": "Les deux courbes ont la même vitesse a = 1 et le même instant t = 4, mais des diffusivités D = 0,01 et D = 0,05. Relevez dans le tableau le centre, la largeur σ(t), le pic et le nombre de Péclet de chacune.",
          "question": "Quel mécanisme fixe la position du centre ? Lequel fixe la largeur ? Que devient le pic quand D augmente, et pourquoi ?"
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
          "question": "Que dire du rôle de la diffusion devant celui de l'advection quand Pe vaut 1 ?"
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
            "l-q": "0",
            "l-qL": "0"
          },
          "checks": {
            "l-type": [
              "neumann"
            ]
          },
          "consigne": "Ne gardez que la condition de Neumann, avec une production nulle et un flux imposé nul en x = L.",
          "question": "Que représente un flux imposé nul ? Pourquoi le profil est-il plat ?"
        },
        {
          "id": "S1-X4",
          "titre": "Échange convectif fort ou faible",
          "comp": [
            "C1.4",
            "C1.5"
          ],
          "reglages": {
            "l-h": "200"
          },
          "checks": {
            "l-type": [
              "dirichlet",
              "neumann",
              "robin"
            ]
          },
          "consigne": "Revenez aux valeurs initiales de la paroi (les trois courbes coïncident), puis augmentez h jusqu'à 200 W/(m²·K).",
          "question": "Quelle courbe change ? Pourquoi les deux autres restent-elles identiques ? Que vaut le bilan des flux ?"
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
          }
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
          "question": "Les volumes finis sont-ils exacts ici ? Comment leur erreur évolue-t-elle quand N double ? Que valent les bilans de flux des deux schémas ?"
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
          "id": "S2-X1",
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
          "consigne": "Avec n = 5, f = 1 et k = 20, comparez les deux méthodes dans l'historique du résidu et sur le graphique de convergence.",
          "question": "Que valent les deux résidus à k = 20 ? À partir de quelle itération le résidu passe-t-il sous 1e-3 pour chaque méthode ?"
        },
        {
          "id": "S2-X2",
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
          "consigne": "Passez à n = 20 nœuds et k = 100 itérations. Lisez sur le graphique logarithmique l'itération où chaque courbe franchit 1e-3.",
          "question": "Comment le nombre d'itérations évolue-t-il avec n ? Quel est le rapport entre Jacobi et Gauss–Seidel ?"
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
          "id": "S2-X3",
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
          "consigne": "Gardez h₀ = 0,1 et quatre pas. Lisez dans le tableau les erreurs et les ordres des trois différences, puis observez les pentes sur le graphique logarithmique.",
          "question": "Quels ordres lisez-vous ? Pourquoi l'erreur de la régressive à trois points est-elle voisine du double de celle de la centrée ?"
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
        "ordre global"
      ],
      "exercices": "exercices B, F, H",
      "explorations": [
        {
          "id": "S2-X4",
          "titre": "La frontière commande l'ordre global",
          "comp": [
            "C2.3",
            "C2.7"
          ],
          "reglages": {
            "n-N0": "10",
            "n-k": "5"
          },
          "consigne": "Gardez N = 10, 20, 40, 80, 160 et lisez les ordres observés des deux fermetures de Neumann.",
          "question": "Quel ordre global obtient-on avec chaque fermeture ? Pourquoi l'ordre 1 de la fermeture limite-t-il l'ordre global alors que le schéma intérieur est d'ordre 2 ?"
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
          "consigne": "Avec h = 5 mm et un temps final de 200 s, prenez Δt = 2 s (Fo = 0,8), puis Δt = 1 s (Fo = 0,4). Relevez l'erreur maximale de chaque schéma dans le tableau.",
          "question": "Que se passe-t-il pour FTCS quand Fo dépasse 1/2 ? Les schémas implicites sont-ils concernés ?"
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
          "consigne": "Prenez h = 1 mm, un temps final de 1 s et les pas Δt = 1, 0,5 et 0,25 s. Lisez les erreurs dans le tableau et la pente du second graphique.",
          "question": "Quel ordre en temps lit-on pour FTCS et BTCS ? Pourquoi l'erreur de Crank–Nicolson ne diminue-t-elle plus ?"
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
          "question": "Pour quels r chaque schéma (Dufort–Frankel, Lax–Friedrichs) est-il consistant ? Que vaut chaque terme quand il ne tend pas vers zéro ?"
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
          "consigne": "Avec Co = 0,4 et Nx = 100, superposez les quatre schémas. Relevez le maximum et le minimum de chacun dans le tableau.",
          "question": "Classez chaque schéma : instable, diffusion numérique ou dispersion ?"
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
          "question": "Pourquoi les trois schémas deviennent-ils exacts ? Que devient l'amont pour Co = 1,2 ?"
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
          "consigne": "Gardez seulement le schéma centré, avec Pe = 50. Superposez N = 10, 20, 24, 25 et 26 et lisez dans le tableau le nombre de Péclet de maille et la présence d'oscillations.",
          "question": "À partir de quel N les oscillations disparaissent-elles ? Que vaut alors Pe_h ? Quel lien avec le signe du coefficient du voisin aval ?"
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
          "consigne": "Gardez les deux schémas et prenez N = 100 puis 200 (Pe_h = 0,5 puis 0,25). Lisez les erreurs maximales dans le tableau.",
          "question": "Quel schéma est le plus précis ? Comment l'erreur de chacun évolue-t-elle quand N double ?"
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
          "question": "Que fait chaque schéma près de la paroi x = 1 ? Quel prix paie l'amont pour éviter les oscillations ?"
        }
      ]
    }
  }
};
