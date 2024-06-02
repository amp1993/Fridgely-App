const RecipesApi = require('./recipes');
const { BadRequestError, ExpressError } = require('../expressError');



describe("get recipes", function () {
    test("get all recipes", async function () {
      
      const recipes = await RecipesApi.getRecipes();
  
      expect(recipes.meals.length).toBe(25);
    });

    test("get single recipe", async function () {
      
        const recipes = await RecipesApi.getRecipeById(53060);
    
        expect(recipes).toEqual({
            "meals": [
                {
                    "idMeal": "53060",
                    "strMeal": "Burek",
                    "strDrinkAlternate": null,
                    "strCategory": "Side",
                    "strArea": "Croatian",
                    "strInstructions": "Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.",
                    "strMealThumb": "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
                    "strTags": "Streetfood, Onthego",
                    "strYoutube": "https://www.youtube.com/watch?v=YsJXZwE5pdY",
                    "strIngredient1": "Filo Pastry",
                    "strIngredient2": "Minced Beef",
                    "strIngredient3": "Onion",
                    "strIngredient4": "Oil",
                    "strIngredient5": "Salt",
                    "strIngredient6": "Pepper",
                    "strIngredient7": "",
                    "strIngredient8": "",
                    "strIngredient9": "",
                    "strIngredient10": "",
                    "strIngredient11": "",
                    "strIngredient12": "",
                    "strIngredient13": "",
                    "strIngredient14": "",
                    "strIngredient15": "",
                    "strIngredient16": "",
                    "strIngredient17": "",
                    "strIngredient18": "",
                    "strIngredient19": "",
                    "strIngredient20": "",
                    "strMeasure1": "1 Packet",
                    "strMeasure2": "150g",
                    "strMeasure3": "150g",
                    "strMeasure4": "40g",
                    "strMeasure5": "Dash",
                    "strMeasure6": "Dash",
                    "strMeasure7": " ",
                    "strMeasure8": " ",
                    "strMeasure9": " ",
                    "strMeasure10": " ",
                    "strMeasure11": " ",
                    "strMeasure12": " ",
                    "strMeasure13": " ",
                    "strMeasure14": " ",
                    "strMeasure15": " ",
                    "strMeasure16": " ",
                    "strMeasure17": " ",
                    "strMeasure18": " ",
                    "strMeasure19": " ",
                    "strMeasure20": " ",
                    "strSource": "https://www.visit-croatia.co.uk/croatian-cuisine/croatian-recipes/",
                    "strImageSource": null,
                    "strCreativeCommonsConfirmed": null,
                    "dateModified": null
                }
            ]});
      });
  });

describe("add recipe ingredients to grocery list ", function () {
    test("get all recipes", async function () {
      
      const recipes = await RecipesApi.addIngredientsToGroceryList(53060);
  
      expect(recipes.length).toEqual(6)
    })
  });