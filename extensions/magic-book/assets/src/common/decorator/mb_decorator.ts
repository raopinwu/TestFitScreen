import mb_base from "../base/mb_base";

export default class mb_decorator {

    /**
     * 函数调用打印debug日志
     */
    static func_call_debug_log() {
        return function (target: mb_base, propertyKey: string, descriptor: PropertyDescriptor) {
            if (target instanceof mb_base) {
                if (!target._debug_log_funcs) {
                    target._debug_log_funcs = [];
                }
                target._debug_log_funcs.push(propertyKey);
            }
            // if (descriptor) {
            //     let func = descriptor.value;
            //     descriptor.value = function (...p) {
            //         let class_name = this.name || this.constructor.name;
            //         mb_log.debug(`[${class_name}]`, `[${propertyKey}]`, ...p);
            //         return func.call(this, ...p);
            //     };
            // }
        };
    }

    /**
     * 函数调用打印info日志
     */
    static func_call_info_log() {
        return function (target: mb_base, propertyKey: string, descriptor: PropertyDescriptor) {
            if (target instanceof mb_base) {
                if (!target._info_log_funcs) {
                    target._info_log_funcs = [];
                }
                target._info_log_funcs.push(propertyKey);
            }
        };
    }
}