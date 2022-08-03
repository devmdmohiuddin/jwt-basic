const { Custom } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const notFound = (_, res) =>
  res.status(StatusCodes.NOT_FOUND).send("Route doesn't exist.");

const errorHandler = (err, req, res, next) => {
  if (err instanceof Custom) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Something went wrong, Please try again.");
};

module.exports = {
  notFound,
  errorHandler,
};
