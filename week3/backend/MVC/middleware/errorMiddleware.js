const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};
