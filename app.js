const express = require("express");
const { registerRouter } = require("./routes/registration.route");
const { billingRouter } = require("./routes/billing.route");

const app = express();

app.use(express.json());

// app.use("/billing", billingRouter);
app.use("/register", registerRouter);
app.use("/billing", billingRouter);

module.exports = { app };
