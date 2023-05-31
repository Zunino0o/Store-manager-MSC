const { salesModel } = require('../models');

const findAll = async () => {
    const result = await salesModel.findAll();

    return { type: null, message: result };
};

const findById = async (id) => {
    const result = await salesModel.findById(id);
    // console.log(result, 'service');
    if (result.length === 0) return { type: 404, message: 'Sale not found' };
    return { type: null, message: result };
};

const insert = async (sales) => {
    try {
        const result = await salesModel.insert(sales);
        return { type: null, message: result };
    } catch (error) {
       return { type: 404, message: 'Product not found' };
    }
};

module.exports = {
    findAll,
    findById,
    insert,
};