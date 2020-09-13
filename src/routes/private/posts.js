import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../../controllers/posts';
import { verify } from '../../validation/verifyToken';
const router = express.Router();

// GET LIST OF POSTS
router.get('/', verify, getPosts);

// GET SINGLE POST
router.get('/:postId', verify, getPost);

// CREATE POST
router.post('/', verify, createPost);

// UPDATE POST
router.patch('/:postId', verify, updatePost);

// DELETE POST
router.delete('/:postId', verify, deletePost);

export default router;