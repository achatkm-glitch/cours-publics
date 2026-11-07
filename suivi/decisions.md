# Décisions — cours-publics

> Arbitrages durables avec preuve. Ne pas contredire une décision sans créer une nouvelle entrée qui la remplace explicitement.

## Format d'une entrée

```
### [DATE] Titre de la décision
- **Décision** : ce qui a été convenu
- **Raison** : pourquoi
- **Preuve** : commit SHA, message de session, ou citation
- **Responsable** : qui a tranché
```

---

### 2026-10-21 Adoption de la structure suivi/ pour la coordination multi-IA
- **Décision** : le projet utilise `suivi/contexte.md`, `suivi/decisions.md`, `suivi/passations.md`, `suivi/verrous.md`
- **Raison** : structure éprouvée sur le projet MFTN ; distinction claire contexte / décision / passation / verrou
- **Preuve** : session Claude https://claude.ai/code/session_01GYJEdNoE6e5XbmwojPNbP9
- **Responsable** : Mohammed Khalij

### 2026-10-21 Push GitHub délégué à ChatGPT
- **Décision** : le push de `index.html` après le redesign UI est confié à ChatGPT
- **Raison** : choix de Mohammed Khalij
- **Preuve** : session Claude https://claude.ai/code/session_0157uDKNNCLR5vqbNpYyZVDC
- **Responsable** : Mohammed Khalij

### 2026-10-21 12:42:36 +02:00 — Consignes de reprise et de coordination
- **Reçu par** : Codex.
- **Attribué à** : Codex, pour la vérification du push et du déploiement ; chaque intervenant pour ses règles de session.
- **Décision** : lire contexte, décisions, passations et verrous avant intervention ; journaliser chaque message de Mohammed avec horodatage, réception et attribution ; verrouiller avant modification, respecter les autres détenteurs, tracer la passation et libérer en fin de passe.
- **Preuve** : message utilisateur de cette conversation, reçu le 21 octobre 2026.
- **Vérification demandée** : confronter la mention de push en attente à l'état Git réel avant toute nouvelle action.


### 2026-10-21 12:43:42 +02:00 — Inscription durable des règles de session
- **Reçu par** : Codex.
- **Attribué à** : Codex.
- **Décision** : inscrire les règles de coordination communes dans CLAUDE.md, applicables à Claude, ChatGPT et Codex.
- **Preuve** : demande de Mohammed : « note le quelque par comme regle dans le fichier adequate ».


### 2026-10-21 13:19:09 +02:00 — Vérification des nouveautés à committer
- **Demande** : Mohammed demande « y a des nouveauté a commite ».
- **Reçu par** : Codex.
- **Attribué à** : Codex.
- **État** : traité ; avant journalisation, arbre propre, aucun fichier non suivi ; après fetch, main en avance d'un commit sur origin/main : 0a4512a. Aucun commit ni push effectué pendant cette vérification.

### 2026-10-21 13:21:25 +02:00 — Commit et push autorisés
- **Demande** : « oui fait le », en réponse à la proposition de committer les traces et pousser le commit local.
- **Reçu par** : Codex.
- **Attribué à** : Codex.
- **État** : autorisé ; préparation du commit de suivi et push sur origin/main. Résultat vérifiable dans Git et la réponse de session.

### 2026-10-21 13:24:08 +02:00 — Coordinateur, responsables et veille
- **Demande** : créer un coordinateur et les responsables de tâche, avec une veille permettant au coordinateur de surveiller et prendre le relais.
- **Reçu par** : Codex.
- **Attribué à** : Codex pour installation ; coordinateur pour suivi et attribution opérationnelle.
- **État** : en cours ; trois périmètres retenus : documents/provenance, interface/navigation, publication/contrôles. Relais seulement après libération explicite des verrous.


### 2026-10-21 13:25:15 +02:00 — Équipe opérationnelle et veille installées
- **Reçu par** : Codex ; **Attribué à** : coordinateur 01a15e34-b0f6-7932-b3b2-7061543849a0.
- **État** : traité ; quatre conversations créées, première activité confirmée ; veille-coordinateur-cours-publics ACTIVE toutes les 30 minutes.
- **Arbitrage** : trois périmètres distincts, suivis centraux coordonnés ; relais après libération explicite seulement ; notifications uniquement sur évolution exploitable.
- **Preuves** : identifiants dans suivi/equipe.md, retours create_thread, wait_threads et automation_update de cette session.

### 2026-10-21 13:25:36 +02:00 — Diagnostics initiaux et coordination centrale
- **Demande** : établir les priorités en lecture seule après installation, consulter les responsables et maintenir l'état de l'équipe.
- **Reçu par** : Codex coordinateur.
- **Attribué à** : Codex coordinateur pour consolidation ; responsables pour leurs diagnostics délégués.
- **État** : traité pour la passe initiale. Trois diagnostics reçus ; aucune refonte, modification du site, commit, push ou publication autorisés par cette demande.
- **Arbitrage** : seul le manque de provenance du PDF Fluent est une piste documentaire à clarifier ; les remarques d'interface restent des pistes sans modification autorisée. Publication déjà synchronisée.
- **Preuves** : conversations 01a15e34-56a1-76e3-b2f9-2b85a9882b8d, 01a15e34-608c-7492-81f0-6195d7db789d, 01a15e34-6a6c-7bd2-971c-fb2862fe0842 ; git HEAD/origin/main/ls-remote = 11f3835 ; diagnostic Pages 39591382907.

### 2026-10-21 16:46:06 +02:00 — Attribution de publication du PDF C1
- **Instruction** : publier dans Cours publics le PDF complet officiel `MFTN_Chapitre01_slides.pdf` après bilan de vérification du responsable C1, en contrôlant son identité/version et en traçant la destination.
- **Auteur / reçu par** : Mohammed, transmis au coordinateur par le relais du coordinateur MFTN ; reçu par Codex coordinateur Cours publics.
- **Attribution** : Codex coordinateur Cours publics, conversation `01a15e34-b0f6-7932-bb2b-7061543849a0`.
- **État** : en attente de la fin de la passe active du responsable C1 (`01a0c58e-17c4-7590-baef-015b917ebda1`) et de la livraison accompagnée de ses contrôles ; aucune version antérieure ne sera publiée.
- **Preuve** : message de relais reçu dans la conversation source `01a0f910-20b3-7941-81a8-1211e3a95e82` ; attribution MFTN consignée dans `C:\Latex\MFTN\coordination.md` et `passation_iA.md`.


