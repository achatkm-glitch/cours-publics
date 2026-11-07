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

### Prise en charge tâche 124 — 2026-11-05 13:23:36 Europe/Paris (UTC+01:00) — Codex
La demande de commentaires concis sur toutes les figures, sans révéler les réponses aux questions, est prise après la libération de la tâche 123. HEAD miroir `a2dfcb5`, branche `main`, arbre propre ; aucun verrou actif sur `mftn/calculateurs`. Réservation de `mftn/calculateurs/app.js`, `style.css`, `index.html` et des registres. Source de référence : MFTN tâche 133. Prochaine étape : inventorier canvases et tracés, corriger les info-bulles, vérifier les interactions et synchroniser.

### Clôture tâche 124 — 2026-11-05 13:37:36 Europe/Paris (UTC+01:00) — Codex
Le miroir reprend les trois fichiers validés du dépôt MFTN. Empreintes SHA-256 identiques : `app.js` B7E23ACB304390D8515828944C2143F63AC65D41F7EEDB89F2FFDA5EAC0E782B ; `style.css` 5BFA2A1100131AD3AC270504959203579E636D09F0DA3B52A83DE86810F3B610 ; `index.html` C500E5A9AD835713B98FDFE95D6E37715CDEAFA2636D9CE07AA2F643765E2E78. Contrôles locaux et vérifications d’interaction consignés dans le dépôt MFTN. L’audit utilisateur de hiérarchie fiches/calculateur a été lu comme contexte ; aucune des propositions plus larges n’a été appliquée dans cette tâche. Push et déploiement Pages restent à vérifier.

### Prise en charge tâche 125 — 2026-11-05 14:16:32 Europe/Paris (UTC+01:00) — Codex
Nouvelle demande FIFO : dans le calculateur Barre 1D, afficher une longueur fixe L=1 m et ajouter la comparaison des maillages uniforme et non uniforme. Miroir cours-publics main, HEAD 723b5cc, arbre propre. Les dernières lignes de verrou déclarent mftn/calculateurs libre, malgré une ancienne ligne ACTIF de la tâche 124 non consolidée ; la clôture de cette tâche figure au dépôt MFTN et les sources miroir avaient été poussées (à revérifier avant publication). Réservation par Codex de mftn/calculateurs/index.html, calc.js, app.js et suivi/decisions.md, passations.md, verrous.md jusqu’au contrôle et à la publication.

### Clôture tâche miroir 125 — 2026-11-05 14:35:51 Europe/Paris (UTC+01:00) — Codex
Maillage uniforme/non uniforme publié dans `mftn/calculateurs`; contrôles locaux et réponse HTTPS 200 de la page avec `v=20261105-135a`. Commit `81297665fa84d3f015c1b3328659571a07a574c0` vérifié sur origin/main. Correspondance avec les sources MFTN contrôlée. Verrou libéré.

### Addendum horodatage — tâche miroir 125 — 2026-11-05 14:37:51 Europe/Paris (UTC+01:00) — Codex
L’heure 14:35:51 de la clôture précédente était le relevé système préalable à sa rédaction. Heure de consignation et de libération corrigée par cet addendum à 14:37:51 ; hashes et état de publication inchangés.

### Prise en charge tâche miroir 126 — 2026-11-05 14:41:15 Europe/Paris (UTC+01:00) — Codex
La vidéo USGS du Missouri ne plaît pas à l’utilisateur. Réservation de `mftn/calculateurs/situations.js`, `app.js` et des registres de suivi pour remplacer le lien par l’expérience PiNC de Scripps/UC San Diego : https://today.ucsd.edu/story/pink-dye-experiment-to-reveal-mysteries-of-coastal-ocean-dynamics. La source officielle décrit un traceur rose suivi par drones, dériveurs et capteurs à la sortie de Los Peñasquitos Lagoon, avec vagues, courants et marée. On conserve un lien externe (pas de copie du contenu copyrighté) et précise que l’observation montre un transport/mélange côtier complexe, pas la diffusion moléculaire isolée. Les fichiers miroir app.js/situations.js concordent avec MFTN et aucun verrou n’est actif.

### Clôture tâche miroir 126 — 2026-11-05 14:51:43 Europe/Paris (UTC+01:00) — Codex
Lien vidéo remplacé par l’expérience PiNC de Scripps/UC San Diego ; légende explique le contexte côtier (vagues, courants, marée) et précise que l’observation ne sépare pas la diffusion moléculaire. La page et les scripts publics répondent HTTP 200 après le déploiement Pages run 42039243844 (succès, HEAD `9caa69691e4813b8acf5b794fada1c04d6959c7e`). SHA-256 des fichiers synchronisés avec MFTN consignées dans `version_traceability.md`. La vidéo n’a pas été visionnée dans un navigateur contrôlable ; choix basé sur la description officielle. Verrou libéré.

### Prise en charge tâche miroir 127 — 2026-11-05 15:01:38 Europe/Paris (UTC+01:00) — Codex
La tâche utilisateur 137 est prise en FIFO après libération explicite de la tâche miroir 126 (14:51:43). Branche main, HEAD  f425d4, dépôt propre au début. Réservation de mftn/calculateurs/index.html, pp.js, style.css et des registres suivi/decisions.md, passations.md, errous.md. Source de référence : MFTN. Après synchronisation : contrôler le diff, la syntaxe et le déploiement GitHub Pages.

### Avancement tâche miroir 127 — 2026-11-05 15:05:27 Europe/Paris (UTC+01:00) — Codex
Synchronisation des trois fichiers source MFTN vers mftn/calculateurs effectuée ; SHA-256 index.html 98B7058825FE76D37865868F0FEA5FA467D115E038551430BF276C343D08D335, app.js 91907216E90D0B6528934F1B868A2CFA1BABE02BAC1F72DB0C4E77F7C0C9D758, style.css 73984123B6567AC6FC77014E4901F1BB09E41B34A609FE676EF9A05641E71C6A ; hashes source/miroir égaux. Syntaxe JS contrôlée. Reste publication GitHub Pages et réponse HTTP.

### Clôture tâche miroir 127 — 2026-11-05 15:08:21 Europe/Paris (UTC+01:00) — Codex
Miroir publié et contrôlé en HTTPS : page, app.js?v=20261105-137a et style.css répondent 200 ; les deux options radio sont accessibles, avec première dérivée sélectionnée et affichée par défaut. GitHub Pages run 42041756935 réussi sur le commit miroir f186186318b41080232c6438f1ed3bf3a55d7499, confirmé par ls-remote. SHA-256 des trois fichiers identiques à MFTN : index.html 98B7058825FE76D37865868F0FEA5FA467D115E038551430BF276C343D08D335 ; app.js 91907216E90D0B6528934F1B868A2CFA1BABE02BAC1F72DB0C4E77F7C0C9D758 ; style.css 73984123B6567AC6FC77014E4901F1BB09E41B34A609FE676EF9A05641E71C6A. Test de syntaxe JS réussi. Bascule au pointeur non exercée ; verrou libéré.

