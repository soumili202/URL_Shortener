const { nanoid } = require('nanoid');
const url = require ('../db_models/urls');
async function generateshorturl (req, res)
{
    const body = req.body;
    if (!body.url){
        return res.status(400).json({message: 'URL is required'});
    }
    
    const shortID = nanoid(6);
    

    await url.create(
        {shortUrl: shortID, 
        redirectUrl: body.url
        });
    return res.status(200).json({shortID:shortID, message: 'URL created'});    

}
module.exports = generateshorturl;
   


