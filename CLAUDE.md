# CLAUDE.md — cours-publics

Consignes spécifiques à Claude pour ce projet.

## Outils disponibles

- **GitHub MCP** : lecture du dépôt (pas d'écriture directe — token en lecture seule)
- **Device bridge** : accès à `C:\Latex\cours-publics` en lecture/écriture, git push possible depuis la copie locale
- **Browser** : prévisualisation du site https://achatkm-glitch.github.io/cours-publics/

## Skills actifs

- `multi-ia-coordination` : structure suivi/, règles de coordination multi-IA

## Workflow git

Le token GitHub MCP ne permet pas l'écriture directe. Pour committer et pousser :
1. Modifier les fichiers via device bridge (`C:\Latex\cours-publics`)
2. `git add`, `git commit`, `git push` depuis la copie locale

## Règles générales

Voir `AGENTS.md` pour les règles communes à tous les agents.
