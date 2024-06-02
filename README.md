# Fridgely App

"Fridgely" is a comprehensive grocery list, fridge inventory tracker, and recipe finder app. Users can create items for their grocery list or add ingredients from a recipe to their grocery list. Items in the grocery list can then be moved to their virtual fridge to easily manage purchased items.

[Link to deployed app](https://fridgely-app-frontend.onrender.com/)

## Setup Instructions:

1. **Create the Database:**
    - Create a database called `fridgely`.
    - Run the `fridgely.sql` file provided in the backend folder to create the `users` and `items` tables and seed the data.
    - Alternatively, you can navigate to your database using `psql fridgely` and copy-paste the SQL script from `fridgely-schema.sql` to create the tables. To seed the data, use the command `\i fridgely-seed.sql` after the tables have been created.

2. **Install Dependencies:**
    - Clone the repository and navigate to it in your terminal.
    - Navigate to the backend folder and run `npm install` to install backend dependencies.
    - Navigate to the frontend folder and run `npm install` to install frontend dependencies.

3. **Run the Application:**
    - Navigate to the backend folder and run `npm start` to start the backend server.
    - Navigate to the frontend folder and run `npm start` to start the frontend server.

4. **Using Fridgely:**
    - Once both the backend and frontend servers are running, you can start using Fridgely.
    - You can browse recipes without creating an account, but to access the "Fridge" and "Grocery List" features, you will need to create an account or log in.

## App Features
- **User Authentication:** The app supports user signup, login, and logout functionalities. User data is securely stored and managed.
- **Create an Item:** Ability to create an item in the grocery list or/and fridge.
- **Browse Recipes:** Ability to browse recipes and view details.
- **Add Ingredients from Recipes:** Ability to add ingredients from recipes to the grocery list.
- **Move Items to Fridge:** Ability to move items from the grocery list to the fridge.

## Technologies Used
- **MealDB API:** Used for fetching multiple recipes and recipe details. [Link to API](https://www.themealdb.com/api.php)
- **PostgreSQL:** For database management.
- **Node.js:** For backend server.
- **CSS:** For styling the frontend.
- **React:** For building the user interface.

