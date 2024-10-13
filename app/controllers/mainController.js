import { productObjet } from "../data.js"; // Corrigez l'import du fichier data.js

const about = (req, res) => {
  res.render("about", {});
};

const home = (req, res) => {
  // On peut afficher le contenu de productObjet pour vérifier
  // console.log(productObjet); // => [{}, {}, {}, {}]
  res.render("list", {
    title: "Au Chouette Maraîcher",
    products: productObjet,
  });
};

export { about, home };
