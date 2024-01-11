const router = require("express").Router();

const carManager = require("../managers/carManager");

router.get("/", async (req, res) => {
  console.log(req.query);

  const cars = await carManager.getAll(req.query);

  res.json(cars);
});

router.post("/", async (req, res) => {
  try {
    await carManager.create({
      ...req.body,
      _ownerId: req.user._id,
    });

    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      message: err.message, //or 'Cannot create Car'
    });
  }
});

router.get("/:carId", async (req, res) => {
  const car = await carManager.getOne(req.params.carId);

  res.json(car);
});

router.put("/:carId", async (req, res) => {
  await carManager.update(req.params.carId, req.body);

  res.status(204).end();
});

router.delete("/:carId", async (req, res) => {
  await carManager.delete(req.params.carId);

  res.status(204).end();
});


module.exports = router;
