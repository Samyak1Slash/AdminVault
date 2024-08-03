const mongoose=require("mongoose");

// const URI="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

const URI=process.env.MONGODB_URI;

const connectDB=async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("DB connected")
    }catch(error){
        console.log(error);
        process.exit(0);//pyaar se bahar nikal jao agar connection nahi hota hai
    }
}

module.exports=connectDB;