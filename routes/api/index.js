const router = require("express").Router();
const userRoute = require("./userRoute");
const highscoresRoute = require("./highscoresRoute");

router.use("/user", userRoute);
router.use("/highscore", highscoresRoute)


module.exports = router;
