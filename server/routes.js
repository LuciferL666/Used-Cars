
const express = require('express');
const router = express.Router();
const Car = require('./models/Car'); // Предполагаме, че имате модел Car

router.post('/cars', async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create car.' });
  }
});

module.exports = router;
