var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
var SchrodingersCat;
(function (SchrodingersCat) {
    var Router = (function (_super) {
        __extends(Router, _super);
        function Router(options) {
            this.routes = {
                "": "home",
                "home": "home",
                "act/:cnum": "act",
            };
            _super.call(this, options);
        }
        Router.prototype.start = function () {
            Backbone.history.start();
            console.log("Backbone router is started.");
        };
        Router.prototype.initialize = function () {
        };
        Router.prototype.home = function () {
            this.navigate("/home", { trigger: false, replace: true });
            SCV.getLoader().show();
            console.log("we have loaded the home page");
            SCV.setViewType(0 /* Front */);
            SCV.render();
            SCV.getLoader().animatedHide();
            //this.navigate('act/1');
            /*
            this.navigate("map/" + FMS.getDefaultZoom() + "/" + FMS.getDefaultLat() + "/" + FMS.getDefaultLng() + "/" + FMS.getDefaultInterval()
                + "/" + moment(new Date()).subtract(6, 'month').valueOf() + "/" + moment(new Date()).valueOf() + "/" + moment(new Date()).valueOf(), { trigger: true, replace: true });
            */
            SCP.pauseBG();
            SCM.fetchVariables(0);
        };
        Router.prototype.act = function (cnum) {
            cnum = parseInt(cnum);
            SCP.pauseBG();
            SCV.getLoader().show();
            console.log("we have loaded act " + cnum);
            SCV.setViewType(1 /* Content */);
            //SCM.initializeVariables(cnum);
            SCM.fetchVariables(cnum);
        };
        return Router;
    })(Backbone.Router);
    SchrodingersCat.Router = Router;
})(SchrodingersCat || (SchrodingersCat = {}));
