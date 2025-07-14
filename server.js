const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require("mongoose"); // require package
const path = require('path')

const app = express();

// CONTROLLER FOR FOOD ROUTES
const foodController = require('./controllers/foodController');

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

// STATIC FILES FOR CSS/IMG
app.use(express.static(path.join(__dirname, 'public')));

// MONODB CONECTION USING .ENV FILE
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// TEST ROUTE
app.get('/test',(req, res)=>{
  res.send('work');
});

// GET /HOMEPAGE
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

// USE FOOD ROUTES
app.use("/foods", foodController);

// LIVE ON PORT 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

