import express from 'express';
import upload from '../controller/uploadController/upload';
import { requireAuth } from "@clerk/express";
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');  
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);  
    }
});


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);  
    } else {
        cb(new Error('Only PDF files are allowed!'), false);  
    }
};

const uploadMulter = multer({
    storage: storage,
    fileFilter: fileFilter
});

router.post('/', uploadMulter.single('pdf') , upload);



export default router;
