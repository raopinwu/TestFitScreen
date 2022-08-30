System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, mb, mb_log, mb_base, _crd;

  function _reportPossibleCrUseOfmb(extras) {
    _reporterNs.report("mb", "../../mb", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmb_log(extras) {
    _reporterNs.report("mb_log", "../log/mb_log", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      mb = _unresolved_2.default;
    }, function (_unresolved_3) {
      mb_log = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36c69VQ029CYaxMkMduxtOs", "mb_base", undefined);

      _export("default", mb_base = class mb_base {
        //==== 单例模式
        static ins() {
          if (!this._ins) {
            this._ins = new this();
          }

          return this._ins;
        }
        /**
         * 自定义类名
         * 打包或混淆过程会把class定义的类压缩或混淆掉，所以需要自己定义一个
         * 子类重写此变量，定义自己类名
         */


        constructor() {
          this.name = "magic_base";
          this._debug_log_funcs = null;
          this._info_log_funcs = null;

          if (!(_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
            error: Error()
          }), mb) : mb).conf.is_debug) {
            return;
          }

          const self = this; //删除自己的，后面才会取到原型链上的属性

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
        } //==== 日志相关


        log_info(...p) {
          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).info(`info:${this.name}`, ...p);
        }

        log_debug(...p) {
          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).debug(`debug:${this.name}`, ...p);
        }

        log_warn(...p) {
          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).warn(`warn:${this.name}`, ...p);
        }

        log_error(...p) {
          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).error(`error:${this.name}`, ...p);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8e987341a5ae3529d4cba6e6d9121a22c27f38c.js.map