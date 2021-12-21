import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import  mongoose from "mongoose";
import userRouter from "./src/routes/userRouter";
import tourRouter from "./src/routes/tourRouter";

dotenv.config("./.env");

const app=express();

app.use(bodyparser.json());
app.use("/user",userRouter);
app.use("/tour",tourRouter);



app.use("/",(req,res) => res.status(200).json({
    message:"This Tour Api is not exist"
}));
const dbUrl=process.env.DATABASEURL;
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
 
    useUnifiedTopology: true,
}).then(()=> console.log("Database connected successfully"))
const port= process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});


export default app;
