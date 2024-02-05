
const express = require('express');
const  generateshorturl  = require('../controls/generateshorturl');
const router = express.Router();
router.post('/', generateshorturl);
module.exports = router;