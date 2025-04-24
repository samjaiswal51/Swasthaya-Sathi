// routes/doctorRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   PUT /api/doctors/profile/:id
// @desc    Update doctor profile
// @access  Private (optional: you can protect it later with middleware)
router.put("/profile/:id", async (req, res) => {
  try {
    const { specialization, experience, hospital, profileImage, bio } = req.body;

    const updatedDoctor = await User.findByIdAndUpdate(
      req.params.id,
      {
        specialization,
        experience,
        hospital,
        profileImage,
        bio,
      },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.status(200).json(updatedDoctor);
  } catch (err) {
    console.error("Error updating doctor profile:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// @route   GET /api/doctors
// @desc    Get all doctors
// @access  Public
router.get("/", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select("-password");
    res.status(200).json(doctors);
  } catch (err) {
    console.error("Error fetching doctors:", err.message);
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
});

module.exports = router;
