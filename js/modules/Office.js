/*globals define, window*/
define(['Class'], function (Class) {
	'use strict';

	return Class.extend({

		defaults: {
			x: 0,
			y: 0,
			width: 600,
			height: 400,
			color: {
				background: '#666'
			}
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
		},
		
		resize: function (width, height) {
			this.options.width = width;
			this.options.height = height;
		},
		
		reposition: function (x, y) {
			this.options.x = x;
			this.options.y = y;
		},

		update: function (stepTime, progress) {
        },

		draw: function (ctx) {
			ctx.fillStyle = this.options.color.background;
			ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
			
			ctx.textAlign = 'right';
			ctx.textBaseline = 'bottom';
			ctx.font = '10px Arial';
			ctx.fillStyle = '#333';
			ctx.fillText(this.options.label, this.options.x + this.options.width - 8, this.options.y + this.options.height - 8);
			ctx.fillStyle = '#fff';
			ctx.fillText(this.options.label, this.options.x + this.options.width - 10, this.options.y + this.options.height - 10);
		}

    });

});
