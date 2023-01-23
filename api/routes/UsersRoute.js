const {Router} = require('express')
const router = Router();
const UsuariosController = require('../controller/UsuariosController')
const cors = require('cors')

router.get('/usuarios', UsuariosController.listUsers)
router.get('/usuarios/:id', UsuariosController.listUmUsuario)
router.post('/usuarios', UsuariosController.createUser)
router.post('/usuarios/profile', UsuariosController.profile)
router.post('/usuarios/login', UsuariosController.Login)
router.put('/usuarios/:id', UsuariosController.updateUser)
router.put('/usuarios/alterpassword', UsuariosController.alterPassword)
router.delete('/usuarios/:id', UsuariosController.deleteUser)


module.exports = router;
