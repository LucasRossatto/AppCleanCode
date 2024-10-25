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

// funcao buscar todos
router.get("/", userController.getAll); 

module.exports = router;
