const userController = require("../controllers/userController");
const { Router } = require("express");
const { validateUser, validateUserId } = require("../middlewares/validateUser");

const router = Router();

router.post("/", validateUser, userController.create); // funcao de criar

// funcao de editar
router.put("/:id", validateUser, validateUserId, userController.update); // parametro id

// funcao de deletar
router.delete("/:id", validateUser, userController.delete); // parametro id

// funcao buscar unico
router.get("/:id", validateUser, userController.getOne); // parametro id

router.get("/", userController.getAll); // funcao buscar todos

module.exports = router;
