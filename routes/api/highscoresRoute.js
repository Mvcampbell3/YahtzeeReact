const router = require("express").Router();
const db = require("../../models")
const checkAuth = require("../../middleware/checkAuth");

router.get("/all", (req, res, next) => {
  db.HighScore.find()
    .sort({score: -1})
    .then(result => {
      // console.log(result);
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
  console.log("got here")
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

router.get("/userscores", checkAuth, (req, res, next) => {
  db.HighScore.find({ userID: req.user.userID })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err))
})

router.delete("/delete/:scoreid", checkAuth, (req, res, next) => {
  const userID = req.user.userID;
  const scoreID = req.params.scoreid;
  db.HighScore.findById(scoreID)
    .then(score => {
      if (score.userID === userID) {
        score.remove()
          .then(deleted => res.status(200).json(deleted))
          .catch(err => res.status(500).json(err))
      } else {
        res.status(401).json("Unauthorized")
      }
    })
})

router.delete("/delallscores/special/all/delete", (req, res, next) => {
  db.HighScore.remove()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err))
})

module.exports = router;