import express from 'express';
import path from 'path';
import session from 'express-session';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'; // Adjust the path as needed
dotenv.config(); // Load environment variables

const app = express();
const port = 3001;

// Derive __dirname from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_default_secret', // Replace with your secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Use auth routes
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Auth service running at http://localhost:${port}`);
});

