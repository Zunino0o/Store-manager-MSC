const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { 
    productList,
    productById,
    invalidIdError,
    newProductMock,
    VALID_ID,
    INVALID_ID,
    // nameValidationMock,
    // nameLengthValidationMock,
 } = require('./mocks/product.mocks');

describe('SERVICES: Teste em /products', function () {
    it('Listagem de produtos', async function () {
        sinon.stub(productModel, 'findAll').resolves(productList.message);
        
        const result = await productService.findAll();
        
        expect(result).to.deep.equal(productList);
      });
      it('Retorna o produto correspondente ao id passado via parametro', async function () {
        sinon.stub(productModel, 'findById').resolves(productById.message);
       
        const result = await productService.findById(VALID_ID);
        
        expect(result).to.deep.equal(productById);
      });
      it('Retorna um erro caso o ID seja invalido', async function () {
        sinon.stub(productModel, 'findById').resolves(undefined);
        
        const result = await productService.findById(INVALID_ID);
        
        expect(result).to.deep.equal(invalidIdError);
      });

      it('Retorna um objeto contendo as infos do produto adicionado', async function () {
        sinon.stub(productModel, 'insert').resolves(newProductMock.message);
        
        const result = await productService.insert('Arco do Gavião Arqueiro');
  
        expect(result).to.deep.equal(newProductMock);
      });
      
      afterEach(function () {
        sinon.restore();
      });
    });