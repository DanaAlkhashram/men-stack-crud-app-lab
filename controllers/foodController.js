const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// All routes in this file are prefixed with /foods (set in server.js)

router.get('/', async (req, res) => {
  const allFoods = await Food.find();
  res.render('foods/index.ejs', { allFoods: allFoods })
})

// NEW - FORM TO CREATE NEW FOOD
router.get('/new', (req, res) => {
  res.render('foods/new.ejs');
});

// POST form data to database 
router.post('/', async (req, res) => {
  console.log(req.body);

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

// SHOW ONE foods /:foodId
router.get('/:foodId', async (req, res) => {
  const foundFood = await Food.findById(req.params.foodId)
  res.render('foods/show.ejs', { foundFood: foundFood })
})

// DELETE
router.delete('/:foodId', async (req, res) => {
  await Food.findByIdAndDelete(req.params.foodId)
  res.redirect('/foods')
})

// GET /foods/:foodId/EDIT
router.get('/:foodId/edit', async (req, res) => {
  const foundFood = await Food.findById(req.params.foodId);
  res.render('foods/edit.ejs', { foundFood: foundFood });
})

// PUT FOR SUBMITTING THE FORM
router.put('/:foodId', async (req, res) => {
  if (req.body.isVegetarian === 'on') {
    req.body.isVegetarian = true;
  } else {
    req.body.isVegetarian = false;
  } 
  await Food.findByIdAndUpdate(req.params.foodId, req.body)
  res.redirect(`/foods/${req.params.foodId}`)
})


module.exports = router;