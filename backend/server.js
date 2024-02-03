const express = require('express');
const mongoose = require('mongoose');
const connect  = require('./connection');
const Urls = require('./db_models/urls');
const urlr = require('./routes/urlr');
const app = express();
const port = 8000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
    });
connect(); 
app.use ('/url', urlr); 
//const entry = Urls.findOne({shortUrl: "abcd"},{redirectUrl:1});
//console.log(entry.shortUrl);
app.get('/:shortID',async(req,res)=>{
    const shortID = req.params.shortID;
    const entry = await Urls.findOne({shortUrl: shortID});
    //res.send(entry);
    
    res.redirect(entry.redirectUrl);
        



}); 
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });    