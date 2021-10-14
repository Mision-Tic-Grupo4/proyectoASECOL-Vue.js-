const express = require('express');
const router = express.Router();
const usuarioRouter = require('./usuario');
const categoriaRouter = require('./categoria');
const productoRouter = require('./producto');

router.use('/usuario',usuarioRouter);
router.use('/producto',productoRouter);
router.use('/categoria',categoriaRouter);
module.exports = router;