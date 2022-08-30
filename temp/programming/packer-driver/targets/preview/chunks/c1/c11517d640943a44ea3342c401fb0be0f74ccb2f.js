System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Slider, Label, mb_base_cp, mb, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, mb_audio_volume_cp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmb_base_cp(extras) {
    _reporterNs.report("mb_base_cp", "../../base/mb_base_cp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmb(extras) {
    _reporterNs.report("mb", "../../mb", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Slider = _cc.Slider;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      mb_base_cp = _unresolved_2.mb_base_cp;
    }, function (_unresolved_3) {
      mb = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c3deUpedVJp7uk4+TQLTAb", "mb_audio_volume_cp", undefined);

      __checkObsolete__(['Component', 'AudioClip', '_decorator', 'Slider', 'Label']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * @name 音量管理组件
       * @des 如果只绑定了音乐，则会一起控制音效
       * https://gitee.com/magician-f/cocos-magic-book
       */

      _export("mb_audio_volume_cp", mb_audio_volume_cp = (_dec = ccclass('mb_audio_volume_cp'), _dec2 = menu("magic-book/mb_audio_volume_cp"), _dec3 = property(Slider), _dec4 = property(Slider), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = class mb_audio_volume_cp extends (_crd && mb_base_cp === void 0 ? (_reportPossibleCrUseOfmb_base_cp({
        error: Error()
      }), mb_base_cp) : mb_base_cp) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "slider_music", _descriptor, this);

          _initializerDefineProperty(this, "slider_effect", _descriptor2, this);

          _initializerDefineProperty(this, "label_music", _descriptor3, this);

          _initializerDefineProperty(this, "label_effect", _descriptor4, this);
        }

        onLoad() {
          if (this.slider_music) {
            this.slider_music.node.on("slide", this.on_slider_music, this);

            if (!this.slider_effect) {
              //如果没有配置音效，会同时能控制音效音量
              this.slider_music.node.on("slide", this.on_slider_effect, this);
            }

            this.slider_music.progress = (_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
              error: Error()
            }), mb) : mb).audio.music_volume;
          }

          if (this.slider_effect) {
            this.slider_effect.node.on("slide", this.on_slider_effect, this);
            this.slider_effect.progress = (_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
              error: Error()
            }), mb) : mb).audio.effect_volume;
          }

          this.update_music_label();
          this.update_effect_label();
        }

        on_slider_music(slider) {
          (_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
            error: Error()
          }), mb) : mb).audio.music_volume = Number(slider.progress.toFixed(2));
          this.update_music_label();
        }

        on_slider_effect(slider) {
          (_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
            error: Error()
          }), mb) : mb).audio.effect_volume = Number(slider.progress.toFixed(2));
          this.update_effect_label();
        }

        update_music_label() {
          if (this.label_music) {
            this.label_music.string = ((_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
              error: Error()
            }), mb) : mb).audio.music_volume * 100).toFixed(0) + "%";
          }
        }

        update_effect_label() {
          if (this.label_effect) {
            this.label_effect.string = ((_crd && mb === void 0 ? (_reportPossibleCrUseOfmb({
              error: Error()
            }), mb) : mb).audio.effect_volume * 100).toFixed(0) + "%";
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slider_music", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slider_effect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label_music", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label_effect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c11517d640943a44ea3342c401fb0be0f74ccb2f.js.map