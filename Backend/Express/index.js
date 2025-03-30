const Express = require('express');

const app =Express();

const port=3000;

app.listen(port,()=>{
    console.log("Server is running at http://localhost:3000")
})

app.get("/ig/:username",(req,res)=>{
    var username = req.params['username'];
     res.send(`Welcome to ${username}`)
     
})