/** Routes for authentication. */

const jsonschema = require("jsonschema");
const express = require("express");
const router = new express.Router();

const User = require("../models/user");
const { createToken } = require("../helpers/token");
const userAuthSchema = require("../schemas/userAuth.json");
const userRegisterSchema = require("../schemas/newUser.json");
const { BadRequestError } = require("../expressError");

/** 
 * POST /auth/token:  { username, password } => { token }
 *
 * This route allows a user to authenticate by providing their username and password.
 * If the credentials are correct, a JWT token is returned which can be used to 
 * authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/token", async function (req, res, next) {
  try {
    // Validate the request body against the user authentication schema
    const validator = jsonschema.validate(req.body, userAuthSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    // Extract username and password from request body

    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    // Create a JWT token for the user

    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

/** 
 * POST /auth/register:   { user } => { token }
 *
 * This route allows a new user to register by providing their details.
 * The request body must include { username, password, firstName, lastName, email }.
 * If the registration is successful, a JWT token is returned which can be used to 
 * authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/register", async function (req, res, next) {
  try {
    // Validate the request body against the user registration schema

    const validator = jsonschema.validate(req.body, userRegisterSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    // Register the new user

    const newUser = await User.register({ ...req.body, isAdmin: false });
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
