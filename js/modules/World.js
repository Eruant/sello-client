define(['Class'], function (Class) {

    return Class.extend({

        defaults: {
            width: 600,
            height: 400,
           dummy: true
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
            this.canvas.width = this.options.width;
            this.canvas.height = this.options.height;
			this.ctx = this.canvas.getContext('2d');
        },

        update: function (stepTime, progress) {
        },

        draw: function (ctx) {
            ctx.fillStyle = "#333";
            ctx.fillRect(0, 0, this.options.width, this.options.height);
        }

    });

});
