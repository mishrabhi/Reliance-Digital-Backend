const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
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
        "Personal Care",
      ],
      required: true,
    },
    brand: String,
    price: {
      type: Number,
      required: true,
    },
    images: [{ type: String }], //Array of image urls
    discount: String,
    stock: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
