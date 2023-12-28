const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
