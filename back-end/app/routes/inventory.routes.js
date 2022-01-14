const inventorys = require("../controllers/inventory.controller.js");

var router = require("express").Router();

// Create a new inventorys
router.post("/", inventorys.createInventory);
// Retrieve all inventorys
router.get("/", inventorys.findAllInventory);

// Retrieve all published inventorys
router.get("/published", inventorys.findAllPublishedInventorys);

// Retrieve a single inventorys with id
router.get("/:id", inventorys.findOneInventory);

// Update a inventorys with id
router.put("/:id", inventorys.updateInventory);

// Delete a inventorys with id
router.delete("/:id", inventorys.deleteInventory);

// Create a new inventorys
router.delete("/", inventorys.deleteAllInventory);

module.exports = router