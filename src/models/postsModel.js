import conectarAoBanco from "../config/dbConfig.js";

const conection = await conectarAoBanco(process.env.STRING_CONECTION);

export async function getAllPosts() {
  const db = conection.db("imersao-instabytes");
  const gallery = db.collection("posts");
  return gallery.find().toArray();
}

export async function postNewPost(newPost) {
  const db = conection.db("imersao-instabytes");
  const gallery = db.collection("posts");
  return gallery.insertOne(newPost);
}
