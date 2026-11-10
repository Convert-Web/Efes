# Otantik Efes · site internet

Site du restaurant turc Otantik Efes, 88 rue Jean Jaurès, 77130 Montereau-Fault-Yonne.
Site statique (HTML, CSS, JavaScript sans dépendance), hébergé sur GitHub Pages : https://convert-web.github.io/Efes/

## Modifier la carte, les prix ou les horaires

Tout se fait dans `js/donnees.js` :

- **Réglages** : adresse, téléphone, horaires (`'24:00'` = minuit), délai de préparation.
- **Produits** : `prix` = prix seul ; `menu` = prix « avec frites » (sandwichs) ; `option: 'sauces'` = sauce obligatoire au choix ; `photo` = photo d'illustration.
- **Listes** : sauces, boissons et suppléments (fromage 0,50 €, œuf 1,00 €) sont en haut du fichier.

Après une modification, changer `?v=20261110a` dans les 5 fichiers HTML pour forcer la mise à jour chez les visiteurs.

## Comment le client commande

Le restaurant n'a que des lignes fixes (01 64 70 03 66, 09 67 39 94 17) : pas de WhatsApp.
Le client compose son panier, choisit son heure de retrait, puis le site **affiche sa commande prête à lire** avec un bouton « Appeler ».

**Passer à la commande WhatsApp** : mettre un numéro de **mobile** dans `whatsapp: '33612345678'` (format international, sans +). La commande part alors toute écrite sur WhatsApp, comme sur le site du Touareg.

## Points à vérifier avec le gérant

1. **Prix** : recopiés du flyer, qui peut être ancien. Les faire valider.
2. **Bières** (Heineken, 1664, Kronenbourg, Efes, Bavaria, Desperados, Smirnoff) : volontairement absentes du site. Les ajouter imposerait la mention « L'abus d'alcool est dangereux pour la santé » et le contrôle de l'âge à la vente.
3. **Glaces** (de 2,00 à 2,50 €) : parfums inconnus, donc seulement mentionnées sous la carte.
4. **Halal** : non affiché tant que le gérant ne l'a pas confirmé (la carte propose de l'alcool).
5. **Société** : deux sociétés actives à cette adresse au registre officiel : OTANTIK SAS (SIREN 844 978 437, enseigne « Otantik Efes », président Kemal Can) et E.F.E.S. SAS (SIREN 414 430 769, président Mehmet Can). Les mentions légales indiquent OTANTIK : à confirmer, ainsi que le capital, le RCS, la TVA et un e-mail.
6. **Paiement** : carte bancaire acceptée ? Titres-restaurant ? (à ajouter dans `titresRestaurant`).
7. **Livraison** : Google indique la livraison, mais le restaurant n'est pas sur Uber Eats. Par qui ? (lien à ajouter dans `uberEats` si besoin.)
8. **Photos** : ce sont des illustrations (images générées et Unsplash). Le blé cassé, le baklava et le fromage turc ont une image « photo à venir ». De vraies photos des plats rendront le site plus fort.

## Mesure d'audience

Optionnelle, sans cookie (GoatCounter) : mettre le code du compte dans `analytics.goatcounter`.
Événements suivis : ajout-panier, ouverture-panier, passage-menu (ajout des frites), recommander, commande-telephone, commande-whatsapp, appel, itineraire, avis-google.
