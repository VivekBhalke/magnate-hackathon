import mongoose from 'mongoose';

const userResponsesSchema = new mongoose.Schema({
    chatId : {
        type : Number,
        unique : false,
    },
    messageId : {
        type : Number, 
        unique : true
    },
    responseId  : {
        type : Number,
        unique : true  
    },
    response : {
        type : String , 
        unique : false
    },
},{timestamps:true});

const Response = mongoose.model('Response', userResponsesSchema);

userResponsesSchema.plugin(autoIncrement.plugin, {
    model: 'Response',  
    field: 'responseId',    
    startAt: 1,         
    incrementBy: 1    
});

export default Response;
