/*globals define, window*/
define(['Class'], function (Class) {
	'use strict';

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
			
			this.canvas = window.document.createElement('canvas');
            this.canvas.width = 210;
            this.canvas.height = 210;
			this.ctx = this.canvas.getContext('2d');
			
			this.drawBynd(this.ctx);

        },
		
		drawBynd: function (ctx) {
			ctx.save();
            ctx.translate(0.5, 0.5);

            ctx.fillStyle = '#f06';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(100, 100);
            ctx.lineTo(0, 200);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.save();
            ctx.translate(10, 28);

            ctx.beginPath();
            
            ctx.moveTo(0, 0);
            ctx.lineTo(20, 20);
            ctx.lineTo(20, 40);
            ctx.lineTo(0, 20);

            ctx.moveTo(0, 22);
            ctx.lineTo(19, 41);
            ctx.lineTo(0, 60);

            ctx.moveTo(20, 42);
            ctx.lineTo(40, 42);
            ctx.lineTo(60, 62);
            ctx.lineTo(0, 62);
			
			ctx.moveTo(60, 63);
			ctx.lineTo(60, 83);
			ctx.lineTo(40, 83);
			ctx.lineTo(40, 63);
			
			ctx.moveTo(60, 84);
			ctx.lineTo(40, 104);
			ctx.lineTo(40, 84);
			
			ctx.moveTo(39, 84);
			ctx.lineTo(39, 104);
			ctx.lineTo(20, 84);
			
			ctx.moveTo(0, 65);
			ctx.lineTo(37, 104);
			ctx.lineTo(14, 104);
			ctx.lineTo(0, 89);
			
			ctx.moveTo(1, 64);
			ctx.lineTo(20, 64);
			ctx.lineTo(10, 73);
			
			ctx.moveTo(20, 66);
			ctx.lineTo(20, 84);
			ctx.lineTo(11, 74);

            ctx.closePath();
            
            ctx.fill();
            ctx.restore();

            ctx.restore();
		},

        update: function (stepTime, progress) {
        },

        draw: function (ctx) {
            ctx.drawImage(this.canvas, 0, (this.options.height / 2) - 100);
        },
		
		message: function (msg) {
		}

    });

});
