const errorHandler = require("./errorHandlerMiddleware");
const routeNotFound = require("./routeNotFoundMiddleware");

module.exports = { errorHandler, routeNotFound };
