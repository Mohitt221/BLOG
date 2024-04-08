const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
  },
  {
    // Additional schema options can be added here, if needed.
  }
);

const UserModel = model('User', UserSchema);

module.exports = UserModel;
