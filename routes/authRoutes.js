const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware, mainAdminOnly } = require('../services/authService');

// Public routes
router.post('/login', authController.login);

// Protected routes
router.get('/me', authMiddleware, authController.getCurrentUser);
router.post('/request-reset', authMiddleware, mainAdminOnly, authController.requestResetToken);
router.post('/reset-password', authController.resetPassword);

module.exports = router;