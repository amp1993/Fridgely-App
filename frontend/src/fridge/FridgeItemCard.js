import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FridgelyApi from "../api/api";
import "./FridgeItemCard.css"


// FridgeItemCard component to display, increase, decrease, and delete items in the fridge

const FridgeItemCard = ({ fridgeItems, user, updateFridgeItems }) => {
  const [sortedItems, setSortedItems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // Flatten the nested array of items
    const flattenedItems = fridgeItems[0];
    // Sort the flattened array by categoryName
    const sorted = flattenedItems.sort((a, b) => a.categoryName.localeCompare(b.categoryName));

    // Set the sorted items in state
    setSortedItems(sorted);
  }, [fridgeItems]);

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

    const currentItem = fridgeItems[0].find(item => item.productName === productName);
    if (!currentItem) {
      console.error("Item not found");
      return;
    }

    // Increment the quantity
    const newQuantity = parseInt(currentItem.quantityInFridge, 10) + 1;

    try {
      // Update the item in the backend
      await FridgelyApi.updateQtyFridgeItem({ quantityInFridge: newQuantity }, productName, user);

      // Update the state with the updated item
      const fetchUpdatedData = await FridgelyApi.getFridgeItems(user);
      updateFridgeItems(fetchUpdatedData);

    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Handle quantity decrease
  const handleDecrease = async (productName) => {

    const currentItem = fridgeItems[0].find(item => item.productName === productName);
    if (!currentItem) {
      console.error("Item not found");
      return;
    }
    // Decrement the quantity but ensure it doesn't go below 0

    const newQuantity = parseInt(Math.max(currentItem.quantityInFridge - 1, 0));
    try {
      await FridgelyApi.updateQtyFridgeItem({ quantityInFridge: newQuantity }, productName, user);
      const fetchUpdatedData = await FridgelyApi.getFridgeItems(user);
      updateFridgeItems(fetchUpdatedData);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Handle item deletion
  const handleDelete = async (productName) => {
    try {
      await FridgelyApi.removeItemFromFridge(productName, user);
      const fetchUpdatedData = await FridgelyApi.getFridgeItems(user);
      updateFridgeItems(fetchUpdatedData);

    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  // Navigate to new item form
  const addItem = () => {
    navigate(`/fridge/${user}`)
  }
  return (
    <div className="item-list-container">
      <button className="add-item-button" onClick={() => addItem()}>Add an Item</button>

      {Object.keys(groupedItems).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <ul className="item-list">
            {groupedItems[category].map(fridgeItem => (
              <li className="item-item" key={fridgeItem.id}>

                <p className="item-text"><strong>{fridgeItem.productName}</strong></p>
                <div className="item-buttons">
                  <button onClick={() => handleDecrease(fridgeItem.productName)}>←</button>
                  <p style={{ margin: '0 10px' }}>
                    {fridgeItem.quantityInFridge} {fridgeItem.unitOfMeasure}
                  </p>
                  <button onClick={() => handleIncrease(fridgeItem.productName)}>→</button>
                  <button className="delete-button" onClick={() => handleDelete(fridgeItem.productName)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
};

export default FridgeItemCard;