### Prise en charge tâche miroir 128 — 2026-11-05 15:11:33 Europe/Paris (UTC+01:00) — Codex
Tâche utilisateur 138 prise après clôture et libération de la tâche miroir 127. Réservation de mftn/calculateurs/index.html, style.css, app.js, calc.js et guide.js, avec suivi/decisions.md, passations.md et verrous.md. Source de référence : dépôt MFTN, tâches 138. Audit et changements attendus : usage sur téléphone/tablette, valeurs initiales pertinentes, boutons de préréglage des explorations guidées. Le miroir est à synchroniser après contrôle local.

### Avancement tâche miroir 128 — 2026-11-05 15:23:18 Europe/Paris (UTC+01:00) — Codex
Synchronisation depuis `C:\Latex\MFTN\Peda_inv\site` : `index.html` et `style.css`, SHA-256 identiques source/miroir (index `898C93C940049A82608708AC1A3894319B5F3C4A175CE32AE3F7C070E2362AF3`, style `2C6368A6D01E8D296582592BE5FD7F90E7B9C6E30F958F5D34653E51C7E7CF29`). L'audit couvre 13 calculateurs, 58 curseurs et 78 préréglages ; tests `test_calc.js` réussis. Restent le commit/push et le contrôle du déploiement Pages. Pas d'essai sur appareil tactile dans cette passe.

### Clôture tâche miroir 128 — 2026-11-05 15:33:24 Europe/Paris (UTC+01:00) — Codex
Commit `dc62b7ec98e8607b22c09599268be9a4929eeb46` poussé sur `origin/main` et confirmé par `git ls-remote`. GitHub Pages run `42045456301` réussi ; page et ressources HTTPS (index, style.css v138a, app.js, calc.js, guide.js) répondent HTTP 200. Le CSS public contient les règles responsive. Pas d'essai visuel sur tablette ou téléphone physique.

### Prise FIFO — tâche miroir 129 — 2026-11-05 15:42:01 Europe/Paris (UTC+01:00) — Codex
Tâche miroir associée à la tâche 139 MFTN. État initial : branche main, HEAD 1da42d1, arbre propre ; tâche miroir 128 clôturée et verrous libérés. Je réserve mftn/calculateurs/app.js, index.html et style.css, ainsi que suivi/decisions.md, passations.md et verrous.md. La source de référence est C:\Latex\MFTN\Peda_inv\site. Après synchronisation, vérifier la cohérence des fichiers, les interactions des graphes, les contrôles techniques et le déploiement GitHub Pages.

### VERROUS ACTIFS — tâche miroir 129 — 2026-11-05 15:42:01 Europe/Paris (UTC+01:00) — Codex
| Fichier / périmètre | État | Prochaine action |
|---|---|---|
| mftn/calculateurs/app.js, index.html, style.css | ACTIF — Codex | synchroniser après contrôle MFTN puis vérifier Pages |
| suivi/decisions.md, passations.md, verrous.md | ACTIF — Codex | tracer contrôles et publication puis libérer |


### Actualisation des verrous — tâche miroir 129 — 2026-11-05 15:52:17 Europe/Paris (UTC+01:00) — Codex
Périmètre inchangé sur les sources du site. Les registres miroir réservés sont suivi/decisions.md, suivi/passations.md et suivi/verrous.md ; synchronisation, publication puis libération après contrôle.


### Clôture tâche miroir 129 — 2026-11-05 15:56:03 Europe/Paris (UTC+01:00) — Codex
Synchronisation app.js et index.html depuis MFTN terminée ; empreintes source/miroir identiques. Commit b914185901605f033278acef979f10c62a8d87a9 poussé et confirmé sur origin/main. GitHub Pages run 42049578189 réussi ; page publique et script v20261105-139a HTTP 200, script servi conforme. Limite : interaction au pointeur/tactile non testée individuellement.


### VERROUS — clôture tâche miroir 129 — 2026-11-05 15:56:03 Europe/Paris (UTC+01:00) — Codex
| Périmètre | État |
|---|---|
| mftn/calculateurs/app.js, index.html, style.css | LIBRE — commit b914185 publié |
| suivi/decisions.md, passations.md, verrous.md | LIBRE — contrôles et publication consignés |

### Prise FIFO — tâche miroir 130 — 2026-11-05 16:12:07 Europe/Paris (UTC+01:00) — Codex
Tâche associée à la tâche MFTN 140. HEAD miroir `aaf0545`, arbre propre ; tâche miroir 129 LIBRE depuis 15:56:03. Réservation : `mftn/calculateurs/situations.js`, `app.js`, `index.html` et `suivi/decisions.md`, `passations.md`, `verrous.md`. La source de référence est `C:\Latex\MFTN\Peda_inv\site`. Synchroniser les trois fichiers après contrôles, puis vérifier le déploiement Pages.

### VERROUS ACTIFS — tâche miroir 130 — 2026-11-05 16:12:07 Europe/Paris (UTC+01:00) — Codex
| Fichier / périmètre | Détenteur et état | Prochaine action |
|---|---|---|
| mftn/calculateurs/situations.js, app.js, index.html | Codex — ACTIF | synchroniser après contrôle source |
| suivi/decisions.md, passations.md, verrous.md | Codex — ACTIF | consigner et libérer après publication |
### Libération tâche miroir 130 — 2026-11-05 16:14:12 Europe/Paris (UTC+01:00) — Codex
Sources synchronisées avec MFTN, syntaxe contrôlée et aperçu local inspecté. Réservations de `mftn/calculateurs/situations.js`, `app.js`, `index.html` et des trois registres LIBRES ; publication GitHub Pages en cours.

### VERROUS — clôture des modifications tâche miroir 130 — 2026-11-05 16:14:12 Europe/Paris (UTC+01:00)
| Périmètre | État |
|---|---|
| mftn/calculateurs/situations.js, app.js, index.html | LIBRE — vérifiés identiques à la source MFTN |
| suivi/decisions.md, passations.md, verrous.md | LIBRE — contrôles consignés, publication en cours |
### Clôture tâche miroir 130 — 2026-11-05 16:16:46 Europe/Paris (UTC+01:00) — Codex
Miroir poussé et confirmé : `cca3bcbb246a4dfaea0f05397040da9be48854a2`, Pages run `42053012938` réussi. La page et les scripts `app.js?v=20261105-140a`, `situations.js?v=20261105-140a` répondent HTTP 200 et contiennent le texte/schéma corrigés. Les trois fichiers web sont identiques au dépôt MFTN. Verrous libérés.

