const adminController = require("../controllers/adminController");
const authenticateToken = require("../middlewares/authenticateToken");
const { Router } = require("express");
const { validateAdmin, validateAdminId} = require("../middlewares/validateAdmin");

const router = Router();

router.post("/login",validateAdmin, adminController.login);// função de login

router.post("/", validateAdmin, adminController.create); // funcao de criar

// funcao de editar
router.put("/:id", validateAdmin, validateAdminId, adminController.update); 

// funcao de deletar
router.delete("/:id", validateAdminId, adminController.delete); 

// funcao buscar unico
router.get("/:id", validateAdminId, adminController.getOne);

// funcao esqueci senha
router.put("/esq/EsqueciSenha", adminController.forgetPassword);

// funcao buscar todos
router.get("/",adminController.getAll); 

module.exports = router;
