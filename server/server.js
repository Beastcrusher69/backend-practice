const express = require('express');
const app = express();
const port = 7000;

app.get("/api",(req,res)=>{
    res.json({users:["user1","user2","user3"]});

});

app.listen(port ,()=>{
    console.log("server listening on port " + port);
})