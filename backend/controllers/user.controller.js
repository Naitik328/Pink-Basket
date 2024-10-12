import { configDotenv } from "dotenv";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";


export const signUp = async(req,res)=>{
    const {email,password,name} = req.body;

    try {
        if(!email||!password||!name){
            throw new error('All fields are required')
        }

        const userAlreadyExists = await userModel.findOne({email});
        console.log("userAlreadyExists",userAlreadyExists);

        if(userAlreadyExists){
            return res.status(400).json({success:false,message:"User already exists"})


        }

        const hashedPassword = await bcrypt.hash(password,10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new userModel({
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24*60*60*1000,
        })

        await user.save();

         generateTokenAndSetCookie(res,user._id);

         await sendVerificationEmail(user.email,verificationToken)

         res.status(201).json({
            success:true,
            message:"User created successfully",
            // user: {
			// 	...user._doc,
			// 	password: undefined,
			// },

         })
        
    } catch (error) {
        res.status(400).json({success:false, message:error.message})
    }
}

export const verifyEmail = async(req,res)=>{
    const {code} = req.body;
    try {
        const user = await userModel.findOne({
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()}
        });
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired verification code"})
        }
        user.isVerified = true,
        user.verificationToken= undefined,
        user.verificationTokenExpiresAt = undefined,
        await user.save();

        await sendWelcomeEmail(user.email,user.name)

        res.status(200).json({
            success:true,
            message: "Email sent successfully",
            user:{
                ...user._doc,
                password:undefined,
            },
        })
    } catch (error) {
        console.log("error in verify email",error);
        
        res.status(400).json({success:false, message:"Server error"});
        
    }
}

export const logout = async(req,res)=>{
    res.clearCookie("token")
    res.status(200).json({success:true,message:"Logged out successfully"})
}

export const login = async(req,res)=>{
    const {email,password} = req.body;



    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message:"User not found with the email"})
        }
        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid){
            return res.status(400).json({success:false, message:"Invalid Credentials"})
        }

        generateTokenAndSetCookie(res,user._id);

        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            success:true,
            message: "Logged in successfully",
            user:{
                ...user._doc,
                password:undefined,
            }
        })

    } catch (error) {

        console.log("Error in login");
        res.status(400).json({success:false,message:error.message,password})
    }
}
export const adminLogin = async(req, res)=>{
    try {
        const{email , password} = req.body
        if(email === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password , process.env.JWT_KEY)
            res.json({success:true, token})
        }
        else{
            res.json({success:false , message:"Invalid Credentials"})
    
        }
    } catch (error) {
        res.json({success:false , message:error.message})
        
    }
    }

