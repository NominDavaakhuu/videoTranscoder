import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
