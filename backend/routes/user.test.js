"use strict";

const request = require("supertest");

const db = require("../db");
const app = require("../app");
const User = require("../models/user");

const { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll, u1Token, u2Token } = require('../models/_testCommon');

beforeAll(async () => {
  await commonBeforeAll();
}, 10000); 

beforeEach(async () => {
  await commonBeforeEach();
}, 50000);

afterEach(async () => {
  await commonAfterEach();
}, 50000);

afterAll(async () => {
  await commonAfterAll();
}, 50000);


/************************************** POST /users */

describe("POST /users", function () {
  
  test("registration for users works", async function () {
    const resp = await request(app)
        .post("/users")
        .send({
          username: "u-new",
          firstName: "First-new",
          lastName: "Last-newL",
          password: "password-new",
          email: "new@email.com",
          isAdmin: false,
        })
    expect(resp.statusCode).toEqual(201);
  });

  test("bad request if missing data", async function () {
    const resp = await request(app)
        .post("/users")
        .send({
          username: "u1",
          password:"test-password"

        })
    expect(resp.statusCode).toEqual(400);
  });
}, 10000);

/************************************** GET /users */

describe("GET /user", function () {
  test("works for authorized users", async function () {
    const resp = await request(app)
        .get("/users/u1")
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.body).toEqual({
      user: 
        {
          username: "u1",
          firstName: "U1F",
          lastName: "U1L",
          email: "user1@user.com",
          isAdmin: false,
        }
      ,
    });

  });

  test("does not work for unathorized users", async function () {
    const resp = await request(app)
        .get("/users/u1")
        .set("authorization", `Bearer ${'token'}`);
        expect(resp.statusCode).toEqual(401);


  });
})
