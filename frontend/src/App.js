import React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtDecode } from "jwt-decode";
import NavBar from "./routesAndNav/NavBar";
import RouteList from "./routesAndNav/RouteList";
import FridgelyApi from "./api/api";
import useLocalStorage from "./hooks/useLocalStorage";

import './App.css';

function App() {
  // State for user, recipes, and various app states
  const [user, setUser] = useLocalStorage(null);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [token, setToken] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [fridgeItems, setFridgeItems] = useState([])
  const [groceryItems, setGroceryItems] = useState([])
  const [showPopup, setShowPopup] = useState(false)





  /************ USER AUTH */

  // Register a new user
  const register = async (registerData) => {
    try {
      let createToken = await FridgelyApi.register(registerData);
      setToken(createToken);
      setUser(registerData.username)
      setUserLoggedIn(true)

    } catch (error) {
      alert(error)
    }
  };

  // Log in an existing user
  const logIn = async (loginData) => {
    try {
      const tokenData = await FridgelyApi.logIn(loginData);
      setToken(tokenData);
      const tokenDecoded = jwtDecode(tokenData);
      const username = tokenDecoded.username;
      setUser(username)
      setUserLoggedIn(true);
    } catch (error) {
      alert(error)
    }
  };
  // Log out the current user
  const logOut = () => {
    setToken(null)
    setUser(null)
    setUserLoggedIn(false)
    return <Navigate to='/' />
  };


 /******* FUNCTIONS FOR UPDATING STATE TO BE PASSED AS PROPS */

  // Update the state to show or hide popup
  const updateShowPopup =(res)=>{
    setShowPopup(res);
  };

  // Update fridge items state
  const updateFridgeItems =  (items) => {
    setFridgeItems([items])
  };


  const updateRecipes = (items) => {
    setRecipes(items)
  };

  // Update grocery items state
  const updateGroceryItems =  (items) => {
    setGroceryItems([items])
  };

 /******* FUNCTIONS USED BY COMPONENNTS */

  // Create a new fridge item
  const createFridgeItem = async (itemData) => {
    try {
      const res = await FridgelyApi.createFridgeItem(itemData, user);
     
    } catch (error) {
      console.error('Error creating fridge item:', error);
    }
  };

  // Create a new grocery item
  const createGroceryItem = async (itemData) => {
    try {
      await FridgelyApi.createGroceryItem(itemData, user);
   
    } catch (error) {
      console.error('Error creating grocery item:', error);
    }
  };

  // Perform search and update filtered recipes state
  const search = (searchData, path) => {
    const query = searchData.toLowerCase();


    const filtered = recipes.filter(recipe =>
      recipe.strMeal.toLowerCase().startsWith(query) ||
      recipe.strMeal.toLowerCase().endsWith(query) ||
      recipe.strCategory.toLowerCase().startsWith(query)
    );

    if (filtered.length === 0) {
      setFilteredRecipes('0 results');

    } else {
      setFilteredRecipes(filtered);
    }

  };


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar user={user} logOut={logOut}/>
          <RouteList user={user} search={search} updateRecipes={updateRecipes} recipes={recipes} filteredRecipes={filteredRecipes} register={register} logIn={logIn} logOut={logOut} fridgeItems={fridgeItems} createFridgeItem={createFridgeItem} updateFridgeItems={updateFridgeItems} groceryItems={groceryItems} updateGroceryItems={updateGroceryItems} createGroceryItem={createGroceryItem} updateShowPopup={updateShowPopup} showPopup={showPopup} userLoggedIn={userLoggedIn}/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
