import express from 'express'
const router = express.Router();
import protectRoutes from '../middlewares/protectRoutes.js';
import getUsersForSidebar from '../controllers/user.controller.js'

router.get('/', protectRoutes, getUsersForSidebar);

export default router;