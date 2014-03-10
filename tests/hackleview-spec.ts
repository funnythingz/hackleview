/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

/// <reference path="../src/applications/hackleview/hackleview.ts" />

module HACKLE {

    var expect = chai.expect;

    describe("HACKLE.View", function() {

        describe("on the default instance", function() {

            var div: View = new View();

            it("div.$el to instanceof `jQuery`", function() {
                expect(div.$el).to.instanceof(jQuery);
            });

            it("div.$el has `DIV` of tagName", function() {
                expect(div.$el.get(0).tagName).to.equal('DIV');
            });

            it("div.$el has not id", function() {
                expect(div.$el.get(0).id).to.equal('');
            });

            it("div.$el has not any classList", function() {
                expect(div.$el.get(0).classList).to.have.length(0);
            });

            it("div.$el has not any attributes", function() {
                expect(div.$el.get(0).attributes).to.have.length(0);
            });

        });

        describe("has any attribute on the instance", function() {

            var p: View = new View({
                              tagName: 'p',
                              className: 'poge',
                              id: 'pid'
                          });

            it("p.$el has `P` of tagName", function() {
                expect(p.$el.get(0).tagName).to.equal('P');
            });

            it("p.$el has `poge` class of attribute", function() {
                expect(p.$el.hasClass('poge')).to.be.true;
            });

            it("p.$el has `pid` id of attribute", function() {
                expect(p.$el.get(0).id).to.equal('pid');
            });

        });

    });

}