### VERROUS — clôture tâche miroir 130 — 2026-11-05 16:16:46 Europe/Paris (UTC+01:00)
| Périmètre | État |
|---|---|
| mftn/calculateurs/situations.js, app.js, index.html | LIBRE — commit `cca3bcb` publié |
| suivi/decisions.md, passations.md, verrous.md | LIBRE — publication et contrôles consignés |
### Prise FIFO — tâche miroir 131 — 2026-11-05 16:25:01 Europe/Paris (UTC+01:00) — Codex
Tâche liée à MFTN 141. HEAD miroir `bcd8daf`, arbre propre, verrous tâche miroir 130 libres. Réservation de `mftn/calculateurs/situations.js`, `app.js`, `index.html`, `style.css` et registres `suivi/decisions.md`, `passations.md`, `verrous.md`. Source de référence `C:\Latex\MFTN\Peda_inv\site`. Synchroniser après contrôle local et vérifier la publication Pages.

### VERROUS ACTIFS — tâche miroir 131 — 2026-11-05 16:25:01 Europe/Paris (UTC+01:00) — Codex
| Fichier / périmètre | État | Prochaine action |
|---|---|---|
| mftn/calculateurs/situations.js, app.js, index.html, style.css | ACTIF — Codex | synchroniser le schéma animé et le texte validés |
| suivi/decisions.md, passations.md, verrous.md | ACTIF — Codex | consigner contrôles et publication |
### 2026-11-05 16:32:40 Europe/Paris (UTC+01:00) — tâche miroir 131
- **Fait** : le miroir `mftn/calculateurs/{app.js,index.html,situations.js,style.css}` est synchronisé avec `C:\Latex\MFTN\Peda_inv\site` pour l’animation du profil diffusif et le schéma des zones chaudes.
- **Contrôlé** : Edge en aperçu local ; animation interrompue à t=1 s, terminée à t=2 s, courbe/temps et positions d’entrée; `node --check` des deux scripts et `git diff --check` réussis; SHA source/miroir identiques pour les quatre fichiers.
- **Limites** : publication distante et son contrôle en attente; pas d’essai sur téléphone physique.
- **Prochaine étape** : pousser les fichiers web, attendre la génération Pages, vérifier page et ressources publiques, consigner les identifiants réels.
- **Verrous** : code libéré pour synchronisation Git; registres gardés par Codex jusqu’à clôture.

### Clôture tâche miroir 131 — 2026-11-05 16:36:54 Europe/Paris (UTC+01:00) — Codex
- Miroir `cours-publics/mftn/calculateurs` poussé sur `main`, commit `273a0758a725f62a8dc6ee5efc0af201d5e3dd01` vérifié par `git ls-remote`; Pages run `42056402012` succès sur ce HEAD.
- Page, app.js, situations.js et style.css avec le cache-buster `20261105-141a` répondent HTTP 200 et exposent le bouton, la géométrie corrigée et le profil dynamique.
- SHA-256 source/miroir identiques consignés dans `C:\Latex\MFTN\version_traceability.md`. Contrôle visuel local interactif réussi, pas d’essai sur appareil mobile physique.
- Verrous du code et des trois registres LIBRES.

### Prise FIFO — tâche miroir 132 — 2026-11-05 16:46:45 +01:00 — Codex
Tâche miroir de MFTN 142. HEAD initial 5ef9619, arbre propre ; dernière entrée de verrous tâche 131 libérée. Réservation de mftn/calculateurs/{guide.js,app.js,index.html,style.css} et des registres suivi/{decisions,passations,verrous}.md. Source de référence : C:\Latex\MFTN\Peda_inv\site. Harmoniser le rendu des formules du site avec KaTeX, vérifier l’ensemble, puis pousser et contrôler Pages.

### Avancement tâche miroir 132 — 2026-11-05 17:01:15 Europe/Paris (UTC+01:00) — Codex
Miroir synchronisé à la source MFTN pour app.js, index.html et style.css. Contrôles locaux : node --check, diff-check avec cr-at-eol et comparaison des SHA réussis. Aperçu navigateur : exercice Barre 1D rendu en KaTeX, formule qh²/(8λ) formatée, message recalculé après modification du curseur q sans faux rendu des énoncés en français ; aucune erreur de console. Commit miroir/publication en cours.

### Reprise publication tâche 132 — 2026-11-05 17:14:29 Europe/Paris (UTC+01:00) — Codex
Le code miroir est poussé sur `main` (commit `d9dcef1a27b652a852fe87772d7bbd820a3bc6d9`, référence distante contrôlée). Le build initial a réussi mais la création du déploiement Pages a échoué avec HTTP 502. La relance `42061088298` reste incohérente côté API (toujours `queued`, sans jobs ; le déploiement `7578600868` a un statut `failure`). L’appel de reconstruction Pages n’a retourné aucun JSON exploitable. Je pousse une mise à jour des registres pour déclencher une nouvelle exécution Pages, puis vérifierai son état et l’URL publique. Commit de suivi MFTN `63e9355cc19030753d27df8437bc5c3e0b842345` poussé et référence distante confirmée.

### Clôture tâche miroir 132 — 2026-11-05 17:17:23 Europe/Paris (UTC+01:00) — Codex
- Commit miroir `709dfa7827af53b1415c9fa4eb57b78275987943` poussé et référence distante `main` vérifiée. Commit MFTN de clôture `7d2a915058f77ca0b05a6f4952248b429d785706`.
- Pages run `42062434043` réussi (build et déploiement) sur le commit miroir `709dfa7`. Le run `42061088298` avait échoué en HTTP 502 ; ce nouveau push a déclenché et rétabli la publication.
- Page publique ouverte sur `#barre` : formules du problème et de l’exercice rendues en typographie mathématique, avec indices et exposants. Inspection locale couvrant les 16 sections et les messages après changement de curseur ; aucune erreur de console. SHA-256 source/miroir identiques consignés dans le dépôt MFTN.
- Aucun calcul ni contenu scientifique modifié. Aucun essai sur appareil mobile physique. Code et registres **LIBRES**.

### Prise FIFO — tâche miroir 133 — 2026-11-05 17:26:51 +01:00 — Codex
Tâche miroir de MFTN 143. Dépôt cours-publics branche main, HEAD initial 5ebe24b, arbre propre ; tâche 132 libre. Source de référence : C:\Latex\MFTN\Peda_inv\site. Périmètre réservé : mftn/calculateurs/situations.js, index.html, img/FensterIR_Blower_Door.jpg et suivi/{decisions,passations,verrous}.md. Contrôle de source/licence et légende selon passation MFTN.

