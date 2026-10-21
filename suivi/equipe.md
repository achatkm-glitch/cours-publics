# Équipe cours-publics

Installation : 2026-10-21 13:25:15 +02:00 par Codex, sur demande de Mohammed.

| Rôle | Conversation | Périmètre |
|---|---|---|
| Coordinateur | 01a15e34-b0f6-7932-b3b2-7061543849a0 | attribution, consolidation, suivi central, relais |
| Documents et provenance | 01a15e34-56a1-76e3-b2f9-2b85a9882b8d | PDF publiés, provenance ; suivi/rapport_documents.md |
| Interface et navigation | 01a15e34-608c-7492-81f0-6195d7db789d | index.html ; suivi/rapport_interface.md |
| Publication et contrôles | 01a15e34-6a6c-7bd2-971c-fb2862fe0842 | Git, déploiement Pages, liens ; suivi/rapport_publication.md |

## Fonctionnement

- Première mission : diagnostic de chaque périmètre, commencé en lecture seule.
- Coordinateur responsable des suivis centraux après libération du verrou installation ; chaque intervenant respecte la journalisation et les verrous, avec accès sérialisé aux fichiers communs.
- Relais seulement après passation et libération explicite ; silence et délai ne valent pas transfert.
- La demande de création ne vaut pas autorisation de nouvelles publications ou de refonte.
- Les échanges de consignes et résultats nécessaires à cette coordination font partie du mandat demandé.

## Veille

- Identifiant : veille-coordinateur-cours-publics.
- État confirmé par l'outil : ACTIVE.
- Conversation cible : coordinateur ci-dessus.
- Fréquence : toutes les 30 minutes.
- Surveillance des responsables, passations, verrous et preuves Git/déploiement pertinentes ; reprise des seules actions autorisées.
- Silence si inchangé ou non exploitable ; notification sur changement significatif, fin, échec ou décision requise.
- Installation confirmée ; aucun déclenchement périodique encore vérifié pendant cette passe.

## Première consolidation — 2026-10-21 13:25 +02:00

| Périmètre | État | Éléments vérifiés | Suite proposée |
|---|---|---|---|
| Documents et provenance | Diagnostic reçu, lecture seule | 4 PDF référencés ; 6, 94, 95 et 250 pages, total 445. Empreintes CFD et deux MFTN conformes aux sources accessibles et traces. Provenance Fluent non documentée / non vérifiée. | Clarifier ultérieurement la provenance Fluent, sans remplacer de fichier. |
| Interface et navigation | Diagnostic reçu, lecture seule | Liens locaux et ancres présents ; compteurs concordants. Responsive défini dans le code, mais rendu mobile non contrôlé. Points relevés : fermeture du menu sur lien, état `aria-expanded`, seuil IntersectionObserver. | Conserver en pistes ; aucune modification demandée ou autorisée. |
| Publication et contrôles | Diagnostic reçu, lecture seule | HEAD, origin/main et ls-remote tous 11f3835 ; Pages réussi (run 39591382907) ; accueil et quatre PDF HTTP 200, PDF `application/pdf`. | Aucune action de publication en attente. |

Tous les responsables ont terminé leur diagnostic initial. Aucun rapport dans le dépôt n'a été demandé pendant le verrou installation ; les constats et leurs limites sont consignés ici. Les trois conversations de responsables demeurent disponibles pour une attribution ciblée ultérieure. Aucun commit/push n'est fait dans cette coordination.
