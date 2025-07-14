const express = require('express');
const Business = require('../models/business');
const router = express.Router();

// TEST ROUTE
router.get('/', (req, res) => {
    res.send('do I work?')
})

// NEW - FORM TO CREATE NEW BUSINESS
router.get("/new", (req, res) => {
  res.render("businesses/new.ejs");
});

// POST /BUSINESS
router.post('/', async(req, res) => {
    await Business.create(req.body)
    res.redirect('/businesses/new')
})


module.exports = router;