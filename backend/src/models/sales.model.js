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
  const [sale] = await connection.execute(
    // 'SELECT b.date, a.product_id, a.quantity FROM sales b '
    //   + 'INNER JOIN sales_products a ON a.sale_id = b.id WHERE b.id = ?',
    'SELECT b.date, a.product_id, a.quantity '
      + 'FROM StoreManager.sales b '
      + 'JOIN StoreManager.sales_products a ON a.sale_id = b.id ' 
      + 'WHERE a.sale_id = ? '
      + 'ORDER BY b.id, a.product_id ASC',
    [saleId],
  );
  // console.log(sale, 'model');
  return camelize(sale) || null;
};

const insert = async (sales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE(NOW())',
  );

  const query = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES ?`;

  const placeholders = sales.map((sale) => [insertId, sale.productId, sale.quantity]);

  await connection.query(query, [placeholders]);

  return { 
    id: insertId, 
    itemsSold: sales, 
  };
};

module.exports = {
  findAll,
  findById,
  insert,
};
