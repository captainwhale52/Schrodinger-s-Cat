/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu(options) {
            _super.call(this, options);
            this.setElement(options.el);
        }
        return MainMenu;
    })(Backbone.View);
    SchrodingersCat.MainMenu = MainMenu;
})(SchrodingersCat || (SchrodingersCat = {}));
//# sourceMappingURL=mainmenu.js.map