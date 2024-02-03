const express = require('express');
const generateCustomUrl = require('../controls/generatecustomurl');
const router = express.Router();
router.post('/', generateCustomUrl);
module.exports = router;