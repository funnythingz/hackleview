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

    export interface IEventWithSelector {
        eventName: string;
        selector: string;
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

        delegateEvents(events?: Object): View {
            $.map(events, (eventMethod, eventWithElement) => {
                var eventElementPair = this.splitEventWithElement(eventWithElement);
                this.$el.on.call(this.$el,
                                 eventElementPair.eventName,
                                 eventElementPair.selector,
                                 eventMethod);
            });
            return this;
        }

        private splitEventWithElement(eventWithElement): IEventWithSelector {
            var resultPair = eventWithElement.split(' ', 2);
            return {
                'eventName': resultPair[0],
                'selector':  resultPair[1]
            }
        }

    }

    export class HBSTemplate {

        constructor(private hbsName: string) {}

        render(data: Object = {}): string {
            var resultHTML: string;
            var _hbsName = this.hbsName;

            var $getHBSTemplate = $.ajax({
                url: _hbsName,
                type: 'get',
                dataType: 'html',
                async: false
            });
            
            $getHBSTemplate.done((hbs) => {
                var template = Handlebars.compile(hbs);
                resultHTML = template(data);
            });

            return resultHTML;
        }

    }

    export function isJQuery($that): boolean {
        return $that instanceof jQuery;
    }

}
