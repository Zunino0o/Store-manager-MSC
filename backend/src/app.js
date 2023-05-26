const express = require('express');
const { productModel } = require('./models');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/products', async (_req, res) => {
  const response = await productModel.findAll();
  res.status(200).json(response);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const response = await productModel.findById(id);
  res.status(200).json(response);
});

app.get('/sales', (req, res) => {
  res.sendStatus(200);
});

app.get('/sales/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
