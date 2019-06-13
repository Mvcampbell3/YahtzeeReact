const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User")

const HighScoreSchema = new Schema({
  score: {
    type: String,
    required: true
  },

  userID: {
    type: String,
    required: true
  },

  date: {
    type: Date,
  }
})

HighScoreSchema.pre("save", function(next) {
  console.log(this);
  if (!this.date) {
    this.date = new Date();
    next();
  } else {
    next()
  }
})

HighScoreSchema.post("save", function(next){
  User.findByIdAndUpdate(this.userID, {$push: {highscores:this._id}}, {new: true})
    .then(result => {
      console.log(result);
      next()
    })
    .catch(err => {
      console.log(err);
      next(err);
    })
})

HighScoreSchema.pre("remove", { query: true }, function(next) {
  console.log(this)
  User.findByIdAndUpdate(this.userID, { $pull: { highscores: this._id } }, { new: true })
    .then(result => {
      next()
    })
    .catch(err => {
      console.log(err);
      next(err)
    })
})

module.exports = HighScore = mongoose.model("HighScore", HighScoreSchema)