import Chat from "../../model/chatModel";
import axios from "axios"
import Message from "../../model/messageModel"

export  async function getResponseFromModel(req ,res) {
    try {
        if(req.body.chatId && req.body.email && req.body.message)
        {
            const modelApi = process.env.FAST_URL;
            const message = await Message.create({chatId : req.body.chatId , sender : 'user',message : req.body.message });
            const chat = await Chat.findOne({chatId : req.body.chatId});
            //get response from model
            const prompt = `THIS IS THE CONTEXT : \n${chat.context}\nTHIS IS THE QUESTION\n${message}}`
            const response = await axios.post(`${FAST_URL}/getResponse` , {
                prompt : prompt , 
                message : message ,
                context : chat.context
            });
            console.log(response.data);
            const messageReceived = await Message.create({chatId : req.body.chatId , sender : 'bot' , message : response.data });
            return res.json({
                messageFomBot : response.data
            });

        }
        else{
            return res.status(404).json({message : "no chat Id or email"})
        }
    } catch (error) {
        return res.status(404).json({message : "internal server error"})
    }
    
}