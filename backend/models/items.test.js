"use strict";

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");
const db = require("../db.js");
const Items = require("./items.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** authenticate */

describe("create item", function () {
  test("works", async function () {
    const newItem = {
      productName: "cherry",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInFridge: 0,
      quantityInGroceryList: 3
    };
    const inGroceryList = true;
    const inFridge = false;
    
    const item = await Items.create(newItem, "u1", inGroceryList, inFridge);

    expect(item).toEqual({
      productName: "cherry",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInFridge: 0,
      quantityInGroceryList: 3,
      username: "u1",
      inGroceryList: true,
      inFridge: false
    });
  });
});

describe("find single item", function () {
  test("works", async function () {
    const item = await Items.findItem("strawberry", "u1");

    expect(item).toEqual({
      productName: "strawberry",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInGroceryList: 3,
      quantityInFridge: 0,
      username: "u1",
      inGroceryList: true,
      inFridge: false
    });
  });
});

describe("find items in fridge", function () {
  test("find all items in fridge", async function () {
    const items = await Items.findAllInFridge("u1");

    expect(items).toEqual([{
      productName: "grape",
      categoryName: "Fruits",
      unitOfMeasure: null,
      quantityInFridge: 1,
      quantityInGroceryList: 3,
      username: "u1",
      inGroceryList: true,
      inFridge: true
    }]);
  });

  test("find single item in fridge", async function () {
    const item = await Items.findItemInFridge("grape", "u1");

    expect(item).toEqual({
      productName: "grape"
    });
  });
});

describe("find items in grocery list", function () {
  test("find all items in grocery", async function () {
    const items = await Items.findAllInGroceryList("u1");

    expect(items).toEqual([
      {
        productName: "grape",
        categoryName: "Fruits",
        unitOfMeasure: null,
        quantityInFridge: 1,
        quantityInGroceryList: 3,
        username: "u1",
        inGroceryList: true,
        inFridge: true
      },
      {
        productName: "strawberry",
        categoryName: "Fruits",
        unitOfMeasure: null,
        quantityInFridge: 0,
        quantityInGroceryList: 3,
        username: "u1",
        inGroceryList: true,
        inFridge: false
      }
    ]);
  });

  test("find single item", async function () {
    const item = await Items.findItemInGroceries("strawberry", "u1");

    expect(item).toEqual({
      productName: "strawberry"
    });
  });
});


describe("find items in grocery list", function () {
  test("find all items in grocery", async function () {
    const items = await Items.findAllInGroceryList("u1");

    expect(items).toEqual([
      {
        productName: "grape",
        categoryName: "Fruits",
        unitOfMeasure: null,
        quantityInFridge: 1,
        quantityInGroceryList: 3,
        username: "u1",
        inGroceryList: true,
        inFridge: true
      },
      {
        productName: "strawberry",
        categoryName: "Fruits",
        unitOfMeasure: null,
        quantityInFridge: 0,
        quantityInGroceryList: 3,
        username: "u1",
        inGroceryList: true,
        inFridge: false
      }
    ]);
  });


});


