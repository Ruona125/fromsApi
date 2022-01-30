const express = require("express");

const {
  postRegisters,
  getRegisters,
} = require("../controllers/registration.controllers");

const registerRouter = express.Router();

registerRouter.post("/", postRegisters);
registerRouter.get("/", getRegisters);

module.exports = {
  registerRouter,
};
