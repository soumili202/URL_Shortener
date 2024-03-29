const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const connect  = require('./connection');
const Urls = require('./db_models/urls');
const urlr = require('./routes/urlr');
const urla = require('./routes/urla');
const app = express();
const base_url=process.env.BASE_URL;
const port = process.env.PORT||8000;
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
    });
connect(process.env.URL); 
app.use ('/url', urlr); 
app.use ('/urls', urla);
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