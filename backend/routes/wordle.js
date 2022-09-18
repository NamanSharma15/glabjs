const express = require('express')
const router = express.Router()
const wordle = require('../models/Wordle')
router.get('/',async(req,res)=>{
    try {
        const posts = await wordle.find()
        res.json(posts)
    } catch (error) {
        res.send({error:error})
    }
  })
  router.post('/', async (req,res)=>{
    const post  =new wordle({
        Sentence:req.body.Sentence
    })
    try {
        const Saves = await post.save();
        res.json({Saves})
    } catch (error) {
        res.json({massage:error})
    }
})
module.exports = router