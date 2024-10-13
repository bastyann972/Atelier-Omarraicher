import express from "express";
import * as mainController from "./controllers/mainController.js";
import * as categoryController from "./controllers/categoryController.js";
import * as productController from "./controllers/productController.js";

// const productFound = products.find(element => element.id === req.params)
// console.log(productFound.description)

const router = express.Router();

router.get("/about", mainController.about);

// On cree une nouvelle route pour la page d'accueil
router.get("/", mainController.home);

router.get("/product/:id", productController.productDetail);
// On aurait egalement pu se servir du slug mais les id sont forcement uniques donc on priviligiera ce discriminant
// router.get('/product/:slug', controllers.productDetail)

// On fait egalement une route paramtree pour nos categories de sorte a ce qu'on puisse avoir d'autres categories qui s'ajoutent automatiquement par la suite
router.get("/category/:slug", categoryController.categoryList);

export default router;
