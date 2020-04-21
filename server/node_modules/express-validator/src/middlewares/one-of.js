"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const base_1 = require("../base");
const context_builder_1 = require("../context-builder");
function oneOf(chains, message) {
    return async (req, _res, next) => {
        const surrogateContext = new context_builder_1.ContextBuilder().build();
        // Run each group of chains in parallel, and within each group, run each chain in parallel too.
        const promises = chains.map(async (chain) => {
            const group = Array.isArray(chain) ? chain : [chain];
            const contexts = await Promise.all(group.map(chain => chain.run(req, { saveContext: false })));
            const groupErrors = _.flatMap(contexts, 'errors');
            // #536: The data from a chain within oneOf() can only be made available to e.g. matchedData()
            // if its entire group is valid.
            if (!groupErrors.length) {
                contexts.forEach(context => {
                    surrogateContext.addFieldInstances(context.getData());
                });
            }
            return groupErrors;
        });
        req[base_1.contextsKey] = (req[base_1.contextsKey] || []).concat(surrogateContext);
        try {
            const allErrors = await Promise.all(promises);
            const success = allErrors.some(groupErrors => groupErrors.length === 0);
            if (!success) {
                // Only add an error to the context if no group of chains had success.
                surrogateContext.addError(typeof message === 'function' ? message({ req }) : message || 'Invalid value(s)', _.flatMap(allErrors));
            }
            next();
        }
        catch (e) {
            next(e);
        }
    };
}
exports.oneOf = oneOf;
