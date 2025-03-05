import mongoose from 'mongoose';
import { v4 as uuidv4 } from "uuid";

const chatSchema = new mongoose.Schema({
    chatId: { type: String, default: uuidv4, unique: true },
    email : {
        type : String,
        unique : false,
    },
    context: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const Chat = mongoose.model('Chat', chatSchema);

// chatSchema.plugin(autoIncrement.plugin, {
//     model: 'Chat',      
//     field: 'chatId',    
//     startAt: 1,         
//     incrementBy: 1    
// });

export default Chat;
