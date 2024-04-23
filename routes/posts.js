const express = require('express');
const router = express.Router();

// Getting the schema 
const Post = require('../modals/Post')

// getting all the posts.
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    }catch(err) {
        res.json({message: err})
    }
})

// creating post using POST cmd.
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedpost = await post.save();
        res.json(savedpost);
    }catch(err){
        res.status(401).json({message: err})
    }
})

// Getting the specfic post 
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: errr})
    }
})

// Deleteing the post
router.delete('/:postId', async (req, res) => {
    try{
        const removePost = await Post.deleteOne({_id: req.params.postId})
        res.json(removePost);
    }catch(err) {
        res.json({message: err})
    }
})

// Updating the post

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}})
        res.json(updatePost);
    }catch(err){
        res.json({message: err})
    }
})




module.exports = router;