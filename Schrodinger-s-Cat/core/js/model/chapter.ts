/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 

module SchrodingersCat {
    export class Chapter extends Backbone.Model {
        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            this.defaults = <any>{
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
    export class Chapters extends Backbone.Collection<Chapter> {
        constructor(models?: Chapter[], options?: any) {
            super(models, options);
            this.model = Chapter;
        }
        comparator(compare: Chapter, to?: Chapter): number {
            if (parseInt(compare.get("cid")) > parseInt(to.get("cid"))) {
                return 1;
            } else if (parseInt(compare.get("cid")) < parseInt(to.get("cid"))) {
                return -1;
            }
            return 0;
        }
        
    }
}