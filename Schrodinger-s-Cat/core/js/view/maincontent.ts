/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class MainContent extends Backbone.View<Backbone.Model> {
        timeoutCur: number;
        timeoutMax: number;
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
            this.timeoutCur = 0;
            this.timeoutMax = 100;
        }
        render(): any {
            var that: MainContent = this;
            
            that.resize();
            that.addEventListener();
        }

        renderPassage(passage: Passage) {
            if (passage) {
                var that: MainContent = this;
                var template = _.template(SCVMainContentTemplate);

                var data = {
                    first: passage.get('first'),
                    passage: passage.get('context'),
                    choices: passage.get('choices'),

                };
                that.$el.html(template(data));
                that.resize();
                that.addEventListener();
                that.addChoicesEventListener(passage.get('choices'));
            }
            
        }

        resize(): any {
            var that: MainContent = this;
            that.$('.chapter-text').css({ 'padding-left': Math.min(Math.round(SCV.getWrapperWidth() / 15), 45 ) });
            that.$('.chapter-text').css({ 'padding-right': Math.min(Math.round(SCV.getWrapperWidth() / 15), 45) });
            if (SCV.getChapterImage().getChapterImageWidth() != 0) {
                that.timeoutCur = 0;
                that.$('.chapter-inner').css({ 'max-width': SCV.getChapterImage().getChapterImageWidth() - 40 });
            } else {
                that.timeoutCur++;
                if (that.timeoutCur < that.timeoutMax) {
                    setTimeout(function () {
                        that.resize();
                    }, 1);
                }
            }
        }
        getTopOffset(): number {
            var that: MainContent = this;
            return that.$el.offset().top;
        }
        addEventListener(): any {
            var that: MainContent = this;
        }
        addChoicesEventListener(choices: Choices): void {
            var that: MainContent = this;
            $('.choice').off('click');
            $.each(choices.models, function (index: number, model: Choice) {
                // add click event listener
                $('.choice[data-next="' + model.get('next') + '"]').on('click', function () {
                    var item = $(this);
                    SCV.passageScrollElement = item;
                    if (item.attr('data-variable') != '' && item.attr('data-value') != '') {
                        // update variables
                        eval(item.attr('data-variable') + " = " + item.attr('data-value'));
                        SCM.getVariables().addVariable(item.attr('data-variable'), item.attr('data-value'));
                        //console.log(item.attr('data-variable') + " = " + item.attr('data-value'));
                    }

                    SCM.updatePassages();
                    
                    setTimeout(function () {
                        if (SCM.getPassages().findWhere({ name: item.attr('data-next') }) != undefined) {
                            $('.choice').each(function () {
                                if ($(this).attr('data-fixed') == 'false' && $(this).attr('data-next') != model.get('next')) {
                                    $(this).remove();
                                }
                            });
                        }
                        that.appendPassage(SCM.getPassages().findWhere({ name: item.attr('data-next') }));
                    }, 250 + Math.round(Math.random() * 200));
                    
                });
                // add jrumble effect
                $('.choice[data-next="' + model.get('next') + '"]').jrumble({ speed: 250, x: 0.2, y: 0.1 });
                $('.choice[data-next="' + model.get('next') + '"]').mouseenter(function () {
                    if ($(this).attr('data-fixed') == 'false') {
                        $(this).trigger('startRumble');
                    }
                });
                $('.choice[data-next="' + model.get('next') + '"]').mouseleave(function () {
                    $(this).trigger('stopRumble');
                });
            });
        }

        removeChoicesEventListener(): void {
            $('.choice').attr({'data-fixed': 'true'});
            $('.choice').removeAttr('data-next');
            $('.choice').trigger('stopRumble');
        }

        appendPassage(passage: Passage): void {
            var that: MainContent = this;
            if (passage != undefined) {
                that.removeChoicesEventListener();

                var template = _.template(SCVMainContentAppendTemplate);

                var data = {
                    first: passage.get('first'),
                    passage: passage.get('context'),
                    choices: passage.get('choices'),

                };

                var div = $(template(data)).hide();
                that.$('.chapter-inner').append(div);
                div.fadeIn();

                that.addEventListener();
                that.addChoicesEventListener(passage.get('choices'));
                SCV.scrollToNextPassage();

                // handling last passage
                if (passage.get('isLast') == true) {
                    SCM.setCurChapterComplete();
                    if (Math.round(SCM.getCurChapterNumber()) + 1 == 5) {
                        var nextChapter: Chapter = SCM.getChapters().findWhere({ cid: 0 });
                    } else {
                        nextChapter = SCM.getChapters().findWhere({ cid: Math.round(SCM.getCurChapterNumber() + 1) });
                    }
                    
                    SCV.getNextChapter().renderChapter(nextChapter);
                    
                }
            } else {
                console.log("- Passage is not found -");
            }
            
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVMainContentTemplate = '';
SCVMainContentTemplate += '';
SCVMainContentTemplate +=   '<div class="chapter-inner">';
SCVMainContentTemplate +=       '<span class="caps"><%= first %></span>';
SCVMainContentTemplate +=       '<%= passage %>';
SCVMainContentTemplate +=       '<div class="choice-wrapper">';
SCVMainContentTemplate +=           '<% _.each(choices.models, function (choice) { %>';
SCVMainContentTemplate +=           '<div class="choice" data-next="<%= choice.get("next") %>" data-fixed="false" data-variable="<%= choice.get("variable") %>" data-value="<%= choice.get("value") %>"><%= choice.get("context") %></div>';
SCVMainContentTemplate +=           '<% }); %>';
SCVMainContentTemplate +=       '</div>';
SCVMainContentTemplate +=   '</div>';

var SCVMainContentAppendTemplate = '';
SCVMainContentAppendTemplate += '';
SCVMainContentAppendTemplate += '<%= passage %>';
SCVMainContentAppendTemplate += '<div class="choice-wrapper">';
SCVMainContentAppendTemplate += '<% _.each(choices.models, function (choice) { %>';
SCVMainContentAppendTemplate += '<div class="choice" data-next="<%= choice.get("next") %>" data-fixed="false" data-variable="<%= choice.get("variable") %>" data-value="<%= choice.get("value") %>"><%= choice.get("context") %></div>';
SCVMainContentAppendTemplate += '<% }); %>';
SCVMainContentAppendTemplate += '</div>';