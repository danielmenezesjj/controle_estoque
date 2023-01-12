const {Router} = require('express')
const router = Router();
const UsuariosController = require('../controller/UsuariosController')

router.get('/usuarios', UsuariosController.listUsers)
router.get('/usuarios/:id', UsuariosController.listUmUsuario)
router.post('/usuarios', UsuariosController.createUser)
router.post('/usuarios/login', UsuariosController.Login)


module.exports = router;
