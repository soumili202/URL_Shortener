const url = require ('../db_models/urls');
async function generateCustomUrl(req, res){
    const body = req.body;
    if (!body.url){
        return res.status(400).json({message: 'URL is required'});
    }
    if (!body.customstring){
        return res.status(400).json({message: 'Custom string is required'});
    }
    const e= await url.findOne({shortUrl: body.customstring});
    if (e){
        return res.status(400).json({message: 'Custom string already exists'});
    }
    await url.create(
        {shortUrl: body.customstring, 
        redirectUrl: body.url
        });
    return res.status(200).json({shortID:body.customstring, message: 'URL created'});
}
module.exports = generateCustomUrl;    



