import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    
    
},{timestamps:true});


const User = mongoose.model('User', userSchema);

export default User;
