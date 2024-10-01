import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

const usersPath = path.join(__dirname, '../users.json');

// Load users from the JSON file
const loadUsers = () => {
    const usersData = fs.readFileSync(usersPath);
    return JSON.parse(usersData);
};

// Function to validate user
export const validateUser = (username, password) => {
    const users = loadUsers();
    
    return users.some(user => user.username === username && user.password === password);
};

// Middleware to authenticate users
export const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log('Generated Token:', token);
    if (!token) return res.status(401).send('Unauthorized');

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Forbidden');
        req.user = user;
        next();
    });
};

