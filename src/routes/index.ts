import express from 'express';
import { addFundInfo } from '../controllers/fund';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello world');
});

routes.post('/fundo', (req, res) => {
  try {
    addFundInfo(req.body);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({
      error: 'Failed to add entities to database',
    });
  }
});

routes.post('/update', (req, res) => {
  try {
    console.log('here');
  } catch (e) {
    res.status(400).send({
      error: 'Failed to add entities to database',
    });
  }
});

export default routes;
