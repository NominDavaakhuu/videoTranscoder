import express from 'express';
import { uploadFile, listFiles, downloadFile, deleteFile } from '../utils/fileUtils.js';
import { authenticate } from '../utils/auth.js';

const router = express.Router();

// List user's files endpoint
router.get('/', authenticate, listFiles);

// Upload file endpoint
router.post('/upload', authenticate, uploadFile);

// Delete file endpoint
router.delete('/:id', authenticate, deleteFile);

// Download file endpoint
router.get('/download/:id', authenticate, downloadFile);

export default router;
