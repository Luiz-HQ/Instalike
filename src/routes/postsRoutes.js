import express from "express";
import { getPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", getPosts);
};

export default routes;
