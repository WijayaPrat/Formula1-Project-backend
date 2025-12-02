const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("Jumlah produk dari DB:", products.length);
    res.json(products);
  } catch (err) {
    console.error("Error getProducts:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProducts };


