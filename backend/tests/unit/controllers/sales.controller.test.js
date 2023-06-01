const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const { salesList } = require('./mocks/sales.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('CONTROLLER: Teste em /sales', function () {
    it('Listagem das vendas (GET /)', async function () {
        const res = {};
        const req = {};
    
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon
          .stub(salesService, 'findAll')
          .resolves({ type: null, message: salesList });
    
        await salesController.findAll(req, res);
    
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(salesList);
    });

    it('Retorna o produto correspondente ao id passado via parametro', async function () {
        const res = {};
        const req = {
          params: { id: 2 },
        };
    
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon
          .stub(salesService, 'findById')
          .resolves({ type: null, message: salesList.message[2] });
          // console.log("🚀 ~ file: sales.controller.test.js:40 ~ salesList.message[2]:", salesList.message[2])
          // console.log("🚀 ~ file: sales.controller.test.js:40 ~ salesList:", salesList)
     
        await salesController.findById(req, res);
        // console.log("🚀 ~ file: sales.controller.test.js:42 ~ a:", a)
      
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(salesList.message[2]);
      });

    afterEach(function () {
        sinon.restore();
      });
});