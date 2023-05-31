const { expect } = require('chai');
const sinon = require('sinon');

const {
    salesMiddleware,
} = require('../../../src/middlewares/salesValidations');
const {
  productIdResponseMock,
  quantityResponseMock,
  badQuantityMock,
  naturalNumResponseMock,
} = require('./mocks/sales.mock');

describe('Teste dos middlewares', function () {
  it('Retorna um erro caso productId nao seja passado', async function () {
    const res = {};
    const req = {
        body: [{ quantity: 1 }],
    };

    const next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesMiddleware(req, res, next);

    expect(res.status).to.have.been.calledWith(productIdResponseMock.status);
    expect(res.json).to.have.been.calledWith(productIdResponseMock.json);
    expect(next).to.not.have.been.calledWith();
  });

  it('Retorna um erro caso quantity nao seja passado', async function () {
    const res = {};
    const req = {
        body: [{ productId: 1 }],
    };

    const next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesMiddleware(req, res, next);

    expect(res.status).to.have.been.calledWith(quantityResponseMock.status);
    expect(res.json).to.have.been.calledWith(quantityResponseMock.json);
    expect(next).to.not.have.been.calledWith();
  });

  it('Retorna um erro caso quantity seja menor que 5', async function () {
    const res = {};
    const req = {
      body: badQuantityMock,
    };

    const next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesMiddleware(req, res, next);

    expect(res.status).to.have.been.calledWith(naturalNumResponseMock.status);
    expect(res.json).to.have.been.calledWith(naturalNumResponseMock.json);
    expect(next).to.not.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});
