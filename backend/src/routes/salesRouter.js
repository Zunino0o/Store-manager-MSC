const { Router } = require('express');
const { salesController } = require('../controllers');
const { salesMiddleware } = require('../middlewares/salesValidations');

const salesRouter = Router();
salesRouter.get('/', salesController.findAll);
salesRouter.get('/:id', salesController.findById);
salesRouter.post('/', salesMiddleware, salesController.insert);

module.exports = salesRouter;