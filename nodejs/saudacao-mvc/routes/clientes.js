const express = require('express');
const router = express.Router();
const ClientesController = require('../controllers/ClientesController');

router.get('/', ClientesController.clientes);
router.post('/logado', ClientesController.logado);

module.exports = router;
