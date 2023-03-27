import express from "express"
import User from "../models/user"
import { AES, enc } from 'crypto-js';

const router = express.Router()

router.post("/signup", async (req, res) => {

    const secretKey = 'secretKey';
    const ciphertext = req.body.string;
  
    const decryptedPlaintext = AES.decrypt(ciphertext, secretKey).toString(enc.Utf8);
    const data = JSON.parse(decryptedPlaintext)

    try{
        const user = await User.create({
            email:data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        })
        res.status(200).json({
            message: "signup success",
            data: user
        })
    }catch(error){
        res.status(500).json({
            error: "server error!"
        })
    }
})

router.get("/login", async (req, res) => {

    try{

    }catch(error){

    }
})
export default router