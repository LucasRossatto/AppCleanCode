const validateUser = (req, res, next) => {
  const { nome, email } = req.body;
  if (!nome || typeof nome !== "string") {
    return res.status(400).json({ msg: "Campos Inválidos" });
  }
  if (!email || typeof email !== "string") {
    return res.status(400).json({ msg: "Campos Inválidos" });
  }

  if (!(email.includes("@") && email.includes("."))) {
    return res.status(400).json({ msg: "Campo email Inválidos" });
  }
  next();
};

const validateUserId = (req, res, next) => {
  const { id } = req.params;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ msg: "Parametro ID Inválido" });
  }
  next();
};

module.exports = { validateUser, validateUserId };
