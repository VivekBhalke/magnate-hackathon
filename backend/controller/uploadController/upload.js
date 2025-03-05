import express from "express";
import pdfParse from 'pdf-parse';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Chat from "../../model/chatModel.js";
import { User } from "@clerk/express";
import Message from "../../model/messageModel.js";
export default async function upload(req , res) 
{
    try {
        if (req.file && req.body.email) 
        {
            const filePath = path.join(process.cwd(), req.file.path);
            const dataBuffer = fs.readFileSync(filePath);

            const data = await pdfParse(dataBuffer);
            
            const user = await User.findOne({email : email});
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