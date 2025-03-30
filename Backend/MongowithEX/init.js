const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then((res)=>{
    console.log('Connected to MongoDB');    
}).catch(err => console.log(err));

async function main(params) {
    mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let Allchats = [
    {
        from: 'John',
        to: 'Doe',
        message: 'Hello',
        createdAt: new Date()
    },
    {
        from: 'abi',
        to: 'avi',
        message: 'Hi',
        createdAt: new Date()
    },
    {
        from: 'mohit',
        to: 'rohit',
        message: 'How are you?',
        createdAt: new Date()
    },
   
    {
        from: 'gp',
        to: 'pg',
        message: 'I will talk to you later',
        createdAt: new Date()
    },
    {
        from: 'maya',
        to: 'mohan',
        message: 'Sure',
        createdAt: new Date()
    }
]


Chat.insertMany(Allchats)