const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const admin = await Admin.findOne({ where: { email } });
      if (!admin) {
        return res.status(400).json({
          msg: "Email ou senha incorretos",
        });
      }
      const token = jwt.sign(
        {
          email: admin.email,
          nome: admin.nome,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      const isValida = await bcrypt.compare(senha, admin.senha);
      if (!isValida) {
        return res.status(400).json({
          msg: "Email ou senha incorretos",
        });
      }
      return res.status(200).json({
        msg: "Login realizado com sucesso",
        token: token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500), json({ msg: "Acione o Suporte" });
    }
  },

  forgetPassword: async (req, res) => {
    try {
      const { email, novaSenha } = req.body;

      const admin = await Admin.findOne({ where: { email: req.body.email } });
      
      if (!admin) {
        return res.status(400).json({
          msg: "Email não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Senha atualizada com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  create: async (req, res) => {
    try {
      const { nome, senha, email } = req.body;
      const hashSenha = await bcrypt.hash(senha, 10);
      const adminCriado = await Admin.create({ nome, email, senha: hashSenha });

      return res.status(200).json({
        msg: "Admin criado com sucesso!",
        admin: adminCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, senha, email } = req.body;
      const adminUpdate = await Admin.findByPk(id);
      if (adminUpdate == null) {
        return res.status(404).json({
          msg: "Admin não encontrado",
        });
      }
      const updated = adminUpdate.update({
        nome,
        senha,
        email,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Admin atualizado com sucesso!",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAll: async (req, res) => {
    try {
      const adminsListados = await Admin.findAll();
      return res.status(200).json({
        msg: "Admin encontrados",
        admin: adminsListados,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const adminEncontrado = await Admin.findByPk(id);
      if (adminEncontrado == null) {
        return res.status(404).json({
          msg: "Admin nao encontrado",
        });
      }
      return res.status(200).json({
        msg: "Admin encontrado com sucesso!",
        admin: adminEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const adminEncontrado = await Admin.findByPk(id);
      if (adminEncontrado == null) {
        return res.status(404).json({
          msg: "Admin nãó encontrado",
        });
      }
      await adminEncontrado.destroy();
      return res.status(200).json({
        msg: "Admin deletado com sucesso",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = adminController;
