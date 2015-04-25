/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SchrodingersCat;
(function (SchrodingersCat) {
    var Variable = (function (_super) {
        __extends(Variable, _super);
        function Variable(attributes, options) {
            _super.call(this, attributes, options);
            this.url = "variable.php";
            this.url = PHP_URL + this.url;
            this.defaults = {
                "name": "",
                "act": "",
                "value": "",
            };
        }
        Variable.prototype.parse = function (response, options) {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            if (response.name.indexOf("Asthma") == 0) {
                response.act = 1;
            }
            else if (response.name.indexOf("Cat") == 0) {
                response.act = 2;
            }
            else if (response.name.indexOf("Love") == 0) {
                response.act = 3;
            }
            if (response.value == "true") {
                response.value = true;
            }
            else if (response.value == "false") {
                response.value = false;
            }
            else {
                response.value = parseInt(response.value);
            }
            eval(response.name + " = " + response.value);
            return _super.prototype.parse.call(this, response, options);
        };
        Variable.prototype.toJSON = function (options) {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        };
        return Variable;
    })(Backbone.Model);
    SchrodingersCat.Variable = Variable;
    var Variables = (function (_super) {
        __extends(Variables, _super);
        function Variables(models, options) {
            _super.call(this, models, options);
            this.url = "variables.php";
            this.url = PHP_URL + this.url;
            this.model = Variable;
        }
        Variables.prototype.addVariable = function (_name, _value) {
            var that = this;
            var newVariable = new Variable();
            newVariable.save({
                name: _name,
                value: _value,
            }, {
                wait: true,
                success: function (model, response) {
                    console.log(model.get('name') + ": " + model.get('value'));
                    var exist = false;
                    $.each(that.models, function (index, item) {
                        if (item.get('name') == model.get('name')) {
                            exist = true;
                        }
                    });
                    if (!exist) {
                        SCM.getVariables().add(model);
                    }
                },
                error: function (error) {
                    console.log("error");
                },
            });
        };
        return Variables;
    })(Backbone.Collection);
    SchrodingersCat.Variables = Variables;
})(SchrodingersCat || (SchrodingersCat = {}));
