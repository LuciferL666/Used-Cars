const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "c1b0f55c-8254-4a0b-8789-d780b25a060e";

const User = require("../models/User");

exports.register = async (userData) => {
  const user = await User.create(userData);

  const result = getAuthResult(user);

  return result;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid username or password");
  }

  const result = getAuthResult(user);

  return result;
};

function getAuthResult(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, SECRET, { expiresIn: "2d" });

  const result = {
    accessToken: token,
    email: user.email,
    _id: user._id,
  };

  return result;
}