### Avancement tâche miroir 133 — 2026-11-05 17:29:45 +01:00
L’image nouvelle et les fichiers du site sont synchronisés depuis MFTN. SHA-256 source/miroir identiques : situations.js 17B843F6475AD68C0AE886BE3F87403107AFAE602F99DF2F0115EFF98C89BD3A, index.html 56565D7371B1053B5B30A09255AB49821A80B9C36A672BED307AF818DF52B940, image E7C139D0677C7DA62B27C46D0F43E015705046C4ECE4C6E721970506CAE965EB. Rendu vérifié dans le navigateur local ; publication et contrôle HTTPS à suivre.
### Clôture locale tâche miroir 133 — 2026-11-05 17:31:38 +01:00 — Codex
La thermographie est synchronisée depuis MFTN. La légende crédite Sönke Krüll et CC BY 3.0 et distingue la fuite visible des trois modèles idéalisés. Contrôle local visible terminé, node --check et diff --check terminés. Source MFTN commit 3a83e84 poussé ; déploiement Pages du miroir à vérifier.
### Clôture publiée tâche miroir 133 — 2026-11-05 17:36 +01:00 — Codex
GitHub Pages run 42065379910 a réussi après le commit miroir 8dc0dad. La page publique #cl affiche la nouvelle thermographie, la légende et les liens d’attribution. Références source et miroir contrôlées. Les verrous du code sont LIBRES ; clôture des registres après publication de ce suivi.
### Clôture tâche miroir 133 — 2026-11-05 17:37:00 +01:00 — Codex
La photo remplacée est visible en ligne après le déploiement Pages `42065379910` (succès). L’image, la légende, le texte alternatif et les crédits CC BY 3.0 sont contrôlés. Le miroir reflète MFTN. Code et registres libérés.

### Prise FIFO — tâche miroir 134 — 2026-11-05 17:43:55 +01:00 — Codex
Dépôt cours-publics main, HEAD initial 42955bc, arbre propre et origin/main synchronisé. Tâche miroir de MFTN 144. Source de référence : C:\Latex\MFTN\Peda_inv\site. Réserver mftn/calculateurs/app.js et CSS de palette si requis, ainsi que suivi/{decisions,passations,verrous}.md. Corriger le rendu des couleurs de toutes les séries partageant un même canvas ; préserver les formes de marqueur, pointillés et légendes. Contrôler le screenshot Barre et les autres panneaux avec superpositions, puis publier et vérifier Pages.

### Clôture tâche miroir 134 — 2026-11-05 17:52:27 +01:00 — Codex
MFTN source et miroir poussés : `eb57fb5` / `fc63d29`, références distantes vérifiées. GitHub Pages run `42068718634` réussi. Page `#barre` et script `app.js?v=20261105-144a` répondent HTTP 200. Le moteur `plot()` garantit une couleur normalisée distincte par série dès qu’un doublon est présent. `node --check` et `git diff --check` réussis. Pas de changement de calcul, PDF ou source. Visuel public chargé ; capture pixel à pixel non conservée. Verrous libérés après publication.

Addendum — 2026-11-05 17:54:49 +01:00 : registres de clôture poussés sous le commit miroir `60ed8d4b3696894726460603cac5e0b0e511bb7c`, HEAD distant vérifié. Pages run `42069181859` réussi sur ce HEAD.

### Prise FIFO — tâche miroir 135 — 2026-11-05 17:57:31 +01:00 — Codex
Tâche miroir de MFTN 145. Réserver `mftn/calculateurs/{app.js,calc.js,index.html}` et `suivi/{decisions,passations,verrous}.md`. Clarifier erreur signée vs absolue, démontrer l’écart DF/VF sur un cas uniforme, rendre l’intensité du maillage non uniforme réglable ; publier après contrôle syntaxique, numérique manuel recalculé, et vérification visuelle du navigateur.

### Clôture tâche miroir 135 — 2026-11-05 18:09:22 +01:00 — Codex
MFTN commit `c7d064b62108b59f077b7ea13da9b8aa5f0f81ec`, miroir `892752b0dbeecbf667409a8472b9446256379216`, refs `main` vérifiées. Pages run `42071673554` réussi. Empreintes source/miroir de app.js, calc.js et index.html concordent (MFTN `version_traceability.md`). Page publique `#barre` affiche l’erreur signée, le maximum absolu, le cas uniforme DF/VF et le curseur d’étirement cosinus. Contrôles syntaxe, diff et numérique réussis. Aucun PDF ou source externe modifié. Verrous libérés.

### Prise en charge Codex — MFTN tâche 149 — 2026-11-05 19:19:44 +01:00
- État : en cours ; miroir réservé pour synchronisation après modification de la source MFTN.
- Périmètre : mftn/calculateurs/{app.js,situations.js,index.html} et registres du dépôt cours-publics.
- Dépendance : tâche 149 source MFTN, verrou désormais libre selon passation du 2026-11-05 19:12:10.
- Contrôle prévu : syntaxe, cohérence source/miroir, rendu local/public et GitHub Pages.
- Prochaine action : synchroniser après l’implémentation MFTN, déployer et vérifier la page #edpb.

### Reprise FIFO — tâche miroir 149 — 2026-11-05 20:46:02 +01:00 — Codex
La source MFTN a libéré `Peda_inv/` dans sa dernière table de verrous. Reprise du verrou réservé précédemment : modifier uniquement `mftn/calculateurs/{app.js,situations.js,index.html}` et les registres de suivi pour synchroniser l’animation #edpb depuis MFTN. Les modifications déjà présentes aux registres restent préservées et seront vérifiées avant leur commit.

### Avancement tâche miroir 149 — 2026-11-05 21:04:02 +01:00 — Codex
- **Fait** : les quatre fichiers du calculateur public ont été synchronisés depuis `C:\Latex\MFTN\Peda_inv\site`.
- **Contrôlé** : les empreintes SHA-256 de `app.js`, `situations.js`, `index.html` et `style.css` sont identiques à la source ; l’animation, la pause et la reprise ont été vérifiées visuellement dans Edge local sur la source MFTN.
- **Limites** : cette copie locale du miroir n’est pas encore publiée ; aucun contrôle du site public après déploiement.
- **Prochaine étape** : commit/push des deux dépôts, attendre le workflow Pages et vérifier le calculateur public #edpb.

### Clôture tâche miroir 149 — 2026-11-05 21:08:52 +01:00 — Codex
- Miroir poussé par `66100f0bf9dcf6cd537a6c14cc5369212656ef79`; `git ls-remote` a confirmé la référence `main`.
- GitHub Pages run `42100338432` terminé avec succès. La page du calculateur et `app.js?v=20261105-149a` répondent HTTP 200 ; le cache-buster et le code d’animation sont présents.
- Le test Edge local source a confirmé suivi de `c` et `t`, pause et reprise. Les fichiers du miroir et registres de la tâche 149 sont LIBRES. Aucun PDF modifié.

### Prise FIFO — tâche miroir 151 — 2026-11-05 21:12:34 +01:00 — Codex
Réservation des fichiers `mftn/calculateurs/{app.js,situations.js,index.html,style.css}` et des registres pour synchroniser l’animation contrôlable #adv après contrôle de la source MFTN. Calcul attendu via l’API existante `Calc.advection1d`; aucun changement à `calc.js`. Tâche 150 évaluée sans animation supplémentaire dans le résumé #edpc.

