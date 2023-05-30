const { productService } = require('../services');

const HTTP_STATUS_OK = 200;

const findAll = async (_req, res) => {
  const { message } = await productService.findAll();
  //   console.log('controller');
  res.status(HTTP_STATUS_OK).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);
  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(HTTP_STATUS_OK).json(message);
};

module.exports = {
  findAll,
  findById,
};
