"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
class ChainCondition {
    constructor(chain) {
        this.chain = chain;
    }
    async run(_context, _value, meta) {
        const otherContext = await this.chain.run(meta.req, { saveContext: false });
        if (otherContext.errors.length) {
            throw new base_1.ValidationHalt();
        }
    }
}
exports.ChainCondition = ChainCondition;
