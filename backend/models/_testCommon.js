const bcrypt = require("bcrypt");
const db = require("../db.js");
const User = require("../models/user");
const Items = require("../models/items");
const { createToken } = require("../helpers/token.js");

async function commonBeforeAll() {
  try {
    // Delete items first to avoid foreign key constraint violations
    await db.query("DELETE FROM items");
    await db.query("DELETE FROM users");

    await User.register({
      username: "u1",
      password: "password1",
      firstName: "U1F",
      lastName: "U1L",
      email: "user1@user.com",
      isAdmin: false,
    });
    await User.register({
      username: "u2",
      password: "password2",
      firstName: "U2F",
      lastName: "U2L",
      email: "user2@user.com",
      isAdmin: true,
    });
    await User.register({
      username: "u3",
      password: "password3",
      firstName: "U3F",
      lastName: "U3L",
      email: "user3@user.com",
      isAdmin: false,
    });

    await Items.create({
      productName: "strawberry",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInGroceryList: 3,
      quantityInFridge: 0

    }, "u1", true, false);

    await Items.create({
      productName: "grape",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInFridge: 1,
      quantityInGroceryList: 3
    }, "u1", true, true);

    await Items.create({
      productName: "apple",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInGroceryList: 0,
      quantityInFridge: 1
    }, "u2", false, true);

  } catch (err) {
    console.error("Error in commonBeforeAll:", err);
    throw err;
  }
}

async function commonBeforeEach() {
  try {
    await db.query("BEGIN");
  } catch (err) {
    console.error("Error in commonBeforeEach:", err);
    throw err;
  }
}

async function commonAfterEach() {
  try {
    await db.query("ROLLBACK");
  } catch (err) {
    console.error("Error in commonAfterEach:", err);
    throw err;
  }
}

async function commonAfterAll() {
  try {
    await db.end();
  } catch (err) {
    console.error("Error in commonAfterAll:", err);
    throw err;
  }
}

const u1Token = createToken({ username: "u1", isAdmin: false });
const u2Token = createToken({ username: "u2", isAdmin: true });

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  u2Token,
};
