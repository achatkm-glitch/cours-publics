# CLAUDE.md — cours-publics

Ce projet utilise une structure de coordination multi-IA (Claude, ChatGPT, Codex…).

## Démarrage obligatoire

Avant toute modification, lire dans cet ordre :

1. `suivi/contexte.md` — contexte stable du projet
2. `suivi/decisions.md` — arbitrages durables (ne pas contredire sans nouvelle entrée)
3. `suivi/passations.md` — état actuel et prochaine étape
4. `suivi/verrous.md` — qui a la main sur quoi

## Fin de session obligatoire

Avant de rendre la main :

1. Mettre à jour `suivi/passations.md` (ce qui a été fait, contrôlé, prochaine étape)
2. Libérer les verrous dans `suivi/verrous.md`
3. Ajouter une entrée dans `suivi/decisions.md` si un arbitrage a été pris

## Structure du site

- Page d'accueil : `index.html`
- Dépôt : https://github.com/achatkm-glitch/cours-publics
- Site publié : https://achatkm-glitch.github.io/cours-publics/

## Règles communes de session — Claude, ChatGPT et Codex

Consignes de Mohammed Khalij, formalisées le 21 octobre 2026 par Codex.

- **Journal des demandes :** après lecture des quatre fichiers de suivi, consigner immédiatement chaque nouveau message de Mohammed dans `suivi/decisions.md`, avec l'horodatage réel Europe/Paris, la demande, `Reçu par`, `Attribué à` et son état de traitement. Ne pas inventer d'attribution : indiquer « à attribuer » si nécessaire.
- **Verrous :** avant de modifier un fichier, déclarer son périmètre et son détenteur dans `suivi/verrous.md`. Ne jamais modifier un fichier verrouillé par un autre acteur. Préserver les modifications locales existantes et les entrées signées des autres intervenants.
- **Coordination autonome :** vérifier soi-même les passations et les verrous pour savoir si Claude ou un autre intervenant a terminé. Ne pas demander ce statut à Mohammed lorsqu'il peut être établi par les traces. Une activité de processus, un silence ou un délai écoulé ne prouve pas la libération d'un fichier. Si l'état reste ambigu, poursuivre les tâches indépendantes sans toucher au fichier concerné.
- **Vérification Git :** confronter toute mention « commit/push/déploiement en attente » à l'état actuel local et distant avant d'agir. Ne pas recréer un commit ou une publication déjà effectués. Distinguer commit local, push confirmé et déploiement réussi ; consigner les preuves et les limites dans la passation.
- **Répertoire de travail :** créer tous les fichiers de travail, aperçus et sorties dans `C:\Latex\cours-publics`, notamment sous `tmp/` pour les fichiers temporaires. Les sources d'autres projets peuvent être consultées et copiées dans le cadre de la demande ; ne pas les modifier pour une simple publication sur ce site.
- **Fin de session :** ajouter une passation indiquant fichiers, travail réalisé, contrôles, limites, destinataire et prochaine action ; consigner les arbitrages dans les décisions et libérer ses verrous avant de rendre la main.
