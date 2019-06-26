const db = require("../models");

module.exports = () => {
  const promises = [
    db.User.remove(),
    db.HighScore.remove()
  ]
  Promise.all(promises)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err)
    })
}