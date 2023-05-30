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
  if (!result) return { type: HTTP_STATUS_NOT_FOUND, message: 'Product not found' };
  return { type: null, message: result };
};

const insert = async (name) => {
//   if (!name || name.length === 0) {
//  return { 
//     type: HTTP_STATUS_BAD_REQ, 
//     message: '"name" is required', 
//   }; 
// }
//   if (name.length < 5) {
//  return { 
//     type: HTTP_STATUS_BAD_PARAM, 
//     message: '"name" length must be at least 5 characters long', 
//   }; 
// }
  const result = await productModel.insert(name);
  return { type: null, message: result };
};

module.exports = {
  findAll,
  findById,
  insert,
};
