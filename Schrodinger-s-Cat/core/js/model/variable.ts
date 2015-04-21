/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 

module SchrodingersCat {
    export class Variable extends Backbone.Model {
        url: string = "variable.php";
        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            this.url = PHP_URL + this.url;
            this.defaults = <any>{
                "name": "",
                "act": "",
                "value": "",
            };
        }
        parse(response: any, options?: any): any {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            if (response.name.indexOf("Asthma") == 0) {
                response.act = 1;
            }
            if (response.value == "true") {
                response.value = true;
            } else if (response.value == "false") {
                response.value = false;
            } else {
                response.value = parseInt(response.value);
            }
            eval(response.name + " = " + response.value);
            return super.parse(response, options);
        }
        toJSON(options?: any): any {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        }
    }
    export class Variables extends Backbone.Collection<Variable> {
        url: string = "variables.php";
        constructor(models?: Variable[], options?: any) {
            super(models, options);
            this.url = PHP_URL + this.url;
            this.model = Variable;
        }
        addVariable(_name: any, _value: any) {
            var that: Variables = this;
            var newVariable = new Variable();
            newVariable.save(
                {
                    name: _name,
                    value: _value,
                },
                {
                    wait: true,
                    success: function (model: Variable, response: any) {
                        console.log(model.get('name') + ": " + model.get('value'));
                        var exist: boolean = false;
                        $.each(that.models, function (index: number, item: Variable) {
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
        }
    }
}