import mongoose from 'mongoose';

const userMessagesSchema = new mongoose.Schema({
    chatId : {
        type : Number,
        unique : false,
    },
    messageId : {
        type : Number, 
        unique : true
    },
    message : {
        type : String , 
        unique : false
    }
},{timestamps:true});

const Message = mongoose.model('Message', userMessagesSchema);

userMessagesSchema.plugin(autoIncrement.plugin, {
    model: 'Message',      
    field: 'messageId',    
    startAt: 1,         
    incrementBy: 1    
});


export default Message;
