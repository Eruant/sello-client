define('World', ['Class'], function (Class) {

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
        
        init: function (screen, width, height) {

            // set initial params
            this.screen = screen;
            this.width = width || 600;
            this.height = height || 400;

            // create the canvas to draw on
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx = this.canvas.getContext('2d');

            // add the canvas to the screen
            this.screen.appendChild(this.canvas);

            this.startTime = Date.now();
            this.lastStep = this.startTime;

            window.raf(this.step.bind(this));
        },

        step: function (timestamp) {

            var progress = timestamp - this.startTime,
                stepTime = timestamp - this.lastStep;

            this.lastStep = timestamp;

            this.canvas.width = this.width;
            this.canvas.height = this.height;

            this.update(stepTime, progress);
            this.draw();

            window.raf(this.step.bind(this));
        },

        update: function (stepTime, progress) {
        },

        draw: function () {
            this.ctx.fillRect(0, 0, this.width, this.height);
        },

        message: function (data) {
            // do something with the socket data
        },

        resize: function (width, height) {
            this.width = width;
            this.height = height;
        }
    });

});
