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
        function GreetingView() {
            _super.call(this);
            this.tagName = 'article';
            this.className = 'greeting';
            this.events = {
                "click .header > h1 > span.text": this.headerFunc,
                "click .dog": [this.dogFunc, { value: 'with data' }],
                "click .cat": function (event) {
                    event.preventDefault();
                    console.log('cat');
                }
            };

            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents(this.events);
            this.render();
        }
        GreetingView.prototype.headerFunc = function () {
            console.log("click .header");
        };

        GreetingView.prototype.dogFunc = function (event, data) {
            console.log("click .dog " + event.data.value);
        };

        GreetingView.prototype.render = function () {
            this.$el.append(this.renderTemplate());

            return this;
        };

        GreetingView.prototype.renderTemplate = function () {
            var template = new HACKLE.HBSTemplate('hbs/greeting.hbs');
            return template.render({
                greeting: 'Hello HACKLE.View',
                animals: [
                    { name: 'cat', anchor: '#cat' },
                    { name: 'dog', anchor: '#dog' }
                ],
                copyright: "funnythingz"
            });
        };
        return GreetingView;
    })(HACKLE.View);
    DEMO.GreetingView = GreetingView;
})(DEMO || (DEMO = {}));

$(function () {
    var greetingView = new DEMO.GreetingView();
    $('#main').append(greetingView.$el);
});
