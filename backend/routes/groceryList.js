
const jsonschema = require("jsonschema");
const express = require("express");
const { ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Items = require("../models/items");
const newGroceryItemSchema = require("../schemas/newGroceryItem.json");
const updateGroceryItemSchema = require("../schemas/updateGroceryItem.json");
const router = express.Router();



/**
 * POST /:username
 * Authorization required: login
 * Create a new grocery item
 */
router.post("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    // Validate request body against newGroceryItemSchema

    const validator = jsonschema.validate(req.body, newGroceryItemSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const username = req.params.username;
    const { productName, quantityInGroceryList } = req.body;
    const existingItem = await Items.findItem(productName, username)

    if (existingItem && existingItem.inFridge === true) {
      // If item exists and is in the fridge, update its quantity in the grocery list

      const data = {
        inGroceryList: true,
        quantityInGroceryList: quantityInGroceryList

      }
      const updateItem = await Items.updateItem(productName, data, username)
      return res.status(201).json({ updateItem });

    } else {
      // If item does not exist or is not in the fridge, create a new item

      const inGroceryList = true;
      const inFridge = false;
      const item = await Items.create(req.body, username, inGroceryList, inFridge);

      return res.status(201).json({ item });
    }

    // }
  } catch (error) {
    next(error);
  }
});

/**
 * GET /:username
 * Authorization required: login
 * Get all items in the grocery list
 */

router.get("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const username = req.params.username;
    const items = await Items.findAllInGroceryList(username);
    return res.json({ items });
  } catch (err) {
    return next(err);
  }
});


/**
 * GET /:username/:item
 * Authorization required: login
 * Get a specific item in the grocery list
 */
router.get("/:username/:item", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const username = req.params.username;
    const productName = req.params.item


    const item = await Items.findItemInGroceries(productName, username);
    if (!item) {
      return res.json('Item not found.')
    }
    return res.json({ item });
  } catch (err) {
    return next(err);
  }
});


/**
 * PATCH /:username/:item
 * Authorization required: login
 * Update a specific item in the grocery list
 */
router.patch("/:username/:item", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, updateGroceryItemSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const username = req.params.username;
    const productName = req.params.item
    const { quantityInFridge } = req.body;

    const existingItem = await Items.findItem(productName, username);

    if (existingItem.inFridge === true) {
      // If item exists in the fridge, update its quantity

      const updateQuantityInFridge = existingItem.quantityInFridge + quantityInFridge;

      const data = {

        inGroceryList: false,
        quantityInGroceryList: 0,
        inFridge: true,
        quantityInFridge: updateQuantityInFridge,
      }


      const item = await Items.updateItem(productName, data, username);
      return res.json({ item });

    } else {
      // If item does not exist in the fridge, update its quantity in the grocery list

      const data = {

        inGroceryList: false,
        quantityInGroceryList: 0,
        inFridge: true,
        quantityInFridge: quantityInFridge,
      }
      const item = await Items.updateItem(productName, data, username);
      return res.json({ item });

    }


  } catch (err) {
    return next(err);
  }
});

/**
 * PATCH /:username/:item/update-quantity
 * Authorization required: login
 * Update the quantity of a specific item in the grocery list
 */


router.patch("/:username/:item/update-quantity", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, updateGroceryItemSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const username = req.params.username;
    const productName = req.params.item
    const { quantityInGroceryList } = req.body;

    const existingItem = await Items.findItem(productName, username);

    const data = {

      quantityInGroceryList: quantityInGroceryList

    }


    const item = await Items.updateItem(productName, data, username);
    return res.json({ item });






  } catch (err) {
    return next(err);
  }
});
/**
 * DELETE /:username/:item
 * Authorization required: login
 * Delete a specific item from the grocery list
 */
router.delete("/:username/:item", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {

    const username = req.params.username;
    const productName = req.params.item;


    const existingItem = await Items.findItem(productName, username);

    if (existingItem && existingItem.inFridge === true) {
      const item = await Items.updateItem(productName, { inGroceryList: false, quantityInGroceryList: 0 }, username);
      res.json({ item });
    } else {
      await Items.remove(productName, username);
      return res.json({ deleted: productName });
    }

  } catch (err) {
    return next(err);
  }
});




module.exports = router;