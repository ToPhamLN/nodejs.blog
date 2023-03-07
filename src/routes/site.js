const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Routes of News
router.get('/search', siteController.search);
router.get('/', siteController.index);
router.get('/otos', siteController.otos);


module.exports = router;
