const { Router } = require('express');
const { productController } = require('../controllers');
const { productMiddleware } = require('../middlewares/productValidations');

const productsRouter = Router();
productsRouter.get('/', productController.findAll);
productsRouter.get('/:id', productController.findById);
productsRouter.post('/', productMiddleware, productController.insert);

module.exports = productsRouter;