const http = require("http");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

MONGO_URL = process.env.MONGO_URL;

const { app } = require("./app");

const PORT = 3000;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
}

// app.use("/", (req, res) => {
//   res.send("welcome");
// });
app.use(bodyParser.json());

startServer();