### Avancement miroir — tâche 151 — 2026-11-05 21:27:35 +01:00 Europe/Paris — Codex
Les quatre fichiers web source/mirroir ont des empreintes SHA-256 identiques ; node --check passe, la suite calculatoire passe dans le dépôt MFTN, git diff --check propre dans les deux dépôts. Le verrou miroir reste actif jusqu’au commit et au contrôle du déploiement Pages. Pas de validation visuelle locale (blocage file:).

### Clôture tâche miroir 151 — 2026-11-05 21:36:56 +01:00 Europe/Paris — Codex
La source `a8b70599b6aa335a63181cf9f659c5c709090c82` et le miroir `76db73a4225d5c2cb8398b43d39a0206e72ceddf` sont publiés ; Pages run `42104208823` réussi ; page et ressources HTTP 200. Vérification visuelle locale non effectuée (politique `file:`). Les quatre fichiers ont des empreintes identiques ; détails dans la passation MFTN.

### Prise FIFO miroir tâche 152 — 2026-11-05 21:36:56 +01:00 Europe/Paris — Codex
Réservation de `mftn/calculateurs/{app.js,style.css,index.html}` et registres pour retirer la scrollbar interne de l’onglet Chaleur après analyse du style partagé.
### Clôture tâche miroir 152 — 2026-11-05 21:43:34 +01:00 Europe/Paris — Codex
Commit miroir `7d15bbe6e59854871fcce72c27d849cc3d31cfda` publié ; Pages run `42105651143` réussi ; page et feuille CSS HTTP 200. `chaleur-grid` et la règle sans défilement imbriqué sont présentes dans les ressources servies. Aucun contrôle visuel sur appareil.
### Prise FIFO tâche miroir 156 — 2026-11-05 21:50:55 +01:00 — Codex
Réservation de `mftn/calculateurs/{index.html,style.css}` et des registres. Dépend de la correction de la source MFTN ; `calc.js` reste hors périmètre.


### Clôture tâche miroir 156 — 2026-11-05 21:57:33 +01:00 — Codex
Commit miroir `254a46c20545f6cda408c9b85e01769f6b1fa777` confirmé sur `origin/main` ; Pages run `42107725161` réussi. Page/CSS HTTP 200 et règles `adv-grid` servies ; SHA-256 identiques à la source MFTN. Inspection visuelle non réalisée. Verrous libérés.

### Prise FIFO — tâche miroir 157 — 2026-11-06 00:00:43 +01:00 — Codex
- Déclencheur : mission utilisateur d’audit/corrections ciblées du site public GitHub Pages, reçue le 2026-11-05 puis reprise le 2026-11-06.
- Dépôt : C:\Latex\cours-publics, branche main, HEAD initial af30c21a465ff6fdcc5f62ef3ecaa831dbc99e06 = origin/main ; arbre initial propre.
- Périmètre réservé : mftn/calculateurs/{index.html,app.js,situations.js,style.css} et registres suivi/{decisions,passations,verrous}.md. Aucune modification du dépôt source MFTN.
- Contrôle initial : la situation #edpb contient des valeurs directes sous « Repère » et le générateur des fiches affiche « Repère avant l’activité » (app.js:1243). Le bouton d’animation est injecté pour #edpb et porte data-kt=parabolique ; les gestionnaires arrêtent sur changement d’onglet, réglage et modèle. Ces contrôles sont des indices directs à réévaluer.
- Prochaine action : auditer les trois modèles et la machine d’état d’animation, déplacer les résultats derrière une divulgation consultable après le calcul manuscrit, puis tests navigateur et numériques.
- Limite de la mission reçue : le texte transmis s’arrête après le contrôle de l’amplitude des contributions hyperboliques ; ne pas inférer des exigences supplémentaires non fournies.

### Addendum — amélioration continue et livraison — tâche miroir 157 — 2026-11-06 00:04:03 +01:00 — Codex
L’utilisateur demande que cette mission s’inscrive dans l’amélioration continue et aboutisse à un livrable. Cycle suivi : audit des comportements et calculs → corrections ciblées → tests numériques et interactionnels → publication Pages si les contrôles sont concluants. Le périmètre inclut mftn/calculateurs/calc.js pour vérifier et traiter les coins du problème de Dirichlet, en plus du périmètre web initial.

### Addendum — objectif de surveillance — tâche miroir 157 — 2026-11-06 00:08:15 +01:00 — Codex
Orientation confirmée par l’utilisateur : surveillance active visant des livrables utilisables dans les séances. Pour cette passe, clôturer le lot #edpb par contrôle interactionnel/scientifique et publication ; inscrire les suites non couvertes sans présenter l’audit partiel comme un livrable complet.

### Clôture de passe — tâche miroir 157 — 2026-11-06 00:15:06 +01:00 — Codex
- Contrôles numériques : Laplace carré, bords à 0/100 °C ; au centre, un côté chaud = 25 °C, deux côtés opposés = 50 °C, trois côtés = 75 °C, pour N=31 et N=61 (écart inférieur à 4×10⁻⁹ °C aux valeurs de symétrie). Le solveur respecte les bornes et s’arrête en 141–144 itérations (N=31) et 271–272 (N=61), loin du plafond 5000.
- Parabolique : convolution du profil compact avec le noyau de chaleur sur la droite ; les tests numériques déjà exécutés préservent l’intégrale à l’erreur de quadrature près. À t>0, la valeur distante est non nulle mathématiquement ; les petits nombres affichés sont des approximations numériques. La diffusivité est explicitement illustrative, pas une propriété attribuée à une cellule lithium-ion.
- Hyperbolique : formule de d’Alembert vérifiée ; à c=1 m/s et t=2 s, centres ±2 m, amplitude 0,5, supports [−2,5;−1,5] et [1,5;2,5], valeur nulle en x=3 m.
- Interaction locale vérifiée : elliptique sans bouton d’animation ; lecture/pause, fin au temps demandé, changement de paramètre et arrêt en quittant #edpb. Les résultats et repères S1-K1/K2/K3 sont repliés par défaut et accessibles explicitement après le calcul manuscrit. L’animation lancée est elle-même une action explicite qui dévoile les courbes.
- Réserve : aucun appareil mobile physique n’a été testé ; la mission reçue était tronquée après « amplitude des deux contributions hyperboliques ». Audit global des autres séances non effectué. Le pied de page mentionne `test_calc.js`, mais aucun fichier portant ce nom n’existe dans ce dépôt miroir ; ce décalage préexistant reste à corriger dans une tâche de maintenance transversale.
- Contrôle technique du code : `node --check` réussi pour `app.js` et `calc.js`; `git diff --check` propre sur les quatre fichiers du calculateur. Aucun fichier de test dédié n’est présent ici.
- Fichiers modifiés : `mftn/calculateurs/{index.html,app.js,calc.js,style.css}` et les registres de suivi.
- État scientifique : contrôles analytiques et numériques internes effectués pour le périmètre indiqué ; relecteur scientifique indépendant non sollicité, niveau 2 non atteint. Pas de décision d’approbation utilisateur demandée à ce stade.
- État final des verrous de cette passe : libérés à 2026-11-06 00:15:06 +01:00. Prochaine action : synchronisation Git, puis vérification du déploiement Pages et des ressources publiques.

