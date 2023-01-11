const {Router} = require('express')
const EstoqueController = require('../controller/EstoqueController')

const router = Router();


router.get('/estoque', EstoqueController.listaEstoque);




module.exports = router