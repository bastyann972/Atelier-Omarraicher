import router from "./app/router.js";
import * as dotenv from "dotenv";
import express from "express";
// import router from './app/router.js';

// On recupere toutes les variables d'environnements
dotenv.config();

// On defini le port
const port = process.env.PORT || 3000;
// On cree le serveur avec express
const app = express();
// on configure le moteur de template
app.use(express.static("./public"));
app.set("view engine", "ejs");
// on configure le chemin vers le dossier des views
app.set("views", "./app/views/");
// On demande a express de consulter notre routeur peu importe la route
app.use(router);
app.use((req, res) => {
  res.sendStatus(404).send("Error 404");
});
// On met en ecoute le serveur sur le port
app.listen(port, () => {
  console.log(`app sur http://localhost:${port}/`);
});
