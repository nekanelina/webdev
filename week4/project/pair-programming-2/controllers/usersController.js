// controllers/usersController.js

const uuid = require("uuid");
const User = require("../models/users");

// Get All users
const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Single user by ID
const getuserById = async (req, res) => {
  try {
    const blog = await User.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a New user
const createUser = async (req, res) => {
  try {
    const { username, email, role } = req.body;
    if (!username || !email || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = new User({ username, email, role });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  try {
    const blog = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const blog = await User.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllusers,
  getuserById,
  createUser,
  updateUser,
  deleteUser,
};
