const Custom = require("./customError");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends Custom {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
