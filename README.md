# HACKLE.View

Simple View for TypeScript.

## Usage

require `jquery.js` and `handlebars.js`.

- [jQuery](http://jquery.com/)
- [handlebars.js](http://handlebarsjs.com/)

### HTML

```html
<!Doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>HACKLE.View</title>
        <script src="jquery.min.js"></script>
        <script src="handlebars.min.js"></script>
        <script src="hackleview.min.js"></script>
        <script src="demo.js"></script>
    </head>
    <body>
        <section id="main"><!-- {render} --></section>
    </body>
</html>
```

> The Renderd HTML

```HTML
<section id="main">
    <article class="greeting">
        <header class="header">
            <h1>Hello HACKLE.View</h1>
        </header>
        <ul>
            <li><a href="#cat">cat</a></li>
            <li><a href="#dog">dog</a></li>
            <li><a href="#rion">rion</a></li>
        </ul>
        <footer class="footer">
            <p class="copyright">&copy; funnythingz</p>
        </footer>
    </article>
</section>
```

### handlebars template

`hbs/header.hbs`

```html
<h1>{{greeting}}</h1>
```

`hbs/footer.hbs`

```html
<p class="copyright">&copy; {{copyright}}</p>
```

`hbs/animals.hbs`

```html
<ul>
  {{#each animals}}
  <li><a href="{{anchor}}">{{name}}</a></li>
  {{/each}}
</ul>
```

### TypeScript

compile to `demo.js`.

```typescript
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

class Greeting {

    constructor() {
        var greeting: DEMO.GreetingView = new DEMO.GreetingView();
        $('#main').append(greeting.$el);
    }

}

$(() => {
    new Greeting();
});
```

&copy; funnythingz
