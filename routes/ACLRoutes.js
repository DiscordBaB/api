import { Router } from 'express';
const router = Router();
import * as ACLController from '../controllers/ACLController.js';
import { body, validationResult, param, query } from 'express-validator';

router.get('/', ACLController.getAllACLs);
router.get('/:id')
export default router;