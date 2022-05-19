const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
