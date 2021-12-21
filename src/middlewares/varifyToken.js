
import TokenAuth from "../helpsers/tokenAuth";




 const isUserExist=async(req,res,next)=>{
     try{
         
         const token=req.header("x-auth-token");
         if(!token){
         return res.status(400).json({error:"no token providede"})

     }
     console.log("hkjhjkhkjhjkhjkhj")
     const data=TokenAuth.decodeToken(token);

     req.user=data.user;
     return next();

    }
    catch(err){
        console.log(err);

    }


 }
 export default isUserExist;