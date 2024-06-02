const fetch = require('node-fetch');
const { ExpressError, BadRequestError } = require("../expressError");
const { extractIngredients }= require("../helpers/parseData")

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";


class RecipesApi {

    /**
     * Fetch all recipes from the API
     * Return the data in JSON format
     * Throw BadRequestError if the response is empty
     * Throw ExpressError for any other errors
     */

    static async getRecipes() {
        try {
            const apiUrl = `${BASE_URL}search.php?s`;
            const response = await fetch(apiUrl);

         
            const text = await response.text();
            if (!text) {
                throw new BadRequestError('Empty response from server');
            }

            const data = JSON.parse(text);

            return  data;
        } catch (err) {
            throw new ExpressError(err.message);
        }
    }
    /**
     * Fetch a recipe by its ID from the API
     * Return the data in JSON format
     * Throw BadRequestError if the response is empty
     * Throw ExpressError for any other errors
     */
    static async getRecipeById(id){
        try{

            const apiUrl = `${BASE_URL}lookup.php?i=${id}`
            const response = await fetch(apiUrl);
            const text = await response.text();
            if (!text) {
                throw new BadRequestError('Empty response from server');
            }

            const data = JSON.parse(text);

            return  data;

        }catch(error){
            throw new ExpressError(error.message);

        }
    }

  /**
     * Add ingredients of a recipe to the grocery list
     * Fetch the recipe by its ID and parse its ingredients
     * Return the parsed ingredients
     * Throw BadRequestError if the response is empty or invalid
     * Throw ExpressError for any other errors
     */
    static async addIngredientsToGroceryList(id){
        try {
            const apiUrl = `${BASE_URL}lookup.php?i=${id}`;
            const response = await fetch(apiUrl);
            const recipeData = await response.json();
            if (!recipeData || !recipeData.meals || recipeData.meals.length === 0) {
                throw new BadRequestError('Empty or invalid response from server');
            }

           const parseRecipeData = extractIngredients(recipeData.meals[0]);
            return parseRecipeData

        } catch (error) {
            throw new ExpressError(error.message);
        }
    }



}

module.exports = RecipesApi;
