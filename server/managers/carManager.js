const Car = require('../models/Car');

exports.getAll = () => Car.find();

exports.create = (carData) => Car.create(carData)