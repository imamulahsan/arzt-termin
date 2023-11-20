//import necessary modules
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require("./config/db");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();


// Create an instance of the Express application
const app = express();

// Route handler
app.get('/', (req, res) => {
    res.status(200).send({
        message: "server running"
    })
  })

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running on port ${process.env.PORT}`
      .bgCyan.white
  );
});