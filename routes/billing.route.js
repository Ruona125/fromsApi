const express = require("express");

const {
  getBilling,
  postBilling,
} = require("../controllers/billing.controllers");

const billingRouter = express.Router();

billingRouter.post("/", postBilling);
billingRouter.get("/", getBilling);

module.exports = {
  billingRouter,
};
