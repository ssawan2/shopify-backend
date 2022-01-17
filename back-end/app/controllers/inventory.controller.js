const Inventory = require("../models/inventory.model");

const createInventory = async(req, res) => {
    console.log(req.body.title)
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const inventory = await Inventory.create({
        title: req.body.title,
        brand: req.body.brand,
        description: req.body.description,
        quantity: req.body.quantity,
        published: req.body.published ? req.body.publised : false
    });

    if (inventory) {
        res.send(inventory);
    } else {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the inventory."
        });
    }
}

// Retrieve all inventorys from the database.
const findAllInventory = async(req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Inventory.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving inventory."
            });
        });

};

// Find a single inventorys with an id
const findOneInventory = async(req, res) => {
    const id = req.params.id;

    Inventory.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Inventory with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Inventory with id=" + id });
        });

};


const updateInventory = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Inventory.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update inventorys with id=${id}. Maybe inventorys was not found!`
                });
            } else res.send({ message: "inventorys was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating inventorys with id=" + id
            });
        });
};


const deleteInventory = (req, res) => {
    const id = req.params.id;

    Inventory.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete inventorys with id=${id}. Maybe inventorys was not found!`
                });
            } else {
                res.send({
                    message: "inventorys was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete inventorys with id=" + id
            });
        });
};

const deleteAllInventory = (req, res) => {
    Inventory.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} inventorys were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all inventorys."
            });
        });

};

const findAllPublishedInventorys = (req, res) => {
    Inventory.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving inventorys."
            });
        });

};
module.exports = { createInventory, findAllInventory, findOneInventory, deleteInventory, findAllPublishedInventorys, deleteAllInventory, updateInventory }