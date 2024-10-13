import Product from "./models/product.js"; // Corrigez l'import du modèle Product

// Corrigez la définition du produit "Poires" en supprimant la répétition des arguments
const productObjet = [
  new Product(
    1,
    "Abricots",
    "abricots",
    "Nos abricots sont ceuillis à la main et très savoureux.",
    4,
    "fruits"
  ),
  new Product(
    2,
    "Clémentines",
    "clementines",
    "Récoltées bien mûres.",
    5,
    "fruits"
  ),
  new Product(
    3,
    "Fraises",
    "fraises",
    "Parfaites avec de la glace à la vanille.",
    3,
    "fruits"
  ),
  new Product(
    4,
    "Framboises",
    "framboises",
    "Excellentes en tarte.",
    2,
    "fruits"
  ),
  new Product(5, "Mangues", "mangues", "Une touche d'exotisme.", 4, "fruits"),
  new Product(
    6,
    "Myrtilles",
    "myrtilles",
    "Elues myrtilles de l'année.",
    5,
    "fruits"
  ),
  new Product(
    7,
    "Poires",
    "poires",
    "A déguster sans modération.",
    3,
    "fruits"
  ),
  new Product(8, "Pommes", "pommes", "Parfaites en compote.", 4, "fruits"),
  new Product(
    9,
    "Asperges",
    "asperges",
    "Excellentes avec une touche de mayonnaise.",
    3,
    "legumes"
  ),
  new Product(
    10,
    "Aubergines",
    "aubergines",
    "Elles raviront vos gratins.",
    3,
    "legumes"
  ),
  new Product(
    11,
    "Carottes",
    "carottes",
    "Se dégustent rapées ou entières.",
    4,
    "legumes"
  ),
  new Product(
    12,
    "Citrouilles",
    "citrouilles",
    "En soupe ou pour Halloween.",
    5,
    "legumes"
  ),
  new Product(
    13,
    "Patates",
    "patates",
    "En raclette, en purée, en gratin, on a le choix.",
    5,
    "legumes"
  ),
  new Product(
    14,
    "Petits pois",
    "petits-pois",
    "Seuls ou avec des carottes.",
    4,
    "legumes"
  ),
  new Product(
    15,
    "Poivrons",
    "poivrons",
    "Vert, jaune ou rouge, au choix.",
    3,
    "legumes"
  ),
  new Product(16, "Radis", "radis", "Parfait avec du sel.", 4, "legumes"),
];

export { productObjet };
