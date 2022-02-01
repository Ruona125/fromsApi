const express = require("express");
const { registerRouter } = require("./routes/registration.route");

const app = express();

app.use(express.json());

// app.use("/billing", billingRouter);
app.use("/register", registerRouter);

module.exports = { app };
