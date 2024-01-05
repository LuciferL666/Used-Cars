const router = require("express").Router();

const userManager = require("../managers/userManager");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const user = await userManager.register(req.body);

    res.json({
      accessToken: "",
      email: user.email,
      _id: user._id,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Some error'
    })
    
  }
});

module.exports = router;
