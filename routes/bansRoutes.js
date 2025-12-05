import { Router } from 'express';
const router = Router();
import { getAllBansByServer, addBantoServer, getBansforUserByServer } from '../controllers/BansController.js';
import { body, validationResult, param, query } from 'express-validator';


router.get('/:server_id', [getAllBansByServer]);
router.get('/:server_id/:user_id', [getBansforUserByServer])
router.post('/:server_id', [addBantoServer])
export default router;