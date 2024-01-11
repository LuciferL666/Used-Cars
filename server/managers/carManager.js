const Car = require("../models/Car");

exports.getAll = async (qs) => {
    let query = Car.find();

    if(qs.where) {
        let [fieldName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('"', '')
        //query = query.find({_ownerId: ownerId});
        query = query.where('_ownerId').eq(ownerId);
    }

    const result = await query

    return result;
}

exports.getOne = (carId) => Car.findById(carId);

exports.create = (carData) => Car.create(carData);

exports.update = (carId, carData) => Car.findByIdAndUpdate(carId, carData);

exports.delete = (carId) => Car.findByIdAndDelete(carId);
