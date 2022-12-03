const express = require('express');
const router = express.Router();

const controller = require('../controller/trocaTrocaController')

router.get("/", controller.buscaTodas)
router.get("/busca/cidade", controller.buscaPorCidade)
router.get("/doam", controller.buscaQuemDoa)
router.get("/recebem", controller.buscaQuemPrecisa)
router.post("/nova", controller.novoCadastro)
router.patch("/:id", controller.atualizaCadastro)
router.delete("/:id", controller.deletaCadastro )

module.exports = router;