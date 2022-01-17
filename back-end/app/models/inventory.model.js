const mongoose = require("mongoose")

const Inventory = mongoose.model(
    "inventories",
    mongoose.Schema({
        title: String,
        brand: String,
        description: String,
        quantity: String
    }, { timestamps: true })
);
module.exports = Inventory;