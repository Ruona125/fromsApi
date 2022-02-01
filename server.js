const http = require("http");
const bodyParser = require("body-parser");

const { app } = require("./app");

const { billingRouter } = require("./routes/billing.route");
const { registerRouter } = require("./routes/registration.route");

const PORT = 3000;

const server = http.createServer(app);

// app.use("/", (req, res) => {
//   res.send("welcome");
// });
app.use(bodyParser.json());

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
