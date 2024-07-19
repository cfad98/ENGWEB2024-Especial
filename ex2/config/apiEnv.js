const baseUrl = 'http://localhost:3000'; // URL base da API

module.exports = {
  apiRoute: (path) => `${baseUrl}${path}`
};
