const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { connection } = require('../../../src/models/connection');
const { productList, validId } = require('./mocks/product.mocks');

describe('MODEL: Teste em /products', function () {
  describe('Listagem de produtos', function () {
    it('Retorna a lista com todo os produtos GET /products', async function () {
      sinon.stub(connection, 'execute').resolves([productList]);

      const result = await productModel.findAll();

      expect(result).to.deep.equal(productList);
    }); 
  });

  describe('GET "/:id"', function () {
    it('Retorna o objeto correspondente ao id passado via parametro', async function () {
      sinon.stub(connection, 'execute').resolves([[productList[0]]]);

      const result = await productModel.findById(validId);

      expect(result).to.deep.equal(productList[0]);
    });
    it('Retorna undefined caso nao ache o produto correspondente ao id', async function () {
      sinon.stub(connection, 'execute').resolves([[undefined]]);

      const result = await productModel.findById(validId);

      expect(result).to.deep.equal(undefined);
    });
  });

  describe('POST "/products"', function () {
    it('Retorna um objeto contendo as infos corretas', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      
      const result = await productModel.insert('teste');

      expect(result).to.be.an('object');
      expect(result).to.have.all.keys('id', 'name');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});