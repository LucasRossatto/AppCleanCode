const { Router } = require("express");

const router = ROuter();

router.post("/"); // func criar user
router.put("/:id"); // func editar com parametro id
router.delete("/:id"); // func deletar com parametro id
router.get("/:id"); // func buscar unico com parametro id
router.get("/"); // func buscar todos

module.exports = router;
