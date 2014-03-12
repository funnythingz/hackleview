/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../applications/hackleview/hackleview.ts" />

module DEMO {

    export interface IEventWithSelector {
        eventName: string;
        selector: string;
    }

    export class GreetingView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'greeting';

        constructor() {
            super();
            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents();
        }

        events(): Object {
            return {
                "click .header" : this.consoleTest
            };
        }

        private consoleTest() {
            console.log("click .header test");
        }

        delegateEvents(events?: Object): GreetingView {
            $.map(this.events(), (eventMethod, eventWithElement) => {
                console.log(eventMethod);
                console.log(eventWithElement);
                //this.$el.on('', eventMethod);
            });
            return this;
        }

        private splitEventWithElement(eventWithElement): IEventWithSelector {
            return {
                'eventName': 'click',
                'selector': '.header'
            }
        }

        render(): GreetingView {
            this.$el.append(
                this.renderTemplate()
            );

            return this;
        }

        private renderTemplate(): string {
            var template = new HACKLE.HBSTemplate('hbs/greeting.hbs');
            return template.render({
                greeting: 'Hello HACKLE.View',
                animals: [
                    {name: 'cat', anchor: '#cat'},
                    {name: 'dog', anchor: '#dog'},
                    {name: 'rion', anchor: '#rion'}
                ],
                copyright: "funnythingz"
            });
        }

    }

}

$(() => {
    var greetingView: DEMO.GreetingView = new DEMO.GreetingView();
    console.log(greetingView.$el.html());
    $('#main').append(greetingView.render().$el);
    console.log(greetingView.$el.html());
});
