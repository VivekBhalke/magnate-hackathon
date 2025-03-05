import User from "../../model/userModel.js";

export async function addUser(req , res) 
{
    try {
        if(req.body.email && req.body.name)
        {   
            await User.create({name : req.body.name , email : req.body.email});
            return res.json({message : "User created"});
        }
        return res.status(404).json({message : "provide with the email and name"})
    } catch (error) {
        return res.status(404).json({message : "no email"})
    }
}