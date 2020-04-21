"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const sanitization_1 = require("../context-items/sanitization");
class SanitizersImpl {
    constructor(builder, chain) {
        this.builder = builder;
        this.chain = chain;
    }
    customSanitizer(sanitizer) {
        this.builder.addItem(new sanitization_1.Sanitization(sanitizer, true));
        return this.chain;
    }
    // Standard sanitizers
    addStandardSanitization(sanitizer, ...options) {
        this.builder.addItem(new sanitization_1.Sanitization(sanitizer, false, options));
        return this.chain;
    }
    blacklist(chars) {
        return this.addStandardSanitization(validator.blacklist, chars);
    }
    escape() {
        return this.addStandardSanitization(validator.escape);
    }
    unescape() {
        return this.addStandardSanitization(validator.unescape);
    }
    ltrim(chars) {
        return this.addStandardSanitization(validator.ltrim, chars);
    }
    normalizeEmail(options) {
        return this.addStandardSanitization(validator.normalizeEmail, options);
    }
    rtrim(chars) {
        return this.addStandardSanitization(validator.rtrim, chars);
    }
    stripLow(keep_new_lines) {
        return this.addStandardSanitization(validator.stripLow, keep_new_lines);
    }
    toArray() {
        return this.customSanitizer(value => (value !== undefined && ((Array.isArray(value) && value) || [value])) || []);
    }
    toBoolean(strict) {
        return this.addStandardSanitization(validator.toBoolean, strict);
    }
    toDate() {
        return this.addStandardSanitization(validator.toDate);
    }
    toFloat() {
        return this.addStandardSanitization(validator.toFloat);
    }
    toInt(radix) {
        return this.addStandardSanitization(validator.toInt, radix);
    }
    trim(chars) {
        return this.addStandardSanitization(validator.trim, chars);
    }
    whitelist(chars) {
        return this.addStandardSanitization(validator.whitelist, chars);
    }
}
exports.SanitizersImpl = SanitizersImpl;
