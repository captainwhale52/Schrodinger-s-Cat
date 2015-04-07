/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 

module SchrodingersCat {
    export class Passage extends Backbone.Model {
        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            this.defaults = <any>{
                "name": "",
                "first": "",
                "context": "",
                "choices": Choices,
                "isLast": false,
            };
        }
        parse(response: any, options?: any): any {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
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
    export class Passages extends Backbone.Collection<Passage> {
        constructor(models?: Passage[], options?: any) {
            super(models, options);
            this.model = Passage;
        }
    }

    export class Choice extends Backbone.Model {
        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            this.defaults = <any>{
                "context": "",
                "next": "",
            };
        }
        parse(response: any, options?: any): any {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
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
    export class Choices extends Backbone.Collection<Choice> {
        constructor(models?: Choice[], options?: any) {
            super(models, options);
            this.model = Choice;
        }
    }
}