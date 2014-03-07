/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

/// <reference path="../src/hackleview.ts" />

module HACKLE {

    var expect = chai.expect;

    describe("HACKLE.View", function() {

        describe("on the default instance", function() {

            var div: View = new View();

            it("`div.$el` to instanceof `jQuery`", function() {
                expect(div.$el).to.instanceof(jQuery);
            });

            it("`div.$el[0]` has `DIV` of `tagName`", function() {
                expect(div.$el[0].tagName).to.equal('DIV');
            });

            it("`div.$el[0]` has not `id`", function() {
                expect(div.$el[0].id).to.equal('');
            });

            it("`div.$el[0]` has not any classList", function() {
                expect(div.$el[0].classList).to.have.length(0);
            });

            it("`div.$el[0]` has not any attributes", function() {
                expect(div.$el[0].attributes).to.have.length(0);
            });

        });

    });

}
