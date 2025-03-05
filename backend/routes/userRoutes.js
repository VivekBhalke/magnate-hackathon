import express from 'express';
import login from '../controller/userController/login.js';
import signup from '../controller/userController/signup.js';
import { addUser } from '../controller/userController/addUser.js';

const router = express.Router();


router.get('/', (req , res)=>{
    res.json({message : "router"});
})

<<<<<<< HEAD
router.post("/addUser" ,addUser )
=======
router.post("/addUser" , addUser);
>>>>>>> c8cee95af49a444f372b9b6cb061cb0fa4b94847


export default router;
