const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    // console.log(decoded);
    req.user = decoded;
    next();
  } catch(error) {
    res.status(200).json({
      user: false,
      message: "Auth failed",
    })
  }
}