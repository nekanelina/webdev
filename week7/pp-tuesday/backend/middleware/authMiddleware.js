const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    let token;
    if(req.get("Authorization")&&req.get("Authorization").startsWith("Bearer ")){
        try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
        } catch (error) {
        res.status(401).json({message:"Not authorized, token failed"});
        }
    }else{
        res.status(401).json({message:"Authorization required"});
    }
};

module.exports = { protect };
