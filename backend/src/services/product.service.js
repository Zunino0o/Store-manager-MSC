const { productModel } = require('../models');

const findAll = async () => {
  const result = await productModel.findAll();
  //   console.log('service');

  return { type: null, message: result };
};

const findById = async (id) => {
  const result = await productModel.findById(id);
  if (!result) return { type: 404, message: 'Product not found' };
  return { type: null, message: result };
};

const insert = async (name) => {
  const result = await productModel.insert(name);
  return { type: null, message: result };
};

module.exports = {
  findAll,
  findById,
  insert,
};
