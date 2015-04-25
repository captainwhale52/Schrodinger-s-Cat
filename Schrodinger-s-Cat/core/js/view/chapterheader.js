/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var ChapterHeader = (function (_super) {
        __extends(ChapterHeader, _super);
        function ChapterHeader(options) {
            _super.call(this, options);
            this.setElement(options.el);
        }
        ChapterHeader.prototype.render = function () {
            var that = this;
            if (SCV.getViewType() == ViewType.Front) {
                var template = _.template(SCVChapterHeaderTemplateForCover);
                var data = {
                    cnum: 'Perspective Demons',
                    name: 'Schrodinger\'s Cat',
                };
                that.$el.html(template(data));
            }
            else {
                var template = _.template(SCVChapterHeaderTemplate);
                var data = {
                    cnum: '01',
                    name: 'Gateway',
                };
                that.$el.html(template(data));
            }
            that.resize();
            that.addEventListener();
        };
        ChapterHeader.prototype.renderChapter = function (chapter) {
            var that = this;
            if (SCV.getViewType() == ViewType.Front) {
            }
            else {
                var template = _.template(SCVChapterHeaderTemplate);
                var data = {
                    cnum: chapter.get('cnum'),
                    name: chapter.get('name'),
                };
                that.$el.html(template(data));
            }
            that.resize();
            that.addEventListener();
        };
        ChapterHeader.prototype.resize = function () {
            var that = this;
            if (SCV.getViewType() == ViewType.Front) {
                that.$el.css({ top: Math.round(SCV.getWrapperHeight() / 2 - 50) });
                that.$el.css({ 'padding-top': 30, 'padding-bottom': 20 });
            }
            else {
                that.$el.removeAttr('style');
                that.$el.css({ top: 0 });
            }
        };
        ChapterHeader.prototype.addEventListener = function () {
            var that = this;
            that.$el.off('click');
            that.$el.on('click', function () {
                SCV.setSystemScrolling(true);
                if (SCV.getViewType() == ViewType.Front) {
                    SCR.navigate('act/1', { trigger: true, replace: true });
                }
                else {
                    $('html, body').animate({ scrollTop: SCV.getMainContent().getTopOffset() }, 1000).promise().done(function () {
                        SCV.getMainHeader().checkVisibility();
                        SCV.setSystemScrolling(false);
                    });
                    SCP.resumeBG();
                }
            });
        };
        ChapterHeader.prototype.getBottomOffset = function () {
            var that = this;
            return that.$el.offset().top + that.$el.outerHeight();
        };
        return ChapterHeader;
    })(Backbone.View);
    SchrodingersCat.ChapterHeader = ChapterHeader;
})(SchrodingersCat || (SchrodingersCat = {}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVChapterHeaderTemplate = '';
SCVChapterHeaderTemplate += '';
SCVChapterHeaderTemplate += '<span class="chapter-nr"><%= cnum %></span>';
SCVChapterHeaderTemplate += '<h2><%= name %></h2>';
SCVChapterHeaderTemplate += '<div class="chapter-arrow down"></div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVChapterHeaderTemplateForCover = '';
SCVChapterHeaderTemplateForCover += '';
SCVChapterHeaderTemplateForCover += '<span class="chapter-prefix"><%= cnum %></span>';
SCVChapterHeaderTemplateForCover += '<h1><%= name %></h1>';
SCVChapterHeaderTemplateForCover += '<div class="chapter-arrow-prefix down"></div>';
