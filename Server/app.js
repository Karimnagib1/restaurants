const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGODB_URI = 'mongodb+srv://root:qSFhcAEMWPid1eX6@cluster0.kma7wzp.mongodb.net/restaurants?retryWrites=true&w=majority';
const port = 3000;



mongoose.connect(MONGODB_URI, ()=>{
    console.log('Connected to DB');
    app.listen(port, ()=> {
        console.log(`Listening on port ${port}`);
    })
})








