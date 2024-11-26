import { getAllPosts, postNewPost } from "../models/postsModel.js";
import fs from "fs";

export async function getPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

export async function createNewPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await postNewPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const createdPost = await postNewPost(newPost);
    const updatedImage = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, updatedImage);
    res.status(200).json(createdPost);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
