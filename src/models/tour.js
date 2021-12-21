import mongoose from 'mongoose';


const tourSchema= new mongoose.Schema(
    {
title:String,
    // description:String,
    seat:Number,
   
    
   

   
    dateScheduled: String,
    dueDate: String,
     
    
user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
},

  
  
   
},
    {


    timestamps:true,
    
}
);
tourSchema.pre(/^find/,function (next){
    this.populate({path:"user",
    select:"lastName email address"
});
    next();
})
const Tour=mongoose.model('Tour',tourSchema)


export default Tour;
