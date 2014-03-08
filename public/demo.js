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
})(DEMO || (DEMO = {}));
$(function () {
    new DEMO.Default();
});
