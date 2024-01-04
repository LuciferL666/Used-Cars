const router = require("express").Router();

const userManager = require("../managers/userManager");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const user = await userManager.register(req.body);

    res.json({
      email: "",
      authToken: "",
      userId: "",
    });
  } catch (err) {
    //2ЧАСА И 2 МИН ОСТАВАТ
    
  }
});

module.exports = router;
