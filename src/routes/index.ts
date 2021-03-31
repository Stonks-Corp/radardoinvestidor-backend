import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello world');
});

routes.post('/fundo', (req, res) => {
  console.log(req.body);
  res.send(200);
});

export default routes;
