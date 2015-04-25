/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class Loader extends Backbone.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
        }
        render(): any {
            var that: Loader = this;
        }
        resize(): any {
            
        }
        addEventListener(): any {
            var that: Loader = this;
        }
        show(): void {
            var that: Loader = this;
            that.$el.css({ opacity: 1 });
            that.$el.css({ height: '100%' });
        }
        hide(): void {
            var that: Loader = this;
            that.$el.css({ opacity: 0 });
            that.$el.css({ height: 0 });
        }
        animatedHide(): void {
            var that: Loader = this;
            that.$el.delay(250).animate({ opacity: 0 }, 500).promise().done(function () {
                that.$el.css({ height: 0 });
            });;
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVLoaderTemplate = '';
SCVLoaderTemplate += '';
