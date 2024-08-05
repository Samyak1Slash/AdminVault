const express=require("express");
const ContactForm = require("../controllers/contact-controller");
const router=express.Router();

router.route("/contact").post(ContactForm);

module.exports = router;