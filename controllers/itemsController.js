const Item = require('../models/item');

const fetchItems = async (req,res) => {
    // find items
    const items = await Item.find();
    // respond with items
    res.json({ items });
};

const fetchItem = async (req,res) => {
    // get id off the url
    const itemId = req.params.id;

    // find item using that id
    const item = await Item.findById(itemId);

    // respond with the item
    res.json({ item });
};

const createItem = async (req,res) => {
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
};

const updateItem = async (req,res) => {
    // get the id off the ul
    const itemId = req.params.id;

    // get the data off the req body
    const itemName = req.body.itemName;
    const body = req.body.body;

    // find and update the record
    await Item.findByIdAndUpdate(itemId, {
        itemName:itemName,
       // add other properties
    })

    // find and update item
    const item =  await Item.findById(itemId);

    // respond with it
    res.json({ item: item });
}

const deleteItem = async (req,res) => {
    // get id off url
    const itemId = req.params.id;

    // delete the record
    await Item.deleteOne({ id: itemId });

    // respond
    res.json({ success: "Record deleted" });
}


module.exports = {
    fetchItems: fetchItems,
    fetchItem: fetchItem,
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem,
}