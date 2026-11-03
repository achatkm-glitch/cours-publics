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

## Mise à jour des calculateurs v6 — 2026-11-03 18:16:52 +01:00 — Code
- Contenu : chapitre 2 réordonné (ordre, Neumann, Jacobi) ; un chapitre par ligne ; onglet Neumann avec point fantôme et profil d'erreur ; introduction avec mise en situation et figure, schémas anonymes A à E ; cartes de résultats réduites à l'essentiel ; encadré « Que montrent vos réglages ? » calculé à chaque changement de curseur (sans IA) ; domaine de dépendance pour les trois types d'EDP.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 06E1C1377C33D4CF019D410DAAD09BE389D5BA1848124EABEAFA0CC2E2F0E43B; `mftn/calculateurs/app.js` SHA-256 741F9C41E6FCF32D4AEB7C62CFF41250626753483D0A802D8610F2E88FD16E49; `mftn/calculateurs/calc.js` SHA-256 63219AC96AAF6744635B3CD377E04EE0306A321FE2E16F7DF5A52854CDF4B13F; `mftn/calculateurs/style.css` SHA-256 8D9D0D538387F186D385D91C47C39D7A6008DB4CAAC152C07A8202285BBCFE5C; `mftn/calculateurs/guide.js` SHA-256 DC459745EDC4D852C5F07EDDB3E0AA2E02F72AD1A783733C7C009AC0A970A386; `mftn/calculateurs/equations.js` SHA-256 B65DF5507F779819E11BBA25455AA792E3B57F93CB5B047272038CBC8C03440A.
- Contrôles : `node test_calc.js` (76 contrôles) ; 13 onglets chargés dans le navigateur intégré, aucune erreur de console.
- Limites : relecture scientifique indépendante non faite ; vérification technique seulement.

## Mise à jour des calculateurs v7 — 2026-11-03 18:33:02 +01:00 — Code
- Contenu : encadré « Situation physique » avec schéma vectoriel illustratif sur chaque onglet (thermique et mécanique des fluides, sans valeur numérique) ; étape « D'abord, à la main » dans chaque exploration ; domaine de dépendance du point P selon le type sur l'onglet « EDP : classer » ; équations déjà présentes dans le cours retirées de cet onglet (seule la forme générale est conservée).
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 BF6D79314BF8379D85D014E445EFF3C47AAB4AC104DBE317787EE9E802F10A0D; `mftn/calculateurs/app.js` SHA-256 97AF9F1E69595F83C305F128F2BB57B3278D42A45A968AB76FE6BC3FB33F357B; `mftn/calculateurs/calc.js` SHA-256 63219AC96AAF6744635B3CD377E04EE0306A321FE2E16F7DF5A52854CDF4B13F; `mftn/calculateurs/style.css` SHA-256 5705128C1B1234D9356F48038EC33DC3B34BC3C2600FDDB75BAD8F474F3D385B; `mftn/calculateurs/guide.js` SHA-256 099266DF972E0DD687980681BD2770971D9AFEB09609C1DAC4FFEB3E6A9203D2; `mftn/calculateurs/equations.js` SHA-256 FA6B64AA7C7029CE48F9C77EE061FC9E82AF36DBA3798F77CB58BC9973428468; `mftn/calculateurs/situations.js` SHA-256 C9D21934B7D2103EBA984337B0E8BD89AAF244349376BEB88249A1494C27CA5C.
- Contrôles : `node test_calc.js` (76 contrôles) ; 13 onglets chargés dans le navigateur intégré (situations, domaine de dépendance, étapes à la main), aucune erreur de console.
- Limites : relecture scientifique indépendante non faite ; vérification technique seulement.

## Mise à jour des calculateurs v8 — 2026-11-03 19:39:07 +01:00 — Code
- Contenu : chaleur et onde avec bosses cosinus à support compact (correction Codex, contre-lue par Code) ; compétences C2.4 et C3.5 reformulées ; exploration S3-X5 rattachée à C3.5 ; formulations S3-X1 et S3-X2.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 78AE3893FD4BF56D2EF517BB0F58477040025ABC05BD0AA2438BC4CD5AA55E16; `mftn/calculateurs/app.js` SHA-256 0FFB38AA8BD358DE2A2FDB90A67CAC8C2090B22F6C3D3941C5D9457A6D7EBB80; `mftn/calculateurs/calc.js` SHA-256 6148AEF1DAC3F81342E126F36D99F9CD3E1977F97D05AD41ED89B8EDCDC560EC; `mftn/calculateurs/style.css` SHA-256 5705128C1B1234D9356F48038EC33DC3B34BC3C2600FDDB75BAD8F474F3D385B; `mftn/calculateurs/guide.js` SHA-256 C66FD0BEFB8356523A5974C1732E8EDE626461C6542C3AB070E35FC03DB412BD; `mftn/calculateurs/equations.js` SHA-256 5EF3AEB8BFB04EDEB1EFB470080386DC9FA517017FFCC4820C6C1A4BC33CDE1E; `mftn/calculateurs/situations.js` SHA-256 C9D21934B7D2103EBA984337B0E8BD89AAF244349376BEB88249A1494C27CA5C.
- Contrôles : `node test_calc.js` (76 contrôles) ; 13 onglets et trois types de l'onglet « EDP : comportement » chargés dans le navigateur intégré, aucune erreur de console.
- Limites : relecture scientifique indépendante complète non faite.

