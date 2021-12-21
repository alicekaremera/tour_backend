const verifyAccess=(requiredRole)=>{
    return async(req,res,next)=>{
        try{
            const {role}=req.user;
            if(requiredRole!=role){
                return res
                .status(401)
                .json({error:"unAuthorised!you dont have accesss to this Api"});
            }
            return next();
        }catch(err){
            console.log(err);
        }
        }

    }
    export default verifyAccess;
