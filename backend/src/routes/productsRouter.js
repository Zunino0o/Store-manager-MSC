const { Router } = require('express');
const { productController } = require('../controllers');
const { nameValidation, nameLengthValidation } = require('../middlewares/productValidations');

const productsRouter = Router();
productsRouter.get('/', productController.findAll);
productsRouter.get('/:id', productController.findById);
productsRouter.post('/', nameValidation, nameLengthValidation, productController.insert);

module.exports = productsRouter;