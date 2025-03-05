import express from "express";
import pdfParse from 'pdf-parse';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

export default async function upload(req , res) 
{
    try {

        if (req.file) 
        {
            const filePath = path.join(process.cwd(), req.file.path);
            const dataBuffer = fs.readFileSync(filePath);

            const data = await pdfParse(dataBuffer);
            
            res.json({
                message: 'PDF uploaded and processed successfully!',
                fileUrl: `http://localhost:${PORT}/public/${req.file.filename}`,
                textContent: data.text  // Extracted text content
            });

        }
        else
        {
            return res.status(404).json({message : "incorrect file"});
        }
    } catch (error) 
    {
        console.error('Error reading PDF:', error);
        res.status(500).json({message : "internal server error"});
    }
}