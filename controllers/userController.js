const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { BadRequest } = require("../errors");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new BadRequest("User already exist");
  }

  if (!name || !email || !password) {
    throw new BadRequest("All fill is required");
  }

  const createUser = await User.create({ name, email, password });

  res
    .status(StatusCodes.CREATED)
    .json({ status: "success", data: { createUser } });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  console.log(user);

  if (!user && password !== user?.password) {
    throw new BadRequest("Email or password is not valid");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.OK).json({ status: "success", data: { user, token } });
};

module.exports = {
  register,
  login,
};
