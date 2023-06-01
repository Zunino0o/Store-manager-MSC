const { expect } = require('chai');
const sinon = require('sinon');
const { connection } = require('../../../src/models/connection');
const { salesList, validId } = require('./mocks/sales.mock');
const { salesModel } = require('../../../src/models');

describe('MODEL: Teste em /sales', function () {
  it('Retorna a lista de todas as vendas (GET /)', async function () {
    sinon.stub(connection, 'execute').resolves([salesList]);

    const result = await salesModel.findAll();
    // console.log('🚀 ~ file: sales.model.test.js:12 ~ result:', result);

    expect(result).to.deep.equal(salesList);
  });

  it('Retorna venda cujo id corresponde ao passado via parametro (GET /:id)', async function () {
    sinon.stub(connection, 'execute').resolves([salesList[0]]);

    const result = await salesModel.findById(validId);
    // console.log('🚀 ~ file: sales.model.test.js:21 ~ result:', result);

    expect(result).to.deep.equal(salesList[0]);
  });

  it('Retorna null caso nao ache a sale correspondente ao id (GET /:id)', async function () {
    sinon.stub(connection, 'execute').resolves([null]);

    const result = await salesModel.findById(99999);
    // console.log('🚀 ~ file: sales.model.test.js:31 ~ result:', result);

    expect(result).to.deep.equal(null);
  });

  // TESTE NA FUNCAO salesModel.insert();
  // it('Retorna um objeto contendo id e a venda inserida (POST /)', function () {})

  afterEach(function () {
    sinon.restore();
  });
});
