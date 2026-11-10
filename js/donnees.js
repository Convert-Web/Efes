/* =====================================================================
   OTANTIK EFES · Réglages du restaurant + carte
   C'est le seul fichier à modifier au quotidien (prix, horaires, plats).
   Carte et prix recopiés du flyer du restaurant.
   ===================================================================== */

window.EFES = {

  /* ---------- Réglages ---------- */
  reglages: {
    nom: 'Otantik Efes',
    adresse: '88 rue Jean Jaurès',
    codePostal: '77130',
    ville: 'Montereau-Fault-Yonne',
    telephone: '01 64 70 03 66',
    telephoneIntl: '+33164700366',
    /* Numéro MOBILE qui reçoit les commandes sur WhatsApp (format international, sans +), ex. '33612345678'.
       Vide = pas de WhatsApp : le client voit sa commande à l'écran et appelle le restaurant pour la passer. */
    whatsapp: '33763676191',        // numéro de démonstration (ConvertWEB) : mettre le mobile du restaurant à la signature
    email: null,                      // ['nom', 'domaine.fr'] : écrit en deux morceaux contre les robots de spam
    uberEats: '',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Efes+88+rue+Jean+Jaur%C3%A8s+77130+Montereau-Fault-Yonne',
    titresRestaurant: [],             // ex. ['Swile', 'Pluxee'] : vide = le bloc n'est pas affiché

    /* Horaires : 0 = dimanche … 6 = samedi. Plusieurs créneaux possibles : [['11:00','14:30'],['18:00','23:00']] */
    horaires: {
      0: [['11:00', '24:00']],
      1: [['11:00', '24:00']],
      2: [['11:00', '24:00']],
      3: [['11:00', '24:00']],
      4: [['11:00', '24:00']],
      5: [['11:00', '24:00']],
      6: [['11:00', '24:00']],
    },
    delaiPreparation: 15,             // minutes, pour le premier créneau de retrait proposé
    diviseurPrix: 1,

    /* Mesure d'audience GoatCounter (gratuite, sans cookie). Vide = aucune mesure. */
    analytics: { goatcounter: '' },
  },

  /* « Formule » des sandwichs : avec ou sans frites (champ « menu » des plats = prix avec frites) */
  formule: { seul: 'Sans frites', seulDetail: 'Le sandwich seul', menu: 'Avec frites', menuDetail: 'frites', court: 'avec frites' },
  boissonsMenu: [],                   // pas de boisson incluse : le choix n'est pas proposé

  /* Listes de choix (un seul choix, obligatoire) */
  options: {
    sauces: { titre: 'Votre sauce', etiquette: 'Sauce', liste: ['Sauce blanche', 'Harissa', 'Ketchup', 'Mayonnaise', 'Moutarde', 'Samouraï', 'Algérienne', 'Barbecue'] },
    boissons: { titre: 'Votre boisson', etiquette: 'Boisson', liste: ['Coca-Cola Light', 'Coca Zero', 'Coca Cherry', 'Orangina', 'Oasis Tropical', 'Oasis Orange', 'Ice-Tea Pêche', 'Fanta Orange', 'Fanta Citron', 'Minute Maid Orange', 'Minute Maid Pomme', 'Gini', 'Sprite', 'Perrier', 'Ayran', 'Cristaline (50 cl)'] },
  },
  /* Suppléments proposés sur les sandwichs */
  supplements: [
    { id: 'fromage', nom: 'Supplément fromage', prix: 0.50 },
    { id: 'oeuf', nom: 'Supplément œuf', prix: 1.00 },
  ],

  /* ---------- Catégories (ordre d'affichage) ---------- */
  categories: [
    { id: 'assiettes',       nom: 'Assiettes',          photo: 'p:assiette-mixte', accroche: 'Salade, tomates, oignons, frites et blé cassé, avec la sauce de votre choix.' },
    { id: 'sandwichs',       nom: 'Sandwichs',          photo: 'p:kebab',          accroche: 'Avec ou sans frites, sauce au choix.', supplements: true },
    { id: 'salades-pizzas',  nom: 'Pizzas turques',     photo: 'p:pizza-turque',   accroche: 'La pizza turque et la salade composée.' },
    { id: 'accompagnements', nom: 'Accompagnements',    photo: 'frites',           accroche: 'À ajouter à votre commande.' },
    { id: 'desserts',        nom: 'Desserts',           photo: 'sans-photo',       accroche: 'Pour finir en douceur.' },
    { id: 'boissons',        nom: 'Boissons',           photo: 'p:coca',           accroche: 'Canettes 33 cl bien fraîches.' },
  ],

  /* ---------- Produits ----------
     prix = prix seul · menu = prix avec frites (sandwichs) · option = liste de choix ci-dessus
     photo = photo d'illustration ('p:<nom>' = assets/img/plats, sinon assets/img/cut) */
  produits: [
    // Assiettes
    { id: 'assiette-efes',      cat: 'assiettes', nom: 'Assiette Efes',              desc: 'Brochettes poulet, agneau et adana, avec döner.', prix: 12.00, option: 'sauces', tags: ['maison'], photo: 'p:assiette-mixte' },
    { id: 'assiette-mixte',     cat: 'assiettes', nom: 'Assiette Mixte',             desc: 'Brochette de poulet, merguez, côtelette d’agneau et döner.', prix: 11.00, option: 'sauces', tags: ['populaire'], photo: 'p:assiette-mixte' },
    { id: 'assiette-cotelette', cat: 'assiettes', nom: 'Côtelettes d’agneau',        desc: '2 côtelettes d’agneau.', prix: 10.00, option: 'sauces', photo: 'p:assiette-classique' },
    { id: 'assiette-doner',     cat: 'assiettes', nom: 'Assiette Döner kebab',       desc: 'Döner veau et dinde.', prix: 8.50, option: 'sauces', tags: ['n1'], photo: 'p:assiette-classique' },
    { id: 'assiette-kofte',     cat: 'assiettes', nom: 'Assiette Köfte kebab',       desc: '4 köfte de bœuf.', prix: 8.50, option: 'sauces', photo: 'assiette' },
    { id: 'assiette-adana',     cat: 'assiettes', nom: 'Assiette Adana kebab',       desc: 'Brochette de viande hachée de bœuf.', prix: 8.50, option: 'sauces', photo: 'assiette' },
    { id: 'assiette-poulet',    cat: 'assiettes', nom: 'Assiette Brochette de poulet', desc: 'Brochette de poulet grillée.', prix: 8.50, option: 'sauces', photo: 'assiette' },
    { id: 'assiette-agneau',    cat: 'assiettes', nom: 'Assiette Brochette d’agneau',  desc: 'Brochette d’agneau grillée.', prix: 9.00, option: 'sauces', photo: 'assiette' },
    { id: 'assiette-merguez',   cat: 'assiettes', nom: 'Assiette Merguez',           desc: '3 merguez.', prix: 8.50, option: 'sauces', photo: 'assiette' },
    { id: 'assiette-chika',     cat: 'assiettes', nom: 'Assiette Chicken Chika fromage', desc: 'Poulet et fromage.', prix: 9.00, option: 'sauces', photo: 'p:assiette-classique' },
    { id: 'assiette-escalope',  cat: 'assiettes', nom: 'Assiette Escalope de poulet', desc: 'Escalope de poulet.', prix: 9.00, option: 'sauces', photo: 'p:assiette-classique' },
    { id: 'assiette-steak',     cat: 'assiettes', nom: 'Assiette Steak haché',       desc: '3 steaks hachés.', prix: 8.50, option: 'sauces', photo: 'p:assiette-classique' },
    { id: 'assiette-ailes',     cat: 'assiettes', nom: 'Assiette Ailes de poulet',   desc: 'Ailes de poulet.', prix: 8.50, option: 'sauces', photo: 'p:assiette-classique' },
    { id: 'plat-du-jour',       cat: 'assiettes', nom: 'Plat du jour',               desc: 'Demandez le plat du jour au comptoir ou par téléphone.', prix: 8.50, photo: 'p:assiette-classique' },

    // Sandwichs (prix sans frites / avec frites)
    { id: 'doner',      cat: 'sandwichs', nom: 'Sandwich Döner kebab',       desc: 'Döner veau et dinde, salade, tomates, oignons.', prix: 5.00, menu: 5.50, option: 'sauces', tags: ['n1'], photo: 'p:kebab' },
    { id: 'kofte',      cat: 'sandwichs', nom: 'Sandwich Köfte',             desc: 'Köfte de bœuf.', prix: 5.00, menu: 5.50, option: 'sauces', photo: 'p:kefta' },
    { id: 'adana',      cat: 'sandwichs', nom: 'Sandwich Adana',             desc: 'Brochette de viande hachée de bœuf.', prix: 5.00, menu: 5.50, option: 'sauces', tags: ['maison'], photo: 'kebab' },
    { id: 'poulet',     cat: 'sandwichs', nom: 'Sandwich Brochette poulet',  desc: 'Brochette de poulet grillée.', prix: 5.00, menu: 5.50, option: 'sauces', photo: 'p:paprika' },
    { id: 'agneau',     cat: 'sandwichs', nom: 'Sandwich Brochette agneau',  desc: 'Brochette d’agneau grillée.', prix: 5.50, menu: 6.00, option: 'sauces', photo: 'p:agneau' },
    { id: 'merguez',    cat: 'sandwichs', nom: 'Sandwich Merguez',           desc: 'Merguez grillées.', prix: 5.00, menu: 5.50, option: 'sauces', photo: 'p:kefta' },
    { id: 'chika',      cat: 'sandwichs', nom: 'Sandwich Chicken Chika fromage', desc: 'Poulet et fromage fondu.', prix: 5.50, menu: 6.00, option: 'sauces', photo: 'p:chicken-curry' },
    { id: 'americain',  cat: 'sandwichs', nom: 'Sandwich Américain',         desc: 'Steak haché dans une baguette.', prix: 5.00, menu: 5.50, option: 'sauces', photo: 'p:americain' },
    { id: 'hamburger',  cat: 'sandwichs', nom: 'Hamburger',                  desc: 'Steak haché dans un pain burger.', prix: 3.00, menu: 4.00, option: 'sauces', photo: 'p:cheese' },
    { id: 'panini',     cat: 'sandwichs', nom: 'Panini',                     desc: 'Pressé et servi bien chaud.', prix: 4.00, menu: 5.00, option: 'sauces', photo: 'p:panini-viande' },

    // Pizzas turques et salade
    { id: 'pizza-turque',        cat: 'salades-pizzas', nom: 'Pizza turque',                 desc: 'Pâte fine à la viande hachée et aux épices.', prix: 2.50, tags: ['populaire'], photo: 'p:pizza-turque' },
    { id: 'pizza-turque-doner',  cat: 'salades-pizzas', nom: 'Pizza turque + Döner',         desc: 'La pizza turque garnie de döner.', prix: 3.50, photo: 'pide' },
    { id: 'pizza-turque-frites', cat: 'salades-pizzas', nom: 'Pizza turque + Döner + frites', desc: 'Garnie de döner, avec des frites.', prix: 4.00, photo: 'pide' },
    { id: 'salade',              cat: 'salades-pizzas', nom: 'Salade composée',              desc: 'Salade fraîche composée.', prix: 5.50, photo: 'p:salade-mixte' },

    // Accompagnements
    { id: 'frites', cat: 'accompagnements', nom: 'Assiette de frites',     desc: 'Frites dorées.', prix: 2.50, photo: 'frites' },
    { id: 'ble',    cat: 'accompagnements', nom: 'Assiette de blé cassé', desc: 'Boulgour, l’accompagnement des assiettes.', prix: 2.50, photo: 'sans-photo' },

    // Desserts
    { id: 'baklava',      cat: 'desserts', nom: 'Baklava à la pistache', desc: 'Feuilleté à la pistache, la portion.', prix: 4.00, tags: ['maison'], photo: 'sans-photo' },
    { id: 'fromage-turc', cat: 'desserts', nom: 'Fromage turc',          desc: 'Dessert turc.', prix: 4.50, photo: 'sans-photo' },

    // Boissons
    { id: 'canette', cat: 'boissons', nom: 'Boisson au choix', desc: 'Canette 33 cl : Coca, Orangina, Oasis, Ice-Tea, Fanta, Sprite, Ayran…', prix: 1.50, option: 'boissons', photo: 'p:coca' },
  ],

  /* Grand bandeau du haut */
  diaporama: [
    { id: 'assiette-efes', formule: 'seul', surtitre: 'La spécialité de la maison', titre: 'Assiette Efes',          accent: 'Efes',   texte: 'Brochettes poulet, agneau et adana, avec döner. Salade, frites et blé cassé.' },
    { id: 'doner',         formule: 'menu', surtitre: 'Le classique turc',          titre: 'Sandwich Döner kebab',   accent: 'Döner kebab', texte: 'Döner veau et dinde, salade, tomates, oignons. Avec frites et la sauce de votre choix.' },
    { id: 'pizza-turque',  formule: 'seul', surtitre: 'Pâte fine et épices',        titre: 'Pizza turque',           accent: 'turque', texte: 'La vraie pizza turque, à garnir de döner et de frites si vous avez faim.' },
    { id: 'assiette-mixte',formule: 'seul', surtitre: 'Pour les grosses faims',     titre: 'Assiette Mixte',         accent: 'Mixte',  texte: 'Brochette de poulet, merguez, côtelette d’agneau et döner.' },
  ],

  /* Plats mis en avant (bloc « Les préférés ») */
  incontournables: ['assiette-efes', 'doner', 'assiette-mixte', 'pizza-turque', 'adana'],
};
