# Passations — cours-publics

> Chaque entrée décrit l'état concret du travail au moment d'un relais. Ne pas modifier une entrée passée.

## Format d'une entrée

```
### [DATE] De [assistant] → à [assistant]
- **Fait** : modifications effectuées
- **Contrôlé** : ce qui a été vérifié
- **Limites** : ce qui reste incertain ou non fait
- **Prochaine étape** : première action concrète
```

---

### 2026-10-21 De Claude → à [prochain intervenant]
- **Fait** :
  - Création de `CLAUDE.md` à la racine
  - Création du dossier `suivi/` avec les 4 fichiers de coordination
  - Proposition d'un skill Claude pour généraliser à tous les projets multi-IA
- **Contrôlé** :
  - Structure du dépôt confirmée (2 dossiers de cours)
  - Site vérifié visuellement : 2 documents, page fonctionnelle
- **Limites** :
  - Contenu de `initiation-cfd/` et `tp-fluent/` non inspecté
  - Aucune modification de `index.html` cette session
- **Prochaine étape** : définir ce que l'on veut ajouter ou modifier sur le site

### 2026-10-21 De Codex → prochain intervenant
- **Fait** : remplacement du PDF public par la version du 20 octobre 2026 issue de C:\Latex\initiation_CFD\fiche synthetique\Fiche synthetique.pdf ; accueil corrigé (6 pages, date).
- **Contrôlé** : titre et métadonnées PDF, inspection visuelle des six pages ; identité SHA-256 entre source et copie publiée.
- **Limites** : contenu scientifique non réaudité ; sources CFD non modifiées.
- **Prochaine étape** : vérifier le déploiement GitHub Pages après publication.


### 2026-10-21 De Claude (session_0157uDKNNCLR5vqbNpYyZVDC) → prochain intervenant
- **Fait** :
  - Refonte Design/UI de `index.html` : hero avec gradient + badge stats, cartes avec effet hover (lévitation + ombre), topbar sticky, couvertures améliorées, icônes SVG, note de bas de page, footer avec liens ORCID/ResearchGate, responsive mobile.
- **Contrôlé** :
  - Fichier écrit directement dans `C:\Latex\cours-publics\index.html` (via device_bash)
  - Contenu et liens inchangés (PDFs, dates, descriptions)
  - ⚠️ Les fichiers `suivi/` ont été lus APRÈS la modification (erreur de procédure)
- **Limites** :
  - Modification non encore poussée sur GitHub / GitHub Pages
  - Aucun test visuel dans le navigateur effectué
- **Prochaine étape** : pousser `index.html` sur GitHub (`git add index.html && git commit && git push`)

### 2026-10-21 11:49:41 +02:00 — Codex → Claude
- **Fait** : ajout des PDF officiels MFTN C1/C2 dans mftn/ et de leurs cartes dans index.html, en conservant la refonte Claude terminée selon sa passation. Compteurs actualisés : 4 documents, 3 enseignements, 445 pages.
- **Contrôlé** : empreintes source/copie identiques, métadonnées et couvertures, liens PDF locaux, identifiants HTML. Preuves et provenance dans suivi/integration_mftn.md.
- **Limites** : aucun contenu MFTN modifié ; pas de nouvel audit scientifique. Inspection visuelle de l'accueil à faire après déploiement.
- **Prochaine étape** : publication puis contrôle des liens et de l'accueil en ligne ; Claude peut reprendre après libération du verrou Codex.


### 2026-10-21 11:51:04 +02:00 — Codex → Claude — Publication vérifiée
- **Fait** : commit 636af43 publié ; déploiement Pages 39579969592 terminé avec succès. Cartes MFTN visibles, deux PDF accessibles (HTTP 200, tailles conformes).
- **Contrôlé** : section MFTN inspectée visuellement dans le navigateur ; provenance détaillée dans suivi/integration_mftn.md.
- **Instruction utilisateur** : vérifier soi-même la fin de la passe Claude par les passations et verrous avant intervention, sans demander ce statut à l'utilisateur. Une activité de processus seule ne prouve ni la fin ni la libération d'un fichier.
- **Limites** : pas de nouvelle validation scientifique ni contrôle mobile.
- **Suite** : fichiers libérés ; aucune action attendue de l'utilisateur pour cette publication. La modification concurrente de suivi/decisions.md est conservée et exclue de mon commit.



### 2026-10-21 — Claude (session_0157u) → ChatGPT/Codex — Barre latérale ajoutée
- **Fait** : ajout d'un menu de navigation en barre latérale gauche (240px) dans `index.html`. Liens vers les 3 enseignements (CFD, Fluent, MFTN) avec sous-liens PDF directs. Mise en page flex (sidebar + main). Hamburger mobile avec drawer `position:fixed` et overlay. IntersectionObserver pour lien actif en surbrillance. Pied de barre latérale : ORCID, ResearchGate, Polytech Nancy · LEMTA.
- **Contrôlé** : fichier écrit localement via device_bash. Contenu (PDFs, dates, descriptions, compteurs) conservé intact.
- **Limites** : push GitHub non effectué — délégué à ChatGPT/Codex. Aucun test visuel navigateur.
- **Prochaine étape** : `git add index.html && git commit -m "feat: sidebar navigation" && git push`

### 2026-10-21 12:36:40 +02:00 — Codex → Claude — Actualisation C1
- **Fait** : PDF C1 remplacé par la version officielle du 21 octobre, 95 pages ; date de la carte actualisée. Barre latérale Claude conservée et incluse dans la publication selon sa passation.
- **Contrôlé** : libération et contre-revue MFTN, empreintes source/copie identiques, inspection visuelle des pages 2 et 67. Provenance : suivi/integration_mftn.md.
- **Limites** : pas de nouvel audit scientifique ; déploiement à vérifier après push.
- **Suite** : verrous Codex libérés ; contrôle de publication à effectuer par Codex.


