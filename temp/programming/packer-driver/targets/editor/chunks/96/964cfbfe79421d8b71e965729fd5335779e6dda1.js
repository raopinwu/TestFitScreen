System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, _dec, _class, _crd, ccclass, property, mb_base_cp;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3a6bHuTitFF6Pw/znTRoHu", "mb_base_cp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mb_base_cp", mb_base_cp = (_dec = ccclass('mb_base_cp'), _dec(_class = class mb_base_cp extends Component {
        __preload() {
          let buttons = this.node.getComponentsInChildren(Button);

          for (let i = 0; i < buttons.length; i++) {
            const node = buttons[i].node;
            const func_name = "on_click_" + node.name;

            if (this[func_name]) {
              node.on("click", this[func_name], this);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=964cfbfe79421d8b71e965729fd5335779e6dda1.js.map