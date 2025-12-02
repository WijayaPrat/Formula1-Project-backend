const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  id: String,
  label: String,
  stock: { type: Number, default: 0 },
});

const productSchema = new mongoose.Schema(
  {
    title: String,
    vendor_type: String,
    team: String,
    price: Number,
    currency: String,
    images: [String],
    description: String,
    badges: [String],
    variants: [variantSchema],
  },
  {

    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
