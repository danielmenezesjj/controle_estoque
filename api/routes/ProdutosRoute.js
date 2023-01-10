const {Router} = require('express')
const ProdutosController = require('../controller/ProdutosController')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')


const router = Router();

router.get('/produtos', ProdutosController.listaProdutos)
router.post('/produtos', upload.single('arquivo_xml') ,ProdutosController.createProdutos)
router.post('/produto', upload.single('arquivo_xml'), ProdutosController.createproduto)


module.exports = router