### Preuve de livraison publique — tâche miroir 157 — 2026-11-06 00:17:21 +01:00 — Codex
Commit `f15a20f822fe82af118631d1d44b8513327d4c2b` confirmé sur `origin/main`. GitHub Pages run `42128262801` : `completed / success`. Contrôle HTTP public : page principale, `style.css?v=20261106-157a`, `calc.js?v=20261106-157a` et `app.js?v=20261106-157a` renvoient 200 ; le JavaScript déployé contient la mention de diffusivité illustrative et les réponses de guide repliées. Travail local propre après publication.

### Tâche 180 — alignement des mises en situation MFTN — 2026-11-07 11:03:34 +01:00 — Codex
État : terminé. Fiches S1–S4 lues en lecture seule. Changements réservés aux mises en situation et à l’introduction du site source MFTN puis du miroir mftn/calculateurs. Écarts corrigés : distinction entre barre S1 sans source et exercices S1-X5/X6 avec production ; description Jacobi/Gauss–Seidel explicitement présentée comme système simplifié ; retrait du mode d’emploi redondant. Alignements S2 à S4 vérifiés. Aucun changement aux paramètres ou aux fiches.

### Clôture tâche 180 — 2026-11-07 11:08:52 Europe/Paris (UTC+01:00) — Codex
`node --check` passe sur `situations.js` ; empreinte du fichier identique entre la source MFTN et le miroir. `git diff --check` est propre sur les changements de contenu. Audit éditorial statique terminé ; rendu visuel navigateur non inspecté.

Addendum publication : commit `f1a3c1e4e5ab347a42733a0e2462bdb89c6c81ac` poussé sur `main` ; GitHub Pages run `42362919175` réussi. Page et script publics HTTP 200, avec les textes mis à jour servis.

### 2026-11-07 11:34 +01:00 — Tâche 183 : situations reliées aux modèles étudiés
Le texte de situation a été relié aux modèles effectivement calculés et les simplifications sont justifiées : transport 1D à coefficients constants, paroi de S2, système tridiagonal de Jacobi/Gauss–Seidel, refroidissement de référence en S3, et banc périodique d’advection. L’onglet « Ordre » distingue maintenant le dessin de paroi du profil analytique test sin(x) utilisé par le calculateur. Copie synchronisée depuis la source MFTN ; syntaxe JavaScript vérifiée ; déploiement à faire.

Clôture tâche miroir 183 — 2026-11-07 11:35 Europe/Paris (UTC+01:00) — Codex. Commit de contenu `8773a867427836e31a19bd7cfcdd1bfe4fa2c9e9` poussé sur `main` ; Pages run `42364547644` réussi. Le script public répond HTTP 200 et contient les descriptions mises à jour (système de paroi S2, profil-test sin(x), cas de chaleur S3, banc périodique). Les fichiers source et miroir ont la même empreinte. Verrou libéré.

### 2026-11-07 12:00:13 +01:00 Codex → prochain intervenant — prise FIFO tâche miroir 184
- **Tâche / état** : prise en charge ; ajouter un retour visible vers l’accueil général des supports.
- **Périmètre réservé** : mftn/calculateurs/index.html et suivi/{decisions,passations,verrous}.md.
- **Fait** : vérification de l’URL générale dans suivi/contexte.md ; dépôt miroir propre sur main, HEAD c2d3e42.
- **Contrôlé** : l’en-tête actuel ne contient que le QR code et un lien vers le calculateur ; aucun lien général distinct.
- **Prochaine étape** : ajouter le lien, contrôler sa cible, publier et vérifier Pages.
- **Verrous** : actifs pour cette passe.

### Clôture tâche miroir 184 — 2026-11-07 12:02:08 +01:00 — Codex
- **Fait** : ajout d’un lien de retour vers le site général dans la carte d’accès ; libellé du lien vers la page actuelle précisé en « Ouvrir le calculateur ».
- **Contrôlé** : git diff --check propre ; deux destinations HTTP 200 avant publication ; commit 0735a05a4cd14f94a0afa34bbe55ed5a299bba3 poussé sur origin/main ; GitHub Pages run 42366374198 terminé avec succès ; page publique HTTP 200, lien de retour et cible générale présents.
- **Limites** : contrôle effectué par réponse HTML servie ; pas d’inspection visuelle sur téléphone physique.
- **Prochaine étape** : aucune pour cette demande.
- **Verrous** : libérés.

### 2026-11-07 12:06:45 +01:00 Codex → prochain intervenant — prise FIFO tâche miroir 185
- **Fait** : comparaison des captures et des styles du portail général et du calculateur ; URL générale confirmée.
- **Contrôlé** : miroir propre à b54c57d; source MFTN 628bded, index/style libres selon la passation 187. Le dépôt MFTN comporte d’autres modifications préexistantes, qui restent hors périmètre.
- **Périmètre réservé** : miroir mftn/calculateurs/{index.html,style.css} et registres ; source Peda_inv/site/{index.html,style.css}.
- **Prochaine étape** : harmoniser les éléments visuels communs et inspecter les vues ordinateur/téléphone avant publication.
- **Verrous** : actifs.


### Clôture tâche miroir 185 — 2026-11-07 12:14:19 +01:00 — Codex
- **Fait** : bandeau de marque reprenant le site général, palette navy/turquoise, titre serif, thème clair par défaut ; le thème sombre demeure disponible. Le lien vers le site général est placé dans le bandeau supérieur ; le QR et l’accès au calculateur restent.
- **Contrôlé** : `git diff --check` propre sur le périmètre ; commit source MFTN `283951e26d40ac683baa69a3eadcd0a51db076bc` et commit miroir `96758d277bd17eb1bc1f0ad63deaf649e8b4fd02` présents sur les branches distantes ; Pages run 42367166819 terminé avec succès ; page et CSS HTTP 200, cache `20261107-188a` servi.
- **Limites** : inspection visuelle par navigateur non réalisée ; l’utilisateur peut vérifier le rendu sur ordinateur et téléphone à l’URL publique.
- **Prochaine étape** : retour utilisateur sur le rendu.
- **Verrous** : libérés.

### Tâche miroir 186 — publication du chapitre 1 du poly — 2026-11-07 12:20:00 Europe/Paris (UTC+01:00) — Codex
Prise FIFO : le dépôt miroir `C:\Latex\cours-publics` était propre sur `main`, HEAD `defaf8a`, et la dernière passation libérait l’index public. Réservation limitée à `index.html`, au nouvel extrait `mftn/chapitre-01-poly.pdf` et aux trois registres de suivi. Le PDF source officiel est `C:\Latex\MFTN\output\pdf\MFTN_poly.pdf` ; son signet donne chapitre 1 page PDF 7, chapitre 2 page PDF 46. L’extrait de 39 pages a été contrôlé au début et à la fin. La mention « Version de travail » est visible dans le PDF et sur le site.
Prochaine action : contrôle HTML, commit/push et vérification GitHub Pages.

