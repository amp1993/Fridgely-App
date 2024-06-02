import React, { useEffect, useState } from "react";
import FridgelyApi from "../api/api";
import { useParams } from "react-router-dom";
import "./RecipeCard.css"

const RecipeCard = ({ user, fridgeItems, updateFridgeItems, updateShowPopup, showPopup }) => {
    const [isLoading, setIsLoading] = useState(true);
   
   
   
    // Get the recipe ID from the URL parameters
    const { id } = useParams();
    // State to store the single recipe data
    const [singleRecipe, setSingleRecipeData] = useState([])


    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch recipe data
                const recipeData = await FridgelyApi.getRecipe(id);
                setSingleRecipeData(recipeData);
                setIsLoading(false)

                // Fetch fridge items if user exists
                if (user) {
                    const fridgeData = await FridgelyApi.getFridgeItems(user);
                    if (fridgeData.length > 0) {
                        updateFridgeItems(fridgeData);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [id, user, updateFridgeItems]);

    //   Render loading message while fetching data
    if (isLoading) {
        return <p className="loading-message">Loading &hellip;</p>;
    }


    // Combine ingredient and measure data into an array of objects
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = singleRecipe[`strIngredient${i}`];
        const measure = singleRecipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure });
        }
    };

    const addIngredients = async () => {

        try {
            await FridgelyApi.addItemToGroceryList(id, user);
            updateShowPopup(true);

            // Hide the pop-up after 3 seconds
            setTimeout(() => {
                updateShowPopup(false);
            }, 3000);
        } catch (error) {
            console.error('Error adding ingredients to the grocery list:', error);
        }
    };

    // Check if an ingredient is already in the fridge
    const isItemInFridge = (ingredient) => {
        const flattenedItems = fridgeItems[0] || fridgeItems;
        const findItem = flattenedItems.find(item => item.productName === ingredient);
        if (findItem !== undefined && findItem !== null) {
            return (<span className="flag">Item in Fridge</span>
            )
        } else {
            return ('')
        }

    };


    return (
        <>
            {showPopup && (
                <div className="popup">
                    <p>Ingredients added to your grocery list!</p>
                </div>
            )}

            <div className="card">
                <h1>{singleRecipe.strMeal}</h1>
                <p><strong>Category:</strong> {singleRecipe.strCategory}</p>
                <p><strong>Area:</strong> {singleRecipe.strArea}</p>
                {singleRecipe.strMealThumb && <img src={singleRecipe.strMealThumb} alt={singleRecipe.strMeal} style={{ width: '300px' }} />}

                <h5>Instructions:</h5>
                <p>{singleRecipe.strInstructions}</p>
                <p><strong>Ingredients:</strong></p>

                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index}>{item.ingredient} - {item.measure}
                            {isItemInFridge(item.ingredient)}

                        </li>
                    ))}
                </ul>

                {user && <button onClick={() => addIngredients()}>Add Ingredients</button>
                }





            </div>
        </>
    );
};



export default RecipeCard;