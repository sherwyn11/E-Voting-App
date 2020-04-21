import { CustomSanitizer } from '../base';
import { ContextBuilder } from '../context-builder';
import * as Options from '../options';
import { Sanitizers } from './sanitizers';
export declare class SanitizersImpl<Chain> implements Sanitizers<Chain> {
    private readonly builder;
    private readonly chain;
    constructor(builder: ContextBuilder, chain: Chain);
    customSanitizer(sanitizer: CustomSanitizer): Chain;
    private addStandardSanitization;
    blacklist(chars: string): Chain;
    escape(): Chain;
    unescape(): Chain;
    ltrim(chars?: string): Chain;
    normalizeEmail(options?: Options.NormalizeEmailOptions): Chain;
    rtrim(chars?: string): Chain;
    stripLow(keep_new_lines?: boolean): Chain;
    toArray(): Chain;
    toBoolean(strict?: boolean): Chain;
    toDate(): Chain;
    toFloat(): Chain;
    toInt(radix?: number): Chain;
    trim(chars?: string): Chain;
    whitelist(chars: string): Chain;
}
