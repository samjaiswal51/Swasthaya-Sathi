// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["patient", "family", "doctor"], required: true },
  age: Number,
  gender: String,

  // Extra fields for doctor
  specialization: String,
  experience: String,
  hospital: String,
  profileImage: String,
  bio: String,
});

module.exports = mongoose.model("User", userSchema);
