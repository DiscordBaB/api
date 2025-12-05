import { Router } from 'express';
const router = Router();
import { getUser, addUsertoCache, getAllUsers } from '../controllers/userCacheController.js';
import { body, validationResult, param, query } from 'express-validator';

router.get('/', [getAllUsers]); // Get all users from Cache (not a good idea)
router.get('/:id', [
    param('id').notEmpty,
    getUser
]) // Return a user from the cache DB (use discord ID)
router.post('/', [
    body('user_id').isString().notEmpty().withMessage('user_id is required and must be a string'),
    body('creation_date').isISO8601().withMessage('creation_date must be a valid ISO 8601 date'),
    body('banner_url').isURL().withMessage('banner_url must be a valid URL'),
    body('avatarDecorationURL').isURL().withMessage('avatarDecorationURL must be a valid URL'),
    body('avatarURL').isURL().withMessage('avatarURL must be a valid URL'),
    body('username').isString().withMessage('username must be a string'),
    body('bot').isBoolean().withMessage('bot must be a boolean'),
    body('system').isBoolean().withMessage('system must be a boolean'),
    body('nicknames').isJSON().withMessage('nicknames must be a valid JSON object'),
    addUsertoCache
])
export default router;