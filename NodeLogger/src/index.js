// import required modules
const express=require("express");
const app=express();
const morgan=require("morgan");
const fs=require("fs")
// const { tokens } = morgan;
const accessLogStream = fs.createWriteStream('access.log', { flags: 'a+' });
const customFormat = ':method :status :res[content-length] :response-time ms :date :http-version :url\n';
  // Use morgan middleware 
  app.use(morgan(customFormat, { stream: accessLogStream }));
  //get
app.get("/",(req,res)=>{
    res.status(200).send({ "message": "welcome to server"})
})
app.get("/get-users",(req,res)=>{
    res.status(200).send({
        "message": "here is the list of all users"
        })
})
//post
app.post("/add-user",(req,res)=>{
    res.status(201).send({
        "message": "user added successfully"
        })
})
//put
app.put("/user/:id",(req,res)=>{
    const id=req.params.id;
    res.status(201).send({
        "message": `user ${id} updated successfylly`
        })
})
//delete
app.delete("/user/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send({
        "message": `user ${id} deleted successfylly`
        })
})
app.listen(8000,()=>{
    console.log("app is running on 8000")
})
// export the server
module.exports = app;



// morgan.token('custom', (req, res) => {
//     return `${tokens.method(req, res)} ${tokens.status(req, res)} - ${tokens['response-time'](req, res)} ms ${tokens.date(req, res)} ${tokens['http-version'](req, res)} ${tokens.url(req, res)}\n`;
//   });
  
  // Use morgan middleware 
//   app.use(morgan(':custom', { stream: accessLogStream }));
  