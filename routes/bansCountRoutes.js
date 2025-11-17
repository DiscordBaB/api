const express = require('express');
const router = express.Router();
const banCountController = require('../controllers/banCountController');

router.get('/banCount/', banCountController);
router.get('/BanCount/:server_id/:user_id/')
module.exports = router;