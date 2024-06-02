import axios from "axios";

// Base URL for the API
const BASE_URL = process.env.REACT_APP_BASE_URL;

class FridgelyApi {

  // Generic method to make API requests
  static async request(endpoint, data = {}, method = 'get') {
    // Construct the full URL for the API endpoint

    const url = `${BASE_URL}/${endpoint}`;
    // Set the authorization header with the token
    const headers = { Authorization: `Bearer ${FridgelyApi.token}` };
    // Set parameters for GET requests, otherwise use data
    const params = (method === "get")
      ? data
      : {};

    try {
      // Make the API request and return the response data
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  /*****************  USER  */
  // Method to register a new user
  static async register(data) {
    let res = await this.request('auth/register', data, 'post');
    return res.token;
  };

  // Method for user login
  static async logIn(data) {
    let res = await this.request('auth/token', data, 'post');
    return res.token;
  }
  /*****************  RECIPES  */

  // Method to get a recipe by its ID
  static async getRecipe(id) {
    let res = await this.request(`recipes/${id}`);
    return res.meals[0];
  };

  /*****************  FRIDGE  */

  // Method to create a new fridge item

  static async createFridgeItem(data, username) {

    let res = await this.request(`fridge/${username}`, data, 'post');
    return res;

  };

  // Method to find an item in the fridge
  static async findFridgeItem(productName, username) {

    let res = await this.request(`fridge/${username}/${productName}`);
    if (res !== 'Item not found.') {
      console.log('res', res.item.productName)
      return res.item.productName

    } else {
      return null
    }

  };
  // Method to remove an item from the fridge
  static async removeItemFromFridge(productName, username) {
    console.debug("Removing item from fridge:", productName, username);

    const url = `${BASE_URL}/fridge/${username}/${productName}`;
    const headers = { Authorization: `Bearer ${FridgelyApi.token}` };

    try {
      const response = await axios.delete(url, { headers });
      return response.data;
    } catch (err) {
      console.error("Error removing item:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  // Method to get all fridge items for a user

  static async getFridgeItems(username) {
    let res = await this.request(`fridge/${username}`);
    return res.items;
  }

  // Method to update a fridge item

  static async updateFridgeItem(data, productName, username) {
    const response = await this.request(`fridge/${username}/${productName}`, data, 'patch');
    return response;
  }
  // Method to update the quantity of a fridge item

  static async updateQtyFridgeItem(data, productName, username) {
    const response = await this.request(`fridge/${username}/${productName}`, data, 'patch');
    return response;
  }
  /*****************  GROCERIES  */


  // Method to get all grocery items for a user

  static async getGroceryItems(username) {
    let res = await this.request(`groceries/${username}`);
    return res.items;
  }
  // Method to find an item in the grocery list

  static async findGroceryItem(productName, username) {
    let res = await this.request(`groceries/${username}/${productName}`);
    console.log('res', res)
    if (res !== 'Item not found.') {
      console.log('res', res.item.productName)
      return res.item.productName

    } else {
      return null
    }

  };
  // Method to create a new grocery item

  static async createGroceryItem(data, username) {
    console.log('api', data)

    let res = await this.request(`groceries/${username}`, data, 'post');
    return res;

  };

  // Method to update a grocery item

  static async updateGroceryItem(data, productName, username) {
    const response = await this.request(`groceries/${username}/${productName}`, data, 'patch');
    return response;
  }
  // Method to update the quantity of a grocery item

  static async updateQtyGroceryItem(data, productName, username) {
    const response = await this.request(`groceries/${username}/${productName}/update-quantity`, data, 'patch');
    return response;
  }

  // Method to remove an item from the grocery list

  static async removeItemFromGroceryList(productName, username) {
    console.debug("Removing item from fridge:", productName, username);

    const url = `${BASE_URL}/groceries/${username}/${productName}`;
    const headers = { Authorization: `Bearer ${FridgelyApi.token}` };

    try {
      const response = await axios.delete(url, { headers });
      return response.data;
    } catch (err) {
      console.error("Error removing item:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  // Method to add ingredients to the grocery list based on a recipe ID

  static async addItemToGroceryList(id, username) {

    const url = `${BASE_URL}/recipes/${id}/${username}/add-ingredients`;
    const headers = { Authorization: `Bearer ${FridgelyApi.token}` };

    try {
      const response = await axios.post(url, { headers });
      return response.data;
    } catch (err) {
      console.error("Error Adding Ingredients:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }


  }
};

FridgelyApi.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTYyNTE2Njl9.fANi8nyA9O_CEXh27SqUvj5EAq9MV8NHux0uQdXknhg'

export default FridgelyApi;
