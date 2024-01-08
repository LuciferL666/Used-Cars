const Car = require('../models/Car');

exports.getAll = () => Car.find();

exports.getOne = (carId) => Car.findById(carId)

exports.create = (carData) => Car.create(carData)