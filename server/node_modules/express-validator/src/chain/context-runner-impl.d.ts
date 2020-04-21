import { SelectFields } from '../select-fields';
import { Request } from '../base';
import { ContextBuilder } from '../context-builder';
import { ContextRunner } from './context-runner';
export declare class ContextRunnerImpl implements ContextRunner {
    private readonly builder;
    private readonly selectFields;
    constructor(builder: ContextBuilder, selectFields?: SelectFields);
    run(req: Request, options?: {
        saveContext?: boolean;
    }): Promise<import("../context").Context>;
}
