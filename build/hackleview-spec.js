var HACKLE;
(function (HACKLE) {
    var View = (function () {
        function View(viewCreateOptions) {
            if (typeof viewCreateOptions === "undefined") { viewCreateOptions = {}; }
            this.tagName = 'div';
            this.attributes = {};
            this.tagName = viewCreateOptions.tagName || 'div';
            this.id = viewCreateOptions.id || '';
            this.className = viewCreateOptions.className || '';
            this.attributes = viewCreateOptions.attributes || {};
            this.$el = this.isJQuery(viewCreateOptions.$el) ? viewCreateOptions.$el : $('<' + this.tagName + '>');

            this.reflectAttribute();
            this.renderTemplate();
        }
        View.prototype.renderTemplate = function () {
            var template = new HBSTemplate('hbs/test.hbs');
            this.$el.append(template.render({ greeting: 'Hello handlebars' }));
        };

        View.prototype.render = function () {
            return this;
        };

        View.prototype.isJQuery = function ($that) {
            return $that instanceof jQuery;
        };

        View.prototype.reflectAttribute = function () {
            var attributes = {};

            if (this.id !== '') {
                attributes['id'] = this.id;
            }

            if (this.className !== '') {
                attributes['class'] = this.className;
            }

            for (var key in this.attributes) {
                attributes[key] = this.attributes[key];
            }

            this.$el.attr(attributes);
        };
        return View;
    })();
    HACKLE.View = View;

    var HBSTemplate = (function () {
        function HBSTemplate(hbsName) {
            this.hbsName = hbsName;
        }
        HBSTemplate.prototype.render = function (data) {
            if (typeof data === "undefined") { data = {}; }
            var resultHTML;
            var _hbsName = this.hbsName;

            $.ajax({
                url: _hbsName,
                type: 'get',
                dataType: 'html',
                async: false,
                success: function (hbs) {
                    var template = Handlebars.compile(hbs);
                    resultHTML = template(data);
                }
            });

            return resultHTML;
        };
        return HBSTemplate;
    })();
    HACKLE.HBSTemplate = HBSTemplate;
})(HACKLE || (HACKLE = {}));
;var HACKLE;
(function (HACKLE) {
    var expect = chai.expect;

    describe("HACKLE.View", function () {
        describe("on the default instance", function () {
            var div = new HACKLE.View();

            it("div.$el to instanceof `jQuery`", function () {
                expect(div.$el).to.instanceof(jQuery);
            });

            it("div.$el has `DIV` of tagName", function () {
                expect(div.$el.get(0).tagName).to.equal('DIV');
            });

            it("div.$el has not id", function () {
                expect(div.$el.get(0).id).to.equal('');
            });

            it("div.$el has not any classList", function () {
                expect(div.$el.get(0).classList).to.have.length(0);
            });

            it("div.$el has not any attributes", function () {
                expect(div.$el.get(0).attributes).to.have.length(0);
            });
        });

        describe("has any attribute on the instance", function () {
            var p = new HACKLE.View({
                tagName: 'p',
                className: 'poge',
                id: 'pid'
            });

            it("p.$el has `P` of tagName", function () {
                expect(p.$el.get(0).tagName).to.equal('P');
            });

            it("p.$el has `poge` class of attribute", function () {
                expect(p.$el.hasClass('poge')).to.be.true;
            });

            it("p.$el has `pid` id of attribute", function () {
                expect(p.$el.get(0).id).to.equal('pid');
            });
        });
    });
})(HACKLE || (HACKLE = {}));
