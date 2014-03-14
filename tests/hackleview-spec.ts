/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/applications/hackleview/hackleview.ts" />

module HACKLE {

    chai.should();

    describe("HACKLE.View", function() {

        it("test", function() {
            var hoge: string = "hoge";
            hoge.should.be.equal("hoge");
        });

        describe("on the default instance", function() {

            var div: View = new View();

            it("div.$el to instanceof `jQuery`", function() {
                div.$el.should.be.instanceof(jQuery);
            });

            it("div.$el has `DIV` of tagName", function() {
                div.$el.get(0).tagName.should.be.equal('DIV');
            });

            it("div.$el has not id", function() {
                div.$el.get(0).id.should.be.equal('');
            });

            it("div.$el has not any classList", function() {
                div.$el.get(0).classList.should.be.have.length(0);
            });

            it("div.$el has not any attributes", function() {
                div.$el.get(0).attributes.should.be.have.length(0);
            });

        });

        describe("has any attribute on the instance", function() {

            var p: View = new View({
                              tagName: 'p',
                              className: 'poge',
                              id: 'pid'
                          });

            it("p.$el has `P` of tagName", function() {
                p.$el.get(0).tagName.should.be.equal('P');
            });

            it("p.$el has `poge` class of attribute", function() {
                p.$el.hasClass('poge').should.be.true;
            });

            it("p.$el has `pid` id of attribute", function() {
                p.$el.get(0).id.should.be.equal('pid');
            });

        });

    });

}
