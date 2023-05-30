const { Router } = require('express');
const { productController } = require('../controllers');

const productsRouter = Router();
productsRouter.get('/', productController.findAll);
productsRouter.get('/:id', productController.findById);
productsRouter.post('/', productController.insert);

module.exports = productsRouter;