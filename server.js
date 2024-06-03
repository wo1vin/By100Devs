const { DiffieHellmanGroup } = require('crypto');
const express = require('express');
const app = express();

//Routing
app.get("/", (req,res)=>{
    res.json({ stat:"workin"});
})

//start sserver
app.listen(2020);