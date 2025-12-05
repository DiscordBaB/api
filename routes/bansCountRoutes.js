import { Router } from 'express';
const router = Router();
import banCountController from '../controllers/banCountController.js';
import { body, validationResult, param, query } from 'express-validator';

router.get('/', banCountController.getAllCounts);
router.get('/:server_id/:user_id/', banCountController.getCountForUser);
export default router;