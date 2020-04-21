"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const select_fields_1 = require("../select-fields");
const base_1 = require("../base");
class ContextRunnerImpl {
    constructor(builder, selectFields = select_fields_1.selectFields) {
        this.builder = builder;
        this.selectFields = selectFields;
    }
    async run(req, options = {}) {
        const context = this.builder.build();
        const instances = this.selectFields(req, context.fields, context.locations);
        context.addFieldInstances(instances);
        const haltedInstances = new Set();
        for (const contextItem of context.stack) {
            const promises = context.getData({ requiredOnly: true }).map(async (instance) => {
                const instanceKey = `${instance.location}:${instance.path}`;
                if (haltedInstances.has(instanceKey)) {
                    return;
                }
                try {
                    await contextItem.run(context, instance.value, {
                        req,
                        location: instance.location,
                        path: instance.path,
                    });
                }
                catch (e) {
                    if (e instanceof base_1.ValidationHalt) {
                        haltedInstances.add(instanceKey);
                        return;
                    }
                    throw e;
                }
            });
            await Promise.all(promises);
        }
        if (options.saveContext === undefined || options.saveContext) {
            const internalReq = req;
            internalReq[base_1.contextsKey] = (internalReq[base_1.contextsKey] || []).concat(context);
        }
        return context;
    }
}
exports.ContextRunnerImpl = ContextRunnerImpl;
