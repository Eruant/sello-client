/*globals define, window*/
define(['Class'], function (Class) {
	'use strict';

	return Class.extend({

		defaults: {
			name: 'unknown',
			x: 0,
			y: 120,
			speedX: 10,
			speedY: 0,
			color: '#fff'
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
		}

    });

});
