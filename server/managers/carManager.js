const Car = require("../models/Car");

exports.getAll = (query) => {
    Car.find();
}

exports.getOne = (carId) => Car.findById(carId);

exports.create = (carData) => Car.create(carData);

exports.update = (carId, carData) => Car.findByIdAndUpdate(carId, carData);

exports.delete = (carId) => Car.findByIdAndDelete(carId);
