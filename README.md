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
        <script src="greeting.js"></script>
    </head>
    <body>
        <section id="main"><!-- {render} --></section>
    </body>
</html>
```

> The Renderd HTML

```html
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

`hbs/greeting.hbs`

```html
<header class="header">
  <h1>{{greeting}}</h1>
</header>
<ul>
  {{#each animals}}
  <li><a href="{{anchor}}">{{name}}</a></li>
  {{/each}}
</ul>
<footer class="footer">
  <p class="copyright">&copy; {{copyright}}</p>
</footer>
```

### TypeScript

compile to `greeting.js`.

```typescript
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
});
```

&copy; funnythingz
