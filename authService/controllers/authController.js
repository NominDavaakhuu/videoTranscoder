import jwt from 'jsonwebtoken';
import { validateUser } from '../routes/auth.js';

export const login = (req, res) => {
    const { username, password } = req.body;
    
    console.log(`Received login request: ${username}`);
    if (validateUser(username, password)) {
        const token = jwt.sign({ username }, process.env.SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
};
