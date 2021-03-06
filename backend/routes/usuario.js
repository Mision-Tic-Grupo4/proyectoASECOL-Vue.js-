const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarioController');

//privados
router.post('/add',UsuarioController.add);
router.get('/list',UsuarioController.list);
router.put('/update',UsuarioController.update);
router.put('/enabled',UsuarioController.enabled);
router.put('/disabled',UsuarioController.disabled);

//publicos
router.post('/login',UsuarioController.login);

module.exports = router;