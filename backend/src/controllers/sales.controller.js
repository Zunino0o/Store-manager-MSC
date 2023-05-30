const { salesService } = require('../services');

const HTTP_STATUS_OK = 200;

const findAll = async (_req, res) => {
    const { message } = await salesService.findAll(); 
    res.status(HTTP_STATUS_OK).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await salesService.findById(id);
    if (type) {
      return res.status(type).json({ message });
    }
    return res.status(HTTP_STATUS_OK).json(message);
  };

module.exports = {
    findAll,
    findById,
};