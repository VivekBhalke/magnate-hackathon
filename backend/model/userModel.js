import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true,
    },
    email: {
        type: String,
        //required: true,
        unique: true,
    },
    password: {
        type: String,
        //required: true,
    },
    age: {
        type: Number,
        default: 18,
    },
    
},{timestamps:true});

// Create a Mongoose model
const User = mongoose.model('User', userSchema);

export default User;
