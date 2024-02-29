

const mongoose= require('mongoose');
const Schema= new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true,

    },
    redirectUrl:{
        type: String,
        required: true,
    },
    

    

})
const Urls= mongoose.model('Urls', Schema);
module.exports= Urls;