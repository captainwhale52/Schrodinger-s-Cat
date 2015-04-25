/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class ChapterImage extends Backbone.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
        }
        render(): any {
            var that: ChapterImage = this;
            if (SCV.getViewType() == ViewType.Front) {
                var template = _.template(SCVChapterImageTemplate);
                var data = {
                    image: CONTENT_IMAGE_URL + 'bg_frontcover.jpg',
                    image_blur: CONTENT_IMAGE_URL + 'bg_frontcover_blur.jpg'
                };
                that.$el.html(template(data));
            } else {
                var template = _.template(SCVChapterImageTemplate);
                var data = {
                    image: CONTENT_IMAGE_URL + 'bg_chapter1.jpg',
                    image_blur: CONTENT_IMAGE_URL + 'bg_chapter1_blur.jpg'
                };
                that.$el.html(template(data));
            }
            
            that.$el.css({ 'background-image': 'url(' + data.image_blur + ')' });
            
            that.resize();
            that.addEventListener();
        }

        renderChapter(chapter: Chapter): any {
            var that: ChapterImage = this;
            if (SCV.getViewType() == ViewType.Front) {
                if(SCV.getViewType() == ViewType.Front) {
                    var template = _.template(SCVChapterImageTemplate);
                    var data = {
                        image: CONTENT_IMAGE_URL + 'bg_frontcover.jpg',
                        image_blur: CONTENT_IMAGE_URL + 'bg_frontcover_blur.jpg'
                    };
                    that.$el.html(template(data));
                } else {
                    var template = _.template(SCVChapterImageTemplate);
                    var data = {
                        image: CONTENT_IMAGE_URL + 'bg_chapter1.jpg',
                        image_blur: CONTENT_IMAGE_URL + 'bg_chapter1_blur.jpg'
                    };
                    that.$el.html(template(data));
                }
            } else {
                var template = _.template(SCVChapterImageTemplate);
                var data = {
                    image: CONTENT_IMAGE_URL + chapter.get('image'),
                    image_blur: CONTENT_IMAGE_URL + chapter.get('blur'),
                };
                that.$el.html(template(data));
            }

            that.$el.css({ 'background-image': 'url(' + data.image_blur + ')' });

            that.resize();
            that.addEventListener();
        }

        resize(): any {
            var that: ChapterImage = this;
            that.$('img').height(SCV.getWrapperHeight());
            that.$el.css({ height: SCV.getWrapperHeight() });
        }
        addEventListener(): any {
            var that: ChapterImage = this;

        }
        getChapterImageWidth(): number {
            var that: ChapterImage = this;
            return that.$('img').width();
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVChapterImageTemplate = '';
SCVChapterImageTemplate += '';
SCVChapterImageTemplate +=  '<div class="bg-blur">';
SCVChapterImageTemplate +=      '<img src="<%= image %>" />';
SCVChapterImageTemplate +=  '</div>';
