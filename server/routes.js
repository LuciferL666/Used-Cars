const router = require('express').Router();

const userController = require('./controllers/userController');
const carController = require('./controllers/carController');

router.use('/users', userController);
router.use('/data/cars', carController);  //if start with data if not remove data!

module.exports = router;