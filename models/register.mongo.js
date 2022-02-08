const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  contactPerson: {
    type: String,
    required: true,
  },
  BusinessName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

//connects registerSchema with the "registers" collection in the database
module.exports = mongoose.model("Register", registerSchema);
