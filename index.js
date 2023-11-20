//import necessary modules
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');


// Create an instance of the Express application
const app = express();

// Route handler
app.get('/', (req, res) => {
    res.status(200).send({
        message: "server running"
    })
  })

  const port =8080;

  app.listen(port, () => {
    console.log(
      `Server Running in  Mode on port`
        .bgCyan.white
    );
  });