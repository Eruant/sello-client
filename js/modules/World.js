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
			
			this.canvas = document.createElement('canvas');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
			this.ctx = this.canvas.getContext('2d');
        },

        update: function (stepTime, progress) {
        },

        draw: function (ctx) {
        }

    });

});
