const mongoose = require('mongoose');
require("dotenv").config();
const uri = process.env.mongo_URL;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to database');
    // Start your application logic here
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
  });
