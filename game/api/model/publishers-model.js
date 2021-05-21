const mongoose = require('mongoose');

const coordinateschema = new mongoose.Schema({
    coordinates:[Number]
})

const publisherschema = new mongoose.Schema({
    name:String,
    location:coordinateschema
})

module.exports = publisherschema