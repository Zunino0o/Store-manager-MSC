const { Router } = require('express');
const { productController } = require('../controllers');
const { productMiddleware } = require('../middlewares/productValidations');

const productsRouter = Router();
productsRouter.get('/', productController.findAll);
productsRouter.get('/:id', productController.findById);
productsRouter.post('/', productMiddleware, productController.insert);
productsRouter.put('/:id', productController.update);
productsRouter.delete('/:id', productController.delete);

module.exports = productsRouter;