define(['Class'], function (Class) {

    window.raf = (function () {
        return window.requestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.oRequestAnimationFrame
          || window.msRequestAnimationFrame
          || function (/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
          };
    }());

    return Class.extend({

        defaults: {
            el: window.document,
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

            // create the canvas to draw on
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.options.width;
            this.canvas.height = this.options.height;
            this.ctx = this.canvas.getContext('2d');

            // add the canvas to the screen
            this.options.el.appendChild(this.canvas);

            this.startTime = Date.now();
            this.lastStep = this.startTime;

            window.raf(this.step.bind(this));
        },

        step: function (timestamp) {

            var progress = timestamp - this.startTime,
                stepTime = timestamp - this.lastStep;

            this.lastStep = timestamp;

            this.canvas.width = this.options.width;
            this.canvas.height = this.options.height;

            this.update(stepTime, progress);
            this.draw();

            window.raf(this.step.bind(this));
        },

        update: function (stepTime, progress) {
        },

        draw: function () {
            this.ctx.fillRect(0, 0, this.options.width, this.options.height);
        },

        message: function (data) {
            // do something with the socket data
        },

        resize: function (width, height) {
            this.options.width = width;
            this.options.height = height;
        }
    });

});
