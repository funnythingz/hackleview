/// <reference path="../definitions/jquery.d.ts" />
/// <reference path="../definitions/handlebars.d.ts" />

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
            this.$el = this.isJQuery(viewCreateOptions.$el) ? viewCreateOptions.$el : $('<' + this.tagName + '>');

            this.reflectAttribute();
            this.renderTemplate();
        }

        renderTemplate() {
            var template = new HBSTemplate('hbs/test.hbs');
            this.$el.append(template.render({greeting: 'Hello handlebars'}));
        }

        render(): View {
            return this;
        }

        private isJQuery($that): boolean {
            return $that instanceof jQuery;
        }

        private reflectAttribute() {

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
}
