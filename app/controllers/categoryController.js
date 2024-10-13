import { productObjet } from "../data.js";

// Un controlleur pour gerer la page category
const categoryList = (req, res, next) => {
  // On recupere la categorie demande par l'utilisateur (celle presente dans l'url)
  const categoryUrl = req.params.slug;
  // On recupere la liste des produits qui appartiennent a cette categorie
  const productsFound = productObjet.filter(
    (element) => element.category === categoryUrl
  );
  // Si on a trouve des produits associes a la categorie
  if (productsFound.length > 0) {
    // On renvoi la liste des produits
    res.render("list", {
      title: categoryUrl,
      products: productsFound,
    });
  } else {
    // Sinon on renvoi une erreur 404
    next();
  }
};

export { categoryList };
