import express from 'express';
import { addFundInfo, fundUpdate } from '../controllers/fund';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello world');
});

routes.post('/fundo', async (req, res) => {
  try {
    await addFundInfo(req.body);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({
      error: 'Failed to add entities to database',
    });
  }
});

routes.post('/update', async (req, res) => {
  try {
    await fundUpdate(req.body);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({
      error: 'Failed to add entities to database',
    });
  }
});

export default routes;
