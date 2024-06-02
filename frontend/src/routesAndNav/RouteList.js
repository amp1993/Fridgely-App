import React from "react";
import { Routes, Route } from "react-router-dom";

import PageNotFound from "../common/PageNotFound";
import Homepage from "../homepage/Homepage";
import LogIn from "../user/LogIn";
import Register from "../user/Register";
import RecipeList from "../recipes/RecipeList";
import GroceryList from "../groceries/GroceryList";
import FridgeList from "../fridge/FridgeList";
import RecipeCard from "../recipes/RecipeCard";
import Profile from "../user/Profile";
import NewFridgeItem from "../fridge/NewFridgeItem";
import NewGroceryItem from "../groceries/NewGroceryItem";


const RouteList = ({user, register, search, updateRecipes, recipes, filteredRecipes, fridgeItems, logIn, logOut, createFridgeItem, updateFridgeItems, groceryItems, updateGroceryItems, createGroceryItem, updateShowPopup, showPopup, userLoggedIn}) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage user={user} register={register} logOut={logOut}/>} />
                <Route path='/profile' element={<Profile user={user}/>} />
                <Route path='/login' element={<LogIn logIn={logIn} />} />
                <Route path='/register' element={<Register register={register} fridgeItems={fridgeItems}/>} />
                <Route path='/recipes' element={<RecipeList search={search} updateRecipes={updateRecipes} recipes={recipes} filteredRecipes={filteredRecipes} updateFridgeItems={updateFridgeItems} user={user} fridgeItems={fridgeItems}/>} />
                <Route path='/recipes/:id' element={<RecipeCard recipes={recipes} updateRecipes={updateRecipes} user={user}  fridgeItems={fridgeItems} updateFridgeItems={updateFridgeItems} updateShowPopup={updateShowPopup} showPopup={showPopup} userLoggedIn={userLoggedIn}/>} />
                
                <Route path='/groceries' element={<GroceryList groceryItems={groceryItems}  user={user} updateGroceryItems={updateGroceryItems} updateFridgeItems={updateFridgeItems}/>} />
                <Route path='/groceries/:username' element={<NewGroceryItem createGroceryItem={createGroceryItem} user={user} updateGroceryItems={updateGroceryItems} showPopup={showPopup} updateShowPopup={updateShowPopup} groceryItems={groceryItems} userLoggedIn={userLoggedIn}/>} />
                <Route path='/fridge' element={<FridgeList user={user} fridgeItems={fridgeItems} updateFridgeItems={updateFridgeItems}/>} />
                <Route path='/fridge/:username' element={<NewFridgeItem createFridgeItem={createFridgeItem} user={user} userLoggedIn={userLoggedIn} updateShowPopup={updateShowPopup} showPopup={showPopup}/>} />
                <Route path='*' element={<PageNotFound />} />

            </Routes>
        </>
    )
};

export default RouteList;