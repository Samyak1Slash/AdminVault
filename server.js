require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./router/auth-router");
const connectDB=require("./utils/db");

//for json data
app.use(express.json({extends:true}));
//integrating router to our server .js file
app.use("/api/auth",router);//mounting the router



connectDB().then(()=>{//jab hamara db connect hoga then and then only start our database
app.listen(5454,()=>{
    console.log("Server is responding");
})
});