var TYPESC;
(function (TYPESC) {
    var Age = (function () {
        function Age(count) {
            this.count = count;
        }
        return Age;
    })();
    TYPESC.Age = Age;
})(TYPESC || (TYPESC = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TYPESC;
(function (TYPESC) {
    var Human = (function () {
        function Human(first, last, age) {
            this.name = new TYPESC.Name(first, last);
            this.age = new TYPESC.Age(age);
        }
        Human.prototype.sayName = function () {
            return this.name;
        };

        Human.prototype.sayAge = function () {
            return this.age;
        };
        return Human;
    })();
    TYPESC.Human = Human;

    var M = (function (_super) {
        __extends(M, _super);
        function M() {
            _super.apply(this, arguments);
        }
        return M;
    })(Human);
    TYPESC.M = M;
    var F = (function (_super) {
        __extends(F, _super);
        function F() {
            _super.apply(this, arguments);
        }
        return F;
    })(Human);
    TYPESC.F = F;
})(TYPESC || (TYPESC = {}));
;var TYPESC;
(function (TYPESC) {
    var Name = (function () {
        function Name(first, last) {
            this.first = first;
            this.last = last;
        }
        return Name;
    })();
    TYPESC.Name = Name;
})(TYPESC || (TYPESC = {}));
