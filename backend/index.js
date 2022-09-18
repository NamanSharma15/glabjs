const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const postrouter = require('./routes/test')
const wordrouter = require('./routes/wordle')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json()); 
app.get('/',(req,res)=>{
  res.send('we are done')
})
app.use('/posts',postrouter)
app.use('/words',wordrouter)
mongoose.connect('mongodb+srv://Stakes:A12345678@glabc.unjlu.mongodb.net/Glab?retryWrites=true&w=majority',()=>{
  console.log('connected to db')
})
app.listen(5000)