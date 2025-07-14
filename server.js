const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require("mongoose"); // require package
const app = express();

const businessesController = require('./controllers/businessController');

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

const path = require('path')

// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// TEST ROUTE
app.get('/test',(req, res)=>{
  res.send('work');
});

// GET 
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

// ROUTES
app.use("/businesses", businessesController);

// LIVE 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

