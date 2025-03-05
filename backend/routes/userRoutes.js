import express from 'express';
import login from '../controller/userController/login';
import signup from '../controller/userController/signup';

const router = express.Router();


router.get('/', (req , res)=>{
    res.json({message : "router"});
})

router.post("/login" , login);
router.post("/signup" , signup);


export default router;
