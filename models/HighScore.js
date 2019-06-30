const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User")
const moment = require("moment")

const HighScoreSchema = new Schema({
  score: {
    type: Number,
    required: true
  },

  userID: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  date: {
    type: String,
  }
})

HighScoreSchema.pre("save", function(next) {
  // console.log(this);
  if (!this.date) {
    this.date = moment().format("LLL");
    next();
  } else {
    next()
  }
})

HighScoreSchema.post("save", function() {
  User.findByIdAndUpdate(this.userID, { $push: { highscores: this._id } }, { new: true })
    .then(result => {
      // console.log(result);
    })
    .catch(err => {
      // console.log(err);
    })
})

HighScoreSchema.pre("remove", { query: true }, function(next) {
  // console.log(this)
  User.findByIdAndUpdate(this.userID, { $pull: { highscores: this._id } }, { new: true })
    .then(result => {
      next()
    })
    .catch(err => {
      // console.log(err);
      next(err)
    })
})

module.exports = HighScore = mongoose.model("HighScore", HighScoreSchema)