var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DEMO;
(function (DEMO) {
    var GreetingView = (function (_super) {
        __extends(GreetingView, _super);
        function GreetingView(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
            this.tagName = 'article';
            this.className = 'greeting';

            this.reflectTagName();
            this.reflectAttribute();

            this.$el.append(this.renderTemplate());
        }
        GreetingView.prototype.renderTemplate = function () {
            var template = new HACKLE.HBSTemplate('hbs/greeting.hbs');
            return template.render({
                greeting: 'Hello HACKLE.View',
                animals: [
                    { name: 'cat', anchor: '#cat' },
                    { name: 'dog', anchor: '#dog' },
                    { name: 'rion', anchor: '#rion' }
                ],
                copyright: "funnythingz"
            });
        };
        return GreetingView;
    })(HACKLE.View);
    DEMO.GreetingView = GreetingView;
})(DEMO || (DEMO = {}));

var Greeting = (function () {
    function Greeting() {
        var greeting = new DEMO.GreetingView();
        $('#main').append(greeting.$el);
    }
    return Greeting;
})();

$(function () {
    new Greeting();
});
