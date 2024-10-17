const userService = require("../services/userServices");

const userController = {
  create: async (req, res) => {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json({
        msg: "Usuário criado com sucesso!",
        user_criado: user,
      });
    } catch (error) {
      return res.status(200).json({
        msg: "Erro ao tentar criar o Usuário",
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await userService.update(req.body);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado",
        });
      }
      return res.status(201).json({
        msg: "Usuário atualizado com sucesso!",
        user_atualizado: user,
      });
    } catch (error) {
      return res.status(200).json({
        msg: "Erro ao atualizar o Usuário",
      });
    }
  },
  getByOne: async (req, res) => {
    try {
      const user = await userService.getById(req.body);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado",
        });
      }
      return res.status(201).json({
        msg: "Usuário encontrado com sucesso!",
        user_encontrado: user,
      });
    } catch (error) {
      return res.status(200).json({
        msg: "Erro ao encontrar o Usuário",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await userService.getAll(req.body);
      if (!users) {
        return res.status(400).json({
          msg: "Usuarios não encontrados",
        });
      }
      return res.status(201).json({
        msg: "Usuários encontrados com sucesso!",
        users_encontrados: users,
      });
    } catch (error) {
      return res.status(200).json({
        msg: "Erro ao encontrar os Usuários",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const user = await userService.delete(req.body);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado",
        });
      }
      return res.status(201).json({
        msg: "Usuário deletado com sucesso!",
        user_deletado: user,
      });
    } catch (error) {
      return res.status(200).json({
        msg: "Erro ao deletar o Usuário",
      });
    }
  },
};
module.exports = userController;
