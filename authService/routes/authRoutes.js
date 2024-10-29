import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// Login endpoint
router.post('/login', express.json(), login);

export default router;
