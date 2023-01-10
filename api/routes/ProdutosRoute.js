const {Router} = require('express')
const ProdutosController = require('../controller/ProdutosController')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')


const router = Router();

router.get('/produtos', ProdutosController.listaProdutos)
router.get('/produtos/:id', ProdutosController.listaUmProduto)
router.post('/produto', upload.single('arquivo_xml'), ProdutosController.createprodutoXML)
router.post('/produtos', upload.single('arquivo_xml') ,ProdutosController.createProdutosXML)
router.put('/produtos/:id', ProdutosController.atualizaProduto);
router.delete('/produtos/:id', ProdutosController.deleteProduto);



module.exports = router