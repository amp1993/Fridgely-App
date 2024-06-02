import React, { useEffect, useState } from "react";
import FridgelyApi from "../api/api";
import { Link } from "react-router-dom";
import "./Recipes.css";
import SearchField from "../common/SearchField.js";

const RecipeList = ({search, updateRecipes, recipes, filteredRecipes, fridgeItems, user, updateFridgeItems}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch all recipes when the component mounts
        async function fetchRecipes() {
            try {
                const recipeData = await FridgelyApi.request('recipes');
                updateRecipes(recipeData.meals);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchRecipes();
    }, []);

    useEffect(() => {
        // Fetch fridge items when the component mounts
        async function fetchFridgeItems() {
            try {
                const fridgeData = await FridgelyApi.getFridgeItems(user);
                if(fridgeData.length > 0){
                    updateFridgeItems(fridgeData)
                }
                return
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchFridgeItems();
    }, []);



//   Render loading message while fetching data
  if (isLoading) {
    return <p className="loading-message">Loading &hellip;</p>;
  }


    // Count and display the number of ingredients in a recipe and how many are in the fridge
    const ingredientCount =  (recipe) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            if (ingredient && ingredient.trim() !== "") {
                // Check if the ingredient is in the fridge
                if(fridgeItems.length > 0){
                    const isInFridge = fridgeItems[0].find(item => item.productName === ingredient);
                    ingredients.push({ ingredient, isInFridge });
                } else {
                    ingredients.push({ ingredient});
                }

             
            }
        }
    
        // Generate JSX element based on ingredients count
        const count = ingredients.length;
        if (count === 0) {
            return <p className="ingredient-count">No ingredients found</p>;
        } else {
            // Count the number of ingredients in the fridge
            const fridgeItemCount = ingredients.filter(item => item.isInFridge).length;
    
            return (
                <>
                    <p className="ingredient-count">{count} ingredient(s) found</p>
                    <p className="fridge-item-count">{fridgeItemCount} ingredient(s) in the fridge</p>
                </>
            );
        }
    };

    return (
        <>
            <SearchField recipes={recipes} search={search}/>
            {filteredRecipes === '0 results' ? (
                <p className="no-results">0 results found</p>
            ) : (
                <ul className="cards-list">
                    {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map(recipe => (
                        <li className="recipe-card" key={recipe.idMeal}>
                            <Link to={`/recipes/${recipe.idMeal}`} className="recipe-link">
                                <div className="recipe-content">
                                    <h3 className="recipe-title">{recipe.strMeal}</h3>
                                    <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
                                </div>
                            </Link>
                            {user && ingredientCount(recipe)}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default RecipeList;
