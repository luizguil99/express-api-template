import express from 'express';
import { listar, buscarPorId, criarCliente, atualizar, deletar } from '../controllers/clientesController.js';
import autenticarToken from '../middlewares/autenticarToken.js';

const router = express.Router();

// GET /clientes
router.get('/', autenticarToken, listar);

// GET /clientes/:id
router.get('/:id', buscarPorId);

// POST /clientes
router.post('/', criarCliente);

// PUT /clientes/:id
router.put('/:id', atualizar);

// DELETE /clientes/:id
router.delete('/:id', deletar);

export default router;
