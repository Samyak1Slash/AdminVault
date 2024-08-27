//isme hum appn token k verify krenge mtlab user k token valid hai ya nahi if hai to user get krke abhi joh apne ne req.user bnya hai usme daal
//denge by some method

const jwt=require("jsonwebtoken");
const User=require("../models/user-model");

const  authMiddleware=async (req,res,next)=>{
    const token=req.header("Authorization");

    if(!token){
        //if you attempt to use an expired token, you'll recieve a "401 unauthorized  HTTP" response.
        return res.status(401).json({message:"Unauthorized HTTP, Token not provided"});
    }

   
    const jwtToken=token.replace("Bearer","").trim();  
    // console.log("token from auth middleware", jwtToken);

    try {
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
           

        const userData=await User.findOne({email:isVerified.email}).select({password:0});//isse hum password wali feild chodke jo chahiye wo sab milega
        console.log(userData); 


        //in expree ye joh teen apne ne likhe hai ss ap kahi bhi use kr skte hai read one line in yellow jiska humne screen shot liya hai #30 24:29
        req.user=userData;
        req.token=token;
        req.userID=userData._id;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthoeized. Invalid token."});
    }


    
}

module.exports=authMiddleware;