const mongoose = require('mongoose');

main().then(() => console.log('Connected'))
.catch(err => console.log(err));

async function main() {
mongoose.connect('mongodb://127.0.0.1:27017/test')
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user1= new User({
    name: 'John',
    email: 'john@gmail.com',
    age: 25
});

user1.save().then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})