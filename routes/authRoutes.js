import express from 'express';
import jwt from 'jsonwebtoken';
import { validateUser } from '../utils/auth.js';

const router = express.Router();

// Login endpoint
router.post('/login', express.json(), (req, res) => {
    const { username, password } = req.body;
    console.log(`Received login request: ${username}`);
    if (validateUser(username, password)) {
        const token = jwt.sign({ username }, process.env.SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

export default router;
