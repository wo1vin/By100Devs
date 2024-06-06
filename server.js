//import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');

//create express app
const app = express();

// connect to database
connectToDb();

//Routing
app.get("/", (req,res)=>{
    res.json({ stat:"workin"});
})

//start sserver
app.listen(process.env.PORT );