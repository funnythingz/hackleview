# HACKLE.View

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/funnythingz/hackleview.svg?branch=master)](https://travis-ci.org/funnythingz/hackleview)

Simple View for TypeScript.

> DEMO

http://www.funnythingz.com/hackleview-demo/

> DEMO-Repository

https://github.com/funnythingz/hackleview-demo


## Interface

```typescript
interface IViewCreateOptions {
    $el?: JQuery;
    tagName?: string;
    id?: string;
    className?: string;
    attributes?: Object;
}
```

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

`ts/greeting.ts`

```typescript
module DEMO {

    export class GreetingView extends HACKLE.View {

        constructor() {
            super({tagName: 'article', className: 'greeting'});

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

            var template = new HACKLE.HBSTemplate('src/hbs/greeting.hbs');

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
```

&copy; funnythingz
