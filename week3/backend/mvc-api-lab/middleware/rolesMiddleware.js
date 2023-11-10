// // Define role-based middleware
// function checkRole(role) {
//   return (req, res, next) => {
//     const userRole = req.user && req.user.role;

//     if (userRole === role) {
//       next(); // User has the required role, continue to the next middleware
//     } else {
//       res.status(403).json({ message: "Access denied" }); // User doesn't have the required role
//     }
//   };
// }

// module.exports = {
//   checkRole,
// };

function checkRole(role) {
  return (req, res, next) => {
    //console.log(req.headers);
    const userRole = req.headers.role;

    if (userRole === role) {
      next(); // User has the required role, continue to the next middleware
    } else {
      res.status(403).json({ message: "Access denied" }); // User doesn't have the required role
    }
  };
}

module.exports = { checkRole };
