// const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM sales_products ORDER BY saleId, productId',
  );
  return result;
};

const findById = async (saleId) => {
  const [[sale]] = await connection.execute(
    'SELECT * FROM sales_products WHERE id = ?',
    [saleId],
  );
  // return camelize(sale);
  return sale;
};

module.exports = {
  findAll,
  findById,
};
