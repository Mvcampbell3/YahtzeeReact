const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  highscores: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "HighScore"
  }]
})

const validatorEmail = function(value) {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
}

const validatorUsername = function(value) {
  console.log(value.length)
  // value.length >= 6 ? true : false;
  if (value.length >= 6) {
    return true;
  }
  return false;
}

UserSchema.path("email").validate(validatorEmail,
  "`{VALUE}` not valid email address", "Invalid Email"
);

UserSchema.path("username").validate(validatorUsername,
  "needs to be atleast 6 characters long", "Invalid Username"
)

module.exports = User = mongoose.model("User", UserSchema)