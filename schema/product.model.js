const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: [
      "Electronics",
      "Home Appliances",
      "Kitchen Appliances",
      "Perosnal Care",
    ],
    required: true,
  },
  brand: String,
  price: {
    type: Number,
    required: true,
  },
  images: String,
  discount: String,
  stock: Number,
});

module.exports = productSchema;
