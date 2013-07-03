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
			
			this.people = []; // create a local array of people
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
			
			var len = this.people.length,
				i,
				person;
			
			for (i = 0; i < len; i += 1) {
				
				person = this.people[i];
				
				person.options.x += person.options.speedX;
				person.options.y += person.options.speedY;
				
				if (person.options.x > this.options.width) {
					person.options.x = this.options.width;
					person.options.speedX = -person.options.speedX;
				} else if (person.options.x < 0) {
					person.options.x = 0;
					person.options.speedX = -person.options.speedX;
				}
				person.options.speedX += (Math.random() - 0.5);
				if (person.options.speedX > 3) {
					person.options.speedX = 3;
				}
				if (person.options.speedX < -3) {
					person.options.speedX = -3;
				}
				
				if (person.options.y > this.options.height - 50) {
					person.options.y = this.options.height - 50;
					person.options.speedY = -person.options.speedY;
				} else if (person.options.y < 50) {
					person.options.y = 50;
					person.options.speedY = -person.options.speedY;
				}
				person.options.speedY += (0.25 * (Math.random() - 0.5));
				if (person.options.speedY > 1) {
					person.options.speedY = 1;
				}
				if (person.options.speedY < -1) {
					person.options.speedY = -1;
				}
			}
        },

		draw: function (ctx) {
			
			var len = this.people.length,
				i,
				person;
			
			this.ctx.fillStyle = this.options.color.background;
			this.ctx.fillRect(0, 0, this.options.width, this.options.height);
			
			this.ctx.textAlign = 'right';
			this.ctx.textBaseline = 'bottom';
			this.ctx.font = '10px Arial';
			this.ctx.fillStyle = '#333';
			this.ctx.fillText(this.options.label, this.options.width - 8, this.options.height - 8);
			this.ctx.fillStyle = '#fff';
			this.ctx.fillText(this.options.label, this.options.width - 10, this.options.height - 10);
			
			for (i = 0; i < len; i += 1) {
				
				person = this.people[i];
				this.ctx.save();
				this.ctx.translate(person.options.x, person.options.y);
				this.ctx.fillStyle = person.options.color;
				this.ctx.fillRect(0, 0, 10, 40);
				
				this.ctx.save();
				this.ctx.translate(15, -5);
				this.ctx.rotate(-(Math.PI / 4));
				this.ctx.textAlign = 'left';
				this.ctx.textBaseline = 'bottom';
				this.ctx.fillText(person.options.name, 0, 0);
				this.ctx.restore();
				
				this.ctx.restore();
			}
			
			ctx.drawImage(this.canvas, this.options.x, this.options.y);
		},
		
		message: function (msg) {
			
		}

    });

});
