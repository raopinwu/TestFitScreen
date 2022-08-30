System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, View, _dec, _class, _crd, ccclass, property, Main;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      View = _cc.View;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b87fbjL+4tH8o84AI/i1AVG", "Main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'View', 'macro', 'Size']);

      ({
        ccclass,
        property
      } = _decorator); // property{
      //     canvasRot;
      // }

      _export("Main", Main = (_dec = ccclass('Main'), _dec(_class = class Main extends Component {
        start() {
          // View.instance.getResolutionPolicy();
          // View.instance.getDesignResolutionSize();
          // View.instance.setResolutionPolicy(macro.ORIENTATION_PORTRAIT);
          View.instance.setResizeCallback(() => {
            this.init();
          });
          this.init();
        }

        checkLand() {
          let frameSize = View.instance.getFrameSize();
          return frameSize.width > frameSize.height;
        }

        init() {
          let canvas = this.node.getChildByName("Canvas");

          if (this.checkLand()) {
            canvas.angle = -90;
          } else {
            canvas.angle = 0;
          }
        }
        /*  */


        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f7bea170a57db02ddcbebe00aeba448fb23b2cf.js.map