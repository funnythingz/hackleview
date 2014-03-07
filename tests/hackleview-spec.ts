/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

/// <reference path="../src/hackleview.ts" />

module HACKLE {

    var expect = chai.expect;

    describe("View", function() {

        var div: View = new View();
        var hoge = $(".hoge");

        it("should be `div.$el` to instanceof `jQuery`", function() {
            expect(div.$el).to.instanceof(jQuery);
        });

    });

}
