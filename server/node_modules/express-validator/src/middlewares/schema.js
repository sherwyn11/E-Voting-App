"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chain_1 = require("../chain");
const check_1 = require("./check");
const validLocations = ['body', 'cookies', 'headers', 'params', 'query'];
const protectedNames = ['errorMessage', 'in'];
function checkSchema(schema, defaultLocations = validLocations) {
    return Object.keys(schema).map(field => {
        const config = schema[field];
        const chain = check_1.check(field, ensureLocations(config, defaultLocations), config.errorMessage);
        Object.keys(config)
            .filter((method) => {
            return config[method] && !protectedNames.includes(method);
        })
            .forEach(method => {
            if (typeof chain[method] !== 'function') {
                console.warn(`express-validator: a validator/sanitizer with name ${method} does not exist`);
                return;
            }
            // Using "!" because typescript doesn't know it isn't undefined.
            const methodCfg = config[method];
            let options = methodCfg === true ? [] : methodCfg.options || [];
            if (options != null && !Array.isArray(options)) {
                options = [options];
            }
            if (isValidatorOptions(method, methodCfg) && methodCfg.negated) {
                chain.not();
            }
            chain[method](...options);
            if (isValidatorOptions(method, methodCfg) && methodCfg.errorMessage) {
                chain.withMessage(methodCfg.errorMessage);
            }
        });
        return chain;
    });
}
exports.checkSchema = checkSchema;
function isValidatorOptions(method, methodCfg) {
    return methodCfg !== true && method in chain_1.ValidatorsImpl.prototype;
}
function ensureLocations(config, defaults) {
    // .filter(Boolean) is done because in can be undefined -- which is not going away from the type
    // See https://github.com/Microsoft/TypeScript/pull/29955 for details
    const locations = Array.isArray(config.in)
        ? config.in
        : [config.in].filter(Boolean);
    const actualLocations = locations.length ? locations : defaults;
    return actualLocations.filter(location => validLocations.includes(location));
}
