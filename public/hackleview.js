var HACKLEVIEW;
(function (HACKLEVIEW) {
    var Age = (function () {
        function Age(count) {
            this.count = count;
        }
        return Age;
    })();
    HACKLEVIEW.Age = Age;
})(HACKLEVIEW || (HACKLEVIEW = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HACKLEVIEW;
(function (HACKLEVIEW) {
    var Human = (function () {
        function Human(first, last, age) {
            this.name = new HACKLEVIEW.Name(first, last);
            this.age = new HACKLEVIEW.Age(age);
        }
        Human.prototype.sayName = function () {
            return this.name;
        };

        Human.prototype.sayAge = function () {
            return this.age;
        };
        return Human;
    })();
    HACKLEVIEW.Human = Human;

    var M = (function (_super) {
        __extends(M, _super);
        function M() {
            _super.apply(this, arguments);
        }
        return M;
    })(Human);
    HACKLEVIEW.M = M;
    var F = (function (_super) {
        __extends(F, _super);
        function F() {
            _super.apply(this, arguments);
        }
        return F;
    })(Human);
    HACKLEVIEW.F = F;
})(HACKLEVIEW || (HACKLEVIEW = {}));
;var HACKLEVIEW;
(function (HACKLEVIEW) {
    var Name = (function () {
        function Name(first, last) {
            this.first = first;
            this.last = last;
        }
        return Name;
    })();
    HACKLEVIEW.Name = Name;
})(HACKLEVIEW || (HACKLEVIEW = {}));
