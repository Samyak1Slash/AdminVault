const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,

    },
    phone:{
        type:String,
        require:true,

    },
    password:{
        type:String,
        require:true,

    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});


userSchema.pre("save",async function (next){

    const user=this;

    if(!user.isModified("password")){
        next();//ye condn yaani sab thik hai jaake save hoja in controller wale route mein

    }

    try{
        const saltRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password, saltRound);
        user.password=hash_password;
    }catch(err){
        next(error);
    }
})

//Compare THE PAssword

userSchema.methods.comparePassword=async function(password){
   return  bcrypt.compare(password,this .password);
}

//json web token
userSchema.methods.generateToken = async function(){    //Hum iss instace methods ki madt se kitne bhi methods/func create kr skte hai and fir sie controlleler pe kahi pe bhi access iya jaa skta hai
    try {
        return jwt.sign({
            userId:  this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
        )
    } catch (error) {
        console.error(error);
    }
};


const User=new mongoose.model("User",userSchema);

module.exports=User;