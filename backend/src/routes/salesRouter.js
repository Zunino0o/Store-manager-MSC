const { Router } = require('express');
const { salesController } = require('../controllers');

const salesRouter = Router();
salesRouter.get('/', salesController.findAll);
salesRouter.get('/:id', salesController.findById);
salesRouter.post('/', salesController.insert);

module.exports = salesRouter;