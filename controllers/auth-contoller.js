const User=require("../models/user-model");

const home=async(req,res)=>{
    try{
        res.status(200).send("welcome");
    }catch(error){
        console.log(error);
    }
}

const register=async(req,res)=>{
    try{
        // console.log(req.body);
        const {username, email, phone, password}=req.body;
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({msg:"email already exist"});
        }

        const userCreated=await User.create({username, email, phone, password});

        res.status(200).json({msg:userCreated});
    }catch(err){
        console.log(err);
    }
}

module.exports={home,register};