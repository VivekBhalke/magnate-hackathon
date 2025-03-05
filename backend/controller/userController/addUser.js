import User from "../../model/userModel.js";

export async function addUser(req , res) 
{
    try {
        if(req.body.email && req.body.name)
        {   
            await User.create({name : req.body.name , email : req.body.email});
<<<<<<< HEAD
            return res.json({message:"User created"})
        }
        return res.status(404).json({message:"Provide with the email and password"})

=======
            return res.json({message : "User created"});
        }
        return res.status(404).json({message : "provide with the email and name"})
>>>>>>> c8cee95af49a444f372b9b6cb061cb0fa4b94847
    } catch (error) {
        return res.status(404).json({message : "no email"})
    }
}