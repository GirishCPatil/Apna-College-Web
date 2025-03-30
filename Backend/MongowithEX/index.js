const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

const ExpressError = require('./ExpressError');



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main().then((res)=>{
    console.log('Connected to MongoDB');    
}).catch(err => console.log(err));

async function main(params) {
    mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get('/chats', async (req, res) => {
  const chats = await Chat.find();
  res.render('index.ejs', { chats });
});


app.get('/chats/new',(req, res) => {
  
    res.render('new.ejs');
})

app.post('/chats',(req, res) => { 
    const {from,to, message} = req.body;
    const newChat = new Chat({from,to,message,createdAt: new Date()});
    newChat.save().then(()=>{
        res.redirect('/chats');
    }).catch(err => console.log(err));
   
})

app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  });

app.patch("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { message } = req.body; // Extract 'message' correctly
    console.log(`Updating message with ID: ${id} to: ${message}`);   

    try {
        await Chat.findByIdAndUpdate(id, { message }); // Await the update
        res.redirect("/chats");
    } catch (err) {
        console.error("Error updating chat:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});