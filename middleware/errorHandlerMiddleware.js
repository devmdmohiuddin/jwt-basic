const CustomAPIError = require('../errors/customError')

const notFound = (_, res) => res.status(404).send("Route doesn't exist.");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: "Something went wrong, Please try again." });
};

module.exports = {
  notFound, errorHandler
}