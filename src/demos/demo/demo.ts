/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../applications/hackleview/hackleview.ts" />

module DEMO {

    export class HeaderView extends HACKLE.View {

        tagName: string = 'header';
        className: string = 'globalHeader';

        constructor(viewCreateOptions: HACKLE.IViewCreateOptions = {}) {
            super(viewCreateOptions);
            this.reflectTagName();
            this.reflectAttribute();
            this.$el.append(this.renderTemplate());
        }

        renderTemplate(): string {
            var template = new HACKLE.HBSTemplate('hbs/header.hbs');
            return template.render({
                greeting: 'Hello HACKLE.View'
            });
        }

    }

    export class FooterView extends HACKLE.View {

        tagName: string = 'footer';
        className: string = 'globalFooter';

        constructor(viewCreateOptions: HACKLE.IViewCreateOptions = {}) {
            super(viewCreateOptions);
            this.reflectTagName();
            this.reflectAttribute();
            this.$el.append(this.renderTemplate());
        }

        renderTemplate(): string {
            var template = new HACKLE.HBSTemplate('hbs/footer.hbs');
            return template.render({
                copyright: "funnythingz"
            });
        }

    }

    export class GreetingView extends HACKLE.View {

        tagName: string = 'article';
        className: string = 'greeting';

        constructor(viewCreateOptions: HACKLE.IViewCreateOptions = {}) {
            super(viewCreateOptions);

            var header: HeaderView = new HeaderView();
            var footer: FooterView = new FooterView();

            this.reflectTagName();
            this.reflectAttribute();

            this.$el.append(
                header.$el,
                this.renderAnimals(),
                footer.$el
            );
        }

        renderAnimals(): string {
            var template = new HACKLE.HBSTemplate('hbs/animals.hbs');
            return template.render({
                animals: [
                    {name: 'cat', anchor: '#cat'},
                    {name: 'dog', anchor: '#dog'},
                    {name: 'rion', anchor: '#rion'}
                ]
            });
        }
    }

}

module Controler {

    export class Default {

        constructor() {

            var div: HACKLE.View = new HACKLE.View();

            $('#main').append(div.$el);

            var p: HACKLE.View = new HACKLE.View({
                                     className: 'class',
                                     id: 'id',
                                     tagName: 'p'
                                 });

            $('#main').append(p.$el);

            console.log($('#main').html());
        }

    }

    export class Greeting {

        constructor() {

            var greeting: DEMO.GreetingView = new DEMO.GreetingView();

            $('#main').append(greeting.$el);

            console.log($('#main').html());
        }

    }

}
$(() => {
    //new Controler.Default();
    new Controler.Greeting();
});
