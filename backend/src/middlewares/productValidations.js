const HTTP_STATUS_BAD_REQ = 400;
const HTTP_STATUS_BAD_PARAM = 422;

const productMiddleware = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(HTTP_STATUS_BAD_REQ)
      .json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(HTTP_STATUS_BAD_PARAM).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  return next();
};

module.exports = {
  productMiddleware,
};
