const express = require('express');
const router = express.Router();
const cacheController = require('../controllers/userCacheController');

router.get('/cache/', ); // Get all users from Cache (not a good idea)
router.get('/cache/:id', cacheController.getUser) // Return a user from the cache DB (use discord ID)
module.exports = router;