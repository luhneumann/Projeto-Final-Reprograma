const express = require('express');
const router = express.Router();

const controller = require('../controller/trocaTrocaController')
const userController = require('../controller/userController')
const authController = require ('../controller/authController')

const { checkAuth } = require('../middleware/auth')

router.get("/lista", checkAuth, controller.buscaTodas)
router.get("/busca/cidade",checkAuth, controller.buscaPorCidade)
router.get("/busca/doador",checkAuth, controller.buscaDoacoes)
router.get("/busca/recebem",checkAuth, controller.buscaQuemPrecisa)
router.post("/nova", checkAuth, controller.novaTroca)
router.patch("/:id", checkAuth, controller.atualizaCadastro)


router.delete("/remove", userController.deletaCadastro )
router.post("/create", userController.createUser)
router.post("/login", authController.login)

module.exports = router;