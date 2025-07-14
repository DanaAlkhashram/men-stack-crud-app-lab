// IMPORT THE MONGOOSE LIBRARY
const mongoose = require('mongoose')

// CREATE THE SCHEMA

const businessSchema = new mongoose.Schema(
    { //object
        name: String,
        description: String,
        category: String,
        phoneNumber: String,
    }
    , { //option
        timestamps: true
    }
)

// LINK THE SCHEMA TO A MODEL
const Business = mongoose.model('Business', businessSchema)

// EXPORT THE MODEL
module.exports = Business
