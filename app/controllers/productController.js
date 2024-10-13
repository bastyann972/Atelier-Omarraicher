import { productObjet } from "../data.js";

const productDetail = (req, res, next) => {
  // On recupere l'id passe dans l'url (/product/2 => on veut recuperer 2)
  const idUrl = req.params.id; // => Attention les parametres d'url sont toujours des chaines de caractere
  // On verifie si un produit de notre tableau d'objets (data.js) correspond au parametre d'url
  const productFound = productObjet.find((element) => element.id == idUrl);
  // Si c'est le cas, on veut renvoyer une vue product avec les informations du produit trouve
  if (productFound) {
    res.render("product", {
      product: productFound,
    });
    // Sinon on veut renvoyer une page d'erreur 404
  } else {
    next();
  }
};

export { productDetail };
