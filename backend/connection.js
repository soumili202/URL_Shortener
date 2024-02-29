const mongoose = require('mongoose');

async function connect(url){
    try{
        await mongoose.connect(url);
        console.log('Connected to the database');
    }
    catch(err){
        console.log('Error connecting to the database', err);
    }
}
module.exports= connect;