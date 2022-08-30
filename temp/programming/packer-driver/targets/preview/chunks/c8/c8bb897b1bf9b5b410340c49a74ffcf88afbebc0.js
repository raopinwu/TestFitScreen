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
          var _this = this;

          this.name = "magic_base";
          this._debug_log_funcs = null;
          this._info_log_funcs = null;

          if (!(_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
            error: Error()
          }), mb) : mb).conf.is_debug) {
            return;
          }

          var self = this; //删除自己的，后面才会取到原型链上的属性

          delete this._debug_log_funcs;

          var _loop = function _loop(i) {
            var func_name = _this._debug_log_funcs[i];
            var func = _this[func_name];

            _this[func_name] = function () {
              for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) {
                p[_key] = arguments[_key];
              }

              self.log_debug("" + func_name, ...p);
              return func.call(this, ...p);
            };
          };

          for (var i = 0; i < this._debug_log_funcs.length; i++) {
            _loop(i);
          }

          delete this._info_log_funcs;

          var _loop2 = function _loop2(_i) {
            var func_name = _this._info_log_funcs[_i];
            var func = _this[func_name];

            _this[func_name] = function () {
              for (var _len2 = arguments.length, p = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                p[_key2] = arguments[_key2];
              }

              self.log_info("" + func_name, ...p);
              return func.call(this, ...p);
            };
          };

          for (var _i = 0; _i < this._info_log_funcs.length; _i++) {
            _loop2(_i);
          }
        } //==== 日志相关


        log_info() {
          for (var _len3 = arguments.length, p = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            p[_key3] = arguments[_key3];
          }

          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).info("info:" + this.name, ...p);
        }

        log_debug() {
          for (var _len4 = arguments.length, p = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            p[_key4] = arguments[_key4];
          }

          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).debug("debug:" + this.name, ...p);
        }

        log_warn() {
          for (var _len5 = arguments.length, p = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            p[_key5] = arguments[_key5];
          }

          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).warn("warn:" + this.name, ...p);
        }

        log_error() {
          for (var _len6 = arguments.length, p = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            p[_key6] = arguments[_key6];
          }

          (_crd && mb_log === void 0 ? (_reportPossibleCrUseOfmb_log({
            error: Error()
          }), mb_log) : mb_log).error("error:" + this.name, ...p);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8bb897b1bf9b5b410340c49a74ffcf88afbebc0.js.map