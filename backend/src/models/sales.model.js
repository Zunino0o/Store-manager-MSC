const camelize = require('camelize');
const { connection } = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT a.*, b.date FROM sales_products a '
      + 'INNER JOIN sales b ON a.sale_id = b.id ORDER BY sale_id, product_id',
  );
  return camelize(result);
};

const findById = async (saleId) => {
  const [[sale]] = await connection.execute(
    'SELECT * FROM sales_products WHERE id = ?',
    [saleId],
  );
  return camelize(sale);
};

module.exports = {
  findAll,
  findById,
};
