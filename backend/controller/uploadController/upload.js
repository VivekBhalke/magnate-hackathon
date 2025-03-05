import express from "express";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Chat from "../../model/chatModel.js";
import Message from "../../model/messageModel.js";
import User from "../../model/userModel.js";
// import pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js';
import { getDocument } from 'pdfjs-dist';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

export default async function upload(req , res) 
{
    try {
        if (req.file && req.body.email) 
        {
            console.log("hi");
            
            const filePath = path.join(process.cwd(), req.file.path);
            console.log(filePath);
            
            const dataBuffer = new Uint8Array(fs.readFileSync(filePath));
            const pdf = await pdfjsLib.getDocument({ data: dataBuffer }).promise;
            
            let text = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                text += content.items.map(item => item.str).join(' ') + '\n';
            }

            console.log(text)
            const user = await User.findOne({email : req.body.email});
            if(!user)
            {
                return res.status(404).json({message : "no email provided"});
            }
            const chat = await Chat.create({
                email : req.body.email,
                context : data.text
            });
            const message = await Message.create({
                chatId : chat.chatId,
                sender : 'user',
                message : 'DOCUMENT UPLOADED',
            })
            console.log(chat);
            console.log(message);
            //call the model
            //add the response of the model to message
            res.json({
                message: 'PDF uploaded and processed successfully!',
                fileUrl: `http://localhost:${PORT}/public/${req.file.filename}`,
                textContent: data.text ,
                chatId :  chat.chatId
            });

        }
        else
        {
            return res.status(404).json({message : "incorrect file or email"});
        }
    } catch (error) 
    {
        console.error('Error reading PDF:', error);
        res.status(500).json({message : "internal server error"});
    }
}