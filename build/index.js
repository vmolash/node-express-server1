"use strict";

var _express = _interopRequireDefault(require("express"));

var _errorHandler = _interopRequireDefault(require("./modules/core/errorHandler"));

var _logger = _interopRequireDefault(require("./modules/core/logger"));

var _parseResponse = _interopRequireDefault(require("./modules/core/parseResponse"));

var _cors = _interopRequireDefault(require("./modules/core/cors"));

var _routes = _interopRequireDefault(require("./modules/core/routes"));

var _db = _interopRequireDefault(require("./modules/core/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 5000;
(0, _db["default"])();
(0, _logger["default"])(app);
(0, _parseResponse["default"])(app);
(0, _cors["default"])(app);
(0, _routes["default"])(app); // app.get('/', home); // GET localhost:5000/
// app.post('/info', info); // POST localhost:5000/info

(0, _errorHandler["default"])(app);
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});