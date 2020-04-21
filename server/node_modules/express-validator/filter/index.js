"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
// middleware/sanitization-chain-builders
exports.sanitize = src_1.sanitize;
exports.sanitizeBody = src_1.sanitizeBody;
exports.sanitizeCookie = src_1.sanitizeCookie;
exports.sanitizeParam = src_1.sanitizeParam;
exports.sanitizeQuery = src_1.sanitizeQuery;
exports.buildSanitizeFunction = src_1.buildSanitizeFunction;
// matched-data
exports.matchedData = src_1.matchedData;
console.warn('express-validator: requires to express-validator/filter are deprecated.' +
    'You should just use require("express-validator") instead.');
