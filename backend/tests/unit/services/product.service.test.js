const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { 
    productList,
    productById,
    invalidIdError,
 } = require('./mocks/product.mocks');

describe('SERVICES: Teste em /products', function () {
    it('Listagem de produtos', async function () {
        sinon.stub(productModel, 'findAll').resolves(productList.message);
        
        const result = await productService.findAll();
        
        expect(result).to.deep.equal(productList);
      });
      it('Retorna o produto correspondente ao id passado via parametro', async function () {
        sinon.stub(productModel, 'findById').resolves(productById.message);
       
        const result = await productService.findById(1);
        
        expect(result).to.deep.equal(productById);
      });
      it('Retorna um erro caso o ID seja invalido', async function () {
        sinon.stub(productModel, 'findById').resolves(undefined);
        
        const result = await productService.findById(999);
        
        expect(result).to.deep.equal(invalidIdError);
      });
      
      afterEach(function () {
        sinon.restore();
      });
    });