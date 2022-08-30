System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Button, _dec, _class, _class2, _descriptor, _crd, ccclass, property, Canvas;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Button = _cc.Button;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39b92g5tuNLnoP2e/WwZOlU", "Canvas", undefined);

      __checkObsolete__(['Component', '_decorator', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Canvas = (_dec = property(Button), ccclass(_class = (_class2 = class Canvas extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Button1", _descriptor, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Button1", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9cb942cb4e31d060b6152fdf08c59cdb49deabe.js.map