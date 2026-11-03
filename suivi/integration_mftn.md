# Intégration des diapositives MFTN

Date : 2026-10-21 11:49:41 +02:00 — Codex, Europe/Paris.
Demande : ajout des diapositives des chapitres 1 et 2, en coordination avec Claude.

## Provenance vérifiée

| Document | Source canonique | Copie publique | Pages | Date de compilation |
|---|---|---|---|---|
| Chapitre 1 — Des lois de conservation au modèle numérique | C:\Latex\MFTN\output\slides\MFTN_Chapitre01_slides.pdf | mftn/chapitre-01-slides.pdf | 95 | 13 octobre 2026 |
| Chapitre 2 — Méthode des différences finies | C:\Latex\MFTN\output\slides\MFTN_Chapitre02_slides.pdf | mftn/chapitre-02-slides.pdf | 250 | 16 octobre 2026 |

Empreintes SHA-256 source et destination identiques :
- C1 : 8549E1319C09A336EA30526C4082AF3D46FF61EC39F05DD7490A0636344D60E0
- C2 : B532EF4422A1BFC17EBD3D350D463F1B7BA6CC4ED635F99DD2C7C6B2B313FDE7

## Coordination et contrôles

- Lecture des registres du site et de la passation MFTN ; aucune modification ni recompilation dans MFTN.
- Refonte locale de Claude préservée. Sa passation du 21 octobre indique la passe terminée et la publication à faire ; intégration des cartes seulement après cette passation.
- Titres, objectifs, dates et pagination contrôlés dans les PDF ; couvertures rendues et inspectées visuellement.
- Contrôle des quatre liens PDF locaux et de l'unicité des identifiants HTML : OK.
- Compteurs : 4 documents, 3 enseignements, 445 pages (6 + 94 + 95 + 250).
- Aucun audit scientifique nouveau, aucune approbation des surlignages jaunes déduite de cette publication.
- Aperçu local dans le navigateur indisponible : protocole file bloqué. Contrôle visuel de l'accueil en ligne à effectuer après déploiement.
## Vérification après déploiement — 2026-10-21 11:51:04 +02:00 — Codex
- Commit publié : 636af43.
- GitHub Pages : exécution 39579969592 terminée avec succès.
- Accueil en ligne : deux cartes MFTN présentes ; affichage de la section inspecté dans le navigateur, sans débordement visible sur la vue contrôlée.
- Deux PDF accessibles en HTTP 200 ; tailles distantes conformes aux copies locales (3 023 535 et 879 783 octets).
- Contrôle mobile et relecture intégrale des 345 pages non effectués.


## Actualisation C1 — 2026-10-21 12:36:40 +02:00 — Codex
- Source officielle MFTN recompilée le 21 octobre 2026, 95 pages ; libération du responsable à 12:27:32 et contre-revue à 12:34:54 vérifiées dans passation_iA.md.
- Copie publique remplacée à chemin stable ; SHA-256 source/copie : 0C1906947E84CF01FFC77F6D170FB0784AB083FB4F7BCED534842E0F6B10A892.
- Date de l'accueil actualisée au 21 octobre ; compteurs inchangés. Pages 2 et 67 rendues dans tmp/apercus/ et inspectées visuellement.
- Barre latérale de Claude conservée ; sa passation indique sa passe terminée et le push confié à Codex. Aucun contenu MFTN modifié, aucun audit scientifique nouveau.


## Actualisation C1 — 2026-10-21 17:28:00 +02:00 — Code (Claude Code)
- Autorisation explicite de Mohammed (« tu es autorisé à le mettre à jour, le chapitre 1 ») ; reprise du verrou Codex de 16:46 sur ce seul périmètre.
- Source : `C:\Latex\MFTN\output\slides\MFTN_Chapitre01_slides.pdf`, compilée le 21 octobre 2026 à 17:17, 95 pages, commit MFTN `370bcc7` ; p. 12 inspectée (encadré « Bilan d'adsorption à la paroi »).
- Copie publique remplacée à chemin stable ; SHA-256 source/copie : E6B16CE1ECF83A8B5913697EC13B6FA0443D2C2F8F9B168D3EA398CCA2A32BCF.
- `index.html` inchangé (date du 21 octobre et pagination déjà exactes). Aucun audit scientifique nouveau ; surlignages jaunes non approuvés par cette publication.

- Vérification en ligne 2026-10-21 17:28:51 +02:00 (Code) : https://achatkm-glitch.github.io/cours-publics/mftn/chapitre-01-slides.pdf servi, 3 023 300 octets, SHA-256 identique (E6B16CE1…). Commit b364a08 poussé.

## Publication des calculateurs — 2026-11-03 17:05:31 +01:00 — Code
- Source : `C:\Latex\MFTN\Peda_inv\site` (dépôt MFTN) ; copie publique dans `mftn/calculateurs/`.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 2E0D07B6F2048AD14FAB1F93E5A6ABAF6FC21CFF63745AD2B3232BCB5CC808BF; `mftn/calculateurs/app.js` SHA-256 430772FBFF5A5C2B4CC82A511CE287E789BF3D0066DC44586BD75ADE024B95B9; `mftn/calculateurs/calc.js` SHA-256 0745C92B76D4EC5B520FA2B879E66624A8452BAF512B3E898E45FA88F79578C6; `mftn/calculateurs/style.css` SHA-256 60F8C4906DC96BBF1CEBD389964C5B4C957A7DA5996FD7487726FAA9DB7E1F8C.
- Contrôles avant publication : `node test_calc.js` (50 contrôles) ; neuf onglets chargés sans erreur de console via http ; curseurs et comparaisons essayés.
- Accueil : carte « Calculateurs de simulation MFTN » et lien latéral ajoutés ; les compteurs (4 documents, 445 pages) ne comptent que les PDF et sont inchangés.
- Limites : relecture scientifique indépendante non faite ; vérification technique seulement.

### Vérification en ligne — 2026-11-03 17:07:42 +01:00 — Code
- https://achatkm-glitch.github.io/cours-publics/mftn/calculateurs/ servie ; `index.html`, `app.js`, `calc.js` et `style.css` identiques aux copies locales (empreintes comparées, fins de ligne normalisées) ; les neuf onglets se chargent sans erreur de console ; barre 1D N = 4 : 325, 350, 375 K. Accueil : carte et lien latéral présents.

## Mise à jour des calculateurs — 2026-11-03 17:24:51 +01:00 — Code
- Contenu : onglet Barre 1D en différences finies et volumes finis avec graphique d'erreur à côté de la solution, nouvel onglet Péclet (convection–diffusion en volumes finis), couleurs par schéma, valeurs nodales repliées, guide par onglet (compétences, notions, exercices, explorations avec réglages prêts à l'emploi).
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 8FDC7BF035FDAAAC21DEEDC2C20B44DA400711EEF812C1BADFD04240B1CAA286; `mftn/calculateurs/app.js` SHA-256 830221D7CC99E31F516E0F304C1FC54CF36A7EC59DEE5B1EDD7D0E51C172E50F; `mftn/calculateurs/calc.js` SHA-256 E24C32212A9BE929AFD3D94AE2BA389614FBF6A7D195558F73CB0993E2FA2B7E; `mftn/calculateurs/style.css` SHA-256 20E650C73F07D23D75A38537FB9F5C5CB1CFD54A7958FF62E2CD76773BBB43D8; `mftn/calculateurs/guide.js` SHA-256 953406CE068AFB3CA4340CA9C8A2276748AAE7C766FEEDAD7F930A8D3DC1630C.
- Contrôles : `node test_calc.js` (63 contrôles, dont les valeurs annoncées dans les explorations) ; dix onglets et dix-huit explorations appliquées dans le navigateur intégré sans erreur de console.
- Limites : relecture scientifique indépendante non faite ; vérification technique seulement.

