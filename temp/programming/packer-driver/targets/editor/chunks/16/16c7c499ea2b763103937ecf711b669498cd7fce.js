System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, mb_base, mb_decorator, _crd;

  function _reportPossibleCrUseOfmb_base(extras) {
    _reporterNs.report("mb_base", "../base/mb_base", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      mb_base = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2791eCufnRMuZln/elv54eH", "mb_decorator", undefined);

      _export("default", mb_decorator = class mb_decorator {
        /**
         * 函数调用打印debug日志
         */
        static func_call_debug_log() {
          return function (target, propertyKey, descriptor) {
            if (target instanceof (_crd && mb_base === void 0 ? (_reportPossibleCrUseOfmb_base({
              error: Error()
            }), mb_base) : mb_base)) {
              if (!target._debug_log_funcs) {
                target._debug_log_funcs = [];
              }

              target._debug_log_funcs.push(propertyKey);
            } // if (descriptor) {
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
          return function (target, propertyKey, descriptor) {
            if (target instanceof (_crd && mb_base === void 0 ? (_reportPossibleCrUseOfmb_base({
              error: Error()
            }), mb_base) : mb_base)) {
              if (!target._info_log_funcs) {
                target._info_log_funcs = [];
              }

              target._info_log_funcs.push(propertyKey);
            }
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16c7c499ea2b763103937ecf711b669498cd7fce.js.map