### 2026-10-21 12:42:51 +02:00 — Codex → Claude — État distant vérifié
- **Fait** : consignes du message de reprise journalisées dans suivi/decisions.md avec Reçu par et Attribué à.
- **Contrôlé** : avant cette consignation, HEAD = origin/main = 17776ac8931e549e67ef8cfbbdd389b7f7f3c0b2 après fetch ; déploiement Pages 39586166666 terminé avec succès ; accueil HTTP 200, script IntersectionObserver présent.
- **Rectification** : le push de la barre latérale n'est plus en attente ; il a été effectué avec aa68b55, puis la clôture Claude avec 17776ac. Aucun nouveau commit de navigation nécessaire.
- **Limites** : aucun nouveau contrôle visuel mobile pendant cette passe.
- **Suite** : aucune action de publication restante pour la navigation ; verrous Codex libérés.


### 2026-10-21 12:43:42 +02:00 — Codex → Claude et prochains intervenants
- **Fait** : règles communes de session inscrites dans CLAUDE.md : journal immédiat, verrous, coordination autonome, vérification Git/déploiement, fichiers créés uniquement dans le projet, clôture et passation.
- **Contrôlé** : cohérence avec les demandes de Mohammed et les quatre fichiers de suivi ; aucun fichier du site modifié.
- **Suite** : appliquer ces règles à chaque intervention. Verrous Codex libérés.


### 2026-10-21 13:19:09 +02:00 — Codex → Mohammed et prochains intervenants
- **Fichiers** : suivi/decisions.md, suivi/passations.md ; verrou temporaire libéré.
- **Fait** : vérification des nouveautés à committer ; demande journalisée.
- **Contrôlé** : git fetch origin réussi ; arbre initial propre, aucun fichier non suivi ; main en avance de 1 sur origin/main, commit local 0a4512a (réorganisation AGENTS.md et CLAUDE.md).
- **Limites** : aucun push ni contrôle du déploiement ; seules les présentes traces de vérification sont désormais non committées.
- **Prochaine action** : publier le commit local si demandé ; inclure les traces de suivi lors du prochain commit.

### 2026-10-21 13:21:25 +02:00 — Codex → Mohammed et prochains intervenants
- **Fichiers** : suivi/decisions.md et suivi/passations.md.
- **Fait** : journalisation de l'autorisation ; traces regroupées pour commit, puis push de main demandé par Mohammed, incluant 0a4512a.
- **Contrôlé** : fetch réussi ; seules les deux traces de suivi sont modifiées ; aucun verrou concurrent.
- **Limites** : cette entrée précède le push ; sa réussite sera contrôlée par égalité HEAD / origin/main et git ls-remote ; déploiement Pages non contrôlé, aucun contenu du site modifié.
- **Destinataire** : Mohammed, Claude et prochains intervenants.
- **Prochaine action** : commit et push immédiats ; en cas d'échec, consigner le blocage. Verrous Codex libérés.

### 2026-10-21 13:25:36 +02:00 — Codex coordinateur → Mohammed et prochains intervenants
- **Fichiers** : `suivi/decisions.md`, `suivi/passations.md`, `suivi/verrous.md`, `suivi/equipe.md`.
- **Fait** : consolidé les diagnostics initiaux des responsables documents, interface et publication dans `suivi/equipe.md` ; journalisé la demande et les arbitrages.
- **Contrôlé** : Git local/distant synchronisé sur `11f3835` (HEAD, origin/main, ls-remote) ; déploiement Pages `39591382907` réussi ; accueil et quatre PDF HTTP 200 ; inventaire de quatre supports et 445 pages.
- **Limites** : provenance du PDF Fluent non documentée ; rendu visuel mobile non vérifié ; pas de nouvel examen visuel du site. Les diagnostics initiaux ont été faits en lecture seule.
- **Destinataire** : Mohammed et prochains intervenants ; trois responsables restent disponibles pour tâches ciblées.
- **Prochaine action** : si souhaité, attribuer séparément une clarification de provenance du PDF Fluent ou une correction d'accessibilité/navigation ; aucun changement au site ni publication n'est autorisé par la demande de coordination seule.
- **Publication** : aucun commit, push ou déploiement effectué.
- **Verrous** : le verrou coordinateur sur les quatre suivis ci-dessus est libéré.

### 2026-10-21 13:25:15 +02:00 — Codex installation → coordinateur cours-publics
- **Fichiers** : suivi/equipe.md, suivi/decisions.md, suivi/passations.md, suivi/verrous.md.
- **Fait** : coordinateur et trois responsables créés ; missions délimitées ; veille attachée au coordinateur toutes les 30 minutes.
- **Contrôlé** : création des quatre conversations et activité initiale ; automation ACTIVE. Premier diagnostic interface terminé en lecture seule, à consolider par le coordinateur.
- **Limites** : aucun déclenchement périodique encore constaté ; aucun commit/push ni modification du site durant l'installation.
- **Destinataire** : coordinateur et Mohammed.
- **Prochaine action** : coordinateur consulte les trois diagnostics et poursuit selon les autorisations et verrous. Verrou installation libéré.

