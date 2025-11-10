const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

// ⚠️ TEMPORARY LOGIN — no bcrypt (for testing only)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("📩 Login attempt:", email, password);

    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("❌ User not found");
      return res.status(400).json({ msg: "Invalid email" });
    }

    // temporary direct password check (no bcrypt)
    if (password !== "admin123") {
      console.log("❌ Wrong password");
      return res.status(400).json({ msg: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      "secretkey",
      { expiresIn: "8h" }
    );

    console.log("✅ Login successful!");
    res.json({
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("💥 Server error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
