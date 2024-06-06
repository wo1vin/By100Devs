//import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const Item = require("./models/item")

//create express app
const app = express();

// configure express app
app.use(express.json());

// connect to database
connectToDb();

//Routing
app.get("/", (req,res)=>{
    res.json({ stat:"workin"});
})
app.get('/items', async (req,res) => {
    // find items
    const items = await Item.find();
    // respond with items
    res.json({ items: items });
})

app.get('/items/:id', async (req,res) => {
    // get id off the url
    const itemId = req.params.id;

    // find item using that id
    const item = await Item.findById(itemId);

    // respond with the item
    res.json({ item: item });
})

app.post('/items', async (req,res) => {
    // get the sent data off req body
    const itemName = req.body.itemName;
    const description = req.body.description;
    const category = req.body.category;
    const author = req.body.ObjectId;
    const submittedOn = req.body.submittedOn;
    // ceate item
    const item = await Item.create({
        itemName: itemName,
        description: description,
        category: category,
        author: author,
        date: submittedOn
    })
    // respond with new item
    res.json({ item: item });
})

//start sserver
app.listen(process.env.PORT );