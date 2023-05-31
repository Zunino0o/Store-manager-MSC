const HTTP_STATUS_BAD_REQ = 400;
const PRODUCTID_BAD_REQ = '"productId" is required';
const QUANTITY_MESSAGE_BAD_REQ = '"quantity" is required';
const HTTP_STATUS_BAD_PARAM = 422;
const NATURAL_NUM_MESSAGE_BAD_REQ = '"quantity" must be greater than or equal to 1';

const verifyProductId = (sales) => {
    // console.log(sales);
  const checkIds = sales.map((sale) => sale.productId);
  if (checkIds.includes(undefined)) { 
    return { status: HTTP_STATUS_BAD_REQ, message: PRODUCTID_BAD_REQ }; 
}
  return { status: null, message: '' };
};

const verifyQuantity = (sales) => {
  const checkQuantity = sales.map((sale) => sale.quantity);
  if (checkQuantity.includes(undefined)) {
    return { status: HTTP_STATUS_BAD_REQ, message: QUANTITY_MESSAGE_BAD_REQ };
  }
  const checkNaturalNumber = checkQuantity.every((value) => value < 1);
  if (checkNaturalNumber) {
    return {
      status: HTTP_STATUS_BAD_PARAM,
      message: NATURAL_NUM_MESSAGE_BAD_REQ,
    };
  }
  return { status: null, message: '' };
};

const salesMiddleware = (req, res, next) => {
  const sales = req.body;
  const id = verifyProductId(sales);
  const quantity = verifyQuantity(sales);
  const status = id.status || quantity.status;
  const message = id.message || quantity.message;
  if (status) return res.status(status).json({ message });
  next();
};

module.exports = {
    salesMiddleware,
};
