const express = require("express");
const router = express.Router();
const controller = require("../controllers/autores.controller");

router.get("/autores", controller.listarAutores);
router.post("/autores", controller.cadastrarAutor);
router.delete("/autores/:id", controller.removerAutor);

module.exports = router;