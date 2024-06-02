const express = require("express");
const { BadRequestError } = require("../expressError");
const router = express.Router();
const fetch = require('node-fetch');
const Items = require("../models/items");
const RecipesApi = require("../models/recipes");
const { ensureLoggedIn, ensureCorrectUserOrAdmin } = require("../middleware/auth");

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";

/**
 * GET / 
 * Fetch all recipes from the external API
 * Returns: JSON response containing all recipes
 */

router.get("/", async function (req, res, next) {
    try {
        const response = await RecipesApi.getRecipes()
        return res.json(response);

    } catch (error) {
        return next(error);
    }
})

/**
 * GET /:id 
 * Fetch a recipe by its ID from the external API
 * Returns: JSON response containing the recipe details
 */

router.get("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const response = await RecipesApi.getRecipeById(id)
        return res.json(response)

    } catch (error) {
        return next(error);
    }
})

/**
 * POST /:id/:username/add-ingredients
 * Add ingredients of a recipe to the user's grocery list
 * Steps:
 * 1. Fetch ingredients from the recipe by ID
 * 2. Check if the item exists in the user's inventory
 * 3. If the item exists in the fridge, do nothing
 * 4. If the item exists in the grocery list, update its quantity
 * 5. If the item does not exist, add it to the grocery list
 * Returns: JSON response containing the new items, updated items in grocery list, and items already in fridge
 */
router.post("/:id/:username/add-ingredients", async function (req, res, next) {
    try {
        const id = req.params.id;
        const username = req.params.username;

        const response = await RecipesApi.addIngredientsToGroceryList(id);

        const itemsCreated = [];
        const itemsInFridge = [];
        const itemInGroceryList = [];

        // Process each ingredient

        const promises = response.map(async (item) => {
            const inGroceryList = true;
            const inFridge = false;

            // Check if the item already exists in the user's inventory

            const existingItem = await Items.findItem(item.productName, username);

            if (existingItem) {
                if (existingItem.inFridge === true) {
                    // If item is in the fridge, add it to the fridge array
                    const existingItem = await Items.findItem(item.productName, username);
                    itemsInFridge.push(existingItem)
                } else if (existingItem.inGroceryList === true) {
                    // If item is in the grocery list, update its quantity

                    const updateQuantityInGroceryList = existingItem.quantityInGroceryList + item.quantity;
                    const updatedItems = await Items.updateItem(item.productName, { quantityInGroceryList: updateQuantityInGroceryList }, username);
                    itemInGroceryList.push(updatedItems);
                }
            } else {
                const data = {
                    productName: item.productName,
                    categoryName: item.categoryName,
                    quantityInGroceryList: item.quantity,
                    unitOfMeasure: item.unitOfMeasure
                };
                const newAddedItems = await Items.create(data, username, inGroceryList, inFridge);
                itemsCreated.push(newAddedItems); // Collect item data
            }
        });

        await Promise.all(promises);

        // Send items info in the response
        res.json({ newItems: itemsCreated, updateItemsInGrocery: itemInGroceryList, itemsAlreadyInFridge: itemsInFridge });

    } catch (error) {
        return next(error);
    }
});





module.exports = router
