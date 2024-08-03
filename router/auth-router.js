//yeh apn authentication and authorization ka kaam idhr hoga
const express=require("express");
const router=express.Router();
const authcontroller=require("../controllers/auth-contoller");


router.route("/").get(authcontroller.home);


router.route("/register").post(authcontroller.register); 


module.exports = router;