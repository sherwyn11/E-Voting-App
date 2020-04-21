"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("../utils");
class Sanitization {
    constructor(sanitizer, custom, options = []) {
        this.sanitizer = sanitizer;
        this.custom = custom;
        this.options = options;
    }
    async run(context, value, meta) {
        const { req, path, location } = meta;
        const newValue = this.custom
            ? this.sanitizer(value, meta)
            : this.sanitizer(utils_1.toString(value), ...this.options);
        context.setData(path, newValue, location);
        // Checks whether the value changed.
        // Avoids e.g. undefined values being set on the request if it didn't have the key initially.
        const reqValue = path !== '' ? _.get(req[location], path) : req[location];
        if (reqValue !== newValue) {
            path !== '' ? _.set(req[location], path, newValue) : _.set(req, location, newValue);
        }
    }
}
exports.Sanitization = Sanitization;
