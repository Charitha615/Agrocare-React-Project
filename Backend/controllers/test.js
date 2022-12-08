const {request} = require("express");
module.exports={
    test:(req,res)=>{
        console.log("Good")
        res.send("hi")
    }
}