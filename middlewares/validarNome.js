function validarNome(req, res, next) {
    const { nome } = req.body;
    if (!nome || nome.trim() === '') {
      return res.status(400).json({ erro: 'O campo nome é obrigatório.' });
    }
    next();
  }
  
  module.exports = validarNome;
  