/*globals define, window */
define(['Class'], function (Class) {
	'use strict';

	return Class.extend({

		defaults: {
			width: 100,
			height: 50,
			display: false,
			scale: 0.5
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
			this.canvas.width = this.options.width;
			this.canvas.height = this.options.height;
			this.ctx = this.canvas.getContext('2d');
			
			this.fps = 60;
			this.fpsHeight = (this.options.height / 2);
		},

		update: function (stepTime, progress) {
			this.fps = Math.floor(1000 / stepTime);
			this.fpsHeight = (this.options.height / 2) - (this.fps - 60);
        },

		draw: function (ctx) {
			
			var imageData = this.ctx.getImageData(1, 0, (this.canvas.width - 1), this.canvas.height);
			this.ctx.putImageData(imageData, 0, 0);
			// now clear the right-most pixels:
			this.ctx.clearRect((this.canvas.width - 1), 0, 1, this.canvas.height);
			
			this.ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
			this.ctx.fillRect((this.ctx.canvas.width - 1), this.fpsHeight, 1, 1000);
			
			if (this.options.display) {
				ctx.drawImage(this.canvas, 0, 0);
			
				ctx.fillStyle = "#0f0";
				ctx.textAlign = "left";
				ctx.textBaseline = "top";
				ctx.fillText("FPS:" + this.fps, 5, 5);
			}
		},
		
		message: function (msg) {
		}

    });

});
