const express = require('express');
const router = express.Router();
const banController = require('../controllers/BansController');
const { body, validationResult, param, query } = require('express-validator');


router.get('/:server_id', [banController.getAllBansByServer]);
router.get('/:server_id/:user_id')
router.post('/:server_id', banController.addBantoServer)
module.exports = router;