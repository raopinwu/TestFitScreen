import mb from "../../mb";
import mb_log from "../log/mb_log";

export default class mb_base {

    //==== 单例模式

    static ins<T extends {}>(this: new () => T): T {
        if (!(<any>this)._ins) {
            (<any>this)._ins = new this();
        }
        return (<any>this)._ins;
    }

    /**
     * 自定义类名
     * 打包或混淆过程会把class定义的类压缩或混淆掉，所以需要自己定义一个
     * 子类重写此变量，定义自己类名
     */
    protected name: string = "magic_base";


    //==== hook

    _debug_log_funcs: string[] = null;
    _info_log_funcs: string[] = null;

    constructor() {
        if (!mb.conf.is_debug) {
            return;
        }
        const self = this;
        //删除自己的，后面才会取到原型链上的属性
        delete this._debug_log_funcs;
        for (let i = 0; i < this._debug_log_funcs.length; i++) {
            const func_name = this._debug_log_funcs[i];
            const func = this[func_name];
            this[func_name] = function (...p) {
                self.log_debug(`${func_name}`, ...p);
                return func.call(this, ...p);
            };
        }
        delete this._info_log_funcs;
        for (let i = 0; i < this._info_log_funcs.length; i++) {
            const func_name = this._info_log_funcs[i];
            const func = this[func_name];
            this[func_name] = function (...p) {
                self.log_info(`${func_name}`, ...p);
                return func.call(this, ...p);
            };
        }
    }

    //==== 日志相关

    protected log_info(...p) {
        mb_log.info(`info:${this.name}`, ...p);
    }

    protected log_debug(...p) {
        mb_log.debug(`debug:${this.name}`, ...p);
    }

    protected log_warn(...p) {
        mb_log.warn(`warn:${this.name}`, ...p);
    }

    protected log_error(...p) {
        mb_log.error(`error:${this.name}`, ...p);
    }

}