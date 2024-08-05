

const validate = (schema)=>async (req,res,next)=>{ //aise hi lkna pdta hai isse
    try{
        const parseBody= await schema.parseAsync(req.body);//ye zod se hi mila
        req.body= parseBody;
        next();
    }catch(error){
        const status="422";
        const message="Fill the input properly";
        const extraDetails=error.issues[0].message;

        const err = {   
            status,
            message,
            extraDetails,
        };
        
        
        next(err);
    }
}

module.exports=validate;