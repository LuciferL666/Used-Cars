const Car = require("../models/Car");

exports.getAll = async (querystring) => {

    if(querystring.where) {
        const [fieldName, ownerId] = querystring.where.split('=');
        ownerId = ownerId.replaceAll('"', '')
    }

    const result = await Car.find();

    return result;
}

exports.getOne = (carId) => Car.findById(carId);

exports.create = (carData) => Car.create(carData);

exports.update = (carId, carData) => Car.findByIdAndUpdate(carId, carData);

exports.delete = (carId) => Car.findByIdAndDelete(carId);
