const mongoose = require('mongoose');
const publisherschema = require('./publishers-model');

const gameschema = new mongoose.Schema({
    title:String,
    year:Number,
    rate:Number,
    price:Number,
    minPlayers:Number,
    maxPlayers:Number,
    publisher:[publisherschema],
    reviews:String,
    minAge:Number,
    designers:String

})

module.exports = mongoose.model("Game",gameschema);