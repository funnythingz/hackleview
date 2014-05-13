/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../../definitions/handlebars.d.ts" />

declare var HACKLE_HBS;

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

        events = {}

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

        delegateEvents(events?: Object): View {
            $.map(events, (eventMethodWithData, eventWithSelector) => {

                var splitEventMethodWithData = new SplitEventMethodWithData(eventMethodWithData);

                var eventAndSelectorPair = splitEventWithSelector(eventWithSelector);

                this.$el.on.call(this.$el,
                                 eventAndSelectorPair.eventName,
                                 eventAndSelectorPair.selector,
                                 splitEventMethodWithData.data,
                                 splitEventMethodWithData.method);

            });

            return this;
        }

    }

    interface IEventWithSelector {
        eventName: string;
        selector: string;
    }

    function splitEventWithSelector(eventWithSelector): IEventWithSelector {
        var resultPair: string[] = eventWithSelector.split(' ');

        var eventName: string = resultPair.shift();
        var selector: string = resultPair.join(' ');

        return {
            'eventName': eventName,
            'selector':  selector
        }
    }

    class SplitEventMethodWithData {

        method: any;
        data: any = null;

        constructor(methodWithData) {
            if(typeof methodWithData === 'object') {
                this.method = methodWithData[0];
                this.data = methodWithData[1];
            } else {
                this.method = methodWithData;
            }

        }

    }

    export class HBSTemplate {

        constructor(private hbsName: string) {}

        render(data: Object = {}): string {
            return HACKLE_HBS.Templates[this.hbsName](data);
        }

    }

    export class HBSTemplateFromString {

        constructor(private hbs: string) {}

        render(data: Object = {}): string {
            var template = Handlebars.compile(this.hbs);
            var resultHTML: string = template(data);

            return resultHTML;
        }

    }

    export function isJQuery($that): boolean {
        return $that instanceof jQuery;
    }

}
