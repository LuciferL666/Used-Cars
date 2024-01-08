const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    fuel:{
        type: String,
        required: true
    },
    transmission:{
        type: String,
        required: true
    },
    performance:{
        type: String,
        required: true
    },
    kilometers:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
