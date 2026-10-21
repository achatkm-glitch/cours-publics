# Contexte — cours-publics

> Ce fichier décrit le contexte stable du projet. Il ne change que si le projet évolue fondamentalement. Il n'est pas mis à jour à chaque passation.

## Objectif

Site statique publiant les supports de cours de Mohammed Khalij (Maître de conférences, Université de Lorraine · LEMTA · Polytech Nancy). Les étudiants y accèdent librement.

## Site

- URL : https://achatkm-glitch.github.io/cours-publics/
- Dépôt GitHub : https://github.com/achatkm-glitch/cours-publics
- Copie locale (Codex) : `C:\Latex\cours-publics`
- Hébergement : GitHub Pages (branche `main`, pas de Jekyll — `.nojekyll` présent)

## Structure du dépôt

```
cours-publics/
├── index.html          # Page d'accueil — liste tous les documents
├── .nojekyll
├── initiation-cfd/
├── tp-fluent/
└── suivi/
    ├── contexte.md
    ├── decisions.md
    ├── passations.md
    └── verrous.md
```

## Conventions

- Langue du site : français
- Format des documents : PDF
- La page `index.html` liste les cours et leurs documents manuellement
- Pas de générateur de site statique (Jekyll désactivé)

## Acteurs

| Acteur | Rôle |
|---|---|
| Mohammed Khalij | Propriétaire, décideur final |
| Claude (Cowork) | Assistant principal — modifications GitHub, structure, coordination |
| Code (Claude Code) | Claude via CLI — peut travailler sur la copie locale ou GitHub |
| ChatGPT (OpenAI) | Assistant secondaire — peut intervenir sur le contenu |
| Codex | Travaille sur la copie locale `C:\Latex\cours-publics` |
