const express = require('express');
const router = express.Router();
const ACLController = require('../controllers/ACLController');
const { body, validationResult, param, query } = require('express-validator');

router.get('/', ACLController.getAllACLs);
router.get('/:id')
module.exports = router;