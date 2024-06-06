//import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const itemsController = require('./controllers/itemsController');

//create express app
const app = express();

// configure express app
app.use(express.json());
app.use(cors());

// connect to database
connectToDb();

//Routing
app.get("/", (req,res)=>{ res.json({ stat:"workin"}) })
app.get('/items', itemsController.fetchItems);
app.get('/items/:id', itemsController.fetchItem);
app.post('/items',  itemsController.createItem);
app.put('/items/:id', itemsController.updateItem);
app.delete('/items/:id', itemsController.deleteItem);

//start sserver
app.listen(process.env.PORT );