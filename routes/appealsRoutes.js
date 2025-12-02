const express = require('express');
const router = express.Router();
const appealController = require('../controllers/appealController');
const { body, validationResult, param, query } = require('express-validator');

router.get('/', [
    param('appeal_id').isString().notEmpty().withMessage('appeal_id is required and must be a string'),
    body('limit').optional().isInt({ min: 1, max: 10 }).withMessage('limit must be an integer between 1 and 10'),
    body('page').optional().isInt({min: 1, max: 1000}).withMessage('page must be an integer between 1 and 1000'),
    appealController.getAllAppeals
]);
router.get('/:appeal_id', [
    appealController.getAppeal
]);
router.delete('/:appeal_id', [
    appealController.deleteAppeal,
]);
module.exports = router;