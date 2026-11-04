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
- Prochaine étape : copier equations.js depuis MFTN, versionner son URL dans index.html, publier et contrôler la formule accessible.

#### Addendum — 2026-11-05 00:03:10 +01:00
Le miroir equations.js est identique à Peda_inv/site/equations.js (SHA-256 A46C4E2C4CBDE078A0D5DCDBA48C83DF24322A3206325CC2D81EA3745C8BFC8C). L’index public a été remplacé par la copie source MFTN afin de garantir le même cache-buster equations.js?v=20261104-108. Le premier déploiement du commit 71e222e / run 41930186960 est réussi et a été vérifié dans le navigateur ; le nouvel index modifié déclenchera un déploiement complémentaire, à contrôler avant de libérer les verrous.
