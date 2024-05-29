const express = require('express')

const app = express()

app.use("/",(req,res)=>{
    res.send("Server is Running")
});

app.listen(4500,console.log("server running at 4500"))