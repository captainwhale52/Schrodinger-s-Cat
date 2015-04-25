/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ViewType;
(function (ViewType) {
    ViewType[ViewType["Front"] = 0] = "Front";
    ViewType[ViewType["Content"] = 1] = "Content";
})(ViewType || (ViewType = {}));
var SchrodingersCat;
(function (SchrodingersCat) {
    var View = (function (_super) {
        __extends(View, _super);
        function View(options) {
            _super.call(this, options);
            this.setElement(options.el);
            this.isSystemScrolling = false;
            this.viewType = 0 /* Front */;
            this.mLoader = new SchrodingersCat.Loader({ el: $('#loader') });
        }
        View.prototype.render = function () {
            var that = this;
            that.mNavPanel = new SchrodingersCat.NavPanel({ el: $("#navpanel") });
            that.mMainHeader = new SchrodingersCat.MainHeader({ el: $("#main-header") });
            that.mChapterHeader = new SchrodingersCat.ChapterHeader({ el: $("#chapter-header") });
            that.mChapterImage = new SchrodingersCat.ChapterImage({ el: $("#chapter-image") });
            that.mMainContent = new SchrodingersCat.MainContent({ el: $("#chapter-text") });
            that.mNextChapter = new SchrodingersCat.NextChapter({ el: $("#next-chapter") });
            that.mNavPanel.render();
            that.mMainHeader.render();
            that.mChapterHeader.render();
            that.mChapterImage.render();
            that.mMainContent.render();
            that.mNextChapter.render();
            that.isSystemScrolling = false;
            that.resize();
            that.scrollToTop();
            that.addEventListener();
        };
        View.prototype.renderContents = function (passage, curChapter, nextChapter) {
            var that = this;
            if (!that.mNavPanel || that.mNavPanel == undefined) {
                that.mNavPanel = new SchrodingersCat.NavPanel({ el: $("#navpanel") });
            }
            if (!that.mMainHeader || that.mMainHeader == undefined) {
                that.mMainHeader = new SchrodingersCat.MainHeader({ el: $("#main-header") });
            }
            if (!that.mChapterHeader || that.mChapterHeader == undefined) {
                that.mChapterHeader = new SchrodingersCat.ChapterHeader({ el: $("#chapter-header") });
            }
            if (!that.mChapterImage || that.mChapterImage == undefined) {
                that.mChapterImage = new SchrodingersCat.ChapterImage({ el: $("#chapter-image") });
            }
            if (!that.mMainContent || that.mMainContent == undefined) {
                that.mMainContent = new SchrodingersCat.MainContent({ el: $("#chapter-text") });
            }
            if (!that.mNextChapter || that.mNextChapter == undefined) {
                that.mNextChapter = new SchrodingersCat.NextChapter({ el: $("#next-chapter") });
            }
            that.mNavPanel.render();
            that.mMainHeader.renderChapter(curChapter);
            that.mChapterHeader.renderChapter(curChapter);
            that.mChapterImage.renderChapter(curChapter);
            that.mMainContent.renderPassage(passage);
            that.mNextChapter.render();
            //that.mNextChapter.renderChapter(nextChapter);
            that.isSystemScrolling = false;
            that.resize();
            that.scrollToTop();
            that.addEventListener();
        };
        View.prototype.resize = function () {
            var that = this;
            if (that.getViewType() == 0 /* Front */) {
                that.$("#main-content").css({ visibility: 'hidden' });
                that.$("#main-content").css({ top: -10000 });
            }
            else {
                that.$("#main-content").css({ visibility: 'visible' });
                that.$("#main-content").css({ top: Math.round(SCV.getWrapperHeight() * 1.35) });
            }
        };
        View.prototype.scrollToTop = function () {
            $("html, body").delay(100).animate({ scrollTop: $('body').offset().top }, 1);
        };
        View.prototype.scrollToNextPassage = function () {
            var that = this;
            that.setSystemScrolling(false);
            //$("html, body").animate({ scrollTop: $(window).scrollTop() + 180 }, 750).promise().done(function () {
            $("html, body").animate({ scrollTop: that.passageScrollElement.offset().top - 80 }, 1250).promise().done(function () {
                that.getMainHeader().checkVisibility();
                that.setSystemScrolling(false);
            });
        };
        View.prototype.addEventListener = function () {
            var that = this;
            $(window).resize(function () {
                that.resize();
                that.mChapterHeader.resize();
                that.mChapterImage.resize();
                that.mMainContent.resize();
                that.mNextChapter.resize();
            });
            $(window).scroll(function () {
                if (that.getViewType() == 0 /* Front */) {
                }
                else {
                    if (!that.isSystemScrolling) {
                        that.mMainHeader.checkVisibility();
                    }
                }
            });
        };
        View.prototype.setSystemScrolling = function (_isScrolling) {
            var that = this;
            that.isSystemScrolling = _isScrolling;
        };
        View.prototype.getWrapperWidth = function () {
            return $(window).innerWidth();
        };
        View.prototype.getWrapperHeight = function () {
            return $(window).innerHeight();
        };
        View.prototype.getNavPanel = function () {
            return this.mNavPanel;
        };
        View.prototype.getMainHeader = function () {
            return this.mMainHeader;
        };
        View.prototype.getChapterHeader = function () {
            return this.mChapterHeader;
        };
        View.prototype.getChapterImage = function () {
            return this.mChapterImage;
        };
        View.prototype.getMainContent = function () {
            return this.mMainContent;
        };
        View.prototype.getNextChapter = function () {
            return this.mNextChapter;
        };
        View.prototype.setViewType = function (_viewType) {
            this.viewType = _viewType;
        };
        View.prototype.getViewType = function () {
            return this.viewType;
        };
        View.prototype.getLoader = function () {
            return this.mLoader;
        };
        return View;
    })(Backbone.View);
    SchrodingersCat.View = View;
})(SchrodingersCat || (SchrodingersCat = {}));
