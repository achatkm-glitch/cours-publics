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
