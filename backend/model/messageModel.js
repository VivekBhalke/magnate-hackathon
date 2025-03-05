import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    chatId : {
        type : Number,
        unique : false,
    },
    message : {
        type : String , 
        unique : false
    },
    sender: {
        type : String ,
    }
},{timestamps:true});

const Message = mongoose.model('Message', messageSchema);


export default Message;
