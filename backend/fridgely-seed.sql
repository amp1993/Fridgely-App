-- Ensure the user 'testuser' exists in the users table
INSERT INTO users (username, password, first_name, last_name, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'user@test.com',
        FALSE);
        
-- Insert an item into the items table
INSERT INTO items (
    product_name,
    category_name,
    unit_of_measure,
    username,
    in_grocery_list,
    quantity_in_grocery_list,
    in_fridge,
    quantity_in_fridge
)
VALUES (
    'Apple',
    'Fruits',
    'piece',
    'testuser',
    TRUE,
    10,
    FALSE,
    NULL
);
