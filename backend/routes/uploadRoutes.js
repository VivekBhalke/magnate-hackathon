import express from 'express';
// import upload from '../controller/uploadController/upload';
import { requireAuth } from "@clerk/express";
// import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
// const requireAuth = ClerkExpressWithAuth();


router.post('/protected', (req , res)=>{
    console.log(req.headers)
    res.json({message : "upload router", user: req.auth});
})  


// router.post("/" , upload);


export default router;