### Clôture tâche miroir 186 — 2026-11-07 2026-11-07 12:31:24 Europe/Paris (UTC+01:00) — Codex
L’extrait mftn/chapitre-01-poly.pdf est public et accessible. Il contient 39 pages correspondant exactement aux pages physiques 7–45 du poly officiel ; la page 7 ouvre le chapitre 1, la page 46 du poly ouvre le chapitre 2, et la dernière page de l’extrait est la bibliographie du chapitre 1. Signets conservés ; rendu de la première et de la dernière page inspecté. La première page identifie la version de travail et reprend la date/heure de compilation inscrite sur la couverture du poly source : 7 novembre 2026 à 10 h 39.
Commit de contenu  c03f1f9c8b649acfb97bebc2b6acff47683f123 présent sur origin/main. Première exécution Pages 42367979660 annulée après un blocage de déploiement et signal API « Page build failed » ; construction Pages relancée via l’API, build 1348845320 « built », run 42368417230 réussi. Vérification de l’accueil public : HTTP 200, lien du poly et mention « version de travail » présents. PDF public : HTTP 200, pplication/pdf, 873813 octets, 39 pages, titre et bibliographie vérifiés.
Contrôle technique et de rendu de l’extrait : atteint. Validation scientifique nouvelle : non réalisée ; le chapitre est publié à l’identique du poly source, sans révision de contenu. Le statut « version de travail » est signalé. Prochaine étape : l’utilisateur peut ouvrir l’extrait depuis la page générale. Verrous libérés.


### Tâche miroir 187 — correction du sélecteur de dérivée — 2026-11-07 12:36:02 +01:00 — Codex
Prise FIFO après la clôture miroir 186. Dépôt `C:\Latex\cours-publics` propre sur `main`, HEAD et `origin/main` `2a69882`. Dernière réservation publiée libre. Périmètre : `mftn/calculateurs/app.js`, `index.html` et trois registres ; code source correspondant `C:\Latex\MFTN\Peda_inv\site`. La source MFTN contient d’autres modifications hors périmètre qui seront préservées. Diagnostic attendu : radio `o-kind` situé hors des formulaires ; vérifier si son `change` n’appelle pas le rendu.
Prochaine étape : brancher le radio sur `runOrdre`, mettre à jour le cache, contrôler manuellement les deux états et publier.

### Clôture tâche miroir 187 — sélecteur de dérivée — 2026-11-07 12:41:36 +01:00 — Codex
- **Fait** : le groupe radio o-kind, situé hors formulaire, possède maintenant son écouteur change ; il relance le rendu complet de l'onglet et actualise le sélecteur, les équations, courbes et résultats.
- **Contrôlé** : 
ode --check et git diff --check ciblés propres ; index et script publics HTTP 200, version pp.js?v=20261107-190a servie avec l'écouteur ; GitHub Pages run 42369152962 réussi ; miroir poussé sous 6d6e14548c2b4c3432ff3f32d7a6f65d6bc490d5.
- **Limite** : l'automatisation n'a pas pu interagir avec les boutons dans la fenêtre Edge ; pas de validation visuelle directe.
- **Prochaine étape** : l'utilisateur peut confirmer le rendu sur la page publique.
- **Verrous** : libérés. La clôture antérieure de la tâche 185 dans ce registre confirme également que son verrou est libre ; sa ligne ACTIF plus ancienne dans errous.md était restée obsolète.

### Addendum de traçabilité — correction des caractères de contrôle dans la clôture miroir 186 — 2026-11-07 12:41:36 +01:00 — Codex
La clôture précédente de la tâche 186 contient des caractères parasites dans le SHA du commit et le type MIME transcrit. Valeurs vérifiées : commit c03f1f9c8b649acfb97bebc2b6acff47683f123 ; type MIME pplication/pdf. La date répétée dans son titre est une erreur de transcription ; l'heure correcte de cette clôture est 2026-11-07 12:31:24 Europe/Paris (UTC+01:00). L'entrée signée antérieure reste intacte.
### Addendum de forme — tâches miroir 186 et 187 — 2026-11-07 12:42:23 +01:00 — Codex
L'addendum précédent sur la transcription de la clôture 186 a lui-même subi un échappement parasite. Valeurs vérifiées : SHA de commit c03f1f9c8b649acfb97bebc2b6acff47683f123 ; type MIME application/pdf ; heure de clôture 2026-11-07 12:31:24 Europe/Paris (UTC+01:00). Pour la tâche 187, commandes réellement exécutées : node --check mftn/calculateurs/app.js et git diff --check ciblé ; les deux réussissent. L'URL publique de l'application et le script versionné répondent HTTP 200 ; le script contient l'écouteur #p-ordre input[name=o-kind]. Pages run 42369152962 réussi, commit code 6d6e14548c2b4c3432ff3f32d7a6f65d6bc490d5. Le contrôle visuel interactif n'a pas été obtenu.

### Tâche miroir 188 — intitulés du panneau de réglages de l’onglet « Ordre » — 2026-11-07 12:45 +01:00 — Codex
Prise FIFO. Périmètre limité à mftn/calculateurs/index.html et registres de suivi. Capture utilisateur : les notations des pas et le texte « Nombre de pas testés » se replient en une colonne haute et peu lisible. Corriger la présentation en conservant les paramètres et la suite de raffinement. Vérifier puis publier.

### Clôture tâche miroir 188 — libellés de raffinement — 2026-11-07 12:46:31 +01:00 — Codex
- **Fait** : libellés compacts et explication du raffinement placée sur une ligne d’aide distincte ; aucun paramètre ni calcul modifié.
- **Contrôlé** : page et CSS HTTP 200 ; cache style.css?v=20261107-191a et les deux libellés présents. GitHub Pages run 42369542577 réussi. Commit miroir 1aa3687abf68b1ff8f7fa37d0a9beecbee788083.
- **Limite** : pas d’inspection visuelle dans la fenêtre navigateur de cette session.
- **Verrous** : libérés.

### Tâche miroir 189 — paramètre f dans l’onglet Jacobi / Gauss–Seidel — 2026-11-07 12:51:09 +01:00 — Codex
Prise FIFO. Répercuter le réglage fixe f = 1 depuis Peda_inv/site/index.html dans mftn/calculateurs/index.html, sans changement du solveur. Préserver l’échelle de référence des valeurs de l’exercice.

