const Post = require('../models/Post.js');
const { postValidation } = require('../validation/validation.js');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ code: 400, message: `Failed to get post with id: ${req.params.postId}` });
    }
};

const createPost = async (req, res) => {

    // Validate user input
    const { error } = postValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        createdBy: req.body.createdBy
    });

    try {
        const response = await post.save();
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const update = { 
            $set: {
                title: req.body.title ? req.body.title : post.title,
                description: req.body.description ? req.body.description : post.description,
                updatedBy: req.body.updatedBy ? req.body.updatedBy : post.updatedBy,
                date: req.body.date ? req.body.date : post.date
            }
        };
        await Post.updateOne({ _id: req.params.postId }, update);
        res.status(200).send(`Successfully update post with id: ${post._id}`);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

const deletePost = async (req, res) => {
    try {
        const response = await Post.remove({ _id: req.params.postId });
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};