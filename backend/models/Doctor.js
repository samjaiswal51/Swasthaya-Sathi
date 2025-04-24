const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Optional: image, contact, etc.
});

module.exports = mongoose.model("Doctor", doctorSchema);
