# AGENTS.md — cours-publics

Règles communes à tous les agents travaillant sur ce projet.
**Ce fichier est lu en premier par tout agent, avant toute action.**

## Les 4 acteurs

| ID | Outil réel |
|---|---|
| `Claude` | Claude Cowork (session web/desktop) |
| `Code` | Claude Code (CLI / terminal) |
| `ChatGPT` | ChatGPT (web ou API) |
| `Codex` | GitHub Copilot Codex |

## Démarrage obligatoire

Lire dans cet ordre avant toute modification :

1. `AGENTS.md` (ce fichier)
2. `suivi/contexte.md`
3. `suivi/decisions.md`
4. `suivi/passations.md`
5. `suivi/verrous.md`

## Consignation

- L'agent qui **reçoit** un message de Mohammed le consigne dans `suivi/decisions.md` (horodaté, champ `Reçu par`). Il ne décide pas pour les autres.
- L'agent qui **prend en charge** une tâche pose un verrou dans `suivi/verrous.md` et l'indique dans `suivi/passations.md`.
- Ne jamais modifier un fichier verrouillé par un autre acteur.

## Attribution des tâches

- **Séquentiel** : premier arrivé, premier servi — le premier agent en session prend la tâche et pose le verrou.
- **Parallèle** : chaque agent prend la première tâche disponible non verrouée.
- **Urgent** (Mohammed le dit explicitement) : priorité absolue, quel que soit l'agent disponible.
- **Assignation explicite** (Mohammed nomme `Claude` / `Code` / `ChatGPT` / `Codex`) : seul l'agent désigné traite la tâche.

Tout arbitrage est consigné dans `suivi/decisions.md` avec horodatage.

## Fin de session obligatoire

1. Mettre à jour `suivi/passations.md` (fait / contrôlé / limites / prochaine étape)
2. Libérer les verrous dans `suivi/verrous.md`
3. Ajouter une entrée dans `suivi/decisions.md` si un arbitrage a été pris

## Règles techniques

- **Répertoire de travail** : `C:\Latex\cours-publics` (copie locale) ou via GitHub MCP (lecture seule pour Claude)
- **Git** : distinguer commit local / push / déploiement GitHub Pages. Ne pas recréer un commit déjà effectué.
- **Temporaires** : créer sous `tmp/` uniquement, ne pas versionner.
