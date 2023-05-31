const { Router } = require('express');
const { productController } = require('../controllers');
const { productMiddleware } = require('../middlewares/productValidations');

const productsRouter = Router();
productsRouter.get('/', productController.findAll);
productsRouter.get('/:id', productController.findById);
productsRouter.post('/', productMiddleware, productController.insert);
productsRouter.put('/:id', productMiddleware, productController.updateById);
productsRouter.delete('/:id', productController.deleteById);

module.exports = productsRouter;