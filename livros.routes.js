const express = require("express");
const router = express.Router();
const controller = require("../controllers/livros.controller");

router.get("/livros", controller.listarLivros);
router.get("/livros/:id", controller.buscarLivro);
router.post("/livros", controller.cadastrarLivro);
router.put("/livros/:id", controller.atualizarLivro);
router.delete("/livros/:id", controller.removerLivro);

module.exports = router;