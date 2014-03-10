/// <reference path="../definitions/jquery.d.ts" />
/// <reference path="../src/hackleview.ts" />

module CUSTOM {

    export class HeaderView extends HACKLE.View {

        tagName: string = 'header';
        className: string = 'greeting';

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
        className: string = 'footer';

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

}

module DEMO {

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

            var header: HACKLE.View = new CUSTOM.HeaderView();
            var footer: HACKLE.View = new CUSTOM.FooterView();

            $('#main').append(
                header.$el,
                footer.$el
            );

            console.log($('#main').html());
        }

    }

}
$(() => {
//new DEMO.Default();
    new DEMO.Greeting();
});
