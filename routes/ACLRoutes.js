const express = require('express');
const router = express.Router();
const ACLController = require('../controllers/ACLController');
const { body, validationResult, param, query } = require('express-validator');

router.get('/acl/', ACLController.getAllACLs);
router.get('/acl/:id')
module.exports = router;