### 2026-10-21 16:46:06 +02:00 — Codex coordinateur Cours publics — prise en charge publication C1
- **Tâche / état** : publication autorisée par Mohammed, en attente du PDF complet recompilé et du bilan de vérification du responsable C1.
- **Périmètre réservé** : `mftn/chapitre-01-slides.pdf`, `index.html`, `suivi/integration_mftn.md` et suivis centraux de Cours publics ; aucun fichier source du dépôt MFTN.
- **Fait** : relais inscrit dans `suivi/decisions.md` ; verrou de publication posé dans `suivi/verrous.md`.
- **Contrôlé** : `index.html` référence déjà la destination `mftn/chapitre-01-slides.pdf` ; `suivi/integration_mftn.md` décrit l'intégration précédente (95 pages, compilation antérieure au 21 octobre). La conversation C1 est active, donc aucun PDF nouveau n'est encore accepté comme livré.
- **Limites** : hachage, version finale, bilan d'audit, compilation, inspection visuelle et libération explicite C1 restent à recevoir ; aucun déploiement ne peut commencer avant cela.
- **Prochaine étape** : attendre la passation/libération explicite C1 ; comparer le nouveau PDF complet à l'ancienne copie, actualiser sa date et son empreinte, vérifier le lien et les contrôles, puis publier le lot autorisé et confirmer Pages.
- **Destination** : dépôt `achatkm-glitch/cours-publics`, fichier `mftn/chapitre-01-slides.pdf`, carte C1 dans `index.html`.


### 2026-10-21 17:28:00 +02:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/chapitre-01-slides.pdf`, `suivi/integration_mftn.md`, `suivi/decisions.md`, `suivi/passations.md`, `suivi/verrous.md` ; les modifications non commitées de Codex (suivis, `suivi/equipe.md`) sont conservées et commitées avec ce lot.
- **Fait** : copie du PDF C1 officiel (SHA-256 E6B16CE1ECF83A8B5913697EC13B6FA0443D2C2F8F9B168D3EA398CCA2A32BCF).
- **Contrôlé** : empreintes source/copie identiques ; contrôle en ligne après push consigné ci-dessous si disponible.
- **Limites** : C2 en ligne date du 16/10 (non mis à jour, hors autorisation) ; contrôle mobile non effectué.
- **Prochaine action** : mise à jour éventuelle du PDF C2 sur décision de Mohammed. Verrous libérés.

