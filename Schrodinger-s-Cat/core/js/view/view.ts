/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

enum ViewType {
    Front = 0, Content = 1
}

module SchrodingersCat {
    export class View extends Backbone.View<Backbone.Model> {
        private viewType: ViewType;
        private mLoader: Loader;
        private mNavPanel: NavPanel;
        private mMainHeader: MainHeader;
        private mChapterHeader: ChapterHeader;
        private mChapterImage: ChapterImage;
        private mMainContent: MainContent;
        private mNextChapter: NextChapter;

        public passageScrollElement: any;

        private isSystemScrolling: boolean;
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
            this.isSystemScrolling = false;
            this.viewType = ViewType.Front;

            this.mLoader = new SchrodingersCat.Loader({ el: $('#loader') });
        }
        render(): any {
            var that: View = this;
            
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
        }

        renderContents(passage: Passage, curChapter: Chapter, nextChapter: Chapter): any {
            var that: View = this;

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
        }

        resize(): any {
            var that: View = this;
            if (that.getViewType() == ViewType.Front) {
                that.$("#main-content").css({ visibility: 'hidden' });
                that.$("#main-content").css({ top: -10000 });
            } else {
                that.$("#main-content").css({ visibility: 'visible' });
                that.$("#main-content").css({ top: Math.round(SCV.getWrapperHeight() * 1.35) });
            }
        }
        scrollToTop(): void {
            $("html, body").delay(100).animate({ scrollTop: $('body').offset().top }, 1);
        }
        scrollToNextPassage(): void {
            var that: View = this;
            that.setSystemScrolling(false);
            //$("html, body").animate({ scrollTop: $(window).scrollTop() + 180 }, 750).promise().done(function () {
            $("html, body").animate({ scrollTop: that.passageScrollElement.offset().top - 80 }, 1250).promise().done(function () {
                that.getMainHeader().checkVisibility();
                that.setSystemScrolling(false);
            });
        }
        addEventListener(): any {
            var that: View = this;
            $(window).resize(function () {
                that.resize();
                that.mChapterHeader.resize();
                that.mChapterImage.resize();
                that.mMainContent.resize();
                that.mNextChapter.resize();
            });
            $(window).scroll(function () {
                if (that.getViewType() == ViewType.Front) {

                } else {
                    if (!that.isSystemScrolling) {
                        that.mMainHeader.checkVisibility();
                    }
                }
                
            });
        }
        setSystemScrolling(_isScrolling: boolean): void {
            var that: View = this;
            that.isSystemScrolling = _isScrolling;
        }
        getWrapperWidth(): number {
            return $(window).innerWidth();
        }
        getWrapperHeight(): number {
            return $(window).innerHeight();
        }

        getNavPanel(): NavPanel {
            return this.mNavPanel;
        }
        getMainHeader(): MainHeader {
            return this.mMainHeader;
        }
        getChapterHeader(): ChapterHeader {
            return this.mChapterHeader;
        }
        getChapterImage(): ChapterImage {
            return this.mChapterImage;
        }
        getMainContent(): MainContent {
            return this.mMainContent;
        }
        getNextChapter(): NextChapter {
            return this.mNextChapter;
        }
        setViewType(_viewType: ViewType) {
            this.viewType = _viewType;
        }
        getViewType(): ViewType {
            return this.viewType;
        }
        getLoader(): Loader {
            return this.mLoader;
        }
    }
} 