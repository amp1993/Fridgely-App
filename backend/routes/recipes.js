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

        
        // Process each ingredient by using a helper function
        const result = await processIngredient(response, username);

        res.json(result);

    } catch (error) {
        return next(error);
    }
});





module.exports = router
