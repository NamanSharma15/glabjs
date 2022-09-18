const mongoose = require('mongoose')
const {Schema} = mongoose
const postdata = new Schema({
    Index : {
        type:String,
        required:true
    },
    Sentence:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Jumble-Words',postdata);