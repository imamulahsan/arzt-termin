//import necessary modules
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

// Create an instance of the Express application
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// Route handler
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(`Server Running on port ${process.env.PORT}`.bgCyan.white);
});