### 2026-10-21 17:28:00 +02:00 — Mise à jour du PDF C1 en ligne
- **Instruction** : mettre à jour la copie publique du chapitre 1 avec le PDF du 21/10 17:17.
- **Auteur / reçu par** : Mohammed ; reçu par Code (Claude Code, session MFTN).
- **Attribution** : Code, par autorisation explicite de Mohammed ; le verrou Codex de 16:46 (sans activité consignée depuis) est repris pour `mftn/chapitre-01-slides.pdf` et les suivis.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### [2026-10-21 15:32] Adoption du plugin scientific-workflow
- **Instruction / Décision** : Ce projet adopte explicitement le plugin `scientific-workflow-plugin` et sa gouvernance (politique projet-modele). Toute production ou audit de contenu scientifique passe par le coordinateur ou le skill adapté.
- **Reçu par** : Claude
- **Attribué à** : Claude (mise en place), tous les agents (application)
- **Raison** : Garantir la rigueur scientifique et la traçabilité des figures, cours et slides publiés sur le site.
- **Preuve** : commit 9d295d8 — CLAUDE.md + AGENTS.md mis à jour

### 2026-11-03 17:05:31 +01:00 — Publication des calculateurs MFTN
- **Instruction** : « alimente le site internet avec cette page internet » (page des calculateurs de simulation du dossier `Peda_inv/site` du dépôt MFTN).
- **Auteur / reçu par** : Mohammed ; reçu par Code (Claude Code, session MFTN).
- **Interprétation** : publier le site de calculateurs (HTML, CSS, JavaScript statiques) dans `mftn/calculateurs/` et l'ajouter à l'accueil (carte et lien latéral).
- **Attribution** : Code, après vérification qu'aucun verrou n'était actif.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 17:24:51 +01:00 — Mise à jour des calculateurs MFTN
- **Instruction** : « les fiches doivent amener à utiliser ce calculateur et vice versa », « met à côté l'erreur comparée à la solution », « met aussi le schéma volume fini », « pas de tableau de valeur », « différencie avec des couleurs », « peut-être voir où insérer le Pe ». Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée (« alimente le site internet avec cette page »).
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 17:30:54 +01:00 — Mise à jour des calculateurs MFTN (v4)
- **Instruction** : « pas de tableau, ça ne sert à rien », « Pe, mets-le autrement », « les fiches doivent permettre l'utilisation de ça aussi » ; antérieurement « les fiches doivent amener à utiliser ce calculateur et vice versa », « met à côté l'erreur comparée à la solution », « met aussi le schéma volume fini », « pas de tableau de valeur », « différencie avec des couleurs », « peut-être voir où insérer le Pe ». Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée (« alimente le site internet avec cette page »).
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 17:45:25 +01:00 — Mise à jour des calculateurs MFTN (v5)
- **Instruction** : « je voudrais ça aussi pour l'introduction », « les équations bien visibles, pas dans une ligne comme ça », « chapitre 1 dans le site manque le comportement, EDP, etc. : cette partie peut être illustrée ». Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 18:16:52 +01:00 — Mise à jour des calculateurs MFTN (v6)
- **Instruction** : « avant Jacobi au chapitre 2 il y a les schémas », « impact de l'ordre de la condition limite (ordre 1, 2, point fantôme) », « introduction : mise en situation pour illustrer, avec une figure », « garde l'essentiel (pas de profusion de données) dans tous les onglets », « interprétation à chaque modification de l'étudiant », « domaine de dépendance par type d'EDP, comme dans le cours ». Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 18:33:02 +01:00 — Mise à jour des calculateurs MFTN (v7)
- **Instruction** : « des images réalistes et des mises en situation physique en lien avec la thermique et la mécanique des fluides », « dans les fiches, des calculs à la main aussi », « le domaine de dépendance sur l'onglet de classification, si c'est dans le cours », « les équations déjà dans le cours, pas besoin de les écrire », « mets le git et les md à jour ». Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 19:39:07 +01:00 — Mise à jour des calculateurs MFTN (v8)
- **Instruction** : « on corrige tout, toi et ChatGPT, selon la règle FIFO » (audit AUD-2026-022 : profils à support compact pour la chaleur et l'onde, formulations des explorations). Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 20:03:01 +01:00 — Mise à jour des calculateurs MFTN (v9)
- **Instruction** : « on corrige tout selon la règle FIFO » (résidus de la contre-lecture de Codex sur AUD-2026-022 : compétences C2.7 et C3.5 présentées comme approfondissements). Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 20:49:13 +01:00 — Mise à jour des calculateurs MFTN (v10)
- **Instruction** : « garde les schémas vectoriels et les photos sourcées » ; accord explicite de l'utilisateur au téléchargement de trois images libres de Wikimedia Commons (réponse « Les trois »). Reçu par Code (Claude Code, session MFTN) ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`. Crédits et licences : `Peda_inv/CREDITS.md` du dépôt MFTN et légendes sous chaque photo.

### 2026-11-03 21:19:57 +01:00 — Mise à jour des calculateurs MFTN (v11)
- **Instruction** : « dans le site, ajouter dans “ordre d'une différence” la dérivée seconde ». Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 21:56:06 +01:00 — Correction de l'onglet Barre 1D (v11.1)
- **Instruction** : question de l'utilisateur sur le graphique d'erreur (bruit d'arrondi qui n'a pas à se superposer). Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuve dans `suivi/integration_mftn.md`.

### 2026-11-03 22:16:17 +01:00 — Mise à jour des calculateurs MFTN (v12)
- **Instruction** : « dédoublonne les onglets EDP » ; « le titre Neumann n'est pas le bon : ajouter Fourier, on parle de condition aux limites discrétisée » ; question sur le graphique d'erreur de l'onglet Barre 1D (traitée avant, v11.1). Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 22:30:34 +01:00 — Mise à jour des calculateurs MFTN (v13)
- **Instruction** : « il faut mettre l'implicite et l'explicite », « il faut aussi ajouter plus de schémas peut-être ». Reçu par Code ; publication déjà autorisée.
- **État** : traité (lecture : onglets Chaleur 1D et Advection) ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 22:36:23 +01:00 — Mise à jour des calculateurs MFTN (v14)
- **Instruction** : capture du graphique « Même courbes, échelle log » : « inutile » ; « essaye de mettre deux figures sur la même ligne ». Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 22:41:32 +01:00 — Mise à jour des calculateurs MFTN (v15)
- **Instruction** : captures des onglets « Conditions aux limites discrétisées » et « Conditions aux limites » : « ici faut mettre Neumann, Fourier ». Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-03 22:53:26 +01:00 — Mise à jour des calculateurs MFTN (v16)
- **Instruction** : « évite d'avoir deux courbes de même couleur », « sur un même graphique bien sûr ». Reçu par Code ; publication déjà autorisée.
- **État** : traité ; preuves dans `suivi/integration_mftn.md`.

### 2026-11-04 22:30:28 +01:00 — Synchronisation du site MFTN sur GitHub — Codex
Instruction utilisateur : « il faut synchroniser le github », après intégration locale du QR pointant vers la page publique. Interprétation : publier la version locale actuelle à quatre séances du calculateur vers cours-publics/mftn/calculateurs/ et mettre à jour sa carte d'accueil. Reçu par Codex. Prise en charge immédiate ; aucun verrou concurrent actif au démarrage.

### 2026-11-04 22:39:11 +01:00 — Publication GitHub Pages achevée — Codex
La version locale à quatre séances est publiée sur main. Le commit c880bf4 est confirmé par git ls-remote. La page publique a été chargée dans le navigateur : navigation S1–S4, accueil à quatre séances et QR visibles. Les contrôles HTTP confirment la version courante ; les empreintes du site et de ses assets correspondent à la source. La date de la carte d'accueil a été actualisée au 4 novembre 2026. Verrous libérés à la clôture.

### 2026-11-04 22:46:06 +01:00 — Précision de la description du calculateur Transport — Codex
Instruction utilisateur reçue par commentaire de navigateur sur le site local : « pas nécessairement une gaussienne il me semble. soit plus précis ». Prise FIFO par Codex : distinguer l'advection–diffusion valable pour un profil général du cas particulier d'une condition initiale gaussienne effectivement calculé et représenté. Synchronisation du miroir GitHub Pages comprise dans cette correction ; aucun changement aux équations ou calculs.

### 2026-11-04 22:48:50 +01:00 — Compacité des curseurs du calculateur MFTN — Codex
Instruction utilisateur reçue sur la capture de l'onglet EDP : « je les trouve très imposant la taille est grande comparer à la page ». Prise parallèle par Codex : ajuster la taille visuelle des curseurs sans réduire leur zone tactile ; modification CSS locale et miroir public, vérification visuelle.

### 2026-11-04 22:58:56 +01:00 — Publication vérifiée des corrections Transport et des curseurs — Codex
Le commit 020fc06 est confirmé sur origin/main. La page publique affiche le libellé général, explique le cas gaussien particulier, et sert la règle responsive des curseurs. Le navigateur confirme la page Transport et l'onglet EDP. Les verrous 105–106 sont libérés.
### 2026-11-04 23:00:04 +01:00 — Synchronisation du dépôt source MFTN vérifiée — Codex
Le commit b9936047ff0383fe6be7d80e288d635386ebf9f8 portant la source locale et la traçabilité des corrections est confirmé sur origin/main. Les modifications préexistantes des audits et de repo_index restent hors commit.
### 2026-11-04 23:05:45 +01:00 — Séquence visuelle du bloc Transport MFTN
- **Demande** : placer des exemples réalistes (photo, vidéo réelle si adaptée) avant le schéma simplifié de mise en problème.
- **Reçu par** : Codex ; **prise** : tâche 107, après vérification FIFO des tâches antérieures clôturées.
- **Source vidéo vérifiée** : USGS, « USGS Missouri River Dye Tracing Assessment », 1 min 42, domaine public ; vidéo distante 212 142 895 octets, non copiée au dépôt.
- **Portée prévue** : lien vers la vidéo USGS, photo existante, texte qui distingue transport et dispersion réels de la diffusion moléculaire idéalisée, schéma simplifié en dernier.
### 2026-11-04 23:13:03 +01:00 — Choix de diffusion pour la vidéo USGS
- **Décision** : garder le MP4 de 212 Mo hébergé par l’USGS et proposer le lien officiel à la demande ; ne pas dupliquer la vidéo dans le dépôt GitHub Pages.
- **Raison** : la page USGS confirme les droits domaine public, mais une copie de cette taille alourdirait fortement le dépôt et le site.
- **Preuve** : HEAD HTTP du média (212 142 895 octets) ; page officielle https://www.usgs.gov/media/videos/usgs-missouri-river-dye-tracing-assessment.
- **Responsable** : Codex, tâche 107.

### 2026-11-05 00:11:18 +01:00 — Libellé du site
- **Décision utilisateur** : désigner les séances simplement comme des « séances de cours » dans le paragraphe d’accueil ; retirer la mention « pédagogie inversée ».
- **Portée** : texte d’accueil uniquement, site local MFTN et miroir public.
- **Responsable** : Codex, tâche 109.

### 2026-11-05 00:17:49 +01:00 — Pentes et interactions des figures
- **Instruction utilisateur** : afficher une valeur de pente quand elle est utile et rendre les figures du site aussi interactives que possible, avec infobulles ou interactions.
- **Choix de mise en œuvre** : pente de régression sur les points positifs affichés, uniquement sur les courbes log-log de raffinement/erreur ; valeur explicitement nommée « pente observée ». Les graphes de séries donnent accès aux coordonnées au survol, au toucher et au clavier.
- **Responsable** : Codex, tâche 110.

### 2026-11-04 23:40:32 +01:00 — Clôture de la publication Transport — Codex
- La version publique utilise les scripts avec cache-buster 20261104-107d ; commit cours-publics e7141ed090e2910fe653bf981eef3d9331e7e34d, Pages run 41927003845 réussi.
- Inspection de la page publiée : photographie ESA et crédits, lien USGS et limite d’interprétation, mise en problème, schéma simplifié ; équations et calculateur toujours présents.
- Source MFTN synchronisée séparément ; aucun PDF ni calcul modifié. Verrous de cette passe libérés.

### 2026-11-04 23:59:13 +01:00 — Écriture adimensionnée de la solution gaussienne avec Péclet — Codex
- **Instruction reçue** : « y a-t-il une façon de l’écrire avec Pe ? si oui préfère cette écriture et mets-la aussi dans l’autre document », en référence à la formule du site local.
- **Prise FIFO** : tâche 108 par Codex. Le polycopié §9.5 contient déjà l’écriture avec $Pe_{\sigma_0}$ ; l’équation est ajoutée au site et au support projeté C2.
- **Périmètre public réservé** : mftn/calculateurs/equations.js, mftn/calculateurs/index.html et registres de tâche ; le rendu public et GitHub Pages seront contrôlés avant libération.

### 2026-11-05 00:04:45 +01:00 — Clôture de la publication du Pe — Codex
- Commits publics 71e222e5199d11b33ceddf7ed988ee94a7fb811a (formule) et d628eaac7e942a9ae33f55670a88351a799fc500 (passation/cache) confirmés sur origin/main ; Pages runs 41930186960 et 41930626952 réussis.
- La page publique avec cache-buster 20261104-108 rend l’écriture normalisée avec ξ, t* et Pe_{σ0}. Le polycopié contient déjà la même forme ; l’équation est aussi dans les diapositives C2 et leur PDF.
- Les verrous de publication sont libérés.


### Clôture tâche 111 — 2026-11-05 01:01:09 Europe/Paris (UTC+01:00) — Codex
La page Ordre sépare les familles de dérivées et présente les stencils seconde du polycopié, y compris les formules unilatérales et non uniforme. Le miroir est synchronisé sous cache-buster 20261105-111c. Contrôle technique local réussi ; contrôle Pages après push à terminer. Verrous libérés.


#### Rectificatif de clôture tâche 111 — 2026-11-05 01:06:13 Europe/Paris (UTC+01:00)
La publication est achevée : commit cdd12b354f749c190026e14312d106f77aff5286 poussé sur origin/main ; GitHub Pages run 41938241979 terminé avec succès ; page Ordre vérifiée en ligne.


### 2026-11-05 01:12:06 Europe/Paris (UTC+01:00) — Choix du type d’EDP et équation associée
- **Instruction utilisateur** : séparer les types de la page « EDP : comportement » au moyen de boutons radio (ou équivalent), rendre le type choisi plus visible et afficher l’équation correspondante.
- **Responsable** : Codex, tâche FIFO 112.
- **Périmètre** : mftn/calculateurs/index.html, app.js, equations.js, style.css et registres de suivi.
- **État** : en cours ; dernier état des verrous vérifié libre.

### Clôture tâche 112 — 2026-11-05 01:19:33 +01:00 Europe/Paris (UTC+01:00) — Codex
- Les trois choix EDP ont été vérifiés en ligne après déploiement ; l’équation et les réglages changent avec la sélection.
- Miroir public à l’identique de MFTN pour les quatre fichiers concernés. Commit de contenu 4f572acf7d8806415050c1ac2602b840de5a6b7e ; Pages run 41940350980 réussi.
- Verrou libéré. Vérification technique terminée ; validation scientifique indépendante et approbation utilisateur non effectuées.

### Instruction utilisateur / prise FIFO — tâche 113 — 2026-11-05 01:28:11 +01:00 Europe/Paris (UTC+01:00) — Codex
Ajouter un curseur pour Pe et faire réagir l’interprétation de la courbe du calculateur de transport. Pe doit rester cohérent avec a, D et σ₀ ; afficher un repère adimensionnel lié à l’instant courant. Source de définition à vérifier dans le chapitre 1, §1.4. Responsable : Codex, tâche FIFO 113.

### Clôture tâche 113 — 2026-11-05 01:38:36 +01:00 — Codex
Le curseur Pe actualise D et les courbes du profil de transport ; la jauge et le commentaire dynamique distinguent Pe<1, Pe=1 et Pe>1 par comparaison de t_d et t_c. Foσ₀(t), le déplacement du centre et la largeur normalisée sont également affichés. Essais locaux réalisés pour Pe=1, Pe=10 et a=0. Copie vérifiée identique à MFTN ; publication Pages à confirmer. Aucun PDF modifié. Validation scientifique indépendante non réalisée.


### Instruction utilisateur / prise FIFO — tâche 114 — 2026-11-05 01:51:30 +01:00 — Codex
Demande : sur la page EDP : comportement, rendre l’explication dynamique en fonction du bouton Elliptique, Parabolique ou Hyperbolique. Ajout prévu d’une synthèse immédiate du comportement sous l’équation et d’une transition visuelle réduite si l’utilisateur préfère moins d’animation. Responsable Codex ; publication après essais.

### Clôture tâche 114 — 2026-11-05 01:56:43 +01:00 — Codex
Synthèse dynamique liée au bouton ajoutée et déployée ; Pages run 41944835906 réussi. Contrôle navigateur public chargé ; équation et contrôles du type actif présents. Validation technique faite, relecture scientifique indépendante non réalisée, approbation utilisateur réservée.

### Instruction utilisateur / prise FIFO — tâche 115 — 2026-11-05 02:02:47 +01:00 Europe/Paris (UTC+01:00) — Codex
Déplacer les boutons Elliptique/Parabolique/Hyperbolique au début du bloc « Situation physique » et faire correspondre figure et équation au bouton choisi. Le code actuel met déjà à jour l’équation et les figures ; le sélecteur est à rapprocher de ce bloc.

### État technique tâche 115 — 2026-11-05 02:05:12 +01:00 — Codex
Sélecteur déplacé dans la situation physique avant le pictogramme. Les gestionnaires existants synchronisent l’équation, l’illustration correspondante et les réglages. Vérification syntaxique et diff terminée ; miroir identique à MFTN. Publication Pages à confirmer.

### Clôture tâche 115 — 2026-11-05 02:07:09 +01:00 — Codex
Sélecteur placé dans la carte de situation physique. Vérification en ligne des trois choix : équation, pictogramme, réglages et graphes correspondants. Pages run 41946133951 réussi. Aucun PDF modifié.

### Instruction utilisateur / prise FIFO — tâche 116 — 2026-11-05 02:10:20 +01:00 Europe/Paris (UTC+01:00) — Codex
Expliquer directement le graphe de l’onde sélectionné, en particulier les courbes de la légende t=0 et t=2,000. Ajouter un repère visuel et une explication adaptée aux valeurs c et t.

### Clôture tâche 116 — 2026-11-05 02:18:23 +01:00 — Codex
Le graphe distingue par sa légende le profil initial pointillé de la solution en trait plein ; une carte sous le graphe explique d’Alembert, centres, supports et recouvrement selon c et t. Pages run 41947434139 réussi, vérification navigateur faite.

### Instruction utilisateur / prise FIFO — tâche 117 — 2026-11-05 02:23:35 +01:00 — Codex
Expliquer le graphe parabolique qui superpose les courbes t=0, 0,500, 1,000 et 2,000 ; clarifier le code couleur, l’effet diffusif et les situations où les profils fusionnent.

### Publication tâche 117 — 2026-11-05 02:30:00 +01:00
Explication publiée dans le miroir du calculateur, visible lorsque le type parabolique est sélectionné. Pages run 41948746050 réussi pour le commit dc583fb8161631ab4bb7a7f04c3563dbbaf77e34. Contrôle navigateur effectué aux valeurs par défaut ; contrôle technique réussi. Le rendu couvre couleur/temps, étalement et aplatissement, effet de D, symétrie et queues non nulles du modèle continu. Cas de sources rapprochées relu dans le code, mais non manipulé dans le navigateur. Validation scientifique indépendante non réalisée.

### Instruction utilisateur / prise FIFO — tâche 118 — 2026-11-05 10:04:35 +01:00 — Codex
Harmoniser Transport et Péclet, sans fusionner les onglets : notation commune a vitesse, D diffusivité, φ variable transportée ; définition de Pe aux échelles L, σ₀ et h ; garder le signe de Pe dans les coefficients stationnaires ; distinguer objectif physique et objectif numérique. Référence de coordination MFTN : instruction 64, tâche 124.

### Clôture — tâche 118 — 2026-11-05 10:18:49 +01:00 — Codex
Miroir `index.html`, `app.js`, `equations.js`, `guide.js` commité (`fde3a18bb9eaddf7a0ca2fe25ebf8d737abd8bb8`) et confirmé sur origin/main. SHA source/miroir identiques. GitHub Pages run 42001173087 réussi ; onglets Transport et Péclet contrôlés au navigateur. Verrou libéré.

### Instruction utilisateur / prise FIFO — tâche 119 — 2026-11-05 10:26:11 +01:00 Europe/Paris
Sur le graphe d’introduction, garder la bulle de coordonnées et y ajouter une lecture contextuelle qui varie selon la série exacte ou numérique, la valeur survolée et les réglages actifs. Codex prend la tâche ; réserver `mftn/calculateurs/app.js`, `style.css`, `index.html` et les registres.

État : implémentation en cours ; l’infobulle ajoute maintenant une interprétation contextualisée à la série, l’écart local, N, C et t. Les sources MFTN ont été copiées dans le miroir avec des SHA-256 identiques. À terminer : publier, inspecter le texte au survol sur la page HTTPS, puis libérer le verrou.

### Clôture tâche 119 — 2026-11-05 10:37:17 Europe/Paris (UTC+01:00) — Codex
Les fichiers du miroir reflètent la source MFTN (SHA-256 identiques). Le commentaire exact identifie le transport sans déformation ; le commentaire numérique classe l’effet observé et indique l’écart local, N, C et t. Vérification sur la page publiée : points du graphe parcourus au clavier, puis contrôle avec N=200 confirmant la mise à jour dynamique. Pages run 42003125602 réussi ; miroir origin/main 530e5e506f50ac0274d7e3e4a03dc8327552f77e. Aucun calcul du moteur modifié.

### Instruction utilisateur / prise FIFO — tâche 120 — 2026-11-05 11:07:29 Europe/Paris (UTC+01:00) — Codex
Ne pas introduire de nouvelle notation dans le calculateur Transport ; rester cohérent avec le polycopié. Le chapitre 2, section 2.9, emploie Pe_sigma0, xi et t* dans la solution exacte normalisée. Codex prend la première tâche disponible et réserve la source MFTN, le miroir et les registres. Retrait prévu des notations tc, td, Fo_sigma0 et des rapports normalisés supplémentaires ; explication conservée en texte courant. Preuve attendue : vérification JavaScript, source/miroir synchrones et affichage public inspecté.
Clôture tâche 120 — 2026-11-05 11:13:32 Europe/Paris (UTC+01:00) : notation Transport alignée sur chap. 2 §2.9 ; scripts contrôlés ; Pages run 42008673233 réussi, page HTTPS inspectée ; commit beb3b56a7052a25182ac939dbed7a91a86d5037a confirmé sur origin/main.

| 121 | 2026-11-05 11:21:55 +01:00 | Utilisateur | Situation EDP comportement : préciser l’état thermique initial et expliquer que les deux pics du graphe parabolique viennent de deux zones chaudes initiales. | Codex (prise FIFO) | en cours ; source principale MFTN puis miroir, contrôle navigateur public requis | MFTN tâche 129 ; mftn/calculateurs/app.js, situations.js |

Clôture tâche 121 — 2026-11-05 11:40:02 +01:00 : situation parabolique et profil initial liés dynamiquement ; cas d’écart 4, 0,5 et 0 m contrôlés ; Pages run 42012043991 réussi ; verrou libéré.

### Instruction utilisateur / prise FIFO — tâche 122 — 2026-11-05 11:45:20 +01:00 — Codex
Sur le graphe parabolique, conserver t=0 comme repère et remplacer les coordonnées inutiles par une explication propre à chaque courbe de temps. Le code numérique des courbes reste inchangé. Source MFTN ; miroir cours-publics réservé pour synchronisation et publication.

### Clôture tâche 122 — 2026-11-05 11:51:24 +01:00 — Codex
Publié : l’infobulle du graphe parabolique conserve l’instant et présente une explication du profil initial ou de la diffusion, sans x/u. Page et script HTTPS répondent 200 ; Pages run 42013908439 réussi. Vérification visuelle au pointeur non réalisée (API CUA indisponible). Commits MFTN 9572351, cours-publics d8d7fe3 ; empreintes dans version_traceability.md du dépôt MFTN. Verrou libéré.

| 123 | 2026-11-05 12:55:12 +01:00 | Utilisateur | Dans « EDP : classer », remplacer les curseurs des coefficients A, B, C par un réglage du discriminant Δ et mieux expliquer la valeur u dans le cas non linéaire. | Codex | terminée, publiée et contrôlée | Pages run 42025432138 ; miroir commit f6cca4b, clôture dans suivi/passations.md |
| 124 | 2026-11-05 13:23 +01:00 | Utilisateur | Au survol de chaque figure, afficher une explication concise et claire ; vérifier toutes les figures sans donner les réponses aux questions posées. | Codex | terminée, source et miroir contrôlés ; publication Pages à confirmer | MFTN tâche 133 ; passations/124 |
### 2026-11-05 13:16:02 Europe/Paris (UTC+01:00) — tâche miroir 123
Dans « EDP : classer », les curseurs de coefficients sont remplacés par Δ direct ; l’exemple non linéaire explique u(P), la valeur de l’inconnue en un point, et le discriminant local. Source de référence : `C:\Latex\MFTN\chapters\chapter01.tex` (formule et exercice déjà présents). Aucun contenu nouveau ni PDF.

| 125 | 2026-11-05 14:16 +01:00 | Utilisateur | Dans le calculateur Barre 1D, fixer L=1 m et comparer maillages uniforme et non uniforme. | Codex (prise FIFO) | terminée, publiée et vérifiée ; commit miroir 8129766, page HTTP 200 | tâche 135 MFTN ; suivi/passations.md |
| 126 | 2026-11-05 14:40 +01:00 | Utilisateur | La vidéo USGS du Missouri ne convient pas ; trouver et mettre une meilleure vidéo pour la situation Transport. | Codex (prise FIFO) | terminée et publiée : source UC San Diego liée, légende scientifique précisée ; Pages run 42039243844 réussi | tâche 136 MFTN ; suivi/passations.md |
| 127 | 2026-11-05 15:04:00 +01:00 | Utilisateur | Dans « Ordre d’une différence », ajouter comme dans « EDP : comportement » un choix entre dérivée première et dérivée seconde. | Codex (prise FIFO, miroir) | terminée et publiée : choix entre dérivées, formules et graphe associés ; Pages run 42041756935 réussi ; commits MFTN cc1175a / miroir f186186 | tâche 137 MFTN ; Peda_inv/site/index.html, app.js, style.css |
| 128 | 2026-11-05 15:11:33 +01:00 | Utilisateur | Le site doit fonctionner sur tablette et téléphone ; choisir des valeurs initiales adaptées aux apprentissages et vérifier les réglages des explorations guidées. | Codex (prise FIFO, miroir) | terminé et publié ; run Pages 42045456301 réussi ; audit et limites consignés | MFTN 91f7e20 ; miroir dc62b7e ; passation MFTN |

| 129 | 2026-11-05 15:41 +01:00 | Utilisateur | Généraliser intelligemment les explications des infobulles sur toutes les figures et tous les graphes du site, selon leur contenu et les réglages, sans livrer les réponses aux exercices. | Codex (prise FIFO, miroir) | terminée et publiée ; mirror commit b914185, Pages run 42049578189 réussi | tâche 139 MFTN, mftn/calculateurs/app.js et index.html |

### 2026-11-05 — Correspondance entre schéma du tube et courbe d’onde (tâche miroir 130)
- **Décision** : remplacer le train sinusoïdal du pictogramme hyperbolique par une bosse initiale localisée et expliquer son lien avec le profil pointillé à t=0 et les deux bosses de la solution.
- **Raison** : rendre lisible l’origine des deux bosses représentées dans le calculateur.
- **Preuve** : commentaire navigateur utilisateur du 2026-11-05, onglet `#edpb`.
- **Responsable** : Codex, tâche miroir 130.
### 2026-11-05 — Animation du schéma de diffusion et explication des bosses (tâche miroir 131)
- **Décision** : relier l’animation du schéma physique aux réglages et au calcul du profil de chaleur ; clarifier qu’une bosse initiale correspond à chaque zone chaude prescrite et corriger la position dessinée selon l’écart réglé.
- **Raison** : la représentation précédente montrait deux bosses pour deux zones, mais leur distance graphique ne correspondait pas à l’écart indiqué, et le schéma ne suivait pas l’évolution temporelle.
- **Preuve** : commentaires navigateur utilisateur du 2026-11-05, onglet `#edpb`.
- **Responsable** : Codex, tâche miroir 131.
| 132 | 2026-11-05 16:46:45 +01:00 | Utilisateur | Rendre les équations lisibles sous forme mathématique graphique et vérifier tout le site. | Codex (prise FIFO, tâche MFTN 142) | en cours : synchroniser la conversion KaTeX depuis le dépôt source, vérifier les pages et publier | C:\Latex\MFTN\Peda_inv\site ; tâche 142 |

### Tâche miroir 132 — avancement — 2026-11-05 17:01:15 Europe/Paris (UTC+01:00)
Rendu math inline KaTeX implémenté et contrôlé dans le dépôt source ; équations et symboles réels sont typographiés, les phrases explicatives ne sont pas transformées. Code miroir synchronisé aux mêmes SHA que la source. Référence distante à pousser et déploiement Pages à vérifier.

| 132 | 2026-11-05 17:14:29 +01:00 | Utilisateur | Rendre les équations lisibles sous forme mathématique graphique et vérifier tout le site. | Codex (prise FIFO, tâche MFTN 142) | code poussé au miroir (`d9dcef1`) et source MFTN (`63e9355`) ; rendu et contrôle local OK. Le Pages run 42061088298 a échoué au déploiement (502) ; relance incohérente et publication publique à revérifier après nouveau déclenchement | C:\Latex\MFTN\Peda_inv\site ; tâche 142 ; passation 2026-11-05 17:14:29

| 132 | 2026-11-05 17:17:23 +01:00 | Utilisateur | Rendre les équations lisibles sous forme mathématique graphique et vérifier tout le site. | Codex (prise FIFO, tâche MFTN 142) | TERMINÉE : source/miroir poussés, Pages run 42062434043 réussi, page publique contrôlée sur Barre 1D, verrous libérés | MFTN HEAD 7d2a915 ; miroir HEAD 709dfa7 ; passations MFTN et miroir, 2026-11-05 17:17:23

| 133 | 2026-11-05 17:26:51 +01:00 | Utilisateur | Remplacer la thermographie de la section Conditions aux limites, jugée peu parlante, par une illustration plus pertinente avec légende exacte. | Codex (prise FIFO, miroir tâche 143) | terminée et publiée : Pages run 42065379910 réussi ; thermogramme contrôlé en ligne, commits source 3a83e84 / miroir 8dc0dad | MFTN `Peda_inv/site`, miroir `mftn/calculateurs`, passation 143 |

Miroir tâche 133 — image de la section Conditions aux limites remplacée par FensterIR_Blower_Door.jpg (Sönke Krüll, CC BY 3.0). La légende indique que le thermogramme montre une fuite d’air autour d’une fenêtre de toit pendant un essai de dépression et le distingue des modèles mathématiques représentés dans le schéma. Code et image synchronisés depuis MFTN ; aperçu local vérifié.

### 2026-11-05 2026-11-05 17:43:55 +01:00 — Couleurs distinctes par graphe (tâche miroir 134)
- Décision : chaque série tracée dans un même graphe du calculateur doit avoir sa propre couleur, même lorsque plusieurs méthodes ou maillages sont comparés.
- Raison : le graphe Barre 1D montrait des courbes de différences finies et volumes finis avec la même couleur ; seuls les marqueurs différaient.
- Preuve : capture utilisateur du graphe solution et erreur/solution analytique.
- Responsable : Codex, prise FIFO après clôture de la tâche miroir 133.

### Rectification de date — tâche miroir 134 — 2026-11-05 17:52:27 +01:00
L’horodatage de la décision précédente est mal formé (date répétée). Heure réelle de la prise FIFO consignée dans `suivi/passations.md` : 2026-11-05 17:43:55 +01:00. La décision reste inchangée.

### 2026-11-05 17:57:31 +01:00 — Erreur de la barre et maillage ajustable (tâche miroir 135)
Décision de présentation : nommer explicitement l’erreur signée du graphe et distinguer la norme maximale en valeur absolue. Ajouter un cas simple comparant DF nodal et VF centré sur un maillage uniforme, puis rendre paramétrable l’étirement du maillage non uniforme sans appeler cela un maillage arbitraire point par point. Auteur : Codex, prise FIFO.

### 2026-11-05 19:19:44 +01:00 — Animation de l’onde et cohérence du site
- Instruction utilisateur : créer une animation dans la situation physique de « EDP : comportement » (#edpb), montrant l’évolution du profil initial en deux bosses se propageant en sens opposés.
- Attribution : Codex, prise FIFO après la libération du verrou Claude sur Peda_inv/ (tâche 148).
- Preuve : commentaire utilisateur du 2026-11-05, navigateur local #edpb.
- Instruction complémentaire reçue : le panneau de réglages de « Chaleur » (#chaleur) doit être flottant comme les autres ; tâche 152 en attente derrière les tâches 149–151.

### Tâche 149 — clôture — 2026-11-05 21:08:52 +01:00 — Codex
Animation hyperbolique #edpb synchronisée avec la source MFTN ; commit miroir `66100f0bf9dcf6cd537a6c14cc5369212656ef79`, GitHub Pages run `42100338432` réussi, contrôle HTTP 200 de la page et du script déployés. Verrous du miroir libérés.

### Tâches 150–151 — 2026-11-05 21:12:34 +01:00 — Codex
Tâche 150 close sans animation récapitulative supplémentaire dans #edpc (la synthèse simultanée est préférable au doublon temporel de #edpb). Réservation miroir tâche 151 : animation contrôlable #adv, après prise FIFO Codex dans la source MFTN ; `calc.js` reste verrouillé par Claude.

### Tâche 151 — avancement — 2026-11-05 21:27:35 +01:00 — Codex
L’animation #adv est intégrée et synchronisée avec la source MFTN ; contrôle syntaxique, suite numérique et empreintes validés. Le commit et le contrôle public restent à faire ; aucune inspection visuelle publique encore réalisée.

### Clôture tâche 151 / prise tâche 152 — 2026-11-05 21:36:56 +01:00 — Codex
Animation #adv publiée (Pages run `42104208823`, HTTP 200). La tâche suivante de la FIFO est le panneau flottant de Chaleur (#chaleur), sans scrollbar imbriquée.
### Clôture tâche 152 — 2026-11-05 21:43:34 +01:00 — Codex
Chaleur (#chaleur) : panneau flottant compact, sans scrollbar interne sur écran large ; règles responsives existantes préservées. Pages run 42105651143 réussi ; contrôle HTTP 200 page/CSS ; inspection visuelle non effectuée.
| 134 | 2026-11-06 00:00:43 +01:00 | Utilisateur | Audit/corrections ciblées du calculateur public MFTN, priorité à #edpb : contrôles d’animation, retrait des résultats avant calcul manuscrit, vérification scientifique elliptique/parabolique/hyperbolique ; préserver l’architecture et les fonctions. | Codex (prise FIFO) | en cours — source miroir uniquement ; aucune modification du dépôt MFTN ni déploiement avant contrôles | tâche miroir 157 |

| 135 | 2026-11-06 00:04:03 +01:00 | Utilisateur | Intégrer cette mission à l’amélioration continue et produire un livrable effectivement contrôlé. | Codex | en cours — cycle audit → correction → vérifications → livraison tracé dans passation 157 | tâche miroir 157 |

| 136 | 2026-11-06 00:08:15 +01:00 | Utilisateur | Maintenir la surveillance avec pour objectif un travail livrable pour les séances. | Codex | en cours — terminer et contrôler la livraison #edpb, puis rendre visibles les suites par séance dans la passation | tâche miroir 157 |

### Tâche miroir 157 — clôture du lot #edpb — 2026-11-06 00:15:06 +01:00 — Codex
Livrable ciblé contrôlé : les trois réponses S1-K1 à K3 sont derrière une consultation explicite après le calcul manuscrit ; le modèle elliptique ne propose pas d’animation ; les modèles diffusif et ondulatoire restent animés ; le changement d’onglet arrête bien l’onde. Audit numérique interne des trois modèles et contrôle navigateur local réalisés. La diffusivité de l’exemple parabolique est signalée comme illustrative. Cette clôture ne vaut pas audit complet des quatre séances ni validation scientifique par un relecteur indépendant. Publication Pages à vérifier après commit.

### Tâche miroir 157 — publication vérifiée — 2026-11-06 00:17:21 +01:00 — Codex
Commit `f15a20f822fe82af118631d1d44b8513327d4c2b` présent sur `origin/main`. GitHub Pages run `42128262801` terminé avec succès. Page et ressources `style.css`, `calc.js`, `app.js` en HTTP 200 ; l’HTML sert le cache-buster `20261106-157a` et le JavaScript public contient les corrections du lot. Verrous libérés. Le niveau technique est atteint pour le lot #edpb ; validation scientifique indépendante non atteinte.

### 2026-11-07 — Tâche 180 : alignement des mises en situation MFTN
- **Décision** : vérifier les descriptions du site au regard des quatre fiches, retirer le mode d’emploi redondant de l’introduction et corriger les écarts concrets dans le miroir public, sans modifier les fiches ni les calculateurs.
- **Raison** : distinguer le cas étalon S1 sans source des exercices avec production, et clarifier le rôle des bancs numériques utilisés dans les séances.
- **Preuve** : consigne utilisateur du 2026-11-07 ; source C:\Latex\MFTN\Peda_inv\site et miroir mftn/calculateurs.
- **Responsable** : Codex.

### 2026-11-07 — Tâche 183 : situations contextualisées
- **Décision** : décrire pour chaque calculateur le cas modélisé, ses simplifications et le but pédagogique de celles-ci ; distinguer schéma de contexte physique et banc numérique quand ils diffèrent.
- **Preuve** : instruction utilisateur et capture du nœud Jacobi/Gauss–Seidel ; fiches S1–S4 et fichiers `mftn/calculateurs/situations.js`.
- **Responsable** : Codex.

### Tâche miroir 184 — 2026-11-07 12:00:13 +01:00 — Lien de retour vers l’accueil général
- **Instruction utilisateur** : « il manque peut-être le retour au site général public » (capture du calculateur MFTN).
- **Prise FIFO** : Codex réserve la tâche 184, limitée au miroir public.
- **Décision** : ajouter dans l’en-tête un lien distinct vers https://achatkm-glitch.github.io/cours-publics/ ; conserver le QR code et le lien vers le calculateur.
- **Périmètre** : mftn/calculateurs/index.html et registres de suivi ; aucun autre fichier du site.

### Clôture tâche miroir 184 — 2026-11-07 12:02:08 +01:00 — Publication vérifiée
Le lien « ← Retour au site général des cours » cible l’accueil public https://achatkm-glitch.github.io/cours-publics/. Le lien voisin est renommé « Ouvrir le calculateur ». Commit 0735a05a4cd14f94a0afa34bbe55ed5a299bba3 poussé sur main ; GitHub Pages run 42366374198 réussi ; page publique HTTP 200 et les deux liens y sont présents. Arbre de travail propre.

### Tâche miroir 185 — 2026-11-07 12:06:45 +01:00 — Cohérence de la charte graphique MFTN
- **Instruction utilisateur** : harmoniser visuellement les calculateurs avec le site général (captures du site général et du calculateur).
- **Prise FIFO** : Codex, après libération de la tâche miroir 184 ; travail coordonné avec la source MFTN tâche 188.
- **Décision** : rapprocher palette, fond, typographie et bandeau de marque de l’accueil général, en préservant les calculateurs, le thème sombre et l’usage mobile.
- **Périmètre réservé** : mftn/calculateurs/index.html, style.css et registres ; mise à jour concordante de Peda_inv/site/.


### Clôture tâche miroir 185 — 2026-11-07 12:14:19 +01:00 — publication vérifiée
Le thème du calculateur MFTN est harmonisé avec l’accueil général. Commit `96758d277bd17eb1bc1f0ad63deaf649e8b4fd02` poussé ; GitHub Pages run 42367166819 réussi. La page publique et le CSS `style.css?v=20261107-188a` répondent HTTP 200 ; le bandeau, le lien général et le thème clair par défaut sont présents. Les verrous sont libérés. Inspection visuelle automatisée indisponible ; le rendu est soumis au contrôle de l’utilisateur.

### Tâche miroir 186 — publier le chapitre 1 du poly — 2026-11-07 12:20:00 Europe/Paris (UTC+01:00)
- **Instruction utilisateur** : « publie le chapitre un du poly dans le site public ».
- **Source** : PDF officiel MFTN, chapitre 1 entre les pages PDF 7 et 45 incluses, signet du chapitre 2 à la page 46 ; extrait contrôlé avant mise en ligne.
- **Prise FIFO et décision** : Codex réserve l’extrait PDF public, l’entrée correspondante de `index.html` et les registres. Le fichier sera clairement indiqué comme extrait du poly en version de travail.
- **Publication** : commit et push autorisés par la demande ; vérifier le déploiement et l’accès public au PDF.


### Tâche miroir 187 — sélecteur de dérivée dans « Ordre » — 2026-11-07 12:36:02 +01:00
- **Instruction utilisateur** : le choix dérivée première/seconde ne met pas à jour les équations et les autres résultats.
- **Prise FIFO** : Codex ; dépôt miroir vérifié sur `main`, `origin/main` au commit `2a69882`, index et scripts libres dans la dernière passation.
- **Diagnostic** : le sélecteur radio est hors des formulaires surveillés ; confirmer et brancher son événement `change` sur le recalcul complet de l’onglet.
- **Périmètre** : `mftn/calculateurs/app.js`, `index.html` et les registres publics. Synchroniser le script et son cache versionné avec la source MFTN.

### Clôture tâche miroir 187 — sélecteur de dérivée — 2026-11-07 12:41:36 +01:00
Correctif publié sous le commit 6d6e14548c2b4c3432ff3f32d7a6f65d6bc490d5 ; Pages run 42369152962 réussi. Page et script HTTP 200, nouvel écouteur présent. Vérification interactive impossible dans la session ; limitation consignée dans la passation.

### Tâche miroir 188 — libellés trop étroits dans l’onglet « Ordre » — 2026-11-07 12:45 +01:00
Instruction utilisateur avec capture. Codex prend la première tâche libre après la publication du sélecteur. Simplifier la présentation des deux intitulés du panneau de réglages sans modifier les paramètres ni le calcul ; synchroniser l’index public.

### Clôture tâche miroir 188 — libellés de raffinement — 2026-11-07 12:46:31 +01:00
Intitulés clarifiés dans les deux sites. Les valeurs et les calculs ne changent pas. Commit miroir 1aa3687abf68b1ff8f7fa37d0a9beecbee788083 ; Pages run 42369542577 réussi ; page et CSS versionné HTTP 200.

### Tâche miroir 189 — second membre f de Jacobi–Gauss–Seidel — 2026-11-07 12:51:09 +01:00
Demande : fixer le paramètre multiplicatif f à 1 et auditer les autres réglages similaires sans les changer sans décision. Codex prend en charge le miroir public de la modification source et vérifiera l’affichage.

### Clôture tâche miroir 189 — 2026-11-07 12:54:32 +01:00
Curseur f remplacé par une valeur fixe 1 dans la source et le miroir. Site public HTTP 200, f interne présent et curseur retiré ; Pages run 42370021497 réussi. Commit miroir 80d8b23779a433f53d6838216d70afb855b3347e.


| 191 | 2026-11-07 13:59:27 +01:00 | Utilisateur | Dans le calculateur chaleur, garder Fo réglable et fixer L=1 m. | Codex | En cours : mêmes réglages dans la source et le miroir ; vérifier le comportement quand Fo varie puis publier. | Peda_inv/site/index.html ; mftn/calculateurs/index.html |

| 192 | 2026-11-07 14:05:15 +01:00 | Codex | Clôture : garder Fo variable et fixer L=1 m dans le calculateur chaleur | Codex | Préréglages S3/S4 alignés ; message Δt corrigé ; publication Pages réussie, run 42375211920. | mftn/calculateurs/{index.html,app.js,guide.js} |
