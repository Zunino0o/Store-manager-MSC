const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/products', (req, res) => {
  res.sendStatus(200);
});

app.get('/products/:id', (req, res) => {
  res.sendStatus(200);
});

app.get('/sales', (req, res) => {
  res.sendStatus(200);
});

app.get('/sales/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
