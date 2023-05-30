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
  
  module.exports = {
    productList,
    productById,
    invalidIdError,
  };