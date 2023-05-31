const HTTP_STATUS_BAD_REQ = 400;
const PRODUCTID_BAD_REQ = '"productId" is required';
const QUANTITY_MESSAGE_BAD_REQ = '"quantity" is required';
const HTTP_STATUS_BAD_PARAM = 422;
const NATURAL_NUM_MESSAGE_BAD_REQ = '"quantity" must be greater than or equal to 1';

const productIdResponseMock = {
  status: HTTP_STATUS_BAD_REQ,
  json: { message: PRODUCTID_BAD_REQ },
};

const quantityResponseMock = {
  status: HTTP_STATUS_BAD_REQ,
  json: { message: QUANTITY_MESSAGE_BAD_REQ },
};

const naturalNumResponseMock = {
  status: HTTP_STATUS_BAD_PARAM,
  json: { message: NATURAL_NUM_MESSAGE_BAD_REQ },
};

const badQuantityMock = [
  {
    productId: 1,
    quantity: 0,
  },
];

module.exports = {
  productIdResponseMock,
  quantityResponseMock,
  naturalNumResponseMock,
  badQuantityMock,
};
