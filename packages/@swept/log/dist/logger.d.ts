export declare class Logger {
    private scope;
    constructor(scope: string);
    error(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    log(...args: any[]): void;
}
