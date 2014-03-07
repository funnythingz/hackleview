var HACKLE;
(function (HACKLE) {
    var View = (function () {
        function View(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            this.tagName = 'div';
            this.attributes = {};
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

    describe("HACKLE.View", function () {
        describe("on the default instance", function () {
            var div = new HACKLE.View();

            it("`div.$el` to instanceof `jQuery`", function () {
                expect(div.$el).to.instanceof(jQuery);
            });

            it("`div.$el[0]` has `DIV` of `tagName`", function () {
                expect(div.$el[0].tagName).to.equal('DIV');
            });

            it("`div.$el[0]` has not `id`", function () {
                expect(div.$el[0].id).to.equal('');
            });

            it("`div.$el[0]` has not any classList", function () {
                expect(div.$el[0].classList).to.have.length(0);
            });

            it("`div.$el[0]` has not any attributes", function () {
                expect(div.$el[0].attributes).to.have.length(0);
            });
        });
    });
})(HACKLE || (HACKLE = {}));
