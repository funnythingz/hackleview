var HACKLE;
(function (HACKLE) {
    var View = (function () {
        function View(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            this.tagName = 'div';
            this.attributes = {};
            this.$el = $('<' + this.tagName + '>');
            this.tagName = viewCreateOptions.tagName || 'div';
            this.id = viewCreateOptions.id || '';
            this.className = viewCreateOptions.className || '';
            this.attributes = viewCreateOptions.attributes || {};
            this.$el = this.isJQuery(viewCreateOptions.$el) ? viewCreateOptions.$el : $('<' + this.tagName + '>');
        }
        View.prototype.isJQuery = function ($that) {
            return $that instanceof jQuery;
        };
        return View;
    })();
    HACKLE.View = View;
})(HACKLE || (HACKLE = {}));
;var HACKLE;
(function (HACKLE) {
    var expect = chai.expect;

    describe("View", function () {
        var div = new HACKLE.View();
        var hoge = $(".hoge");

        it("should be `div.$el` to instanceof `jQuery`", function () {
            console.log(div.$el);
            expect(div.$el).to.instanceof(jQuery);
        });
    });
})(HACKLE || (HACKLE = {}));
