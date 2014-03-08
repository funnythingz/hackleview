/// <reference path="../definitions/jquery.d.ts" />

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

}
