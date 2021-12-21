import UserInfos from "../models/user"




class DataChecker{
    static async isEmailExist(req,res,next){
    const user=await UserInfos.findOne({email:req.body.email});

    if(!user){
        return next();
    }
        return res.status(404).json({error:"email is arleady exist"})

    }
        
       

}
export default DataChecker;