function errorMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).send(err.message);
    next();
  }
}

module.exports = errorMiddleware;
