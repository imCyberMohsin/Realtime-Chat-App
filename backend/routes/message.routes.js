import express from 'express';
const router = express.Router();
import protectRoute from '../middlewares/protectRoutes.js'
import { sendMessage } from '../controllers/message.controller.js';
import { getMessages } from '../controllers/message.controller.js';

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;