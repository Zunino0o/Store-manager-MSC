const { salesModel } = require('../models');

const findAll = async () => {
    const result = await salesModel.findAll();

    return { type: null, message: result };
};

const findById = async (id) => {
    const result = await salesModel.findById(id);
    if (!result) return { type: 404, message: 'Sale not found' };
    return { type: null, message: result };
};

module.exports = {
    findAll,
    findById,
};