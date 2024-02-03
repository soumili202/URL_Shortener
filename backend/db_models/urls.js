//password: Carmel_urls
//mongodb+srv://soumilirupsa2020:Carmel_urls@urls.0vs44fd.mongodb.net/?retryWrites=true&w=majority

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