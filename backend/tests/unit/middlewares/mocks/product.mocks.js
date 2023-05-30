const invalidNameError = {
    status: 404,
    json: {
      message: '"name" is required',
    },
  };
  
  const invalidLengthError = {
    status: 422,
    json: {
      message: '"name" length must be at least 5 characters long',
    },
  };
  
  module.exports = {
    invalidNameError,
    invalidLengthError,
  };