import express from 'express';
import { transcodeVideo } from '../utils/fileUtils.js';
import { authenticate } from '../utils/auth.js';

const router = express.Router();

// Transcode video endpoint
router.post('/transcode/:videoId', authenticate, transcodeVideo);

export default router;
