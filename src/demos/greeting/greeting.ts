/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../applications/hackleview/hackleview.ts" />

module DEMO {

    export class GreetingView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'greeting';

        constructor() {
            super();
            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
        }

        events = {
            "click .header" : this.headerTest,
            "click .cat" : function(event) {
                event.preventDefault();
                console.log('cat');
            }
        }

        private headerTest() {
            console.log("click .header");
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
    $('#main').append(greetingView.render().$el);
    console.log(greetingView.$el.html());
});
