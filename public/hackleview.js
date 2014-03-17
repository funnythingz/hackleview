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
            this.$el = isJQuery(viewCreateOptions.$el) ? viewCreateOptions.$el : $('<' + this.tagName + '>');

            this.reflectAttribute();
        }
        View.prototype.render = function () {
            return this;
        };

        View.prototype.reflectTagName = function () {
            this.$el = $('<' + this.tagName + '>');
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

        View.prototype.delegateEvents = function (events) {
            var _this = this;
            $.map(events, function (eventMethod, eventWithElement) {
                var eventElementPair = _this.splitEventWithElement(eventWithElement);
                _this.$el.on.call(_this.$el, eventElementPair.eventName, eventElementPair.selector, eventMethod);
            });
            return this;
        };

        View.prototype.splitEventWithElement = function (eventWithElement) {
            var resultPair = eventWithElement.split(' ', 2);
            return {
                'eventName': resultPair[0],
                'selector': resultPair[1]
            };
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

            var $getHBSTemplate = $.ajax({
                url: _hbsName,
                type: 'get',
                dataType: 'html',
                async: false
            });

            $getHBSTemplate.done(function (hbs) {
                var template = Handlebars.compile(hbs);
                resultHTML = template(data);
            });

            return resultHTML;
        };
        return HBSTemplate;
    })();
    HACKLE.HBSTemplate = HBSTemplate;

    function isJQuery($that) {
        return $that instanceof jQuery;
    }
    HACKLE.isJQuery = isJQuery;
})(HACKLE || (HACKLE = {}));
