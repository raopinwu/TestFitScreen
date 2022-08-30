System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, mb, mb_log, _crd;

  function _reportPossibleCrUseOfmb(extras) {
    _reporterNs.report("mb", "../../mb", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      mb = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a38ffQK7BK0KCi83qLZVGw", "mb_log", undefined);

      _export("default", mb_log = class mb_log {
        static info(...p) {
          console.info(...p);
        }

        static debug(...p) {
          if (!(_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
            error: Error()
          }), mb) : mb).conf.is_debug) {
            return;
          }

          console.info(...p);
        }

        static warn(...p) {
          console.warn(...p);
        }

        static error(...p) {
          console.error(...p);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f81e6c0d6cd69c4cd79d61efbe512ab4b3e017c.js.map