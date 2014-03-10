/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../applications/hackleview/hackleview.ts" />

module DEMO {

    export class GreetingView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'greeting';

        constructor(viewCreateOptions: HACKLE.IViewCreateOptions = {}) {
            super(viewCreateOptions);

            this.reflectTagName();
            this.reflectAttribute();

            this.$el.append(
                this.renderTemplate()
            );
        }

        renderTemplate(): string {
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

class Greeting {

    constructor() {
        var greeting: DEMO.GreetingView = new DEMO.GreetingView();
        $('#main').append(greeting.$el);
    }

}

$(() => {
    new Greeting();
});
