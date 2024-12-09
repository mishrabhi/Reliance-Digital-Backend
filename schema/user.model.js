const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: String,
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
});

module.exports = userSchema;
