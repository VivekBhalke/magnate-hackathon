import express from 'express';
import login from '../controller/userController/login.js';
import signup from '../controller/userController/signup.js';
import { addUser } from '../controller/userController/addUser.js';

const router = express.Router();


router.get('/', (req , res)=>{
    res.json({message : "router"});
})

router.post("/addUser" , addUser);


export default router;
