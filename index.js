import express from 'express';
import clientesRouter from './routes/clientes.js';

const app = express();

app.use(express.json());
app.use('/clientes', clientesRouter);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });