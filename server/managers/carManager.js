const Car = require("../models/Car");

exports.getAll = async (query) => {
    const where = query.where;

    if(where) {
        const [fieldName, ownerId] = where.split('=');
        ownerId = ownerId.replaceAll('"', '')
    }

    const result = await Car.find();

    return result;
}

exports.getOne = (carId) => Car.findById(carId);

exports.create = (carData) => Car.create(carData);

exports.update = (carId, carData) => Car.findByIdAndUpdate(carId, carData);

exports.delete = (carId) => Car.findByIdAndDelete(carId);
