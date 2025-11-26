const express = require('express');
const router = express.Router();
const appealController = require('../controllers/appealController');
const { body, validationResult, param, query } = require('express-validator');

router.get('/appeals/', appealController.getAllAppeals);
router.get('/appeals/:id', appealController.getAppeal)
module.exports = router;