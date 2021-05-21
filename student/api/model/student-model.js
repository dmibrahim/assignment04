const mongoose= require('mongoose');
const addressSchema = require('./address-model');

const studentSchema = new mongoose.Schema({
    name:String,
    gpa:Number,
    address:[addressSchema]
})
module.exports = mongoose.model('Student',studentSchema);