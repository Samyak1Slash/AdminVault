const User=require("../models/user-model");
const bcrypt=require("bcryptjs");

const home=async(req,res)=>{
    try{
        res.status(200).send("welcome");
    }catch(error){
        console.log(error);
    }
}

//USER REGISTRATION LOGIC

const register=async(req,res)=>{
    try{
        // console.log(req.body);
        const {username, email, phone, password}=req.body;
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({msg:"email already exist"});
        }

        //if email dosent match lt hash the password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password, saltRound); //abhi isko idhar se hatake modeles me pre mein dalte

        const userCreated=await User.create({username, email, phone, password});

        res.status(201).json({msg: "registration succesfull",token: await userCreated.generateToken(),userId: userCreated._id.toString(),
        });//200 se 201 krdiye jab bhi kuch change hota hai
    }catch(err){
        res.status(500).json("Internal server error");
    }
}


//*------------
//USER LOGIN LOGIC
//*-------------

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email});

        if(!userExist){
            return res.status(400).json({msg:"Invalid credentials"});
        }

        // const user= await bcrypt.compare(password,userExist.password); //Abhi hum iske liye bhi func bnye jaise hash password ka kiya tha
        const user=await userExist.comparePassword(password); //Abhi hum isko bhi build krenge

        
        if(user){
            res.status(200).json({msg: "Login succesfull",token: await userExist.generateToken(),userId: userExist._id.toString(),
            });//registter se copy kiya //dekh abhi thoda chang kiya usercreated se userexist
        }else{
            res.status(401).json({msg:"Invalid credentials"});
        }

    } catch (error) {
        res.status(500).json("Internal server error");
    }
}



module.exports={home,register,login};