## Mise à jour des calculateurs v9 — 2026-11-03 20:03:01 +01:00 — Code
- Contenu : libellés des compétences C2.7 et C3.5 (approfondissements) dans le guide des onglets.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 78AE3893FD4BF56D2EF517BB0F58477040025ABC05BD0AA2438BC4CD5AA55E16; `mftn/calculateurs/app.js` SHA-256 0FFB38AA8BD358DE2A2FDB90A67CAC8C2090B22F6C3D3941C5D9457A6D7EBB80; `mftn/calculateurs/calc.js` SHA-256 6148AEF1DAC3F81342E126F36D99F9CD3E1977F97D05AD41ED89B8EDCDC560EC; `mftn/calculateurs/style.css` SHA-256 5705128C1B1234D9356F48038EC33DC3B34BC3C2600FDDB75BAD8F474F3D385B; `mftn/calculateurs/guide.js` SHA-256 7DF2A52F318DF9F3C8C312E20A87BAA9E325D4F8BA9816C17ACD398671748C5D; `mftn/calculateurs/equations.js` SHA-256 5EF3AEB8BFB04EDEB1EFB470080386DC9FA517017FFCC4820C6C1A4BC33CDE1E; `mftn/calculateurs/situations.js` SHA-256 C9D21934B7D2103EBA984337B0E8BD89AAF244349376BEB88249A1494C27CA5C.
- Contrôles : `node test_calc.js` (76 contrôles).
- Limites : vérification technique seulement.

