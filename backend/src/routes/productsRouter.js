const { Router } = require('express');
const { productController } = require('../controllers');

const productsRouter = Router();
productsRouter.get('/', productController.getAll);
productsRouter.get('/:id', productController.findById);

module.exports = {
    productsRouter,
};