import Post from '../models/Post';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
};

export const createPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const response = await post.save();
        res.json(response);
    } catch (err) {
        res.json({ message: err });
    }
};

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const update = { 
            $set: {
                title: req.body.title ? req.body.title : post.title,
                description: req.body.description ? req.body.description : post.description,
                date: req.body.date ? req.body.date : post.date
            }
        };
        const response = await Post.updateOne({ _id: req.params.postId }, update);
        res.json(response);
    } catch (err) {
        res.json({ message: err });
    }
};

export const deletePost = async (req, res) => {
    try {
        const response = await Post.remove({ _id: req.params.postId });
        res.json(response);
    } catch (err) {
        res.json({ message: err });
    }
};