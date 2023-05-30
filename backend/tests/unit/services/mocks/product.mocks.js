const productList = {
  type: null,
  message: [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
  ],
};

const productById = {
  type: null,
  message: {
    id: 1,
    name: 'Martelo de Thor',
  },
};

const invalidIdError = {
  type: 404,
  message: 'Product not found',
};

const newProductMock = {
  type: null,
  message: {
    id: 4,
    name: 'Arco do Gavião Arqueiro',
  },
};

const VALID_ID = 1;

const INVALID_ID = 999;

const HTTP_STATUS_BAD_REQ = 400;

const HTTP_STATUS_BAD_PARAM = 422;

const nameValidationMock = {
  type: HTTP_STATUS_BAD_REQ,
  message: '"name" is required',
};

const nameLengthValidationMock = {
  type: HTTP_STATUS_BAD_PARAM,
  message: '"name" length must be at least 5 characters long',
};

module.exports = {
  productList,
  productById,
  invalidIdError,
  newProductMock,
  VALID_ID,
  INVALID_ID,
  nameValidationMock,
  nameLengthValidationMock,
};
