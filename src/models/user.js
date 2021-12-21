import mongoose from 'mongoose';


const userSchema= new mongoose.Schema(
    {
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,


    },
    address:{
        type:String,
        default:"Rwanda",},
        role:{
            type:String,
            default:"user",
            enum:["admin","user"]
        },
    gender:{
        type:String,
        enum:["male","female","another","not-say"],
    }
},
    {


    timestamps:true,
    
}
);
const User=mongoose.model('User',userSchema)


export default User;
