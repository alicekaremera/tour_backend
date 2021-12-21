

import UserInfos from "../models/user";
import bcrypt from"bcrypt"
import TokenAuth from "../helpsers/tokenAuth";



class UserController{
    // create user in db
    static async createUser(req,res){
         const hashpassword=bcrypt.hashSync(req.body.password,10);
     req.body.password=hashpassword;
        const user= await UserInfos.create(req.body);
        if(!user){
            return res.status(404).json({Error:"user note registed"})
        }
            
           return res.status(200).json({message:"user created successeful",data:user});

            // get all users in db
        }
        static async getAllUsers(req,res){
            const user=await UserInfos.find();
            if(!user){
                return res.status(404).json({Error:"user note retrieves well"})
            }
                
               return res.status(200).json({message:" successeful retrieved user",data:user });

                
            }
            // get one user in db
             

            static async getOneUser(req,res){
                const user=await UserInfos.findById(req.params.id);
                if(!user){
                    return res.status(404).json({Error:"user note found"})
                }
                
                return res.status(200).json({message:"user found",data:user });

                

                

            }
            // delete one user in db
           
            static async deleteOneUser(req,res){
                const user=await UserInfos.findByIdAndDelete(req.params.id);
                if(!user){
                    return res.status(404).json({Error:"user note found"})
                }
                
                return res.status(200).json({message:"user delete",data:user });

                

                

            }
            // to update one user
            // login function
            static async  userLogin(req,res){
                const user=await UserInfos.findOne( {email:req.body.email});
                if(!user){
                    return res.status(404).json({Error:"user note found kindly register first"});
            }
            if(bcrypt.compareSync(req.body.password,user.password)){
                user.password=null;
                
                const token=TokenAuth.tokenGenerator({user:user});
                
                return res.status(200).json({message:"successfully login in",token:token});

            }
            return res.status(400).json({Error:"invalid email or password"})
                

            }


    }



    export default UserController;
