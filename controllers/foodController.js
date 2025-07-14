const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// ALL ROUTES IN THIS FILE HAS /Foods " / "

// TEST ROUTE
router.get('/', (req, res) => {
  res.send('do I work?')
})

// NEW - FORM TO CREATE NEW FOOD
router.get("/new", (req, res) => {
  res.render('foodsViews/new.ejs');
});

// POST /BUSINESS
router.post('/', async (req, res) => {

  if (req.body.isVegetarian === 'on') {
    req.body.isVegetarian = true;
  } else {
    req.body.isVegetarian = false;
  }
  console.log(req.body);

  // TO ADD NEW DATA TO DATABASE
  await Food.create(req.body)

  // TO REDIRCT THE SER BACK TO THE FORM PAGE
  res.redirect('/foods')

});

module.exports = router;