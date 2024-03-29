import express from 'express';

import {authUser,getUserProfile, registerUser, updateUserProfile} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js';


const router = express.Router();


router.post('/login', authUser);
router.route('/profile').get(protect,getUserProfile).put(protect, updateUserProfile) 
router.route('/').post(registerUser);



export default router;