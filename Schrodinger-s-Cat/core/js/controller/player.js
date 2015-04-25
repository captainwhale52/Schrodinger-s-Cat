/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 
var SchrodingersCat;
(function (SchrodingersCat) {
    var Player = (function () {
        function Player() {
        }
        Player.prototype.playBG = function (cid) {
            var that = this;
            if (cid == 1) {
                that.bgAudio = $('#act_1_audio_1').get(0);
                that.bgAudio.loop = false;
                if (that.bgAudio.currentTime)
                    that.bgAudio.currentTime = 0;
                that.bgAudio.play();
                SCV.getNavPanel().setPlayPauseButton(true);
                // Add Player end event listener
                $('#act_1_audio_1').bind('ended', function () {
                    SCV.getNavPanel().setPlayPauseButton(false);
                });
            }
            else if (cid == 2) {
                that.bgAudio = $('#act_2_audio_1').get(0);
                that.bgAudio.loop = false;
                if (that.bgAudio.currentTime)
                    that.bgAudio.currentTime = 0;
                that.bgAudio.play();
                SCV.getNavPanel().setPlayPauseButton(true);
                // Add Player end event listener
                $('#act_2_audio_1').bind('ended', function () {
                    SCV.getNavPanel().setPlayPauseButton(false);
                });
            }
            else if (cid == 3) {
                that.bgAudio = $('#act_3_audio_1').get(0);
                that.bgAudio.loop = false;
                if (that.bgAudio.currentTime)
                    that.bgAudio.currentTime = 0;
                that.bgAudio.play();
                SCV.getNavPanel().setPlayPauseButton(true);
                // Add Player end event listener
                $('#act_3_audio_1').bind('ended', function () {
                    SCV.getNavPanel().setPlayPauseButton(false);
                });
            }
            else {
                if (that.bgAudio != undefined) {
                    that.bgAudio.pause();
                }
                SCV.getNavPanel().setPlayPauseButton(false);
                console.log("- Audio is not found. -");
            }
        };
        Player.prototype.pauseBG = function () {
            var that = this;
            if (that.bgAudio != undefined) {
                that.bgAudio.pause();
            }
            if (SCV.getNavPanel()) {
                SCV.getNavPanel().setPlayPauseButton(false);
            }
        };
        Player.prototype.resumeBG = function () {
            var that = this;
            if (that.bgAudio != undefined) {
                that.bgAudio.play();
            }
            SCV.getNavPanel().setPlayPauseButton(true);
        };
        return Player;
    })();
    SchrodingersCat.Player = Player;
})(SchrodingersCat || (SchrodingersCat = {}));
