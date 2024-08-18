require("dotenv").config();
const express=require("express");
const cors=require("cors");
const app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const connectDB=require("./utils/db");
const errorMiddleware=require("./Middlewares/error-middleware");


//cors MW + ye
let corsOptions={
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOptions));
//for json data
app.use(express.json({extends:true}));
//integrating router to our server .js file
app.use("/api/auth",authRoute);//mounting the router
app.use("/api/form",contactRoute);  


app.use(errorMiddleware);

connectDB().then(()=>{//jab hamara db connect hoga then and then only start our database
app.listen(5454,()=>{
    console.log("Server is responding");
})
});