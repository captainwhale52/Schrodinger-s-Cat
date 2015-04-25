/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var Passage = (function (_super) {
        __extends(Passage, _super);
        function Passage(attributes, options) {
            _super.call(this, attributes, options);
            this.defaults = {
                "name": "",
                "first": "",
                "context": "",
                "choices": Choices,
                "isLast": false,
            };
        }
        Passage.prototype.parse = function (response, options) {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            return _super.prototype.parse.call(this, response, options);
        };
        Passage.prototype.toJSON = function (options) {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        };
        return Passage;
    })(Backbone.Model);
    SchrodingersCat.Passage = Passage;
    var Passages = (function (_super) {
        __extends(Passages, _super);
        function Passages(models, options) {
            _super.call(this, models, options);
            this.model = Passage;
        }
        return Passages;
    })(Backbone.Collection);
    SchrodingersCat.Passages = Passages;
    var Choice = (function (_super) {
        __extends(Choice, _super);
        function Choice(attributes, options) {
            _super.call(this, attributes, options);
            this.defaults = {
                "context": "",
                "next": "",
                "variable": "",
                "value": "",
            };
        }
        Choice.prototype.parse = function (response, options) {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            return _super.prototype.parse.call(this, response, options);
        };
        Choice.prototype.toJSON = function (options) {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        };
        return Choice;
    })(Backbone.Model);
    SchrodingersCat.Choice = Choice;
    var Choices = (function (_super) {
        __extends(Choices, _super);
        function Choices(models, options) {
            _super.call(this, models, options);
            this.model = Choice;
        }
        return Choices;
    })(Backbone.Collection);
    SchrodingersCat.Choices = Choices;
})(SchrodingersCat || (SchrodingersCat = {}));
