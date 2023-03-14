const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

// JWT has a header.payload.sign
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const signup = async (req, res) => {
 
  const { email, password, name } = req.body;

  try {
    const user = await User.signup(email, password, name);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ name:user.name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ name:user.name , token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  signup,
};
