const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://soumilirupsa2020:Carmel_urls@urls.0vs44fd.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to the database');
    }
    catch(err){
        console.log('Error connecting to the database', err);
    }
}
module.exports= connect;