const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: String,
    description: String,
    category: String,
    submittedOn: Date,
    author: ObjectId,
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;