import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FridgelyApi from "../api/api";
import GroceryItemCard from "./GroceryItemCard";
import NotAuthorized from "../common/NotAuthorize";
import "./GroceryList.css"

const GroceryList =({groceryItems, updateGroceryItems, user, updateFridgeItems})=>{
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch grocery items when the component mounts
        async function fetchGroceryItems() {
            try {
                const groceryData = await FridgelyApi.getGroceryItems(user);
                if(groceryData.length > 0){
                    //Update grocery items state
                    updateGroceryItems(groceryData)
                }
                return

            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchGroceryItems();
    }, []);

    const handleCick = ()=>{
        navigate( `/groceries/${user}`)
    }


    return (
        <>
          {user ? (  groceryItems.length > 0 ? (
                <>
                    <GroceryItemCard groceryItems={groceryItems} user={user} updateGroceryItems={updateGroceryItems}  />
                </>
            ) : (
                <>
                    <div className="empty-grocery-list-container">
                        <p>Grocery List is Empty</p>
                       
                    </div>
                    <div className="item-buttons" >
                    <button onClick={handleCick}>Add an Item</button>
                    </div>
                      
                    
                </>
            )):(
                <NotAuthorized />
            )}
        </>
    );

};

export default GroceryList;