### 2026-11-03 17:05:31 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (4 fichiers), `index.html`, `suivi/decisions.md`, `suivi/integration_mftn.md`, `suivi/passations.md`, `suivi/verrous.md`.
- **Fait** : ajout des calculateurs MFTN au site (page, carte d'accueil, lien latéral).
- **Contrôlé** : contrôle en ligne après déploiement consigné ci-dessous si disponible.
- **Limites** : le dépôt local avait quatre commits non poussés (adoption du plugin scientific-workflow) qui partent avec ce push.
- **Prochaine action** : relecture par Mohammed ; verrous libérés.

### 2026-11-03 17:24:51 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (5 fichiers), `index.html`, suivis.
- **Fait** : mise à jour des calculateurs MFTN (volumes finis, Péclet, guide relié aux fiches).
- **Limites** : les réponses attendues aux explorations ne sont pas publiées (corrigé enseignant dans le dépôt MFTN).
- **Prochaine action** : relecture par Mohammed ; verrous libérés.

### 2026-11-03 17:30:54 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (5 fichiers), `index.html`, suivis.
- **Fait** : mise à jour des calculateurs MFTN (volumes finis, Péclet, guide relié aux fiches).
- **Limites** : les réponses attendues aux explorations ne sont pas publiées (corrigé enseignant dans le dépôt MFTN).
- **Prochaine action** : relecture par Mohammed ; verrous libérés.

### 2026-11-03 17:45:25 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (6 fichiers dont `equations.js`), `index.html`, suivis.
- **Fait** : calculateurs v5 (introduction, EDP, équations affichées).
- **Limites** : réponses attendues non publiées.
- **Prochaine action** : relecture par Mohammed ; verrous libérés.

### 2026-11-03 18:16:52 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (6 fichiers), suivis.
- **Fait** : calculateurs v6 (voir `suivi/integration_mftn.md`).
- **Limites** : réponses attendues non publiées.
- **Prochaine action** : relecture par Mohammed ; verrous libérés.

### 2026-11-03 18:33:02 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers dont `situations.js`), suivis.
- **Fait** : calculateurs v7 (voir `suivi/integration_mftn.md`).
- **Limites** : réponses attendues non publiées.
- **Prochaine action** : relecture par Mohammed ; verrous libérés.

### 2026-11-03 19:39:07 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v8.
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 20:03:01 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v9.
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 20:49:13 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers et `img/`), suivis.
- **Fait** : calculateurs v10 (photographies libres).
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 21:19:57 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v11 (dérivée seconde).
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 21:56:06 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/app.js`, suivis.
- **Fait** : correction du graphique d'erreur de l'onglet Barre 1D.
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 22:16:17 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v12 (dédoublonnage EDP, renommage de l'onglet Neumann, loi de Fourier).
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 22:30:34 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v13 (schémas explicites et implicites).
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 22:36:23 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v14.
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 22:41:32 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v15 (condition de Fourier).
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-03 22:53:26 +01:00 — Code → Mohammed, Codex et prochains intervenants
- **Fichiers** : `mftn/calculateurs/` (7 fichiers), suivis.
- **Fait** : calculateurs v16 (couleurs distinctes).
- **Prochaine action** : relecture ; verrous libérés.

### 2026-11-04 22:30:41 +01:00 — Prise FIFO — synchronisation du calculateur MFTN — Codex
- Source : C:\Latex\MFTN\Peda_inv\site\ (version locale à quatre séances, QR intégré) ; destination mftn/calculateurs/ sur le site public.
- Périmètre : publier les fichiers d'exécution et assets référencés ; mettre à jour la carte d'accueil racine ; consigner empreintes, commit et déploiement.
- Contrôles initiaux : branche main, HEAD e33c1a7 aligné avec origin/main, arbre propre ; table des verrous sans verrou actif au démarrage. Dernière activité MFTN vérifiée : tâche 103 libérée à 22:22:53 +01:00.
- Prochaine action : synchroniser les ressources publiables, vérifier les références, pousser et contrôler GitHub Pages.

### 2026-11-04 22:39:11 +01:00 — Clôture — publication du calculateur MFTN — Codex
- Fait : le calculateur local organisé en quatre séances, le QR, les trois images et les médias vidéo sont synchronisés dans mftn/calculateurs/ ; la carte racine précise quatre séances et sa date de version est le 4 novembre 2026.
- Publication : commit c880bf4a67b10547c377563db92ff4c484aff112 poussé sur origin/main ; git ls-remote confirme exactement le même hash. GitHub Pages sert le nouvel index (HTTP 200, 51 874 octets avec paramètre de cache distinct).
- Contrôle navigateur : page publique rendue ; navigation « Séance 1 » à « Séance 4 », accueil quatre séances, panneau QR et lien vers la page publique présents dans l'arbre d'accessibilité. Page d'accueil racine : carte « QUATRE SÉANCES » et lien calculateurs vérifiés.
- Contrôles de ressources : SHA-256 des 13 fichiers publiables identique à Peda_inv/site ; chemins QR et vidéo présents. Les autres fichiers de développement ne sont pas publiés. Aucun PDF touché, aucun test automatisé exécuté.
- Limites : pas de relecture scientifique nouvelle ; le contenu publié est identique au site local, la vérification porte sur l'intégrité et la disponibilité technique.
- Prochaine étape : relecture de contenu selon le FIFO du cours ; publication achevée, tous les verrous Codex libérés.

### 2026-11-04 22:46:06 +01:00 — Prise FIFO — précision du bloc Transport MFTN — Codex
- Demande : le titre du transport/advection et diffusion semble présenter la gaussienne comme nécessaire ; préciser le domaine de validité et le cas simulé.
- Fichiers réservés : mftn/calculateurs/index.html et suivis associés. La source locale MFTN Peda_inv/site/index.html doit rester identique.
- État initial : dépôt main, HEAD ebac62f confirmé sur origin/main, arbre propre ; aucun verrou actif.
- Prochaine action : nommer le principe général et préciser que le calculateur choisit ici une gaussienne initiale ; publier et vérifier le rendu.

### 2026-11-04 22:48:50 +01:00 — Prise parallèle — compacité des curseurs MFTN — Codex
- Demande : les contrôles range de l'onglet EDP semblent trop imposants par rapport à la page.
- Périmètre : mftn/calculateurs/style.css (tous les onglets utilisant les curseurs) ; la source Peda_inv/site/style.css dans MFTN reste identique.
- État initial : main, HEAD ebac62f ; tâche 105 possède le verrou distinct sur mftn/calculateurs/index.html ; aucun chevauchement de fichier.
- Prochaine action : réduire l'étendue visuelle des curseurs, conserver des cibles tactiles accessibles et contrôler l'onglet EDP en navigateur.

### 2026-11-04 22:58:56 +01:00 — Clôture — tâches 105–106, site MFTN — Codex
- Fait : titre et texte de Transport distinguent le phénomène général du cas gaussien exact ; les curseurs sont visuellement plus compacts sur les vues ≤ 600 px, sans réduction de la hauteur de manipulation.
- Commit public 020fc06b7c78f908448b18a9d5b97e707cc8f825 poussé sur origin/main ; hash distant confirmé.
- Contrôle en ligne : navigateur a chargé le bloc Transport avec la nouvelle formulation et l’équation explicitement gaussienne ; l’onglet EDP conserve ses cinq contrôles et leurs valeurs. Le CSS public contient max-width: 230px et le gap de 7 px.
- Limites : contrôle visuel ciblé, aucune relecture scientifique indépendante ; pas de calcul, PDF, source ni test automatisé modifié/exécuté.
- Verrous public index.html, style.css et suivis libérés. La copie locale Peda_inv reste la source.
### 2026-11-04 23:00:04 +01:00 — Addendum — synchronisation de la source MFTN — Codex
La source Peda_inv/site/index.html, style.css et les registres de tâche ont été poussés dans le dépôt MFTN par le commit b9936047ff0383fe6be7d80e288d635386ebf9f8 ; git ls-remote confirme origin/main. Seules les modifications préexistantes aux audits et à repo_index ont été laissées hors commit.
### 2026-11-04 23:05:45 +01:00 — Prise tâche 107 — bloc Transport MFTN — Codex
- Dépôt : C:\Latex\cours-publics, main propre au départ, aligné sur origin/main ; la source éditable reste dans C:\Latex\MFTN\Peda_inv\site.
- Fichiers réservés : mftn/calculateurs/situations.js et registres de suivi concernés ; ne pas remplacer les fichiers non concernés.
- Source USGS contrôlée : page de la vidéo confirme durée 1:42 et domaine public ; étude de traceur Rhodamine WT et ressource vidéo documentées par l’USGS. Le MP4 de 212 MB sera lié en externe, pas ajouté au dépôt.
- Prochaine action : mettre le média réaliste avant la figure de principe, vérifier rendu local, synchroniser le miroir public, contrôler en ligne puis libérer.
#### Précision du verrou — 2026-11-04 23:09:40 +01:00
mftn/calculateurs/app.js ajouté au périmètre réservé : il doit réordonner l’affichage des médias du bloc Transport avant le schéma. Aucun fichier public n’est encore modifié.
#### Précision des fichiers réservés — 2026-11-04 23:10:54 +01:00
Ajout de mftn/calculateurs/index.html au verrou pour versionner les URL de app.js et situations.js et éviter un rendu hybride depuis le cache.
### 2026-11-04 23:14:45 +01:00 — Contenu prêt à synchroniser — tâche 107 — Codex
Le miroir index.html, app.js, situations.js est identique à la source MFTN (SHA-256 concordants). Verrous sur ces trois fichiers libérés avant le commit et le push ; les registres de clôture restent réservés jusqu’à la vérification GitHub Pages.
### 2026-11-04 23:17:11 +01:00 — Cache en propagation — tâche 107 — Codex
Après le push 4c7560e, le navigateur ouvert immédiatement a rendu le contenu précédent ; la vérification HTTP sans cache retrouvait déjà le code nouveau. Les scripts sont maintenant référencés par l’identifiant 20261104-107c. Index source et miroir identiques ; publication et relecture navigateur à refaire.
### 2026-11-04 23:36 — Révision du cache et relance de Pages — tâche 107 — Codex
Le run 41923999350 apparaît comme terminé à l’annulation mais reste « queued » dans gh run list; la page Pages demeure errored. La source MFTN change uniquement les deux query-string d’index de 20261104-107c à 20261104-107d, puis est recopiée à l’identique. Cette modification vise un nouveau run automatique de publication ; aucune autre source ni aucun calcul ne change.
### 2026-11-04 23:37:21 +01:00 — Cache 107d, miroir prêt au commit — tâche 107 — Codex
La source locale passe à 20261104-107d dans les références à app.js et situations.js. Le miroir public index.html a été recopié à l’identique ; le fichier est libre pour commit. Les registres de tâche restent réservés par Codex.

### 2026-11-04 23:40:32 +01:00 — Clôture tâche 107 — Codex
Le run GitHub Pages 41927003845 est terminé avec succès. Inspection navigateur de la page publique avec le cache-buster 107d : photo ESA, vidéo USGS liée à la demande, mise en situation puis schéma de principe ; équations et calculateur accessibles. Commit miroir e7141ed090e2910fe653bf981eef3d9331e7e34d confirmé sur origin/main. Verrous de tâche libérés.

### 2026-11-04 23:59:13 +01:00 — Prise tâche 108 — formule gaussienne avec Péclet — Codex
- Instruction utilisateur : préférer l’écriture de la solution gaussienne en fonction de Pe et la mettre dans l’autre document ; Codex prend la tâche FIFO.
- Réservation : mftn/calculateurs/equations.js et index.html pour le cache-buster ; les registres de publication sont inclus.
- Le dépôt public était propre, main au commit 8fc1e72 ; aucun verrou actif avant cette prise.
- Source equations.js copiée depuis MFTN, SHA-256 identique : A46C4E2C4CBDE078A0D5DCDBA48C83DF24322A3206325CC2D81EA3745C8BFC8C. L’index public utilise equations.js?v=20261104-108.
- Commits publics 71e222e5199d11b33ceddf7ed988ee94a7fb811a et d628eaac7e942a9ae33f55670a88351a799fc500 confirmés par git ls-remote.
- GitHub Pages runs 41930186960 et 41930626952 réussis ; la page publique a été contrôlée dans un navigateur avec la formule Pe_{σ0} visible.
- Verrous publics libérés ; aucune modification de PDF dans ce dépôt.

#### Addendum — 2026-11-05 00:03:10 +01:00
Le miroir equations.js est identique à Peda_inv/site/equations.js (SHA-256 A46C4E2C4CBDE078A0D5DCDBA48C83DF24322A3206325CC2D81EA3745C8BFC8C). L’index public a été remplacé par la copie source MFTN afin de garantir le même cache-buster equations.js?v=20261104-108. Le premier déploiement du commit 71e222e / run 41930186960 est réussi et a été vérifié dans le navigateur ; le nouvel index modifié déclenchera un déploiement complémentaire, à contrôler avant de libérer les verrous.

### 2026-11-05 00:11:18 +01:00 — Prise tâche 109 — libellé d’accueil — Codex
- Demande utilisateur : remplacer « séances en pédagogie inversée » par « séances de cours ».
- Le dépôt public `cours-publics` est sur `main`, propre, sans verrou actif ; le fichier réservé est `mftn/calculateurs/index.html` avec les registres de tâche.
- Prochaine action : modifier le paragraphe d’accueil, comparer le texte public/local, publier puis vérifier le déploiement.

### 2026-11-05 00:13:38 +01:00 — Clôture tâche 109 — Codex
- `mftn/calculateurs/index.html` reprend le libellé « Outils de simulation pour les séances de cours » ; il est identique au fichier source MFTN.
- Commit de contenu `fa6a8c355661861a1458d47215a9cdf2a5a9e587` confirmé sur `origin/main`.
- GitHub Pages run `41931889921` terminé avec succès ; requête HTTP 200 avec cache évité, paragraphe public attendu vérifié.
- Verrous de la tâche libérés ; aucun autre contenu modifié.

### 2026-11-05 00:17:49 +01:00 — Prise tâche 110 — interactivité des graphiques — Codex
- Instruction utilisateur : rendre les figures plus interactives, montrer une pente lorsqu’elle est utile et ajouter des infobulles.
- Prise FIFO Codex. Dépôt public `main`, propre avant prise ; le miroir réservé est `mftn/calculateurs/app.js`, `style.css`, `index.html` et ces registres.
- Choix de portée : pentes empiriques seulement sur les graphes log-log d’erreur/raffinement, libellées comme observées ; interaction coordonnées x/y au survol et au toucher pour les graphes de séries.
- Prochaine action : modifier le site source et le miroir à l’identique, vérifier les graphes en navigateur puis publier.

#### Avancement — 2026-11-05 00:29:14 +01:00
Les scripts, styles et index du site public ont été recopiés depuis MFTN ; empreintes SHA-256 source/miroir identiques. Le JavaScript passe `node --check`; aperçu Edge headless du chemin de raffinement : pente mesurée dans les légendes, graphe lisible. Le contrôle fin du survol/toucher reste à faire après publication ; aucun verrou libéré.

#### Contrôle local — 2026-11-05 00:32:10 +01:00
Dans le navigateur local (127.0.0.1:8766/#chemin), clic sur un point du graphe Dufort–Frankel : l’infobulle expose le cas, h et la valeur α(Δt/h)² ; flèche droite au clavier : la valeur suit le point parcouru. L’aperçu montre aussi les pentes observées dans les légendes. La publication et son contrôle restent à faire.

### 2026-11-05 00:33:56 +01:00 — Clôture tâche 110 — Codex
- Source et miroir présentent le même index, script et style (SHA-256 identiques) ; `node --check` et `git diff --check` passent.
- Commit de contenu public `4f30255a1c3f5a071f4272ba78f9c33ff773b8a3` confirmé sur `origin/main` ; GitHub Pages run `41932101445` réussi.
- Page publique contrôlée dans le navigateur après rechargement : pente observée affichée dans les deux légendes ; clic sur la courbe Dufort–Frankel affiche le cas, h et α(Δt/h)² ; une valeur a été parcourue au clavier en contrôle local.
- Verrous publics libérés. Aucune donnée ou source scientifique nouvelle ; pentes désignées comme mesures de la plage affichée.


### Clôture tâche 111 — 2026-11-05 01:01:09 Europe/Paris (UTC+01:00) — Codex
- Sept fichiers source/miroir identiques ; `node --check` réussi pour les scripts et aperçu local contrôlé.
- Formules alignées sur le chapitre 2 du polycopié. Ordres mesurés sur la plage affichée : centrée proche de 2, unilatérales proches de 1.
- Push public et contrôle GitHub Pages à confirmer ; aucun PDF produit. Validation scientifique indépendante à faire. Verrous libérés.


#### Addendum de publication tâche 111 — 2026-11-05 01:06:13 Europe/Paris (UTC+01:00)
Rectification : le commit cdd12b354f749c190026e14312d106f77aff5286 est sur origin/main ; run Pages 41938241979 réussi ; page Ordre publique vérifiée avec familles séparées et stencils supplémentaires. Aucun verrou actif.


### Prise en charge tâche 112 — 2026-11-05 01:12:06 Europe/Paris (UTC+01:00) — Codex
- **Fait** : demande consignée ; dépôt vérifié libre et périmètre réservé.
- **Périmètre** : choix du type EDP, équation dynamique et champs/graphes correspondants, site miroir et registres.
- **Contrôlé** : branches main et absence de verrou concurrent vérifiées avant prise.
- **Prochaine étape** : implémenter, contrôler la sélection et la formule au navigateur, puis publier.

### Clôture tâche 112 — 2026-11-05 01:19:33 +01:00 Europe/Paris (UTC+01:00) — Codex
Miroir mftn/calculateurs synchronisé avec MFTN. Commit du site 4f572acf7d8806415050c1ac2602b840de5a6b7e poussé sur origin/main et confirmé ; GitHub Pages run 41940350980 réussi. Page publique HTTP 200 et sélection elliptique/parabolique/hyperbolique contrôlée dans le navigateur. Quatre empreintes identiques à celles de MFTN. Verrous libérés.

### Prise en charge tâche 113 — 2026-11-05 01:28:11 +01:00 Europe/Paris (UTC+01:00) — Codex
- Demande : curseur Pe, nombres adimensionnels et commentaire dynamique de la courbe en relation avec le temps d’advection et le temps de diffusion.
- Périmètre réservé : mftn/calculateurs/index.html, app.js, equations.js, style.css et suivis de tâche.
- Sources internes repérées : MFTN, chapitre 1, §1.4 ; définition du Pe de profil déjà présente dans le calculateur.
- État : prise FIFO, fichiers libres avant réservation. Prochaine action : synchroniser Pe et D, afficher Fo à l’instant choisi et une comparaison vérifiable des échelles ; publier après contrôle.

### Clôture tâche 113 — 2026-11-05 01:38:36 +01:00 — Codex
- Curseur Pe du profil lié à la diffusivité D ; affichage des temps caractéristiques t_c et t_d, du rapport Peσ₀=t_d/t_c, du nombre de Fourier Foσ₀(t), du déplacement adimensionnel du centre et de l’élargissement normalisé.
- Contrôlé localement : Pe=1 donne t_d=t_c ; Pe=10 donne t_d>t_c ; a=0 affiche Pe=0 et le cas de diffusion seule. Les commandes et l’interprétation sont recalculées avec les courbes.
- Fichiers du miroir identiques aux sources MFTN (SHA-256 consignés dans version_traceability.md du dépôt MFTN). Aucun PDF modifié ; aucune nouvelle source externe. Validation scientifique indépendante non réalisée.

### Vérification publique finale — tâche 113 — 2026-11-05 01:40:35 +01:00 — Codex
GitHub Pages run 41942910086 : completed, success, commit 272673297fa07176940abd2e1f4cbbf44fd72d76. Page publique ouverte ; curseur Pe=1 vérifié : D=0,1500 m²/s, t_d=t_c=0,150 s, Foσ₀ et lecture de la courbe se mettent à jour. Verrous libérés.


### Prise en charge tâche 114 — 2026-11-05 01:51:30 +01:00 — Codex
- Périmètre : mftn/calculateurs/index.html, app.js, style.css et registres de suivi ; site source Peda_inv correspondant.
- Le sélecteur change déjà formule, paramètres, graphe et analyse détaillée. L’amélioration cible une synthèse courte qui suit immédiatement la sélection et une transition visible.
- Dernier verrou public était libre ; contrôle Git effectué, aucun fichier modifié avant cette prise.

### Clôture tâche 114 — 2026-11-05 01:56:43 +01:00 Europe/Paris — Codex
La page publique affiche sous l’équation une synthèse différente selon le bouton EDP sélectionné ; le changement est animé avec respect de prefers-reduced-motion. Sources miroir identiques par SHA-256. Pages run 41944835906 réussi sur ae01e43751f83cd95595ce06a972648e2fecccfa. JS syntax check réussi. Aucun PDF. Validation scientifique indépendante non réalisée.

### Synchronisation finale tâche 114 — 2026-11-05 02:00:09 +01:00 Europe/Paris — Codex
Commit de clôture ae01e43751f83cd95595ce06a972648e2fecccfa et registres 83c4730a35ac733d4a6448d3ab7ce31695bac3b9 présents sur origin/main. Pages run 41944835906 réussi. Verrou libéré.

### Prise en charge tâche 115 — 2026-11-05 02:02:47 +01:00 Europe/Paris (UTC+01:00) — Codex
Périmètre réservé : mftn/calculateurs/index.html, app.js, style.css et registres de suivi. Le sélecteur radio sera placé dans le bloc « Situation physique » avant les pictogrammes ; les mises à jour existantes de l’équation et de la figure seront contrôlées au navigateur après déploiement.

### Clôture technique tâche 115 — 2026-11-05 02:05:12 +01:00 Europe/Paris (UTC+01:00) — Codex
Le sélecteur est maintenant dans le bloc de situation physique, entre son texte et le pictogramme. Le gestionnaire de choix continue d’appeler runEdpb(), qui synchronise équation, panneaux data-kt et calculs/graphes. SHA-256 source/mirror : index.html 16C57C383B251F37320F375AC6AB8118169CB3059D52619E60F604E513D1E04B ; app.js 9ADD08A4656D02D2DB20F1F0F56157FCE2968CDB9AD666973197F1B34A04D64C ; style.css 4C081EC4C9B4469469C53836A9B8B291EEE512EB1497990B127C31E02DB80733. Syntaxe JS et diff contrôlés. Commit MFTN 0bb180e81f1cd0155f1b1086c38996eeacf09646 poussé. Déploiement public et inspection navigateur restent à confirmer.

### Clôture tâche 115 — 2026-11-05 02:07:09 +01:00 Europe/Paris (UTC+01:00) — Codex
Le déploiement Pages run 41946133951 a réussi pour ecbae3a671171b06d470e840d2c0069086f07c24. L’onglet EDP comportement a été contrôlé : radios elliptique/parabolique/hyperbolique essayées ; l’équation, le pictogramme, les curseurs et les graphes changent ensemble. Verrou libéré.

### Prise en charge tâche 116 — 2026-11-05 02:10:20 +01:00 Europe/Paris (UTC+01:00) — Codex
Réservation de mftn/calculateurs/index.html, app.js, style.css et registres. Le graphe hyperbolique montrera distinctement le profil initial pointillé et la solution au temps courant ; une lecture sous le graphe expliquera les deux bosses selon c et t.

### Clôture tâche 116 — 2026-11-05 02:18:23 +01:00 Europe/Paris (UTC+01:00) — Codex
Publication du contenu 5c28358d5b73d845351285d082dc01e25eb80b17 vérifiée (Pages run 41947434139). Les deux choix de réglages sont contrôlés : c=1,t=2 donne deux bosses séparées ; c=0,2,t=0,5 indique le recouvrement. L’explication visible correspond à chaque état. Verrou libéré.

### Prise en charge tâche 117 — 2026-11-05 02:23:35 +01:00 Europe/Paris (UTC+01:00) — Codex
Réservation de mftn/calculateurs/index.html, app.js, style.css et registres. Ajouter un repère sous le graphe parabolique expliquant les couleurs/instants et la façon dont D et t modifient les profils ; tenir compte du chevauchement des sources.

### Clôture tâche 117 — 2026-11-05 02:30:00 +01:00 — Codex
Page publique contrôlée avec l’option parabolique : chaque courbe est associée à son instant ; l’explication précise élargissement, baisse du maximum, symétrie et non-nullité de la solution continue. Pages run 41948746050 réussi ; source publique dc583fb. Validation scientifique indépendante non effectuée.

### Prise en charge tâche 118 — 2026-11-05 10:04:35 +01:00 — Codex
Source de référence MFTN `Peda_inv/site/` réservée pour harmoniser les onglets Transport et Péclet ; le miroir `mftn/calculateurs/` sera mis à jour après contrôle. Les fichiers source et miroir avaient les mêmes SHA-256 ; branche main du miroir et origin/main vérifiées à `3e26f817d331cdf2f6c5cab4b911ad9aac26bb87`. Verrou déclaré dans `suivi/verrous.md`. Garder les deux calculateurs distincts.

### Clôture tâche 118 — 2026-11-05 10:18:49 +01:00 Europe/Paris
Code harmonisé et synchronisé depuis MFTN ; commit miroir `fde3a18bb9eaddf7a0ca2fe25ebf8d737abd8bb8`, origin/main confirmé. SHA-256 identiques pour index.html, app.js, equations.js et guide.js. Pages run 42001173087 réussi ; inspection navigateur des sections publiques #transport et #peclet : objectif, équations, notation d’échelle, Pe signé stationnaire, légendes/explications et exercices cohérents. Syntaxe Node et diff contrôlés. Aucun PDF. Verrous libérés.

### Prise en charge tâche 119 — 2026-11-05 10:26:11 +01:00 Europe/Paris — Codex
Ajout réservé au graphe d’introduction : garder les coordonnées dans la bulle et y présenter une lecture adaptée à la série exacte ou numérique, au point survolé et aux entrées courantes N, C et t. Vérifier puis copier dans `mftn/calculateurs/`, publier et inspecter les deux états. Dépôt miroir propre avant prise, HEAD `a163790ce11254ef3262ca8b3541bf4c13313436`.

### Clôture tâche 119 — 2026-11-05 10:37:17 Europe/Paris (UTC+01:00) — Codex
Source MFTN et miroir cours-publics sont synchronisés. Pages run 42003125602 réussi. Inspection de la page HTTPS : la bulle distingue l’exacte et le schéma numérique ; l’interprétation, l’écart ponctuel et les valeurs de sélecteur suivent le point et le changement de N de 100 à 200. Commits poussés et hashes distants confirmés. Verrous libérés.

### Prise en charge tâche 120 — 2026-11-05 11:07:29 Europe/Paris (UTC+01:00) — Codex
Demande reçue : harmoniser la notation du calculateur Transport avec le chapitre 2 du poly. Référence vérifiée : section 2.9 dans le dépôt MFTN, Pe_sigma0, xi, t*. Le miroir cours-publics était propre et synchronisé avec origin/main au HEAD 3fb6dc26f05fa4ede46b3d6acc5ccc5aad8a8117. Aucune réservation active sur les calculateurs. Source de référence MFTN ; copie du miroir après validation. Vérifier l’affichage publié puis libérer le verrou.
### Clôture tâche 120 — 2026-11-05 11:13:32 Europe/Paris (UTC+01:00) — Codex
Miroir du calculateur Transport aligné sur le poly : retrait de la notation supplémentaire tc, td, Fo_sigma0 et des rapports normalisés centre/largeur ; conservation de Pe_sigma0, xi et t* déjà utilisés par le chapitre 2 §2.9. Source et miroir synchronisés, syntaxe JavaScript vérifiée. Pages run 42008673233 réussi et page publique contrôlée. Commit miroir beb3b56a7052a25182ac939dbed7a91a86d5037a confirmé sur origin/main. Verrou libéré.

### Prise en charge tâche 121 — 2026-11-05 11:21:55 +01:00 — Codex
Miroir cours-publics réservé après vérification de son HEAD cad593e et de l’absence de modifications locales. Source éditée d’abord dans MFTN : explication dynamique de l’état initial et dessin de deux zones chaudes correspondant aux bosses du graphe à t=0 ; le curseur d’écart relie la situation à leur séparation. Publication/inspection après copie.

### Clôture tâche 121 — 2026-11-05 11:40:02 +01:00 — Codex
Situation, équation et courbe sont cohérentes avec le bouton. Le profil à t=0 contient deux pics au réglage par défaut car les deux bosses initiales sont centrées à ±2 m ; ce sont les données initiales, non un effet créé par la diffusion. Dernière version ?v=20261105-129d, Pages run 42012043991 réussi. SHA source/miroir identiques ; commit final c5dee237195124676d736ff127d5308e793789a6 confirmé sur origin/main. Verrou libéré.

### Clôture tâche 122 — 2026-11-05 11:51:24 +01:00 — Codex
Miroir synchronisé ; le survol du graphe parabolique affiche l’instant et une explication propre à chaque profil, sans valeurs de coordonnées. GitHub Pages run 42013908439 réussi ; page et script renvoient HTTP 200. Vérification visuelle de l’infobulle impossible cette fois, API navigateur indisponible. Commit miroir d8d7fe3577d8c7bbe86833845146db6e6b031dbe. Verrou libéré.

### Prise en charge tâche 122 — 2026-11-05 11:45:20 +01:00 — Codex
Miroir `mftn/calculateurs/app.js` et `index.html` réservé pour refléter MFTN. Le graphe parabolique gardera l’instant dans l’infobulle et affichera une lecture physique de la série survolée, au lieu de x et u. Après synchronisation : vérifier syntaxe, empreintes, publication Pages et rendu public.


### Prise en charge tâche 123 — 2026-11-05 12:55:12 Europe/Paris (UTC+01:00) — Codex
La demande utilisateur sur « EDP : classer » est prise après vérification de la libération de la tâche 122. Le miroir cours-publics était propre, HEAD `e24a65e`, sans verrou actif sur mftn/calculateurs. Réservation du miroir mftn/calculateurs/app.js, `equations.js`, index.html et du registre suivi/; source de référence MFTN. Travail : remplacer A/B/C par Δ, conserver une conique repère liée au discriminant, expliciter que u est la valeur locale de l’inconnue dans le cas quasi linéaire. Après la source, synchroniser, contrôler GitHub Pages et libérer.

### Addendum de correction — tâche 123 — 2026-11-05 12:56:07 Europe/Paris (UTC+01:00) — Codex
Correction de mise en forme de la prise précédente : les caractères de contrôle insérés avant `equations.js` et le hash du miroir provenaient des délimiteurs de code Markdown interprétés par le shell. Les chemins corrects sont `mftn/calculateurs/app.js`, `mftn/calculateurs/equations.js`, `mftn/calculateurs/index.html`, et le HEAD vérifié est `e24a65e`. Le verrou est pris par Codex à 2026-11-05 12:56:07 ; la source MFTN est la référence.
### Clôture tâche 123 — 2026-11-05 13:16:02 Europe/Paris (UTC+01:00) — Codex
Miroir `mftn/calculateurs` synchronisé à la source MFTN ; hashes identiques pour index.html, app.js, equations.js et guide.js. Contrôles Node/diff-check effectués, rendu local inspecté et interaction Δ=−4/0/3 puis u(P)=1,5 vérifiée. GitHub Pages run 42025432138 réussi ; page et ressources répondent HTTP 200. Commit miroir `f6cca4b5e732e3abc8eb8ff95e0653df826938be` vérifié sur origin/main. Verrou libéré.
