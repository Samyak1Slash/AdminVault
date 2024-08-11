//abhi tak jaha jaha error aya apnko wha pe next(error) bhej do woh idhar aa jyga

const errorMiddleware=(err,req,res,next)=>{
    const status=parseInt(err.status, 10) || 500;
    const message=err.message || "BACKEND ERROR";
    const extraDetails=err.extraDetails || "Error From Backend";

    return res.status(status).json({message,extraDetails});     
}

module.exports=errorMiddleware;