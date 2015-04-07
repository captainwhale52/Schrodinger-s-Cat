/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class NextChapter extends Backbone.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
        }
        render(): any {
            var that: NextChapter = this;
            var template = _.template(SCVNextChapterTemplate);

            var data = {
                cnum: '',
                name: '',
                hash: '',
            };
            that.$el.html(template(data));
            that.resize();
            that.addEventListener();
        }

        renderChapter(chapter: Chapter): any {
            var that: NextChapter = this;
            if (SCV.getViewType() == ViewType.Front) {

            } else {
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
        }

        resize(): any {
            var that: NextChapter = this;
            
        }
        addEventListener(): any {
            var that: NextChapter = this;

        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVNextChapterTemplate = '';
SCVNextChapterTemplate += '';
SCVNextChapterTemplate +=   '<a href="<%= hash %>">';
SCVNextChapterTemplate +=       '<div class="next-chapter-title">';
SCVNextChapterTemplate +=           '<span class="chapter-nr"><%= cnum %></span>';
SCVNextChapterTemplate +=           '<h2><%= name %></h2>';
SCVNextChapterTemplate +=           '<span class="chapter-arrow next"></span>';
SCVNextChapterTemplate +=       '</div>';
SCVNextChapterTemplate +=   '</a>';


