// simulação de "banco de dados"
let clientes = [
    { id: 1, nome: 'Maria' },
    { id: 2, nome: 'João' }
  ];
  
export const listar = (req, res) => {
  res.json(clientes);
};

export const buscarPorId = (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  res.json(cliente);
};

export const criarCliente = (req, res) => {
  const { nome } = req.body;
  const novo = { id: Date.now(), nome };
  clientes.push(novo);
  res.status(201).json(novo);
};

export const atualizar = (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  cliente.nome = req.body.nome;
  res.json(cliente);
};

export const deletar = (req, res) => {
  clientes = clientes.filter(c => c.id != req.params.id);
  res.status(204).send();
};

export default { listar, buscarPorId, criarCliente, atualizar, deletar };
  