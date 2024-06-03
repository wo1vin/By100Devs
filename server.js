// load env variables
require("dotenv").config();

//import dependencies
const express = require('express');
const app = express();

//Routing
app.get("/", (req,res)=>{
    res.json({ stat:"workin"});
})

//start sserver
app.listen(process.env.PORT );