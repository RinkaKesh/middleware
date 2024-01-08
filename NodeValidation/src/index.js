//  import required modules from nodejs and build the server
const express=require("express");
const app=express();
app.use(express.json())
const validatorfunction=require("./middlewares/validator")
app.use(validatorfunction);

app.put("/",(req,res)=>{
    
  res.status(200).send(`data received` )
})
app.listen(8000,()=>{
  console.log("app is running on port 8000")
})
// export the server
module.exports=app;

