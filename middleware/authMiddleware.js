const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../errors");
const User = require("../models/userModel");

const protected = async (req, res, next) => {
  let token = null;

  if (req.headers && req.headers.authorization) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      throw new Unauthenticated("Not authorized, token failed");
    }
  }

  if (!token) {
    throw new Unauthenticated("Not authorized, no token");
  }
};

module.exports = {
  protected,
};
