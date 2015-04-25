/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class MainHeader extends Backbone.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
        }
        render(): any {
            var that: MainHeader = this;
            if (SCV.getViewType() == ViewType.Front) {
                var template = _.template(SCVMainHeaderTemplate);
                var data = {
                    header: 'Schrodinger\'s Cat',
                };
            } else {
                var template = _.template(SCVMainHeaderTemplate);
                var data = {
                    header: '',
                };
            }
            
            that.$el.html(template(data));
            that.addEventListener();

            if (SCV.getViewType() == ViewType.Front) {
                that.animatedShow();
            } else {
                that.checkVisibility();
            }
        }

        renderChapter(chapter: Chapter): any {
            var that: MainHeader = this;
            if (SCV.getViewType() == ViewType.Front) {
                var template = _.template(SCVMainHeaderTemplate);
                var data = {
                    header: '',
                };
            } else {
                var template = _.template(SCVMainHeaderTemplate);
                data = {
                    header: chapter.get('name'),
                };
            }

            that.$el.html(template(data));
            that.addEventListener();

            if (SCV.getViewType() == ViewType.Front) {
                that.animatedShow();
            } else {
                that.checkVisibility();
            }
        }

        addEventListener(): any {
            var that: MainHeader = this;
            that.$('.toggle-menu').off('click');
            that.$('.toggle-menu').on('click', function () {
                SCV.getNavPanel().toggle();
            });
        }
        getHeight(): number {
            var that: MainHeader = this;
            return that.$el.outerHeight();
        }
        animatedHide(): void {
            var that: MainHeader = this;
            that.$el.animate({ top: -1 * that.getHeight() }, 1);
        }
        animatedShow(): void {
            var that: MainHeader = this;
            that.$el.animate({ top: 0 }, 50);
        }
        checkVisibility(): void {
            var that: MainHeader = this;
            if ($(window).scrollTop() < Math.round(SCV.getChapterHeader().getBottomOffset() / 100) * 100 + that.getHeight()) {
                that.animatedHide()
            } else {
                that.animatedShow();
            }
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVMainHeaderTemplate = '';
SCVMainHeaderTemplate += '<a class="toggle-menu"></a>';
SCVMainHeaderTemplate += '<%= header %>';