## Mise à jour des calculateurs — 2026-11-03 17:30:54 +01:00 — Code
- Contenu : plus aucun tableau (cartes de résultats colorées et jauge du nombre de Péclet), onglet Barre 1D en différences finies et volumes finis avec graphique d'erreur à côté de la solution, onglet Péclet (convection–diffusion en volumes finis), couleurs par schéma, guide par onglet (compétences, notions, exercices, explorations avec réglages prêts à l'emploi).
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 ADBC925098E56385CA487FE1755397156F2EF485E8B2F7EE191E457E4F7DC509; `mftn/calculateurs/app.js` SHA-256 6C2FAC026C4BCD8D786AB4FEC80C261BC3ADBD3D3185BF4BF5974D714F390EF3; `mftn/calculateurs/calc.js` SHA-256 E24C32212A9BE929AFD3D94AE2BA389614FBF6A7D195558F73CB0993E2FA2B7E; `mftn/calculateurs/style.css` SHA-256 7043D51A8258D5D6B34F07536581B5A5E351C3835E5BD93EEE4459F908E30F94; `mftn/calculateurs/guide.js` SHA-256 993271196D7C0C06C25573674ECA311D1B6C425FE4224DDB9DA18DFB340D66AA.
- Contrôles : `node test_calc.js` (63 contrôles, dont les valeurs annoncées dans les explorations) ; dix onglets et dix-huit explorations appliquées dans le navigateur intégré sans erreur de console ; aucun élément table dans les pages.
- Limites : relecture scientifique indépendante non faite ; vérification technique seulement.

## Mise à jour des calculateurs v5 — 2026-11-03 17:45:25 +01:00 — Code
- Contenu : onglet Introduction (advection d'un signal mixte, amont, Lax–Wendroff, Beam–Warming, Lax–Friedrichs, FTCS ; cas inspiré de LeVeque 2002, fig. 6.1), onglets « EDP : classer » et « EDP : comportement » (discriminant, conique, EDP non linéaire ; Laplace, chaleur, ondes), équations en affichage centré (KaTeX 0.16.9 depuis cdnjs, repli en texte brut), explorations S1-I1 à S1-I4, S1-D1 à S1-D4, S1-K1 à S1-K3.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 75C8DC0F7056C4D047E6728B503392589A1EC7439361A4A4644C091B3BA0FCAB; `mftn/calculateurs/app.js` SHA-256 AF3AD4A35DBDFBF78F3C52FA06B40FE1E6FBF9DE2D2A4E0632DC39EAA90CB818; `mftn/calculateurs/calc.js` SHA-256 0827FE4D45B188A72DB20BFCF555519A3A0A5EBE954E8D6437CE5F9883A5CDDB; `mftn/calculateurs/style.css` SHA-256 85A71879B7FD4E677713DFCA6592BFD8CD6CF0A2C9D8ED28573CC74D57CA25F6; `mftn/calculateurs/guide.js` SHA-256 287B704A2D2DC3D320F38BBAB0EA62141FFF3EAB5C2549F91BD7E5B1AD4443C0; `mftn/calculateurs/equations.js` SHA-256 B856EF1259BFA0677D459CA44CC83BD33A3B9671452C81471E983D0FEC9CF32F.
- Contrôles : `node test_calc.js` (75 contrôles) ; 13 onglets chargés dans le navigateur intégré, aucune erreur de console.
- Limites : relecture scientifique indépendante non faite ; vérification technique seulement.
