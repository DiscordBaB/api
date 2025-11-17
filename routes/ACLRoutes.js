const express = require('express');
const router = express.Router();
const ACLController = require('../controllers/ACLController');

router.get('/acl/', ACLController.getAllACLs);
router.get('/acl/:id')
module.exports = router;