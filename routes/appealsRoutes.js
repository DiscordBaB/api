import { Router } from 'express';
const router = Router();
import { getAllAppeals, getAppeal, deleteAppeal } from '../controllers/appealController.js';
import { body, validationResult, param, query } from 'express-validator';

router.get('/', [
    param('appeal_id').isString().notEmpty().withMessage('appeal_id is required and must be a string'),
    body('limit').optional().isInt({ min: 1, max: 10 }).withMessage('limit must be an integer between 1 and 10'),
    body('page').optional().isInt({min: 1, max: 1000}).withMessage('page must be an integer between 1 and 1000'),
    getAllAppeals
]);
router.get('/:appeal_id', [
    getAppeal
]);
router.delete('/:appeal_id', [
    deleteAppeal,
]);
export default router;