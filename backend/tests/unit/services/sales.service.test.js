const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const {
  salesList,
  validId,
  salesFilter,
  invalidId,
  failedFilterMock,
} = require('./mocks/sales.mock');
const { salesService } = require('../../../src/services');

describe('SERVICES: Teste em /sales', function () {
  it(
    'Retorna objeto correto, contendo a lista de vendas na chave message ( GET /)', 
    async function () {
    sinon.stub(salesModel, 'findAll').resolves(salesList.message);

    const result = await salesService.findAll();
    expect(result).to.deep.equal(salesList);
  },
  );

  it(
    'Retorna objeto correto, com a venda correspondente ao parametro na chave message (GET /:id)', 
    async function () {
    sinon.stub(salesModel, 'findById').resolves([salesFilter.message[0]]);

    const result = await salesService.findById(validId);
    expect(result).to.deep.equal(salesFilter);
  },
);

  it('Retorna objeto de erro, caso o id seja inexistente (GET /:id)', async function () {
    sinon.stub(salesModel, 'findById').resolves(null);

    const result = await salesService.findById(invalidId);
    console.log('🚀 ~ file: sales.service.test.js:26 ~ result:', result);

    expect(result).to.deep.equal(failedFilterMock);
  });

  afterEach(function () {
    sinon.restore();
  });
});
