this["HBS"] = this["HBS"] || {};
this["HBS"]["Templates"] = this["HBS"]["Templates"] || {};

this["HBS"]["Templates"]["src/hbs/greeting.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <li class=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\"";
  if (helper = helpers.anchor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.anchor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n  ";
  return buffer;
  }

  buffer += "<header class=\"header\">\n  <h1><span class=\"text\">";
  if (helper = helpers.greeting) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.greeting); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></h1>\n</header>\n<ul>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.animals), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n<footer class=\"footer\">\n  <p class=\"copyright\">&copy; ";
  if (helper = helpers.copyright) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.copyright); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</footer>\n";
  return buffer;
  });;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HBS = HBS;

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
            console.log(HBS.Templates['src/hbs/greeting.hbs']({
                greeting: 'Hello HACKLE.View',
                animals: [
                    { name: 'cat', anchor: '#cat' },
                    { name: 'dog', anchor: '#dog' }
                ],
                copyright: "funnythingz"
            }));

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