const CustomAPIError = require("../errors/customError");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new CustomAPIError("User already exist", 400);
  }

  if (!name || !email || !password) {
    throw new CustomAPIError("All fill is required", 400);
  }

  const createUser = await User.create({ name, email, password });

  res.status(201).json({ status: "success", data: { createUser } });
};

module.exports = {
  register,
};
