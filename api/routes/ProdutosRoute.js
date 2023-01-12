const {Router} = require('express')
const ProdutosController = require('../controller/ProdutosController')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')
const login = require('../middleware/login')

const router = Router();

router.get('/produtos', login ,ProdutosController.listaProdutos)
router.get('/produtos/:id', ProdutosController.listaUmProduto)
router.post('/produto', upload.single('arquivo_xml'), ProdutosController.createprodutoXML)
router.post('/produtos', upload.single('arquivo_xml') ,ProdutosController.createProdutosXML)
router.post('/produtos/:id/restaura', ProdutosController.restoreProdutos)
router.put('/produtos/:id', ProdutosController.atualizaProduto);
router.delete('/produtos/:id', ProdutosController.deleteProduto);



module.exports = router