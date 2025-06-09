const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const autenticarToken = require('../middlewares/autenticarToken');

// GET /clientes
router.get('/', autenticarToken, clientesController.listar);

// GET /clientes/:id
router.get('/:id', clientesController.buscarPorId);

// POST /clientes
router.post('/',  clientesController.criarCliente);

// PUT /clientes/:id
router.put('/:id', clientesController.atualizar);

// DELETE /clientes/:id
router.delete('/:id', clientesController.deletar);

module.exports = router;
