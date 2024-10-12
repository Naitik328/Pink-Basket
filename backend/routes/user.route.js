import express from "express";
import {adminLogin,login,logout,signUp, verifyEmail} from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.post('/admin', adminLogin)
userRouter.post('/verify-email',verifyEmail)
userRouter.post('/signup',signUp)
userRouter.post('/logout',logout)
userRouter.post('/login',login)

export default userRouter