const { productModel } = require('../models');

// const HTTP_STATUS_BAD_REQ = 400;
const HTTP_STATUS_NOT_FOUND = 404;
// const HTTP_STATUS_BAD_PARAM = 422;

const findAll = async () => {
  const result = await productModel.findAll();
  //   console.log('service');

  return { type: null, message: result };
};

const findById = async (id) => {
  const result = await productModel.findById(id);
  if (!result) {
    return { type: HTTP_STATUS_NOT_FOUND, message: 'Product not found' };
  }
  return { type: null, message: result };
};

const insert = async (name) => {
  const result = await productModel.insert(name);
  return { type: null, message: result };
};

const updateById = async (name, id) => {
  const validateId = await findById(id);
  if (validateId.type) return validateId;
  
  const result = await productModel.updateById(name, id);
  return { type: null, message: result };
};

const deleteById = async (id) => {
  const validateId = await findById(id);
  if (validateId.type) return validateId;

  await productModel.deleteById(id);
  return { type: null };
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};
