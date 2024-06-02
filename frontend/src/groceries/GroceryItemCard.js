import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FridgelyApi from "../api/api";
import "./GroceryItemCard.css"

const GroceryItemCard = ({ groceryItems, user, updateGroceryItems,  }) => {
  
  const navigate = useNavigate()
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    // Flatten the nested array of items
    const flattenedItems = groceryItems[0];
    // Sort the flattened array by categoryName
    const sorted = flattenedItems.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
    // Set the sorted items in state
    setSortedItems(sorted)
  }, [groceryItems]);



  // Group the sorted items by categoryName
  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.categoryName;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});


  // Handle quantity increase
  const handleIncrease = async (productName) => {
    // Find the current item
    const currentItem = groceryItems[0].find(item => item.productName === productName);
    if (!currentItem) {
      console.error("Item not found");
      return;
    }

    // Increment the quantity
    const newQuantity = parseInt(currentItem.quantityInGroceryList,10) + 1;

    try {
      // Update the item in the backend
      await FridgelyApi.updateQtyGroceryItem({ quantityInGroceryList: newQuantity }, productName, user);
      // Fetch updated data and update state
      const fetchUpdatedData = await FridgelyApi.getGroceryItems(user);
      updateGroceryItems(fetchUpdatedData);

      

    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Handle quantity decrease
  const handleDecrease = async (productName) => {
    // Find the current item
    const currentItem = groceryItems[0].find(item => item.productName === productName);
    if (!currentItem) {
      console.error("Item not found");
      return;
    }
    // Decrement the quantity but ensure it doesn't go below 0
    const newQuantity = parseInt(Math.max(currentItem.quantityInGroceryList - 1, 0));
    try {
      await FridgelyApi.updateQtyGroceryItem({ quantityInGroceryList: newQuantity }, productName, user);
      // Fetch updated data and update state
      const fetchUpdatedData = await FridgelyApi.getGroceryItems(user);
      updateGroceryItems(fetchUpdatedData);


    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Handle item deletion
  const handleDelete = async (productName) => {
    try {
      await FridgelyApi.removeItemFromGroceryList(productName, user);
      // Fetch updated data and update state
      const fetchUpdatedData = await FridgelyApi.getGroceryItems(user);
      updateGroceryItems(fetchUpdatedData);
      

    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Move item to fridge
  const moveToFridge = async (productName, quantity) =>{
    try{
      //Update grocery item and quantity to fridge
      await FridgelyApi.updateGroceryItem({quantityInFridge:quantity} ,productName,user);
      // Fetch updated grocery list data and update state
      const fetchUpdatedGroceryList = await FridgelyApi.getGroceryItems(user);

      updateGroceryItems(fetchUpdatedGroceryList);  
    } catch (error){
      console.error("Error deleting item:", error);

    }
  };
  // Navigate to new item form
  const addItem = ()=>{
    navigate(`/groceries/${user}`)
  }
  return (
    <div className="item-list-container">
          
        <button className="add-item-button" onClick={()=>addItem()}>Add an Item</button>

      {Object.keys(groupedItems).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="item-list">
            {groupedItems[category].map(groceryItem => (
              <li className="item-item" key={groceryItem.id}>
                <p className="item-text"><strong>{groceryItem.productName}</strong></p>
                <div className="item-buttons">
                  <button onClick={() => handleDecrease(groceryItem.productName)}>←</button>
                  <p style={{ margin: '0 10px' }}>
                  {groceryItem.quantityInGroceryList} {groceryItem.unitOfMeasure}
                </p>
                  <button onClick={() => handleIncrease(groceryItem.productName)}>→</button>
                  <button onClick={() => handleDelete(groceryItem.productName)}>Delete</button>
                  <button className="item-purchased-button" onClick={() => moveToFridge(groceryItem.productName, groceryItem.quantityInGroceryList)}>✓</button>
                </div>
               
              </li>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
  
  
  
};

export default GroceryItemCard;
