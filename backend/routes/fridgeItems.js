
const jsonschema = require("jsonschema");
const express = require("express");
const { ensureLoggedIn, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Items = require("../models/items");
const newGroceryItemSchema = require("../schemas/newGroceryItem.json");
const updateGroceryItemSchema = require("../schemas/updateGroceryItem.json");

const router = express.Router();


/**
 * Authorization required: login
 * Create a new item
 */
router.post("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {

    const validator = jsonschema.validate(req.body, newGroceryItemSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const username = req.params.username;



    const inGroceryList = false;
    const inFridge = true;
    const item = await Items.create(req.body, username, inGroceryList, inFridge);


    return res.status(201).json({ item });
    // }
  } catch (error) {
    next(error);
  }
});

/**
 * Authorization required: login
 * Get all items in the fridge
 */
router.get("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const username = req.params.username;

    const items = await Items.findAllInFridge(username);
    return res.json({ items });
  } catch (err) {
    return next(err);
  }
});

/**
 * Authorization required: login
 * Get a specific item in the fridge
 */
router.get("/:username/:item", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const username = req.params.username;
    const productName = req.params.item


    const item = await Items.findItemInFridge(productName, username);
    if (!item) {
      return res.json('Item not found.')
    }
    return res.json({ item });
  } catch (err) {
    return next(err);
  }
});


/**
 * Authorization required: login
 * Update a specific item
 */
router.patch("/:username/:item", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    // Validate the request body against the update grocery item schema

    const validator = jsonschema.validate(req.body, updateGroceryItemSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const username = req.params.username;
    const productName = req.params.item


    const item = await Items.updateItem(productName, req.body, username);

    return res.json({ item });

  } catch (err) {
    return next(err);
  }
});



/**
 * Authorization required: login
 * Update the quantity of a specific item in the fridge
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
    const { quantityInFridge } = req.body;

    const existingItem = await Items.findItem(productName, username);
    if (existingItem) {

      const data = {

        quantityInGroceryList: quantityInFridge

      }

      const item = await Items.updateItem(productName, data, username);
      return res.json({ item });

    } else {
      return res.json('Item not found.');

    }

  } catch (err) {
    return next(err);
  }
});



/**
 * Authorization required: login
 * Delete a specific item
 */
router.delete("/:username/:item", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {

    const username = req.params.username;
    const productName = req.params.item;

    const existingItem = await Items.findItem(productName, username);

    if (existingItem.quantityInGroceryList === true) {
      const item = await Items.updateItem(productName, { inFridge: false, quantityInFridge: null }, username);
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