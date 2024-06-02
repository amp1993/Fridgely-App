

CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL  
        CHECK (position('@' IN email) > 1),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);



CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL, 
    category_name VARCHAR(50),
    unit_of_measure TEXT,
    username VARCHAR(25) REFERENCES users(username),
    in_grocery_list BOOLEAN,
    quantity_in_grocery_list INT,
    in_fridge BOOLEAN,
    quantity_in_fridge INT
);


