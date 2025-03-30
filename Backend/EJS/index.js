const Express = require('express');
const app = Express();
const path = require("path")


const port = 3000;
app.set("views",path.join(__dirname,"/views"))
app.listen(port,()=>{
    console.log('App is listening!!')
})

app.set("view Engine","ejs")

app.get("/",(req,res)=>{
    let dicVal= Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{dicVal})
})

