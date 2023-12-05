const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

const saltRounds = 15;

const registerUser = async (req, res, next) => {
  const {name,email,password} = req.body;
  if(!name || !email || !password){
    return res.status(400).json({error:"Fill in all the fields"});
  }
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      "password":hashedPassword,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      "token": generateToken(user._id),
    });
  } catch (error) {
    if (error.code === 11000)/*duplicate key error like duplicate email*/{
      return res.status(400).json({ error: "Email is already in use" });
  }else if (error.name === 'ValidationError')/*validation error like invalid email*/{
    return res.status(400).json({ error: error.message });
  }else{
    next(error);
  }
}
}

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res, next) => {
  const {email,password} = req.body;
  if(!email || !password){
    return res.status(400).json({error:"Fill in all the fields"});
  }
  const user = await User.findOne({email});
  if(user&&bcrypt.compareSync(password, user.password)){
   res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      "token": generateToken(user._id),
   }); 
  }else{
    res.status(400).json({error:"Invalid email or password"});
  }

};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res, next) => {
  const user = await User.findById(req.user).select("-password -__v");
  res.status(200).json(user);  
};


module.exports = {
  registerUser,
  loginUser,
  getMe,
};
