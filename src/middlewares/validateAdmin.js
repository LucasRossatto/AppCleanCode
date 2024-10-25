const validateAdmin = (req, res, next) => {
  const { nome, email, senha } = req.body;
  if (!nome || typeof nome !== "string") {
    return res.status(400).json({ msg: "Campos Inválidos" });
  }
  if (!email || typeof email !== "string") {
    return res.status(400).json({ msg: "Campos Inválidos" });
  }
  if (!senha || typeof senha !== "string") {
    return res.status(400).json({ msg: "Campos Inválidos" });
  }

  if (!(email.includes("@") && email.includes("."))) {
    return res.status(400).json({ msg: "Campo email Inválidos" });
  }
  next();
};

const validateAdminId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      msg: "Parametro faltando",
    });
  }
  return next();
};

module.exports = { validateAdmin, validateAdminId };
