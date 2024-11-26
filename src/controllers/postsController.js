import getAllPosts from "../models/postsModel.js";

export async function getPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}
