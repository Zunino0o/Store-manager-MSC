const { productModel } = require('../models');

const getAll = async () => {
  const result = await productModel.findAll();
//   console.log('service');

  return result;
};

const findById = async (id) => {
    const result = await productModel.findById(id);
    return result;
};

module.exports = {
  getAll,
  findById,
};
