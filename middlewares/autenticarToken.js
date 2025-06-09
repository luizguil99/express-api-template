function autenticarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token || token !== 'Bearer 123456') {
      return res.status(401).json({ erro: 'Token inválido ou ausente.' });
    }
    next();
  }
  
  export default autenticarToken;
  