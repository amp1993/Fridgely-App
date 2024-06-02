import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FridgelyApi from "../api/api";
import FridgeItemCard from "./FridgeItemCard";
import NotAuthorized from "../common/NotAuthorize";
import "./FridgeList.css"


// FridgeList component to display fridge items or a message if the fridge is empty
const FridgeList = ({ fridgeItems, user, updateFridgeItems }) => {
    const navigate = useNavigate();


    useEffect(() => {
         // Fetch fridge items on component mount
        async function fetchFridgeItems() {
            try {
                const fridgeData = await FridgelyApi.getFridgeItems(user);
                // const data = fridgeData.items;
                if (fridgeData.length > 0) {
                    updateFridgeItems(fridgeData)

                }
                return
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchFridgeItems();
    }, []);
    // Navigate to the page for adding a new item to the fridge
    const handleCick = ()=>{
        navigate( `/fridge/${user}`)
    }

   

    return (
        <>
            {user ? (
                fridgeItems.length > 0 ? (
                    <>
                        <FridgeItemCard fridgeItems={fridgeItems} user={user} updateFridgeItems={updateFridgeItems} />
                    </>
                ) : (
                    // Display message and button if the fridge is empty

                    <>
                        <div className="empty-grocery-list-container">
                            <p>Fridge is Empty</p>
                        </div>
                   <div className="item-buttons">
                   <button onClick={handleCick}>Add an Item</button>
                   </div>
                           
                   
                    </>
                )
            ) : (
                // Display NotAuthorized component if the user is not authorized

                <NotAuthorized />)}
        </>
    );

};

export default FridgeList;