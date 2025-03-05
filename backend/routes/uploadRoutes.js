import express from 'express';
import upload from '../controller/uploadController/upload';


const router = express.Router();


router.get('/', (req , res)=>{
    res.json({message : "upload router"});
})


router.post("/" , upload);


export default router;
