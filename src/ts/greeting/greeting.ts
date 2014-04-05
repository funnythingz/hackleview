/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../hackleview/hackleview.ts" />

module DEMO {

    export class GreetingView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'greeting';

        constructor() {
            super();

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }

        events = {
            "click .header > h1 > span.text" : this.headerFunc,
            "click .dog" : [this.dogFunc, {value : 'with data'}],
            "click .cat" : function(event) {
                event.preventDefault();
                console.log('cat');
            }
        }

        private headerFunc() {
            console.log("click .header");
        }

        private dogFunc(event, data) {
            console.log("click .dog " + event.data.value);
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
                    {name: 'dog', anchor: '#dog'}
                ],
                copyright: "funnythingz"
            });
        }

    }

}

$(() => {
    var greetingView: DEMO.GreetingView = new DEMO.GreetingView();
    $('#main').append(greetingView.$el);
});
