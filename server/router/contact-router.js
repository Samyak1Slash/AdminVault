const express=require("express");
const ContactForm = require("../controllers/contact-controller");
const router=express.Router();
const validate=require("../Middlewares/validate-middleware");
const contactformSchema=require("../validators/contactForm-validator");

router.route("/contact").post(validate(contactformSchema),ContactForm);

module.exports = router;