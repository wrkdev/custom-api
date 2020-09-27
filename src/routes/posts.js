const express = require("express");
const { getPosts, getPost, createPost, updatePost, deletePost } = require("../controllers/posts.js");
const router = express.Router();

// GET LIST OF POSTS
router.get("/", getPosts);

// GET SINGLE POST
router.get("/:postId", getPost);

// CREATE POST
router.post("/", createPost);

// UPDATE POST
router.patch("/:postId", updatePost);

// DELETE POST
router.delete("/:postId", deletePost);

module.exports = router;