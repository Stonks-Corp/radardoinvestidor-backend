import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello world');
});

routes.post('/fundo', (req, res) => {
  res.send(200);
});

export default routes;
