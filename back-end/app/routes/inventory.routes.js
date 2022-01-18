const inventorys = require("../controllers/inventory.controller.js");

var router = require("express").Router();

// Create a new inventorys
router.post("/", inventorys.createInventory);

// Retrieve all inventorys
router.get("/", inventorys.findAllInventory);

// Retrieve a single inventorys with id
router.get("/:id", inventorys.findOneInventory);

// Update a inventorys with id
router.put("/:id", inventorys.updateInventory);

// Delete a inventorys with id
router.delete("/:id", inventorys.deleteInventory);

// Filter by brand
router.get("/brand/:brand", inventorys.findAllInventoryByBrand)

// Filter by brand
router.get("/description/:description", inventorys.findAllInventoryByDescription)

// Filter by quantity 
router.get("/quantity/:quantity", inventorys.findAllInventoryByQuantity)

module.exports = router