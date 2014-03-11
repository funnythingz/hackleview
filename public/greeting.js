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
            this.reflectTagName();
            this.reflectAttribute();
            this.delegateEvents();
        }
        GreetingView.prototype.events = function () {
            return {
                "click .header": this.consoleTest
            };
        };

        GreetingView.prototype.consoleTest = function () {
            console.log("click .header test");
        };

        GreetingView.prototype.delegateEvents = function (events) {
            var _this = this;
            $.map(this.events(), function (eventMethod, eventWithElement) {
                console.log(eventMethod);
                console.log(eventWithElement);
                _this.$el.on('', eventMethod);
            });
            return this;
        };

        GreetingView.prototype.splitEventWithElement = function (eventWithElement) {
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

$(function () {
    var greetingView = new DEMO.GreetingView();
    console.log(greetingView.$el.html());
    $('#main').append(greetingView.render().$el);
    console.log(greetingView.$el.html());
});
