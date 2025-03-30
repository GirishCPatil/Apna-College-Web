const express = require("express")

const app = express();
const port= 3000;

app.use(express.urlencoded({extended:true}))// url encoded
app.use(express.json())// for json data parsing

app.get("/register",(req,res)=>{
    let {user,pass}= req.query;
    res.send("GETT");
})

app.post("/register",(req,res)=>{
 console(req.body)
    res.send("POST")
})

app.listen(port,()=>{
 console.log("App listining")
})

