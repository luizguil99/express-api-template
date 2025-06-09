import prisma from '../lib/prisma.js';

export const listar = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar clientes', detalhes: error.message });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cliente = await prisma.cliente.findUnique({
      where: { id }
    });
    
    if (!cliente) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar cliente', detalhes: error.message });
  }
};

export const criarCliente = async (req, res) => {
  try {
    const { nome } = req.body;
    
    if (!nome) {
      return res.status(400).json({ erro: 'Nome é obrigatório' });
    }
    
    const novoCliente = await prisma.cliente.create({
      data: { nome }
    });
    
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar cliente', detalhes: error.message });
  }
};

export const atualizar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nome } = req.body;
    
    if (!nome) {
      return res.status(400).json({ erro: 'Nome é obrigatório' });
    }
    
    // Verifica se o cliente existe
    const clienteExiste = await prisma.cliente.findUnique({
      where: { id }
    });
    
    if (!clienteExiste) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    
    const clienteAtualizado = await prisma.cliente.update({
      where: { id },
      data: { nome }
    });
    
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar cliente', detalhes: error.message });
  }
};

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Verifica se o cliente existe
    const clienteExiste = await prisma.cliente.findUnique({
      where: { id }
    });
    
    if (!clienteExiste) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    
    await prisma.cliente.delete({
      where: { id }
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar cliente', detalhes: error.message });
  }
};

export default { listar, buscarPorId, criarCliente, atualizar, deletar };
  