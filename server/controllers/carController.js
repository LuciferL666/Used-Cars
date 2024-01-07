const router = require("express").Router();

const carManager = require('../managers/carManager');

router.post('/', async (req, res) => {
    const car = await carManager.create(req.body);

    
})

module.exports = router;
