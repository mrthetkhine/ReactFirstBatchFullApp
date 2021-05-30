const express = require('express');
const router = express.Router();
const Posts = require('../../models/Posts');
const Comments = require('../../models/Comments');
const mongoose = require('mongoose');

//Create
router.post('/', async (req, res) => {

    console.log(req.body);
    console.log("post id ",req.body.post);
    const newComment = new Comments({
        text: req.body.text,
        post: mongoose.Types.ObjectId(req.body.post)
    });

    try {

        let comment = await newComment.save();
        if(!comment) throw Error('Something went wrong with the comment')
        res.status(200).json(comment);
    } catch(error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
});

//Fetch all
router.get('/', async (req, res) => {
    try {
        const comments = await Comments.find();
        if(!comments) throw Error('No Items');
        res.status(200).json(comments);
    }catch(err) {
        res.status(400).json({message: err})
    }
});
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comments.findById(req.params.id);
        if(!comment) throw Error('No Items');
        res.status(200).json(comment);
    }catch(err) {
        res.status(400).json({message: err})
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const comment = await Comments.findByIdAndUpdate(req.params.id, req.body);
        if(!comment) throw Error('Something went wrong while updating the comment');
        res.status(200).json({success: true,comment:comment});
    }catch(err) {
        res.status(400).json({msg:err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comments.findByIdAndDelete(req.params.id);
        if(!comment) throw Error('No post found!');
        res.status(200).json({success: true})
    }catch(err) {
        res.status(400).json({msg: error})
    }
});
module.exports = router;