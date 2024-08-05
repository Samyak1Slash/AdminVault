const Contact=require("../models/contact-model");


const ContactForm=async (req,res,next)=>{
    try {
        const response=req.body;
        await Contact.create(response);
        res.status(200).json({msg: "Message Sent succefully"});
    } catch (error) {
        next(error);
    }
}

module.exports = ContactForm;