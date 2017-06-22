const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();


mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) { console.error(err) }
    else {
      app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
      });    
        console.log('db connected');
    }
});


app.get('/', (req, res) => {
    res.send("Hello World!")
})
