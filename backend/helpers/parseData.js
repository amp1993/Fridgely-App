// Import commonGroceryItems from categories file
const commonGroceryItems = [
  {
    "productName": "Carrots",
    "categoryName": "Vegetables",
    "unitOfMeasure": "pcs"
  },
  {
    "productName": "Cheese",
    "categoryName": "Dairy",
    "unitOfMeasure": "kg"
  },
    {
      "productName": "Apple",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Banana",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Orange",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Strawberry",
      "categoryName": "Fruits",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Grapes",
      "categoryName": "Fruits",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Blueberry",
      "categoryName": "Fruits",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pineapple",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Watermelon",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Lemon",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Mango",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Carrot",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Broccoli",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Tomato",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Potato",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Onion",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Lettuce",
      "categoryName": "Vegetables",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Spinach",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cucumber",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bell Pepper",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Zucchini",
      "categoryName": "Vegetables",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Chicken Breast",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ground Beef",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pork Chops",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bacon",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sausage",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Turkey",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Salmon",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Tuna",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cod",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Shrimp",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Milk",
      "categoryName": "Dairy",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Cheddar Cheese",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Yogurt",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Butter",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Eggs",
      "categoryName": "Dairy",
      "unitOfMeasure": "dozen"
    },
    {
      "productName": "Bread",
      "categoryName": "Bakery",
      "unitOfMeasure": "loaf"
    },
    {
      "productName": "Bagels",
      "categoryName": "Bakery",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Croissant",
      "categoryName": "Bakery",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Muffin",
      "categoryName": "Bakery",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Pasta",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Rice",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Oatmeal",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Quinoa",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Lentils",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Black Beans",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Chickpeas",
      "categoryName": "Grains",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Olive Oil",
      "categoryName": "Oil",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Canola Oil",
      "categoryName": "Oil",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Salt",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Black Pepper",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Paprika",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cinnamon",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Garlic Powder",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Basil",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Oregano",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Tomato Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mayonnaise",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ketchup",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mustard",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Soy Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Honey",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Vinegar",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Peanut Butter",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Jam",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cereal",
      "categoryName": "Breakfast",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pancake Mix",
      "categoryName": "Breakfast",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Maple Syrup",
      "categoryName": "Breakfast",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Coffee",
      "categoryName": "Beverages",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Tea",
      "categoryName": "Beverages",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Orange Juice",
      "categoryName": "Beverages",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Apple Juice",
      "categoryName": "Beverages",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Soda",
      "categoryName": "Beverages",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Sparkling Water",
      "categoryName": "Beverages",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Chips",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Popcorn",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pretzels",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Chocolate",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cookies",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ice Cream",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Crackers",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Granola Bars",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Nuts",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Trail Mix",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ham",
      "categoryName": "Deli",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Turkey Breast",
      "categoryName": "Deli",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Salami",
      "categoryName": "Deli",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Provolone Cheese",
      "categoryName": "Deli",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Swiss Cheese",
      "categoryName": "Deli",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mozzarella Cheese",
      "categoryName": "Deli",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bagged Salad",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Baby Carrots",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Celery",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Green Beans",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cauliflower",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mushrooms",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Garlic",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ginger",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Avocado",
      "categoryName": "Produce",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Peach",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Plum",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Pear",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Kiwi",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Nectarine",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Coconut",
      "categoryName": "Fruits",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Almond Milk",
      "categoryName": "Dairy",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Soy Milk",
      "categoryName": "Dairy",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Cottage Cheese",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cream Cheese",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sour Cream",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Heavy Cream",
      "categoryName": "Dairy",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Beef Stew Meat",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Lamb Chops",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Duck",
      "categoryName": "Meat",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Crab",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Lobster",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Clams",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Scallops",
      "categoryName": "Fish",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Flour",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sugar",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Brown Sugar",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Baking Powder",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Baking Soda",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Vanilla Extract",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Yeast",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cornstarch",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cocoa Powder",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Powdered Sugar",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Condensed Milk",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Evaporated Milk",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pie Crust",
      "categoryName": "Baking",
      "unitOfMeasure": "pcs"
    },
    {
      "productName": "Pastry Dough",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Whipped Cream",
      "categoryName": "Dairy",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Basil",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Parsley",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cilantro",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mint",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Rosemary",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Thyme",
      "categoryName": "Produce",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Beef Jerky",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pistachios",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Coconut Water",
      "categoryName": "Beverages",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Almonds",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cashews",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Walnuts",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Hazelnuts",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Peanuts",
      "categoryName": "Snacks",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bread Crumbs",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Tomatoes",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Corn",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Green Beans",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Peas",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Tuna",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Chicken",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Soup",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Beans",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Fruit",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Pineapple",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Peaches",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Pears",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Cherries",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Cranberries",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Mushrooms",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Peppers",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Artichokes",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Spinach",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Asparagus",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Tomatoes (Diced)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Tomatoes (Whole)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Tomatoes (Crushed)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Beans (Black)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Beans (Kidney)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Beans (Pinto)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Beans (Navy)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Canned Beans (Chickpeas)",
      "categoryName": "Canned Goods",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ramen Noodles",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Spaghetti",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Macaroni",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Fettuccine",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Penne",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Linguine",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Lasagna Noodles",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Rotini",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Angel Hair Pasta",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Shells",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Rigatoni",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bow Ties",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Orzo",
      "categoryName": "Pasta",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Spaghetti Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Alfredo Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Marinara Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Pesto Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Salsa",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Guacamole",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Hummus",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "BBQ Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ketchup",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mustard",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mayonnaise",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ranch Dressing",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Caesar Dressing",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Italian Dressing",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "French Dressing",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Blue Cheese Dressing",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Thousand Island Dressing",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Honey",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Maple Syrup",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Soy Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Worcestershire Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Tabasco Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Sriracha Sauce",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Pickles",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Relish",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Olives",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Capers",
      "categoryName": "Condiments",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Apple Cider Vinegar",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Red Wine Vinegar",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Balsamic Vinegar",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "White Vinegar",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Rice Vinegar",
      "categoryName": "Condiments",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Taco Seasoning",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Chili Powder",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cumin",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Paprika",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cinnamon",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Nutmeg",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cloves",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Allspice",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Coriander",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Ginger",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Turmeric",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Garlic Powder",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Onion Powder",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Thyme",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Oregano",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Rosemary",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Basil",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bay Leaves",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Black Pepper",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "White Pepper",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Red Pepper Flakes",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sesame Seeds",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Fennel Seeds",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Fenugreek Seeds",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Mustard Seeds",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Celery Seeds",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Caraway Seeds",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cardamom",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cinnamon Sticks",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Star Anise",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Saffron",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Tarragon",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Dill",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Chives",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Parsley",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Savory",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sage",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Marjoram",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Herbes de Provence",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cajun Seasoning",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Italian Seasoning",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Chinese Five Spice",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Curry Powder",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Garam Masala",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Harissa",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Za'atar",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Adobo Seasoning",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Bouillon Cubes",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Salt",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sea Salt",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Kosher Salt",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Himalayan Pink Salt",
      "categoryName": "Spices",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Sugar",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Brown Sugar",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Powdered Sugar",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Honey",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Agave Syrup",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Corn Syrup",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Molasses",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Maple Syrup",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Baking Powder",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Baking Soda",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Cornstarch",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Yeast",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Gelatin",
      "categoryName": "Baking",
      "unitOfMeasure": "kg"
    },
    {
      "productName": "Vanilla Extract",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Almond Extract",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Lemon Extract",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Orange Extract",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    },
    {
      "productName": "Peppermint Extract",
      "categoryName": "Baking",
      "unitOfMeasure": "L"
    }]
// Define the default unit of measure if not present in the provided array
const defaultUnitOfMeasure = null;

// Array of valid unit of measures
const validUnitOfMeasures = [null, "kg", "g", "lb", "oz", "liter", "ml", "pint", "quart", "gallon", "dozen", "piece","tbs","tsp","cup","cloves"];

// Function to assign category based on product name
function assignCategory(ingredientName) {
    const item = commonGroceryItems.find(item => ingredientName.toLowerCase() === item.productName.toLowerCase());
    if (item) {
        return item.categoryName;
    } else {
        return "Misc";
    }
}

// Function to parse meal data and extract ingredients
function extractIngredients(data) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        const ingredient = data[ingredientKey];
        const measure = data[measureKey];

        // Skip if ingredient or measure is empty
        if (!ingredient) continue;

        // Determine quantity and unit of measure
        let quantity = 1;
        let unitOfMeasure = '';
        if (measure) {
            if (!isNaN(parseInt(measure))) {
                quantity = parseInt(measure);
                // Extract unit of measure from measure
                unitOfMeasure = measure.replace(quantity, '').trim();
                // Handle special case: 'pinch'
                if (unitOfMeasure.toLowerCase() === 'pinch') unitOfMeasure = null;
            } else {
                // No quantity provided
                unitOfMeasure = measure.trim();
            }
        }

        // If unitOfMeasure is not in the validUnitOfMeasures array, set it to the default
        // if (!validUnitOfMeasures.includes(unitOfMeasure)) {
        //     unitOfMeasure = defaultUnitOfMeasure;
        // }

        // Assign category based on ingredient name
        const categoryName = assignCategory(ingredient);

        // Create ingredient object
        const ingredientObject = {
            productName: ingredient,
            categoryName,
            quantity,
            unitOfMeasure
        };

        // Push ingredient object to array
        ingredients.push(ingredientObject);
    }
    // console.log(ingredients)
    return ingredients;
}

module.exports = { extractIngredients };
