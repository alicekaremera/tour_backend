import {check,validationResult} from "express-validator";


class Validator{
    static validateInput=(req,res,next)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        const errorMessage=errors.errors.map((err)=>err.msg);
        return res.status(400).json({message: errorMessage});
    }
    return next();
};
//  static for user
static newAccountRules(){
    return[
        check("email","email is invalid").isEmail(),
        check("password","password is not strong").isStrongPassword(),
        check("lastName","last name should be validade").trim().isAlpha(),
        check("firstName","first name should be validade").trim().isAlpha(),
        check("gender","gender  should be validade with male,female,other").trim().isIn(["male","female","other"]),
      ]

  

  

 };
static newTourAccountRules(){
    return [
      //for tour validator
    check("title","title is invalid").trim().isString(),
    check("seats"," seat is not valid must be number").trim().isString(),
    
     check("dateScheduled","dateScheduled is not valid").trim().isString(),
    check("dueDate","dueDate is not valid").trim().isDate(),
   
  
  ] 
}






}
export default Validator;