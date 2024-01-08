const fs = require("fs");
const express = require("express");


// make the validator function and export it.
const validatorfunction=(req,res,next)=>{
    const { ID,
        Name,
        Rating,
        Description,
        Genre,
        Cast}=req.body

        //write data type on res.txt
        let logMessage = (message) => {
            fs.appendFileSync("res.txt",message + '\n');
          };
        //check ID
       typeof(ID)==="number"?logMessage(`ID is a number`):logMessage(`bad request.some data is incorrect.`)
       //check Name
       typeof(Name)==="string"?logMessage(`Name is a string`):logMessage(`bad request.some data is incorrect.`)
      //check Rating
      typeof(Rating)==="number"?logMessage(`Rating is a number`):logMessage(`bad request.some data is incorrect.`)
      //check Description
      typeof(Description)==="string"?logMessage(`Description is a string`):logMessage(`bad request.some data is incorrect.`)
      //check Genre
      typeof(Genre)==="string"?logMessage(`Genre is a string`):logMessage(`bad request.some data is incorrect.`)
      //check Cast
     Array.isArray(Cast) && Cast.every((element)=>typeof(element)==="string")? logMessage(`Cast is a array of string`):logMessage(`bad request.some data is incorrect.`)
       
    //   if(typeof(ID)!=="number" || typeof(Name)!=="string" || typeof(Rating)!=="number" || typeof(Description)!=="string" ||typeof(Genre)!=="string" ||
    //   (Array.isArray(Cast) && Cast.every((element)=>typeof(element)!=="string"))){
    //     res.status(400).send(`bad request.some data is incorrect.`)
    //   }
      next()
    }


 module.exports = validatorfunction;
