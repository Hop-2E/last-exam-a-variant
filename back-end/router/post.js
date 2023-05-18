import express from "express";
import { deletePost, getAllPost } from "../controller/post.js";
import { createPost } from "../controller/post.js";

const router = express.Router();

  router.route("/:id").delete(deletePost);
  router.route("/").get(getAllPost);
  router.route("/").post(createPost);


export default router;