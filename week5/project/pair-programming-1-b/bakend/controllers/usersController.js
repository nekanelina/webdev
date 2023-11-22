const User = require("../models/users");

// Get All users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single user by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ msg: `No user with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a New user
const postUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update user by ID using PUT method
const putUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedUser) {
      res.json({ msg: "User updated", user: updatedUser });
    } else {
      res.status(404).json({ msg: `No user with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update user by ID using PATCH method
const patchUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedUser) {
      res.json({ msg: "User updated", user: updatedUser });
    } else {
      res.status(404).json({ msg: `No user with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete user by ID
const deleteuser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.json({ msg: "User deleted", user: deletedUser });
    } else {
      res.status(404).json({ msg: `No user with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteuser,
};
