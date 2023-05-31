const { productService } = require('../services');

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_INSERT = 201;

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

const insert = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.insert(name);
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(HTTP_STATUS_INSERT).json(message);
};

const updateById = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productService.updateById(name, id);
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(HTTP_STATUS_OK).json(message);
};

const deleteById = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.deleteById(name);
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(HTTP_STATUS_INSERT).json(message);
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};
