/** Routes for users. */

const jsonschema = require("jsonschema");
const express = require("express");

const { ensureLoggedIn, ensureAdmin, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const { createToken } = require("../helpers/token");
const userNewSchema = require("../schemas/newUser.json");
const userUpdateSchema = require("../schemas/userUpdate.json");

const router = express.Router();


/** 
 * Adds a new user. This is not the registration endpoint --- instead, this is
 * only for admin users to add new users. The new user being added can be an
 * admin.
 * Authorization required: correct user, admin
 **/

router.post("/", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.register(req.body);
    const token = createToken(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    return next(err);
  }
});


/** 
 * Returns { username, firstName, lastName, isAdmin }
 * Authorization required: correct user, admin
 **/

router.get("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
    try {
      const user = await User.findUser(req.params.username);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  });
  
  
/** 

 * Returns { username, firstName, lastName, email, isAdmin }
 * Authorization required: correct user, admin
 **/

router.patch("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.update(req.params.username, req.body);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});


/** 
 *
 * Authorization required: correct user, admin
 **/

router.delete("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    await User.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
