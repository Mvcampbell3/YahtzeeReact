const db = require("../models")

module.exports = () => {
  const newUser = new db.User({
    username: "thisisjustatest",
    email: "testagain@test.com",
    password: "whatwhat"
  })
  newUser.save()
    .then(result => {
      console.log(result._id);
      const newScore1 = new db.HighScore({
        score: "300",
        userID: result._id,
        username: result.username
      });
      const newScore2 = new db.HighScore({
        score: "200",
        userID: result._id,
        username: result.username
      });
      const newScore3 = new db.HighScore({
        score: "100",
        userID: result._id,
        username: result.username
      })
      const promises = [
        newScore1.save(),
        newScore2.save(),
        newScore3.save()
      ];

      Promise.all(promises)
        .then(main => {
          console.log(main);
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
}