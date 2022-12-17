const express = require('express');
const router = express.Router();

const controller = require('../controller/trocaTrocaController')
const userController = require('../controller/userController')
const authController = require ('../controller/authController')

// const { checkAuth } = require('../middleware/auth')


router.get("/lista", controller.buscaTodas)

router.get("/busca/cidade", controller.buscaPorCidade)
router.get("/busca/doador", controller.buscaDoacoes)
router.get("/busca/recebem", controller.buscaQuemPrecisa)
router.get("/busca/:id", controller.buscaPorID)
router.post("/nova", controller.novaTroca)
router.patch("/:id", controller.atualizaCadastro)
router.delete("/delete/:id",controller.deletaCadastroTroca)



router.delete("/remove", userController.deletaCadastro )
router.post("/create", userController.createUser)
router.post("/login", authController.login)

module.exports = router;