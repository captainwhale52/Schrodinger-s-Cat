/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
module SchrodingersCat {
    export class Router extends Backbone.Router {
        constructor(options?: Backbone.RouterOptions) {
            this.routes = {
                "": "home",
                "act/:cnum": "act",
                //"map/:zoom/:lat/:lng/:interval/:start/:end/:cur": "map",
            }
            super(options);
        }
        start(): void {
            Backbone.history.start();
            console.log("Backbone router is started.");
        }
        initialize() {

        }
        home() {
            SCV.getLoader().show();
            console.log("we have loaded the home page");
            SCV.setViewType(ViewType.Front);
            SCV.render();
            SCV.getLoader().animatedHide();
            //this.navigate('act/1');
            /*
            this.navigate("map/" + FMS.getDefaultZoom() + "/" + FMS.getDefaultLat() + "/" + FMS.getDefaultLng() + "/" + FMS.getDefaultInterval()
                + "/" + moment(new Date()).subtract(6, 'month').valueOf() + "/" + moment(new Date()).valueOf() + "/" + moment(new Date()).valueOf(), { trigger: true, replace: true });
            */

            SCP.pauseBG();
        }
        act(cnum: any) {
            cnum = parseInt(cnum);
            
            SCV.getLoader().show();
            console.log("we have loaded act " + cnum);
            SCV.setViewType(ViewType.Content);
            SCM.initializeChapters();
            SCM.initializeVariables(cnum);
            SCM.initializePassages(cnum);

            var passage = SCM.getPassages().findWhere({ name: SCM.getChapters().findWhere({ cid: cnum }).get("passage") });
            
            SCV.renderContents(passage, SCM.getChapters().findWhere({ cid: cnum }), SCM.getChapters().findWhere({ cid: (cnum + 1) }));
            //SCV.getChapterHeader().renderChapter(SCM.getChapters().findWhere({ cid: cnum }));
            //SCV.getNextChapter().renderChapter(SCM.getChapters().findWhere({ cid: (cnum + 1) }));
            SCV.getLoader().animatedHide();

            SCP.playBG(cnum);
        }
        /*
        map(zoom: number, lat: number, lng: number, interval: number, start: number, end: number, cur: number) {
            console.log("we have loaded the map page with zoom: " + zoom + " | lat: " + lat + " | lng: " + lng);
            FMV.getMapView().renderMap(lat, lng, zoom);
            FMV.getSliderView().renderSlider(interval, start, end, cur);
        }
        */
        /*
        refresh() {
            console.log("refresh");
            window.location.reload();
            //FMC.getRouter().navigate('map/' + FMV.getMapView().getMap().getZoom() + "/" + FMV.getMapView().getMap().getCenter().lat + "/" + FMV.getMapView().getMap().getCenter().lng + "/" + FMV.getSliderView().getTimeInterval()
            //    + "/" + FMV.getSliderView().getStartDateValue() + "/" + FMV.getSliderView().getEndDateValue() + "/" + FMV.getSliderView().getCurDateValue(), { trigger: true, replace: true });
        }
        */
    }
}