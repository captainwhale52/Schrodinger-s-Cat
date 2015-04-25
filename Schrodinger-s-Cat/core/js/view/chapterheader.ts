/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class ChapterHeader extends Backbone.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
        }
        render(): any {
            var that: ChapterHeader = this;

            if (SCV.getViewType() == ViewType.Front) {
                var template = _.template(SCVChapterHeaderTemplateForCover);
                var data = {
                    cnum: 'Perspective Demons',
                    name: 'Schrodinger\'s Cat',
                };
                that.$el.html(template(data));
            } else {
                var template = _.template(SCVChapterHeaderTemplate);
                var data = {
                    cnum: '01',
                    name: 'Gateway',
                };
                that.$el.html(template(data));
            }
            
            
            that.resize();
            that.addEventListener();
        }

        renderChapter(chapter: Chapter): any {
            var that: ChapterHeader = this;

            if (SCV.getViewType() == ViewType.Front) {

            } else {
                var template = _.template(SCVChapterHeaderTemplate);
                var data = {
                    cnum: chapter.get('cnum'),
                    name: chapter.get('name'),
                };
                that.$el.html(template(data));
            }


            that.resize();
            that.addEventListener();
        }

        resize(): any {
            var that: ChapterHeader = this;
            if (SCV.getViewType() == ViewType.Front) {
                that.$el.css({ top: Math.round(SCV.getWrapperHeight() / 2 - 50) });
                that.$el.css({ 'padding-top': 30, 'padding-bottom': 20 });
            } else {
                that.$el.removeAttr('style');
                that.$el.css({ top: 0 });
            }
        }
        addEventListener(): any {
            var that: ChapterHeader = this;
            that.$el.off('click');
            that.$el.on('click', function () {
                SCV.setSystemScrolling(true);
                if (SCV.getViewType() == ViewType.Front) {
                    SCR.navigate('act/1', { trigger: true, replace: true });
                } else {
                    $('html, body').animate({ scrollTop: SCV.getMainContent().getTopOffset() }, 1000).promise().done(function () {
                        SCV.getMainHeader().checkVisibility();
                        SCV.setSystemScrolling(false);
                    });
                    SCP.resumeBG();
                }
                
            });
        }
        getBottomOffset(): number {
            var that: ChapterHeader = this;
            return that.$el.offset().top + that.$el.outerHeight();
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVChapterHeaderTemplate =  '';
SCVChapterHeaderTemplate += '';
SCVChapterHeaderTemplate +=     '<span class="chapter-nr"><%= cnum %></span>';
SCVChapterHeaderTemplate +=     '<h2><%= name %></h2>';
SCVChapterHeaderTemplate +=     '<div class="chapter-arrow down"></div>';


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVChapterHeaderTemplateForCover = '';
SCVChapterHeaderTemplateForCover += '';
SCVChapterHeaderTemplateForCover +=     '<span class="chapter-prefix"><%= cnum %></span>';
SCVChapterHeaderTemplateForCover +=     '<h1><%= name %></h1>';
SCVChapterHeaderTemplateForCover +=     '<div class="chapter-arrow-prefix down"></div>';