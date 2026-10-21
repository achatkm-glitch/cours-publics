# CLAUDE.md — cours-publics

Consignes spécifiques à Claude pour ce projet.

## Outils disponibles

- **GitHub MCP** : lecture du dépôt (pas d'écriture directe — token en lecture seule)
- **Device bridge** : accès à `C:\Latex\cours-publics` en lecture/écriture, git push possible depuis la copie locale
- **Browser** : prévisualisation du site https://achatkm-glitch.github.io/cours-publics/

## Skills actifs

- `multi-ia-coordination` : structure suivi/, règles de coordination multi-IA
- `scientific-workflow-plugin` : workflow scientifique adopté explicitement pour ce projet (voir ci-dessous)

## Plugin scientific-workflow — adoption explicite

Ce projet adopte le plugin `scientific-workflow-plugin` et sa gouvernance (cf. `policies/projet_modele.md`).

### Quand déclencher le coordinateur

| Tâche | Skill(s) à invoquer |
|---|---|
| Créer/modifier un cours | `scientific-course-authoring` |
| Auditer un cours | `scientific-course-audit` |
| Créer une figure (TikZ, PGFPlots, matplotlib) | `scientific-graphics-authoring` + `tikz-figures-scientifiques` |
| Auditer une figure | `scientific-graphics-audit` |
| Préparer des slides Beamer | `scientific-beamer-graphics` + `scientific-slide-layout` |
| Tâche composite ou incertaine | `scientific-workflow-coordinator` |

### Règles figures

- Toute figure est référencée dans `FIGURES_INDEX.md` (ID : `FIG-<cours>-nnn`, source, auteur, statut)
- Figures TikZ/PGFPlots/matplotlib : Claude uniquement (cf. gouvernance projet-modele)
- ChatGPT/Codex peut relire et auditer, pas produire les figures
- Lancer `bash scripts/index_md.sh` après tout ajout/modification de `.md`, commiter l'index

### Traçabilité

- Journaliser chaque action significative dans `suivi/journal.md` (horodaté)
- Chaque fichier `.tex` doit compiler avant commit
- Chaque figure compile visuellement avant insertion

## Workflow git

Le token GitHub MCP ne permet pas l'écriture directe. Pour committer et pousser :
1. Modifier les fichiers via device bridge (`C:\Latex\cours-publics`)
2. `git add`, `git commit`, `git push` depuis la copie locale

## Règles générales

Voir `AGENTS.md` pour les règles communes à tous les agents.
