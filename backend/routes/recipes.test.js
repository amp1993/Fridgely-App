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
  
describe("GET /recipes", function () {
  
    test("get recipes", async function () {
        const resp = await request(app)
            .get("/recipes")
        expect(resp.statusCode).toEqual(200);
      });

        
    test("get single recipe", async function () {
        const resp = await request(app)
            .get("/recipes/52977")
        expect(resp.statusCode).toEqual(200);
      });


    test("add ingredients to grocery list", async function () {
      const resp = await request(app)
          .post("/recipes/52977/u1/add-ingredients")
          .set("authorization", `Bearer ${u1Token}`);
      expect(resp.statusCode).toEqual(200);
    });

    test("add ingredients to grocery list", async function () {
        const resp = await request(app)
            .post("/recipes/52977/u1/add-ingredients")
            .set("authorization", `Bearer ${u1Token}`);
        expect(resp.statusCode).toEqual(200);
        expect(resp.text).toContain('Grains');

      });

})
  