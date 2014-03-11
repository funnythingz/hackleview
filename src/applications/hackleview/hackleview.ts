/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../../definitions/handlebars.d.ts" />

module HACKLE {

    export interface IViewCreateOptions {
        $el?: JQuery;
        tagName?: string;
        id?: string;
        className?: string;
        attributes?: Object;
    }

    export class View {

        tagName: string = 'div';
        id: string;
        className: string;
        attributes: Object = {};
        $el: JQuery;

        constructor(viewCreateOptions: IViewCreateOptions = {}) {
            this.tagName = viewCreateOptions.tagName || 'div';
            this.id = viewCreateOptions.id || '';
            this.className = viewCreateOptions.className || '';
            this.attributes = viewCreateOptions.attributes || {};
            this.$el = isJQuery(viewCreateOptions.$el) ? viewCreateOptions.$el : $('<' + this.tagName + '>');

            this.reflectAttribute();
        }

        render(): View {
            return this;
        }

        reflectTagName() {
            this.$el = $('<' + this.tagName + '>');
        }

        reflectAttribute() {

            var attributes = {};

            if(this.id !== '') {
                attributes['id'] = this.id;
            }

            if(this.className !== '') {
                attributes['class'] = this.className;
            }

            for(var key in this.attributes) {
                attributes[key] = this.attributes[key];
            }

            this.$el.attr(attributes);

        }

    }

    export class HBSTemplate {

        constructor(private hbsName: string) {}

        render(data: Object = {}): string {
            var resultHTML: string;
            var _hbsName = this.hbsName;

            $.ajax({
                url: _hbsName,
                type: 'get',
                dataType: 'html',
                async: false,
                success: (hbs) => {
                    var template = Handlebars.compile(hbs);
                    resultHTML = template(data);
                }
            });

            return resultHTML;
        }

    }

    export function isJQuery($that): boolean {
        return $that instanceof jQuery;
    }

}
