const { apikeyMiddleware } = require("./auth.middleware");
const { contadorMiddleware } = require("./logger.middleware");

module.exports = {apikeyMiddleware, contadorMiddleware}
