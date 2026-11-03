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
