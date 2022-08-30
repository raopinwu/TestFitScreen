System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, mb_config, mb_audio, _crd;

  function _reportPossibleCrUseOfmb_config(extras) {
    _reporterNs.report("mb_config", "./config/mb_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmb_audio(extras) {
    _reporterNs.report("mb_audio", "./system/audio/mb_audio", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      mb_config = _unresolved_2.default;
    }, function (_unresolved_3) {
      mb_audio = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d14f9aZMTVIsIT714pCwqsz", "mb", undefined);

      /**
       * @name 这是一个实例，除了静态的和类，所有其它接口请从此单例开始
       * https://gitee.com/magician-f/cocos-magic-book
       */
      _export("default", new class {
        constructor() {
          this.conf = null;
          this.audio = null;
        }

        /**
         * 初始化完成以后才能使用
         * @param conf 
         * @param func_cb 
         */
        init(conf, func_cb) {
          this.conf = new (_crd && mb_config === void 0 ? (_reportPossibleCrUseOfmb_config({
            error: Error()
          }), mb_config) : mb_config)();

          if (conf) {
            this.conf.is_debug = conf.is_debug;
          }

          this.audio = (_crd && mb_audio === void 0 ? (_reportPossibleCrUseOfmb_audio({
            error: Error()
          }), mb_audio) : mb_audio).ins(); //挂载到全局方便debug

          window["__mb"] = this;
          func_cb && func_cb();
        }

      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a545531ef3bb8ed02161a2586b1d57eb088b99d.js.map