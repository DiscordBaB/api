const express = require('express');
const router = express.Router();
const banController = require('../controllers/BansController');

router.get('/bans/:server_id', appealController.getAllBansByServer);
router.get('/bans/:server_id/:user_id')
module.exports = router;