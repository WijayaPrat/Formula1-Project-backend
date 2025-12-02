const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();                

const connectDB = require("./config/db");  
connectDB();                    

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("ini Backend Formula1 aku APInya berjalan");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
