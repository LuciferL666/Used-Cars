const router = require("express").Router();

const carManager = require('../managers/carManager');

router.post('/', async (req, res) => {
    try {
        await carManager.create(req.body);
        res.status(204).end();
    } catch(err) {
        res.status(400).json({
            message: err.message //or 'Cannot create Car'
        });
    }


})

module.exports = router;