### Clôture tâche miroir 189 — second membre fixé — 2026-11-07 12:54:32 +01:00 — Codex
- **Fait** : curseur du second membre retiré ; la valeur fixe f=1 reste dans le modèle et alimente les mêmes calculs et exemples.
- **Contrôlé** : page publique HTTP 200, texte de référence et valeur interne présents, contrôle du retrait du curseur réussi ; Pages run 42370021497 réussi. Commit miroir 80d8b23779a433f53d6838216d70afb855b3347e.
- **Prochaine étape** : aucune modification des autres paramètres avant décision utilisateur ; candidats décrits dans la passation source et le compte rendu.
- **Verrous** : libérés.

### Tâche miroir 190 — Fo variable, L=1 m fixe — 2026-11-07 13:59:27 Europe/Paris (UTC+01:00) — Codex
Synchroniser le calculateur chaleur depuis la source MFTN : Fo demeure réglable et pilote Δt ; L est fixé à 1 m. Contrôler le repère, les valeurs initiales et la publication Pages.

#### Clôture tâche miroir 190 — 2026-11-07 14:05:15 Europe/Paris (UTC+01:00)
L est fixé à 1 m dans l’onglet chaleur et ses préréglages ; Fo reste réglable et pilote Δt. Réglage initial tf=200 s, affichage corrigé du Δt réellement appliqué. Contrôles JS et diff réussis. Commit 28176ac365a6955718a239a60be70b0b95c8fc2, Pages run 42375211920 réussi ; page et ressources versionnées HTTP 200. Verrou libéré.

### Addendum hashes de la tâche miroir 190 — 2026-11-07 14:06:15 Europe/Paris (UTC+01:00)
Correction de transcription : le commit du code du site est b28176ac365a6955718a239a60be70b0b95c8fc2 ; le commit de clôture du suivi est c8904054d32d6d5e3072201bb3d6bec53eff964d. Les deux hashes ont été vérifiés sur origin/main. La ligne précédente n’est pas réécrite.

### Tâche miroir 193 — pente visible dans les graphes de chaleur — 2026-11-07 14:09:32 Europe/Paris (UTC+01:00)
Demande : afficher directement dans les figures les pentes déjà calculées pour les graphes d’erreur selon Δt et d’erreur selon h. Légende et calcul conservés ; annotation à distinguer comme pente observée.

#### Clôture tâche miroir 193 — pente visible dans les graphes chaleur — 2026-11-07 14:13:55 Europe/Paris (UTC+01:00)
Pentes log-log observées affichées dans les deux figures d’erreur, avec couleur correspondant à chaque courbe ; valeurs de pente conservées dans la légende. Scripts contrôlés, page et app.js versionné HTTP 200 ; Pages run 42375883659 réussi. Commit miroir 766659d12f18a223a8259ecc1ce6e395faab9bcc. Verrou libéré.
#### Tâche miroir 196 — audit site polluant/batterie — 2026-11-07 14:37:19 +01:00
Codex prend le miroir après contrôle du verrou précédent (clôture 193, LIBRE à 14:13:55) et de l'état Git propre. Périmètre réservé : mftn/calculateurs/{index.html,app.js,calc.js,equations.js,guide.js,situations.js} et registres de suivi. La source maître est C:\Latex\MFTN\Peda_inv\site; ne pas modifier de chemins hors périmètre.

#### Clôture tâche miroir 196 — audit polluant/batterie — 2026-11-07 14:51 Europe/Paris (UTC+01:00)
Corrections source recopiées à l'identique dans le miroir : accueil des deux missions, formulation FTCS, résidu relatif, schéma 1D du Péclet, convention de flux, pentes observées, repères EDP repliés, nombre de Biot avec L=1 m. Cinq empreintes source/miroir concordent ; tests de calcul et syntaxe JS passés. Contrôle de navigateur non réalisé. Aucun nouveau média ajouté. Publication Pages à vérifier après commit.

### Clôture tâche miroir 196 — publication vérifiée — 2026-11-07 14:54:30 Europe/Paris (UTC+01:00)
Commit miroir `fed0523a7b319c47b5e75b7af6d36d9de12bb711`, poussé et vérifié sur origin/main. GitHub Pages run `42379026187` est terminé avec succès ; page, app.js et equations.js renvoient HTTP 200 et la page servie contient les deux cartes de mission, le champ Biot et le graphe de résidu relatif. Le contrôle visuel navigateur demeure à faire. Aucun verrou miroir restant.

#### Tâche miroir 198 — calculateur chaleur, Fo comme curseur principal — 2026-11-07 14:57:44 Europe/Paris (UTC+01:00)
Le miroir public est libre depuis la clôture de la tâche 196, publication Pages réussie. Réserver le calculateur chaleur pour synchroniser la suppression du curseur de diffusivité et garder Δt calculé à partir de Fo ; conserver les valeurs de comparaison Fo. Source maître : Peda_inv/site.

#### Clôture tâche miroir 198 — calculateur chaleur, Fo seul — 2026-11-07 15:05:10 Europe/Paris (UTC+01:00)
Le curseur de diffusivité est retiré ; α=10⁻⁵ m²/s est fixé et Δt est dérivé de Fo h²/α. L=1 m, h réglable et comparaisons Fo conservés. Miroir vérifié identique à la source par empreintes. Pages run `42379581331` succès, page HTML avec cache busting : note α fixe présente, `c-alpha` absent, version `20261107-198a`. Tests `test_calc.js` et syntaxes JS passés. Commit miroir `8584c48e27a87584e3655c9e21f1524eb8fa4fa6`. Verrous libérés. Contrôle visuel automatisé non obtenu.

#### Tâche miroir 201 — corriger le tampon du PDF public du chapitre 1 — 2026-11-07 15:10:12 +01:00
Prise de tâche après contrôle de la dernière section des verrous : tâche 198 libérée, dépôt public propre. Le tampon obsolète est dans le PDF d’extrait lui-même, pas dans le HTML. Périmètre verrouillé : mftn/chapitre-01-poly.pdf et registres publics. Le tampon sera remplacé par la date/heure compilée figurant sur le poly officiel ; le contenu des pages sera préservé.

#### Clôture tâche miroir 201 — PDF public du chapitre 1 — 2026-11-07 15:16:12 +01:00
Remplacement effectué : le bandeau de la première page indique maintenant « LaTeX compilé le 7 novembre 2026 à 14 h 25 », conformément à la couverture du poly officiel. Contrôle du PDF local et public : 39 pages A4 ; le texte exact du nouveau tampon est présent, l’ancien « Source compilée … 10 h 39 » est absent de la première page. Pages 2 à 39 identiques à l’ancienne version en texte et en pixels. SHA-256 public/local : 7AF4C18F12244AA49F01439D904BF406B923C6BAD52C3820B1A388A2A8D6504F. Pages run 42380705818 réussi ; téléchargement public HTTP 200, application/pdf, hash identique. Commit e59bafe6e6df231d4772241a09905b17ad8fd0a poussé et confirmé ; source Git propre. Verrou libéré.
