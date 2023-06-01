const camelize = require('camelize');
const { connection } = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id',
  );
  // console.log(result);
  // console.log('model');
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return { id: insertId, name };
};

const updateById = async (name, id) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  return { id: Number(id), name };
};

const deleteById = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};
