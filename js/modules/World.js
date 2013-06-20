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

            ctx.save();
            ctx.translate(0.5, 0.5);

            ctx.fillStyle = '#f06';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 0);
            ctx.lineTo(0, 200);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.save();
            ctx.translate(20, 20);

            ctx.beginPath();
            
            ctx.moveTo(0, 0);
            ctx.lineTo(20, 20);
            ctx.lineTo(20, 40);
            ctx.lineTo(0, 20);
            ctx.lineTo(0, 0);

            ctx.moveTo(0, 22);
            ctx.lineTo(19, 41);
            ctx.lineTo(0, 60);
            ctx.lineTo(0, 22);

            ctx.moveTo(20, 42);
            ctx.lineTo(40, 42);
            ctx.lineTo(60, 62);
            ctx.lineTo(0, 62);
            ctx.lineTo(20, 42);

            ctx.closePath();
            
            ctx.fill();
            ctx.restore();

            ctx.restore();
        }

    });

});
