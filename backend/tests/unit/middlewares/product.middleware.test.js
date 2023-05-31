const { expect } = require('chai');
const sinon = require('sinon');

const { productMiddleware } = require('../../../src/middlewares/productValidations');
const {
    invalidNameError,
    invalidLengthError,
  } = require('./mocks/product.mocks');

describe('Teste dos middlewares', function () {
  it('Retorna um erro caso o parametro nao seja passado ou esteja vazio', async function () {
    const res = {};
    const req = {
      body: {},
    };

    const next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    await productMiddleware(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(invalidNameError.json);
    expect(next).to.not.have.been.calledWith();
  });

  it('Retorna um erro caso o length do parametro seja menor que 5', async function () {
    const res = {};
    const req = {
      body: { name: 'aaaa' },
    };

    const next = sinon.stub().returns();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
   
    await productMiddleware(req, res, next);
   
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(invalidLengthError.json);
    expect(next).to.not.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});