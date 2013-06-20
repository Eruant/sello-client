define(['Class'], function (Class) {

    window.requestAnimationFrame = (function () {
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
            height: 400,
            modules: {}
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

            window.requestAnimationFrame(this.step.bind(this));
        },

        step: function (timestamp) {

            var progress = timestamp - this.startTime,
                stepTime = timestamp - this.lastStep;

            this.lastStep = timestamp;

            this.canvas.width = this.options.width;
            this.canvas.height = this.options.height;

            this.update(stepTime, progress);
            this.draw();

            window.requestAnimationFrame(this.step.bind(this));
        },

        update: function (stepTime, progress) {
        
            var modules = this.options.modules,
                len = modules.length,
                x;

            for (x = 0; x < len; x += 1) {
                modules[x].update(stepTime, progress);
            }

        },

        draw: function () {

            var modules = this.options.modules,
                len = modules.length,
                x;

            for (x = 0; x < len; x += 1) {
                modules[x].draw(this.ctx);
            }

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
