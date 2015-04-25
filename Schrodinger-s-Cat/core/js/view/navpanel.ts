/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />

module SchrodingersCat {
    export class NavPanel extends Backbone.View<Backbone.Model> {
        private isOpen: boolean;
        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            this.setElement(options.el);
            this.isOpen = false;
        }
        render(): any {
            var that: NavPanel = this;
            var template = _.template(SCVNavPanelTemplate);
            var data = {
                chapters: SCM.getChapters().models,
            };
            that.$el.html(template(data));
            that.addEventListener();

            $('div[data-hash="#home"]').on('click', function () {
                SCR.navigate('home', { trigger: true, replace: true });
            });
            $('div[data-hash="#act/1"]').on('click', function () {
                SCR.navigate('', { trigger: false, replace: true });
                SCR.navigate('act/1', { trigger: true, replace: true });
            });
            $('div[data-hash="#act/2"]').on('click', function () {
                if (Asthma_Complete) {
                    SCR.navigate('', { trigger: false, replace: true });
                    SCR.navigate('act/2', { trigger: true, replace: true });
                }
            });
            $('div[data-hash="#act/3"]').on('click', function () {
                if (Asthma_Complete && Cat_Complete) {
                    SCR.navigate('', { trigger: false, replace: true });
                    SCR.navigate('act/3', { trigger: true, replace: true });
                }
            });
        }
        addEventListener(): any {
            var that: NavPanel = this;
            that.$('.toggle-menu').off('click');
            that.$('.toggle-menu').on('click', function () {
                that.toggle();
            });

            that.$('#play').off('click');
            that.$('#play').on('click', function () {
                SCP.resumeBG();
            });

            that.$('#pause').off('click');
            that.$('#pause').on('click', function () {
                SCP.pauseBG();
            });
        }
        show(): void {
            var that: NavPanel = this;
            that.$('#main-nav').addClass('show-main-nav');
        }
        hide(): void {
            var that: NavPanel = this;
            that.$('#main-nav').removeClass('show-main-nav');
        }
        toggle(): void {
            var that: NavPanel = this;
            that.isOpen = !that.isOpen;
            if (that.isOpen) {
                that.show();
            } else {
                that.hide();
            }
        }
        setPlayPauseButton(_isPlaying: boolean): void {
            var that: NavPanel = this;
            if (_isPlaying) {
                that.$('#play').hide();
                that.$('#pause').show();
            } else {
                that.$('#play').show();
                that.$('#pause').hide();
            }
            
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SCVNavPanelTemplate = '';
SCVNavPanelTemplate +=  '<nav class="main-nav" id="main-nav">';
SCVNavPanelTemplate +=      '<div id="scrollable">';
SCVNavPanelTemplate +=          '<div class="top-panel">';
SCVNavPanelTemplate +=              '<a id="play"></a>';
SCVNavPanelTemplate +=              '<a id="pause"></a>';
SCVNavPanelTemplate +=              '<a class="toggle-menu"></a>';
SCVNavPanelTemplate +=          '</div>';   // .top-panel
SCVNavPanelTemplate +=          '<div class="navwrapper">';
SCVNavPanelTemplate +=          '<% _.each(chapters, function (item) { %>';
SCVNavPanelTemplate +=              '<% if (item.get("visible") == true && item.get("hide") == false) { %>';
SCVNavPanelTemplate +=              '<div class="nav-chapter" data-hash="<%= item.get("hash") %>">';
SCVNavPanelTemplate +=                  '<% if (item.get("cnum") != "") { %>';
SCVNavPanelTemplate +=                  '<span class="chapter_number"><%= item.get("cnum") %></span>';
SCVNavPanelTemplate +=                  '<% } %>';
SCVNavPanelTemplate +=                  '<%= item.get("name") %>';
SCVNavPanelTemplate +=              '</div>';
SCVNavPanelTemplate +=              '<% } else if (item.get("visible") == false && item.get("hide") == false) { %>';
SCVNavPanelTemplate +=                  '<div class="nav-chapter" style="text-decoration: line-through; opacity: 0.5 !important;">';
SCVNavPanelTemplate +=                  '<% if (item.get("cnum") != "") { %>';
SCVNavPanelTemplate +=                      '<span class="chapter_number"><%= item.get("cnum") %></span>';
SCVNavPanelTemplate +=                  '<% } %>';
SCVNavPanelTemplate +=                  '<%= item.get("name") %>';
SCVNavPanelTemplate +=                  '</div>';
SCVNavPanelTemplate +=              '<% } %>';
SCVNavPanelTemplate +=          '<% }); %>';
SCVNavPanelTemplate +=          '</div>';
SCVNavPanelTemplate +=      '</div>';   // #scrollable

SCVNavPanelTemplate += '</nav>';    // #main-nav





