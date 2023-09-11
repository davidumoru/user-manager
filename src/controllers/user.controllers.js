const express = require("express");
const { validationResult, body, param } = require("express-validator");
const router = express.Router();

const User = require("../models/user.models");

// Create a new user
router.post(
  "/",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("track").notEmpty().withMessage("Track is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get a specific user by name
router.get(
  "/:name",
  async (req, res) => {
    try {
      const name = req.params.name;
      const user = await User.findOne({ fullName: name });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update a user by name
router.put(
  "/:name",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("track").notEmpty().withMessage("Track is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const name = req.params.name;
      const updatedUser = await User.findOneAndUpdate(
        { fullName: name },
        req.body,
        {
          new: true,
        }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Delete a user by name
router.delete(
  "/:name",
  async (req, res) => {
    try {
      const name = req.params.name;
      const deletedUser = await User.findOneAndRemove({ fullName: name });
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
