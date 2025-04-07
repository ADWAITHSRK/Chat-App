import express from "express";
import { login,register,getProfile,logout,getAllUsers } from "../controllers/userController.js";
import {authMiddleware} from "../middleware/auth.js";
import {upload,uploadToCloudinary} from "../middleware/cloudinary.js"

const router = express.Router()

router.post('/register',upload.array("images", 5),uploadToCloudinary,register)
router.post('/login',login)
router.post('/logout',authMiddleware,logout)


router.get('/getalluser',authMiddleware,getAllUsers)



export default router;
