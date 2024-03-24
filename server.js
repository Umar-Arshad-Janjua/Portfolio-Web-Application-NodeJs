const express = require('express')
const app = express()
const dbconnection = require('./config/dbconnection')
const portfolioRoute = require('./routes/portfolioRoutes')
app.use(express.json())
app.use('/api/portfolio', portfolioRoute )
const PORT = process.env.PORT || 5000
require("dotenv").config()
const path = require('path')


app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})