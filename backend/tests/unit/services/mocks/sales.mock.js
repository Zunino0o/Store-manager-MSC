const salesList = {
  type: null,
  message: [
    {
      saleId: 1,
      date: '2021-09-09T04:54:29.000Z',
      productId: 1,
      quantity: 2,
    },
    {
      saleId: 1,
      date: '2021-09-09T04:54:54.000Z',
      productId: 2,
      quantity: 2,
    },
    {
      saleId: 2,
      date: '2022-09-09T04:54:54.000Z',
      productId: 3,
      quantity: 1,
    },
  ],
};

const salesFilter = {
  type: null,
  message: [
    {
      saleId: 2,
      date: '2022-09-09T04:54:54.000Z',
      productId: 3,
      quantity: 1,
    },
  ],
};

const validId = 2;

const invalidId = 69420;

const failedFilterMock = {
    type: 404,
    message: 'Sale not found',
};

module.exports = {
  salesList,
  salesFilter,
  validId,
  invalidId,
  failedFilterMock,
};
