const express = require('express');
const router = express.Router();
const banCountController = require('../controllers/banCountController');
const { body, validationResult, param, query } = require('express-validator');

router.get('/', banCountController);
router.get('/:server_id/:user_id/')
module.exports = router;