## Mise à jour des calculateurs v10 — 2026-11-03 20:49:13 +01:00 — Code
- Contenu : trois photographies libres dans les encadrés « Situation physique » (Transport : panache de sédiments, ESA / Copernicus Sentinel-2B, CC BY-SA 3.0 IGO ; Conditions aux limites : thermographie d'une tour, Jim D'Aloisio, CC0 ; Péclet : panache thermique d'une bougie, Settles1, CC BY 3.0), avec légende, crédit et lien vers la page Commons.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 78AE3893FD4BF56D2EF517BB0F58477040025ABC05BD0AA2438BC4CD5AA55E16; `mftn/calculateurs/app.js` SHA-256 3FBEA9B5367947E286A18857A62EDB3D68327AC3B0775970578F5C858251CB47; `mftn/calculateurs/calc.js` SHA-256 6148AEF1DAC3F81342E126F36D99F9CD3E1977F97D05AD41ED89B8EDCDC560EC; `mftn/calculateurs/style.css` SHA-256 BC8B494E8913251ADBDA9F2B3892F296A03728FDC92E0CD5B66CA268DCD93209; `mftn/calculateurs/guide.js` SHA-256 7DF2A52F318DF9F3C8C312E20A87BAA9E325D4F8BA9816C17ACD398671748C5D; `mftn/calculateurs/equations.js` SHA-256 5EF3AEB8BFB04EDEB1EFB470080386DC9FA517017FFCC4820C6C1A4BC33CDE1E; `mftn/calculateurs/situations.js` SHA-256 551823DF5B7792B5A6B0416FD4A827D671DFE1C23D463566DF3FA62B1E128504 ; images : `mftn/calculateurs/img/Sediment_plume_at_sea_1280px.jpg` SHA-256 1CE0355D66D5595BE13278613EB79816C8C0F681BBC1B77BCAC0F3B940BFD37B; `mftn/calculateurs/img/Aqua_Tower_thermal_imaging.jpg` SHA-256 82BAA972F246801AF833E4BC3C52DDE85ECB3826D3BA7E4613BC7BEA56B0028B; `mftn/calculateurs/img/Schlieren-color-candle-plume.jpg` SHA-256 65025BFFF13D445AAB0A12C1681E016C84395DEF0AA10D128F7DA5A690499892.
- Contrôles : `node test_calc.js` (76 contrôles) ; chargement des images vérifié dans le navigateur intégré.
- Limites : auteurs et licences lus sur les pages Commons, non vérifiés autrement.

## Mise à jour des calculateurs v11 — 2026-11-03 21:19:57 +01:00 — Code
- Contenu : onglet « Ordre d'une différence » avec la différence centrée de la dérivée seconde (ordre 2), équation, interprétation et exploration S2-X1 mises à jour.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 B79D6B20E1A0E9D39C02B281644528C9E4131F9437708DB8A8710086A0803646; `mftn/calculateurs/app.js` SHA-256 EA0A8BD5A1A8349C976EB891D9D50B38ADA4EB408107A31BF2037637CE56E4DC; `mftn/calculateurs/calc.js` SHA-256 261CEBB4BA37B073223089C64B0FC7E4C4CE9A31C0B6A48FB8C837B7E66B993D; `mftn/calculateurs/style.css` SHA-256 BC8B494E8913251ADBDA9F2B3892F296A03728FDC92E0CD5B66CA268DCD93209; `mftn/calculateurs/guide.js` SHA-256 3B8C5721FD16AFA50FD9FD41CC595DFBEBEF09CB35656B40C8F47D36AF9F6EB6; `mftn/calculateurs/equations.js` SHA-256 9535EF9612CA776DDE3143A71F9F9BBF9C91D4B1DA619311CB79454A28973AD3; `mftn/calculateurs/situations.js` SHA-256 551823DF5B7792B5A6B0416FD4A827D671DFE1C23D463566DF3FA62B1E128504.
- Contrôles : `node test_calc.js` (77 contrôles, dont l'ordre 2 de la dérivée seconde) ; onglet chargé dans le navigateur intégré, aucune erreur de console.

## Correction de l'onglet Barre 1D — 2026-11-03 21:56:06 +01:00 — Code
- Contenu : quand les erreurs sont inférieures à 1e-9 K (bruit d'arrondi), l'axe du graphique d'erreur est figé à ±1e-6 K et un message l'explique (nœuds et centres de cellules à des abscisses différentes).
- Fichier : `mftn/calculateurs/app.js` SHA-256 274A8639CE3AE52493D64E6F069A2AF375B76CE0EAFAFB92A28D7973AFC4D604 (seul fichier publié ; les autres fichiers du site sont inchangés).
- Contrôles : `node test_calc.js` ; cas sans production (message affiché) et avec production q = 100 (pas de message) vérifiés dans le navigateur intégré.

## Mise à jour des calculateurs v12 — 2026-11-03 22:16:17 +01:00 — Code
- Contenu : onglets « EDP : classer » (schéma de dépendance, plus de ligne de comportement) et « EDP : comportement » (solutions seules, pictogramme du type choisi) dédoublonnés ; onglet « Neumann » renommé « Conditions aux limites discrétisées » avec la loi de Fourier (flux imposé et dérivée à discrétiser) ; exploration S1-K3 et réponses S1-D1 à S1-D3 mises à jour.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 4C8B1A4E5066A2C6975828C9F07845342ECCF604ECC3DE430FB13250CE6CB208; `mftn/calculateurs/app.js` SHA-256 0EC1CE3FE6617DCA29C3CEB24A9332991EC6A372B4BF9CF2AD5049F3BF29C4D1; `mftn/calculateurs/calc.js` SHA-256 261CEBB4BA37B073223089C64B0FC7E4C4CE9A31C0B6A48FB8C837B7E66B993D; `mftn/calculateurs/style.css` SHA-256 BC8B494E8913251ADBDA9F2B3892F296A03728FDC92E0CD5B66CA268DCD93209; `mftn/calculateurs/guide.js` SHA-256 1B0912285A372A1B2229037B46D240EE30DCEC8B68A2E29EF4BBD45F7E12AF3E; `mftn/calculateurs/equations.js` SHA-256 6108F9214C7C0DE1C69B232B4CF03B42B94AEE052F9FE3DFCD81014A83C14A61; `mftn/calculateurs/situations.js` SHA-256 ED632854435BFFE84F5B8F60AF964EF6F97CCEABEDEA0BD83479F2F498DBDDCB.
- Contrôles : `node test_calc.js` (77 contrôles) ; onglets EDP (trois types) et « Conditions aux limites discrétisées » chargés dans le navigateur intégré, aucune erreur de console.

## Mise à jour des calculateurs v13 — 2026-11-03 22:30:34 +01:00 — Code
- Contenu : schémas nommés explicites ou implicites ; Chaleur 1D + Dufort–Frankel et Richardson (explicites à trois niveaux) ; Advection + Beam–Warming (explicite) et centré implicite (système tridiagonal cyclique) ; équations ; explorations S3-X6 et S3-X7.
- Fichiers et empreintes : `mftn/calculateurs/index.html` SHA-256 3DE8C039F1E2B2CECF49FDF85A82E65A0034BBE1387DBA0A582811E5E5E9478B; `mftn/calculateurs/app.js` SHA-256 8FAE33CD74A86F8EC1FAF2F11E51B33A6AFF88F4677E912522B4223EE48B655F; `mftn/calculateurs/calc.js` SHA-256 77678D46CB568982862C533CDE52468E6239A1EA4525AC25A7DAC23D67A02341; `mftn/calculateurs/style.css` SHA-256 BC8B494E8913251ADBDA9F2B3892F296A03728FDC92E0CD5B66CA268DCD93209; `mftn/calculateurs/guide.js` SHA-256 67FA90872C9FB03046D2EB6AF2F04B5E5F216CC06910DE49211D362655C0181D; `mftn/calculateurs/equations.js` SHA-256 1DD53849BB0537C0C9815308D46EC651CE3D841063707C8C6830A0FD4A3B857A; `mftn/calculateurs/situations.js` SHA-256 ED632854435BFFE84F5B8F60AF964EF6F97CCEABEDEA0BD83479F2F498DBDDCB.
- Contrôles : `node test_calc.js` (82 contrôles, dont stabilité et exactitude des nouveaux schémas) ; onglets Chaleur 1D et Advection chargés dans le navigateur intégré avec les nouvelles explorations, aucune erreur de console.
