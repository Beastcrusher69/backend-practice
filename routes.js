console.log("dbcuweuwbeub")

const express = require('express');
const app = express();

app.get('/jay',(req,res)=>{
    res.send("welcome to home page");
})

app.listen(5000,()=>{
    console.log('server listening on port 5000');
})