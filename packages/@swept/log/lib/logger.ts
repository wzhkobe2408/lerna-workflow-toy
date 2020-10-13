/**
 * @author wangzhonghuan
 */
export class Logger {
    private scope: string;
    private tag: string;

    constructor(scope: string) {
        this.scope = scope;
        this.tag = '';
    }

    setTag(tag: string) {
        this.tag = tag;
    }

    error(...args: any[]) {
        console.error(this.tag, args);
    }

    info(...args: any[]) {
        console.info(this.tag, args);
    }

    warn(...args: any[]) {
        console.info(this.tag, args);
    }

    log(...args: any[]) {
        console.log(this.tag, args);
    }
}
