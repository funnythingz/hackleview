/// <reference path="../definitions/jquery.d.ts" />
/// <reference path="../src/hackleview.ts" />

module DEMO {

    export class Default {

        constructor() {

            var div: HACKLE.View = new HACKLE.View();
            $('#main').append(div.$el);

            console.log($('#main').html());
        }

    }

}
$(() => {
    new DEMO.Default();
});
