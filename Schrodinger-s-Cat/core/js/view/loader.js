/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var Loader = (function (_super) {
        __extends(Loader, _super);
        function Loader(options) {
            _super.call(this, options);
            this.setElement(options.el);
        }
        Loader.prototype.render = function () {
            var that = this;
        };
        Loader.prototype.resize = function () {
        };
        Loader.prototype.addEventListener = function () {
            var that = this;
        };
        Loader.prototype.show = function () {
            var that = this;
            that.$el.css({ opacity: 1 });
            that.$el.css({ height: '100%' });
        };
        Loader.prototype.hide = function () {
            var that = this;
            that.$el.css({ opacity: 0 });
            that.$el.css({ height: 0 });
        };
        Loader.prototype.animatedHide = function () {
            var that = this;
            that.$el.delay(250).animate({ opacity: 0 }, 500).promise().done(function () {
                that.$el.css({ height: 0 });
            });
            ;
        };
        return Loader;
    })(Backbone.View);
    SchrodingersCat.Loader = Loader;
})(SchrodingersCat || (SchrodingersCat = {}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVLoaderTemplate = '';
SCVLoaderTemplate += '';
