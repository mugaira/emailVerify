import express from 'express';
import {authUser,updateUserProfile} from './controller.js';


const router = express.Router();

router.post('/login', authUser);
router.post('/changepassword', updateUserProfile);
// router.post('/login/verify', verifyLogin);



export default router;
