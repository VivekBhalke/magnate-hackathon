import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    chatId: {
        type: Number,
        unique: true,
    },
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

chatSchema.plugin(autoIncrement.plugin, {
    model: 'Chat',      
    field: 'chatId',    
    startAt: 1,         
    incrementBy: 1    
});

export default Chat;
