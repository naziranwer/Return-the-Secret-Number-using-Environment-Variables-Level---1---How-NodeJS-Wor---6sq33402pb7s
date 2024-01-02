const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
   const secretNumber= process.env.NUMBER;

   if(secretNumber){
      res.status(200).json({number: secretNumber});
   }
   else{
     res.status(404).json({error:'Not Found'});
   }
});

module.exports = app;
