//yeh apn authentication and authorization ka kaam idhr hoga
const express=require("express");
const router=express.Router();
const authcontroller=require("../controllers/auth-contoller");
const {signupSchema,loginSchema}=require("../validators/auth-validator");
const validate=require("../Middlewares/validate-middleware");
const authMiddleware=require("../Middlewares/auth-middleware");



router.route("/").get(authcontroller.home);


router.route("/register").post(validate(signupSchema),authcontroller.register); 

router.route("/login").post(validate(loginSchema),authcontroller.login);

router.route("/user").get(authMiddleware,authcontroller.user); 


module.exports = router;