const request = require("supertest");

const db = require("../db");
const app = require("../app");

const { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll, u1Token, u2Token } = require('../models/_testCommon');

beforeAll(async () => {
    await commonBeforeAll();
  }); 
  
  beforeEach(async () => {
    await commonBeforeEach();
  });
  
  afterEach(async () => {
    await commonAfterEach();
  });
  
  afterAll(async () => {
    await commonAfterAll();
  });
  

describe("GET /groceries", function () {
  
    test("get all items from groceries", async function () {
      const resp = await request(app)
          .get("/groceries/u1")
          .set("authorization", `Bearer ${u1Token}`);
      expect(resp.statusCode).toEqual(200);
    });

    test("unathorized non users", async function () {
        const resp = await request(app)
            .get("/groceries/u1")
            .set("authorization", `Bearer ${'token'}`);
        expect(resp.statusCode).toEqual(401);
      });


    test("get single groceries", async function () {
        const resp = await request(app)
            .get("/groceries/u1/strawberry")
            .set("authorization", `Bearer ${u1Token}`);
        expect(resp.statusCode).toEqual(200);
      });

      test("do not fetch item is wrong user", async function () {
        const resp = await request(app)
            .get("/groceries/u1/strawberry")
            .set("authorization", `Bearer ${'token'}`);
        expect(resp.statusCode).toEqual(401);
      });
})


describe("delete /groceries", function () {
  
    test("delete item", async function () {
      const resp = await request(app)
          .delete("/groceries/u1/strawberry")
          .set("authorization", `Bearer ${u1Token}`);
      expect(resp.statusCode).toEqual(200);
    });

    
    test("delete item", async function () {
        const resp = await request(app)
            .delete("/groceries/u1/strawberry")
            .set("authorization", `Bearer ${'token'}`);
        expect(resp.statusCode).toEqual(401);
      });
  

 
})