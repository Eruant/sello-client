define(['Class'], function (Class) {

    return Class.extend({

        defaults: {
            width: 600,
            height: 400
        },

        init: function (options) {

            var opts = {},
                item;

            for (item in this.defaults) {
                if (this.defaults.hasOwnProperty(item)) {
                    opts[item] = this.defaults[item];
                }
            }

            for (item in options) {
                if (options.hasOwnProperty(item)) {
                    opts[item] = options[item];
                }
            }

            this.options = opts;

        },

        update: function (stepTime, progress) {
        },

        draw: function (ctx) {
            ctx.fillRect(0, 0, this.options.width, this.options.height);
        }

    });

});
