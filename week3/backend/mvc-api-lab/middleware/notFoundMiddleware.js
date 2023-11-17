function notFoundMiddleware(req, res, next) {
  res.status(404).send("Error 404: Not Found");
  next();
}

module.exports = notFoundMiddleware;
