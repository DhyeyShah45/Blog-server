const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const data = await User.findOne({ _id }).select("_id").select("name");
    req.user_id = data._id
    req.author = data.name
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = requireAuth
