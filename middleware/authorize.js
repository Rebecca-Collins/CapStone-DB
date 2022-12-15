const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const headerAuth = req.headers.authorization;
  const tokenAuth = headerAuth.split(" ")[1];

  try {
    const decode = jwt.verify(tokenAuth, process.env.JWT_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid token");
  }
};
