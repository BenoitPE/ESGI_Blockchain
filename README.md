# Projet de librairie - Blockchain

#### Membres:
 - Aldrick CLERET
 - Tristan DA COSTA
 - Eliott DELANNAY
 - Benoit PEGAZ

## Description
Notre sujet est une librairie avec un système de ventes privées.
- Les utilisateurs doivent d'abord entrer dans une liste d'attente.
- Ils sont ensuite validés par le possesseur du contrat pour être transférer dans la liste blanche.
- Enfin ils peuvent acheter des livres

## Fonctionnalités présentes

Liées aux livres:
| Fonctionnalités                                                    | Permissions accordées à              |
| ------------------------------------------------------------------ | ------------------------------------ |
| Lister tous les livres                                             | Tout le monde                        |
| Lister les livres en fonction de leur état: Neuf, Très bon état... | Tout le monde                        |
| Connaitre le propriétaire d'un livre                               | Tout le monde                        |
| Acheter un livre                                                   | Tout les membres de la liste blanche |
| Créer un livre                                                     | Possesseur du contrat                |



Liées à la vente privée:
| Fonctionnalités                                     | Permission accordée à |
| --------------------------------------------------- | --------------------- |
| Lister les membres de la liste d'attente            | Tout le monde         |
| Lister les membres de la liste blanche              | Tout le monde         |
| S'ajouter dans la liste d'attente                   | Tout le monde         |
| Supprimer une personne de la liste d'attente        | Possesseur du contrat |
| Transférer de la liste d'attente à la liste blanche | Possesseur du contrat |
| Supprimer une personne de la liste blanche          | Possesseur du contrat |
| Connaitre le statut d'une personne                  | Tout le monde         |

## Bilan
Nos avantages:
-	Nous avons réussi à répondre au besoin avec un système de NFT
-	Nous avons ajouté un système de ventes privées
-	Le code Solidity est commenté


Nos difficultés:
- Nous ne sommes pas parvenu à faire acheter un livre
- Nous avons malheureusement eu du mal à récupérer les réponses en JS avec le système de promesses et réussir à mettre à jour dynamiquement les fonctions composantes de React
- Lors de la suppression d’un utilisateur de la liste d’attente/ blanche, nous avons oublié de mettre à jour la taille du tableau