/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var MainHeader = (function (_super) {
        __extends(MainHeader, _super);
        function MainHeader(options) {
            _super.call(this, options);
            this.setElement(options.el);
        }
        MainHeader.prototype.render = function () {
            var that = this;
            if (SCV.getViewType() == 0 /* Front */) {
                var template = _.template(SCVMainHeaderTemplate);
                var data = {
                    header: 'Schrodinger\'s Cat',
                };
            }
            else {
                var template = _.template(SCVMainHeaderTemplate);
                var data = {
                    header: '',
                };
            }
            that.$el.html(template(data));
            that.addEventListener();
            if (SCV.getViewType() == 0 /* Front */) {
                that.animatedShow();
            }
            else {
                that.checkVisibility();
            }
        };
        MainHeader.prototype.renderChapter = function (chapter) {
            var that = this;
            if (SCV.getViewType() == 0 /* Front */) {
                var template = _.template(SCVMainHeaderTemplate);
                var data = {
                    header: '',
                };
            }
            else {
                var template = _.template(SCVMainHeaderTemplate);
                data = {
                    header: chapter.get('name'),
                };
            }
            that.$el.html(template(data));
            that.addEventListener();
            if (SCV.getViewType() == 0 /* Front */) {
                that.animatedShow();
            }
            else {
                that.checkVisibility();
            }
        };
        MainHeader.prototype.addEventListener = function () {
            var that = this;
            that.$('.toggle-menu').off('click');
            that.$('.toggle-menu').on('click', function () {
                SCV.getNavPanel().toggle();
            });
        };
        MainHeader.prototype.getHeight = function () {
            var that = this;
            return that.$el.outerHeight();
        };
        MainHeader.prototype.animatedHide = function () {
            var that = this;
            that.$el.animate({ top: -1 * that.getHeight() }, 1);
        };
        MainHeader.prototype.animatedShow = function () {
            var that = this;
            that.$el.animate({ top: 0 }, 50);
        };
        MainHeader.prototype.checkVisibility = function () {
            var that = this;
            if ($(window).scrollTop() < Math.round(SCV.getChapterHeader().getBottomOffset() / 100) * 100 + that.getHeight()) {
                that.animatedHide();
            }
            else {
                that.animatedShow();
            }
        };
        return MainHeader;
    })(Backbone.View);
    SchrodingersCat.MainHeader = MainHeader;
})(SchrodingersCat || (SchrodingersCat = {}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVMainHeaderTemplate = '';
SCVMainHeaderTemplate += '<a class="toggle-menu"></a>';
SCVMainHeaderTemplate += '<%= header %>';
