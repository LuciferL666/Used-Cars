const router = require("express").Router();

router.post('/register', () => {
    const {username, email, password} = req.body;

    res.end()
});

module.exports = router;
