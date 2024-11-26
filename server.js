import express from "express";
import routes from "./src/routes/postsRoutes.js"; // node needs to put .js at the final string.

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("Servidor iniciado...");
});
