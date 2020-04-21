"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("./check");
function buildCheckFunction(locations) {
    return (fields, message) => check_1.check(fields, locations, message);
}
exports.buildCheckFunction = buildCheckFunction;
exports.check = buildCheckFunction(['body', 'cookies', 'headers', 'params', 'query']);
exports.body = buildCheckFunction(['body']);
exports.cookie = buildCheckFunction(['cookies']);
exports.header = buildCheckFunction(['headers']);
exports.param = buildCheckFunction(['params']);
exports.query = buildCheckFunction(['query']);
