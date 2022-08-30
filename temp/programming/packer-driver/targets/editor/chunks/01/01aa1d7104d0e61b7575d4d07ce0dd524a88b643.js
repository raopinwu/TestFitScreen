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

      __checkObsolete__(['_decorator', 'Component', 'Node', 'View', 'macro', 'Size', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator); // property{
      //     canvasRot:number,
      // }

      _export("Main", Main = (_dec = ccclass('Main'), _dec(_class = class Main extends Component {
        start() {
          // View.instance.getResolutionPolicy();
          // View.instance.getDesignResolutionSize();
          // View.instance.setResolutionPolicy(macro.ORIENTATION_PORTRAIT);
          View.instance.setResizeCallback(() => {
            this.init();
          }); // view.setOrientation(macro.ORIENTATION_PORTRAIT);

          this.init();
        }

        checkLand() {
          let frameSize = View.instance.getFrameSize();
          return frameSize.width > frameSize.height;
        }

        init() {
          let canvas = this.node;

          if (this.checkLand()) {// canvas.setRotationFromEuler(new Vec3(0,0,-90));
            // canvas.angle = -90;
            // View.instance.setOrientation(macro.ORIENTATION_PORTRAIT);
            // view.setOrientation(macro.ORIENTATION_LANDSCAPE)
          } else {// View.instance.setOrientation(macro.ORIENTATION_PORTRAIT);
            // canvas.setRotationFromEuler(new Vec3(0,0,0));
            // canvas.angle = 0;
            // view.setOrientation(macro.ORIENTATION_LANDSCAPE)
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
//# sourceMappingURL=01aa1d7104d0e61b7575d4d07ce0dd524a88b643.js.map