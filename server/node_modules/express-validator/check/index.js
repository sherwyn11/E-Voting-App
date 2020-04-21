"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
// middleware/validation-chain-builders
exports.check = src_1.check;
exports.body = src_1.body;
exports.cookie = src_1.cookie;
exports.header = src_1.header;
exports.param = src_1.param;
exports.query = src_1.query;
exports.buildCheckFunction = src_1.buildCheckFunction;
// middleware/schema
exports.checkSchema = src_1.checkSchema;
// middleware/one-of
exports.oneOf = src_1.oneOf;
// validation-result
exports.validationResult = src_1.validationResult;
exports.Result = src_1.Result;
console.warn('express-validator: requires to express-validator/check are deprecated.' +
    'You should just use require("express-validator") instead.');
