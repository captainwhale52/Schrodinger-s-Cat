/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var NextChapter = (function (_super) {
        __extends(NextChapter, _super);
        function NextChapter(options) {
            _super.call(this, options);
            this.setElement(options.el);
        }
        NextChapter.prototype.render = function () {
            var that = this;
            var template = _.template(SCVNextChapterBlankTemplate);
            var data = {};
            that.$el.html(template(data));
            that.resize();
            that.addEventListener();
        };
        NextChapter.prototype.renderChapter = function (chapter) {
            var that = this;
            if (SCV.getViewType() == 0 /* Front */) {
            }
            else {
                var template = _.template(SCVNextChapterTemplate);
                var data = {
                    cnum: chapter.get('cnum'),
                    name: chapter.get('name'),
                    hash: chapter.get('hash'),
                };
                that.$el.html(template(data));
            }
            that.resize();
            that.addEventListener();
        };
        NextChapter.prototype.resize = function () {
            var that = this;
        };
        NextChapter.prototype.addEventListener = function () {
            var that = this;
        };
        return NextChapter;
    })(Backbone.View);
    SchrodingersCat.NextChapter = NextChapter;
})(SchrodingersCat || (SchrodingersCat = {}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVNextChapterTemplate = '';
SCVNextChapterTemplate += '';
SCVNextChapterTemplate += '<a href="<%= hash %>">';
SCVNextChapterTemplate += '<div class="next-chapter-title">';
SCVNextChapterTemplate += '<span class="chapter-nr"><%= cnum %></span>';
SCVNextChapterTemplate += '<h2><%= name %></h2>';
SCVNextChapterTemplate += '<span class="chapter-arrow next"></span>';
SCVNextChapterTemplate += '</div>';
SCVNextChapterTemplate += '</a>';
var SCVNextChapterBlankTemplate = '';
SCVNextChapterBlankTemplate += '';
SCVNextChapterBlankTemplate += '<div class="next-chapter-title next-chapter-title-blank">';
SCVNextChapterBlankTemplate += '</div>';
