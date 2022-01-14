const mongoose = require("mongoose")

const Inventory = mongoose.model(
    "inventories",
    mongoose.Schema({
        title: String,
        description: String,
        published: Boolean
    }, { timestamps: true })
);
module.exports = Inventory;