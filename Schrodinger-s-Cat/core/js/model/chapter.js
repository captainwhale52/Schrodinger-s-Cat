/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var Chapter = (function (_super) {
        __extends(Chapter, _super);
        function Chapter(attributes, options) {
            _super.call(this, attributes, options);
            this.defaults = {
                "name": "",
                "cid": "",
                "cnum": "",
                "hash": "",
                "passage": "",
                "visible": "",
                "hide": "",
                "image": "",
                "blur": "",
            };
        }
        Chapter.prototype.parse = function (response, options) {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            return _super.prototype.parse.call(this, response, options);
        };
        Chapter.prototype.toJSON = function (options) {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        };
        return Chapter;
    })(Backbone.Model);
    SchrodingersCat.Chapter = Chapter;
    var Chapters = (function (_super) {
        __extends(Chapters, _super);
        function Chapters(models, options) {
            _super.call(this, models, options);
            this.model = Chapter;
        }
        Chapters.prototype.comparator = function (compare, to) {
            if (parseInt(compare.get("cid")) > parseInt(to.get("cid"))) {
                return 1;
            }
            else if (parseInt(compare.get("cid")) < parseInt(to.get("cid"))) {
                return -1;
            }
            return 0;
        };
        return Chapters;
    })(Backbone.Collection);
    SchrodingersCat.Chapters = Chapters;
})(SchrodingersCat || (SchrodingersCat = {}));
