const express = require('express'); 
const app = express();
const port = 3000;
const expressError = require('./expressError.js');


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/admin', (req, res) => {
   throw new expressError('You are not authorized to access this page', 403);
  }); 

app.use("/admin", (err,req, res, next) => {
    let { status = 500, message = 'Something went wrong' } = err;
   res.status(status).send(message);
});



