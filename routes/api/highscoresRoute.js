const router = require("express").Router();
const db = require("../../models")
const checkAuth = require("../../middleware/checkAuth");

router.get("/all", (req, res, next) => {
  db.HighScore.find()
    .then(result => {
      console.log(result);
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
})

router.post("/new", checkAuth, (req, res, next) => {
  // console.log(req.user);
  // res.json(req.user)
  const newScore = new db.HighScore({
    score: req.body.score,
    userID: req.user.userID,
    username: req.user.username
  })

  newScore.save()
    .then(result => {
      console.log(result),
        res.status(201).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
})

module.exports = router;