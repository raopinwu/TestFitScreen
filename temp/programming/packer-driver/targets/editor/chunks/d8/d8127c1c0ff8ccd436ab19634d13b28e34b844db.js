System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _class, _crd, ccclass, property, Canvas;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dee9fIQZCJKn4VCA/xuQw7R", "Canvas", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Canvas = ccclass(_class = class Canvas extends Component {}) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8127c1c0ff8ccd436ab19634d13b28e34b844db.js.map