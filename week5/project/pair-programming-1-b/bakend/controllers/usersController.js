const users = require("../models/UsersMongoose");

// Create new user
const createUsers = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const newUser = new users({
      username,
      email,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByID = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH
const updateuser = async (req, res) => {
  try {
    const user = await users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT
const putuser = async (req, res) => {
  try {
    const user = await users.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//DELETE
const deleteuser = async (req, res) => {
  try {
    const user = await users.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json({ msg: "user deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUsers,
  getAllUsers,
  getUserByID,
  updateuser,
  putuser,
  deleteuser,
};
