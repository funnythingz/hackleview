var HACKLE;
(function (HACKLE) {
    var View = (function () {
        function View(id) {
            this.id = id;
        }
        return View;
    })();
    HACKLE.View = View;
})(HACKLE || (HACKLE = {}));
;var HACKLE;
(function (HACKLE) {
    var expect = chai.expect;

    describe("View", function () {
        var view = new HACKLE.View('123');

        it("should be view has id is `123`", function () {
            expect(view.id).to.equals('123');
        });
    });
})(HACKLE || (HACKLE = {}));
