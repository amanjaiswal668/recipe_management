const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

router.get('/test', controller.test);

module.exports = router;
