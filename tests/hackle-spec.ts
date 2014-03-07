/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

/// <reference path="../src/hackleview.ts" />

module HACKLE {

    var expect = chai.expect;

    describe("View", function() {

        var view = new View('123');

        it("should be view has id is `123`", function() {
            expect(view.id).to.equals('123');
        });

    });

}
