const { productService } = require('../services');

const getAll = async (_req, res) => {
  const result = await productService.getAll();
//   console.log('controller');
  res.status(200).json(result);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const response = await productService.findById(id);
    res.status(200).json(response);
};

module.exports = {
  getAll,
  findById,
};