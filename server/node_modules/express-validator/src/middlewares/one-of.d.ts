import { ValidationChain } from '../chain';
import { Middleware, Request } from '../base';
export declare type OneOfCustomMessageBuilder = (options: {
    req: Request;
}) => any;
export declare function oneOf(chains: (ValidationChain | ValidationChain[])[], message?: OneOfCustomMessageBuilder): Middleware;
export declare function oneOf(chains: (ValidationChain | ValidationChain[])[], message?: any): Middleware;
