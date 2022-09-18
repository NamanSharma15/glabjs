const mongoose = require('mongoose')
const {Schema} = mongoose
const data= new Schema({
    Sentence:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('wordle',data);