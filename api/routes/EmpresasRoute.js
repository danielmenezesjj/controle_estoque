const {Router} = require('express')
const EmpresasController = require("../controller/EmpresasController")
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')

const router = Router();

router.get('/empresas', EmpresasController.ListaEmpresas)
router.get('/empresas/:id', EmpresasController.listaUmaEmpresa)
router.post('/empresas', upload.single('arquivo_xml'), EmpresasController.createEmpresaXML) 
router.post('/empresas/:id/restaura', EmpresasController.restoreEmpresa)
router.put('/empresas/:id', EmpresasController.atualizaEmpresa)
router.delete('/empresas/:id', EmpresasController.deleteEmpresa)


module.exports = router