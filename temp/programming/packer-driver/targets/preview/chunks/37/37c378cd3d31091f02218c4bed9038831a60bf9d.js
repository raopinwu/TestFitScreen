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
          var buttons = this.node.getComponentsInChildren(Button);

          for (var i = 0; i < buttons.length; i++) {
            var node = buttons[i].node;
            var func_name = "on_click_" + node.name;

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
//# sourceMappingURL=37c378cd3d31091f02218c4bed9038831a60bf9d.js.map