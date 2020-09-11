import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/posts';
const router = express.Router();

// GET LIST OF POSTS
router.get('/', getPosts);

// GET SINGLE POST
router.get('/:postId', getPost);

// CREATE POST
router.post('/', createPost);

// UPDATE POST
router.patch('/:postId', updatePost);

// DELETE POST
router.delete('/:postId', deletePost);

module.exports = router;