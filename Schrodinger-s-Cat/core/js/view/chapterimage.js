/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var ChapterImage = (function (_super) {
        __extends(ChapterImage, _super);
        function ChapterImage(options) {
            _super.call(this, options);
            this.setElement(options.el);
        }
        ChapterImage.prototype.render = function () {
            var that = this;
            if (SCV.getViewType() == 0 /* Front */) {
                var template = _.template(SCVChapterImageTemplate);
                var data = {
                    image: CONTENT_IMAGE_URL + 'bg_frontcover.jpg',
                    image_blur: CONTENT_IMAGE_URL + 'bg_frontcover_blur.jpg'
                };
                that.$el.html(template(data));
            }
            else {
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
        };
        ChapterImage.prototype.renderChapter = function (chapter) {
            var that = this;
            if (SCV.getViewType() == 0 /* Front */) {
                if (SCV.getViewType() == 0 /* Front */) {
                    var template = _.template(SCVChapterImageTemplate);
                    var data = {
                        image: CONTENT_IMAGE_URL + 'bg_frontcover.jpg',
                        image_blur: CONTENT_IMAGE_URL + 'bg_frontcover_blur.jpg'
                    };
                    that.$el.html(template(data));
                }
                else {
                    var template = _.template(SCVChapterImageTemplate);
                    var data = {
                        image: CONTENT_IMAGE_URL + 'bg_chapter1.jpg',
                        image_blur: CONTENT_IMAGE_URL + 'bg_chapter1_blur.jpg'
                    };
                    that.$el.html(template(data));
                }
            }
            else {
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
        };
        ChapterImage.prototype.resize = function () {
            var that = this;
            that.$('img').height(SCV.getWrapperHeight());
            that.$el.css({ height: SCV.getWrapperHeight() });
        };
        ChapterImage.prototype.addEventListener = function () {
            var that = this;
        };
        ChapterImage.prototype.getChapterImageWidth = function () {
            var that = this;
            return that.$('img').width();
        };
        return ChapterImage;
    })(Backbone.View);
    SchrodingersCat.ChapterImage = ChapterImage;
})(SchrodingersCat || (SchrodingersCat = {}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVChapterImageTemplate = '';
SCVChapterImageTemplate += '';
SCVChapterImageTemplate += '<div class="bg-blur">';
SCVChapterImageTemplate += '<img src="<%= image %>" />';
SCVChapterImageTemplate += '</div>';
