const express = require('express');
const router = express.Router();
const appealController = require('../controllers/appealController');

router.get('/appeals/', appealController.getAllAppeals);
router.get('/appeals/:id')
module.exports = router;