const db = require("../db");
const bcrypt = require("bcrypt");
const {
    ExpressError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError } = require("../expressError");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Items {

    /**
    * Create new item from data
    * Return productName, category, quantity, unitOfMeasure.
    */


    static async create(data, username, inGroceryList, inFridge) {


        const result = await db.query(
            `INSERT INTO items (
                product_name, 
                category_name, 
                unit_of_measure,
                username,
                in_grocery_list,
                quantity_in_grocery_list, 
                in_fridge,
                quantity_in_fridge
            ) VALUES ($1,$2,$3,$4, $5, $6, $7, $8)
            RETURNING 
                product_name AS "productName",
                category_name AS "categoryName",
                unit_of_measure AS "unitOfMeasure",
                username,
                in_grocery_list AS "inGroceryList",
                quantity_in_grocery_list AS "quantityInGroceryList",
                in_fridge AS "inFridge",
                quantity_in_fridge AS "quantityInFridge"`,

            [data.productName,
            data.categoryName,
            data.unitOfMeasure,
                username,
                inGroceryList,
            data.quantityInGroceryList,
                inFridge,
            data.quantityInFridge]
        );

        const item = result.rows[0];
        return item;
    }
    /**
    * Find all items in fridge for a specific user
    * Return array of items
    */

    static async findAllInFridge(username) {
        const results = await db.query(
            `SELECT product_name AS "productName",
            category_name AS "categoryName",
            unit_of_measure AS "unitOfMeasure",
            username,
            in_grocery_list AS "inGroceryList",
            quantity_in_grocery_list AS "quantityInGroceryList",
            in_fridge AS "inFridge",
            quantity_in_fridge AS "quantityInFridge"
            FROM items
            WHERE username = $1 AND in_fridge = true
            ORDER BY product_name`, [username]);

        if (!results.rows)
            throw new BadRequestError(`There are no items.`)

        const items = results.rows;
        return items;

    }
    /**
 * Find all items in grocery list for a specific user
 * Return array of items
 */

    static async findAllInGroceryList(username) {
        const results = await db.query(
            `SELECT product_name AS "productName",
            category_name AS "categoryName",
            unit_of_measure AS "unitOfMeasure",
            username,
            in_grocery_list AS "inGroceryList",
            quantity_in_grocery_list AS "quantityInGroceryList",
            in_fridge AS "inFridge",
            quantity_in_fridge AS "quantityInFridge"
            FROM items
            WHERE username = $1 AND in_Grocery_List = true
            ORDER BY product_name`, [username]);

        if (!results.rows)
            throw new BadRequestError(`There are no items.`)

        const items = results.rows;
        return items;

    }
    /**
        * Find specific item by product name and username
        * Return item data
        */
    static async findItem(productName, username) {
        const result = await db.query(
            `SELECT 
                product_name AS "productName",
                category_name AS "categoryName",
                unit_of_measure AS "unitOfMeasure",
                username,
                in_grocery_list AS "inGroceryList",
                quantity_in_grocery_list AS "quantityInGroceryList",
                in_fridge AS "inFridge",
                quantity_in_fridge AS "quantityInFridge"
             FROM items
             WHERE product_name = $1 AND username = $2`,
            [productName, username]);

        const item = result.rows[0];


        return item;
    }
    /**
    * Find specific item in groceries by product name and username
    * Return item data
    */


    static async findItemInGroceries(productName, username) {
        const result = await db.query(
            `SELECT 
                product_name AS "productName"
             FROM items
             WHERE product_name ILIKE $1 AND username = $2 AND in_grocery_list=true`,
            [productName, username]);

        const item = result.rows[0];

        // if (!item) throw new NotFoundError(`Item not found.`);

        return item;
    }
    /**
      * Find specific item in fridge by product name and username
      * Return item data
      */
    static async findItemInFridge(productName, username) {
        const result = await db.query(
            `SELECT 
                product_name AS "productName"
             FROM items
             WHERE product_name ILIKE $1 AND username = $2 AND in_fridge=true`,
            [productName, username]);

        const item = result.rows[0];

        // if (!item) throw new NotFoundError(`Item not found.`);

        return item;
    }

    /**
    * Update specific item by product name and username
    * Return updated item data
    */
    static async updateItem(productName, data, username) {


        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
                productName: "product_name",
                categoryName: "category_name",
                unitOfMeasure: "unit_of_measure",
                inGroceryList: "in_grocery_list",
                quantityInGroceryList: "quantity_in_grocery_list",
                inFridge: "in_fridge",
                quantityInFridge: "quantity_in_fridge"
            });

        const itemVarIdx = "$" + (values.length + 1);
        const usernameVarIdx = "$" + (values.length + 2);

        const querySql = `UPDATE items 
                  SET ${setCols} 
                  WHERE product_name = ${itemVarIdx}
                  AND username = ${usernameVarIdx}
                  RETURNING 
                    id,
                    product_name AS "productName",
                    category_name AS "categoryName",
                    quantity_in_grocery_list AS "quantityInGroceryList",
                    unit_of_measure AS "unitOfMeasure",
                    username,
                    in_grocery_list AS "inGroceryList",
                    in_fridge AS "inFridge",
                    quantity_in_fridge AS "quantityInFridge"`;

        const result = await db.query(querySql, [...values, productName, username]);

        const item = result.rows[0];
        if (!item) throw new BadRequestError(`An error has occured.`);

        return item;
    };
    /**
   * Update quantity in grocery list for a specific item by product name
   * Return updated item data
   */
    static async updateQuantityInGroceryList(productName, quantity) {
        try {
            const result = await db.query(
                `UPDATE items
                 SET quantity_in_grocery_list = quantity_in_grocery_list + $1
                 WHERE product_name = $2;`, [quantity, productName]);

            return result.rows[0];
        } catch (error) {
            throw new BadRequestError(`Error updating quantity: ${error}`)

        }
    }
    /**
   * Update quantity in fridge for a specific item by product name
   * Return updated item data
   */
    static async updateQuantityInFridge(productName, quantity) {
        try {
            const result = await db.query(
                `UPDATE items
                 SET quantity_in_fridge = quantity_in_fridge + $1
                 WHERE product_name = $2;`, [quantity, productName]);

            return result.rows[0];
        } catch (error) {
            throw new BadRequestError(`Error updating quantity: ${error}`)
        }
    }


    /**
  * Remove specific item by product name and username
  * Return deleted item data
  */

    static async remove(productName, username) {
        // Perform the delete query and return the deleted item
        let result = await db.query(
            `DELETE
             FROM items
             WHERE product_name = $1 AND username = $2
             RETURNING product_name`,
            [productName, username],
        );

        // Check if any rows were returned, indicating a successful deletion
        const item = result.rows[0];

        if (!item) {
            // If no rows were returned, the item was not found
            throw new NotFoundError(`${productName} not found.`);
        }
    }

};

module.exports = Items;