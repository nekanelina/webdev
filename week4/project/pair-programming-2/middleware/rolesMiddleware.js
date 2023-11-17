// Define role-based middleware
function checkRole(role) {
  return (req, res, next) => {
    const userRole = req.headers && req.headers.role;
    if (userRole === role) {
      next(); // User has the required role, continue to the next middleware
    } else {
      res.status(403).json({ message: "Access denied" }); // User doesn't have the required role
    }
  };
}

module.exports = {
  checkRole,
};
