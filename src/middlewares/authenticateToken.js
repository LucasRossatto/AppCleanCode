const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      msg: "Acesso Negado",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, admin) => {
    if (err) {
      return res.status(403).jsom({
        msg: "Acesso negado",
      });
    }
    req.admin = admin;
    next();
  });
}

module.exports = authenticateToken;
