var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CUSTOM;
(function (CUSTOM) {
    var HeaderView = (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
            this.tagName = 'header';
            this.className = 'greeting';
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
    CUSTOM.HeaderView = HeaderView;

    var FooterView = (function (_super) {
        __extends(FooterView, _super);
        function FooterView(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            _super.call(this, viewCreateOptions);
            this.tagName = 'footer';
            this.className = 'footer';
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
    CUSTOM.FooterView = FooterView;
})(CUSTOM || (CUSTOM = {}));

var DEMO;
(function (DEMO) {
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
    DEMO.Default = Default;

    var Greeting = (function () {
        function Greeting() {
            var header = new CUSTOM.HeaderView();
            var footer = new CUSTOM.FooterView();

            $('#main').append(header.$el, footer.$el);

            console.log($('#main').html());
        }
        return Greeting;
    })();
    DEMO.Greeting = Greeting;
})(DEMO || (DEMO = {}));
$(function () {
    new DEMO.Greeting();
});
