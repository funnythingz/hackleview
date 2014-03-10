var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    var HeaderView = (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
            this.tagName = 'header';
            this.className = 'globalHeader';
            this.reflectTagName();
            this.reflectAttribute();
            this.$el.append(this.renderTemplate());
        }
        HeaderView.prototype.renderTemplate = function () {
            var template = new HACKLE.HBSTemplate('hbs/header.hbs');
            return template.render({
                greeting: 'Hello HACKLE.View'
            });
        };
        return HeaderView;
    })(HACKLE.View);
    DEMO.HeaderView = HeaderView;

    var FooterView = (function (_super) {
        __extends(FooterView, _super);
        function FooterView(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
            this.tagName = 'footer';
            this.className = 'globalFooter';
            this.reflectTagName();
            this.reflectAttribute();
            this.$el.append(this.renderTemplate());
        }
        FooterView.prototype.renderTemplate = function () {
            var template = new HACKLE.HBSTemplate('hbs/footer.hbs');
            return template.render({
                copyright: "funnythingz"
            });
        };
        return FooterView;
    })(HACKLE.View);
    DEMO.FooterView = FooterView;

    var GreetingView = (function (_super) {
        __extends(GreetingView, _super);
        function GreetingView(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
            this.tagName = 'article';
            this.className = 'greeting';

            var header = new HeaderView();
            var footer = new FooterView();

            this.reflectTagName();
            this.reflectAttribute();

            this.$el.append(header.$el, this.renderAnimals(), footer.$el);
        }
        GreetingView.prototype.renderAnimals = function () {
            var template = new HACKLE.HBSTemplate('hbs/animals.hbs');
            return template.render({
                animals: [
                    { name: 'cat', anchor: '#cat' },
                    { name: 'dog', anchor: '#dog' },
                    { name: 'rion', anchor: '#rion' }
                ]
            });
        };
        return GreetingView;
    })(HACKLE.View);
    DEMO.GreetingView = GreetingView;
})(DEMO || (DEMO = {}));

var Controler;
(function (Controler) {
    var Default = (function () {
        function Default() {
            var div = new HACKLE.View();

            $('#main').append(div.$el);

            var p = new HACKLE.View({
                className: 'class',
                id: 'id',
                tagName: 'p'
            });

            $('#main').append(p.$el);

            console.log($('#main').html());
        }
        return Default;
    })();
    Controler.Default = Default;

    var Greeting = (function () {
        function Greeting() {
            var greeting = new DEMO.GreetingView();

            $('#main').append(greeting.$el);

            console.log($('#main').html());
        }
        return Greeting;
    })();
    Controler.Greeting = Greeting;
})(Controler || (Controler = {}));
$(function () {
    new Controler.Greeting();
});
