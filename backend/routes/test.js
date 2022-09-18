const express = require('express')
const router = express.Router()
const Post = require('../models/Test')
// Get all the Posts
router.get('/',async(req,res)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.send({error:error})
    }
  })
// Used To post Data to the database
router.post('/', async (req,res)=>{
    const post  =new Post({
        Index : req.body.Index,
        Sentence:req.body.Sentence
    })
    try {
        const Saves = await post.save();
        res.json({Saves})
    } catch (error) {
        res.json({massage:error})
    }
})
router.get('/:postId',async(req,res)=>{
    try {
        const postI = await Post.findById(req.params.postId)
        res.json(postI)
    } catch (error) {
        res.json({massage:"User Doesn't Exist"})
    }
})
router.delete('/:postId',async(req,res)=>{
    try {
        const removeP = await Post.findByIdAndDelete(req.params.postId)
        res.json(removeP)
    } catch (error) {
        res.json({massage:"User Doesn't Exist"})
    }
})
router.patch('/:postId',async(req,res)=>{
    try {
        const updatedpost = await Post.findByIdAndUpdate(req.params.postId,{$set:{name:req.body.name}})
        res.json(updatedpost)
    } catch (error) {
        res.json({error:error})
    }
})
module.exports = router