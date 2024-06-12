const Items = require("../models/items");

// Helper function to process ingredients
async function processIngredient(response, username) {
    // Arrays to store created items, items in fridge, and items in grocery list
    const itemsCreated = [];
    const itemsInFridge = [];
    const itemInGroceryList = [];

    // Map over the response and handle each item asynchronously
    const promises = response.map(async (item) => {
        const inGroceryList = true; // Set inGroceryList to true
        const inFridge = false; // Set inFridge to false

        // Check if the item already exists in the user's inventory
        const existingItem = await Items.findItem(item.productName, username);

        // If the item exists in the user's inventory
        if (existingItem) {
            // If the item is in the fridge, add it to the fridge array
            if (existingItem.inFridge === true) {
                itemsInFridge.push(existingItem);
            // If the item is in the grocery list, update its quantity
            } else if (existingItem.inGroceryList === true) {
                const updateQuantityInGroceryList = existingItem.quantityInGroceryList + item.quantity;
                const updatedItems = await Items.updateItem(item.productName, { quantityInGroceryList: updateQuantityInGroceryList }, username);
                itemInGroceryList.push(updatedItems);
            }
        } else {
            // If the item does not exist, create a new item
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

    // Wait for all asynchronous operations to complete
    await Promise.all(promises);

    // Return the results
    return { newItems: itemsCreated, updateItemsInGrocery: itemInGroceryList, itemsAlreadyInFridge: itemsInFridge };
}

module.exports = { processIngredient };
