/// <reference path="../definitions/jquery.d.ts" />
/// <reference path="../src/hackleview.ts" />

module DEMO {

    export class Default {

        constructor() {

            var div: HACKLE.View = new HACKLE.View();

            $('#main').append(div.$el);

            var p: HACKLE.View = new HACKLE.View({
                                     className: 'class',
                                     id: 'id',
                                     tagName: 'p'
                                 });

            $('#main').append(p.$el);

            console.log($('#main').html());
        }

    }

}
$(() => {
    new DEMO.Default();
});
