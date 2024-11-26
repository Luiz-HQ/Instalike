import "dotenv/config";
import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

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

export async function updatePost(id, newPost) {
  const db = conection.db("imersao-instabytes");
  const gallery = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return gallery.updateOne({ _id: new ObjectId(objID) }, { $set: newPost });
}
