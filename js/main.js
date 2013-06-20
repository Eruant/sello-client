requirejs.config({
    baseUrl: 'js/modules',
    shim: {
        'socketio': {
            exports: 'io'
        }
    },
	  paths: {
		    'lib': '../lib',
        'socketio': 'http://sello.herokuapp.com/socket.io/socket.io'
	  }
});

define(['Essence', 'socketio'], function(Essence, io) {

  var socket = io.connect('http://sello.herokuapp.com'),
      w = new Essence({
          el: document.body,
          width: document.body.clientWidth,
          height: document.body.clientHeight
      });

  window.onresize = function () {
      w.resize(document.body.clientWidth, document.body.clientHeight);
  };

  socket.on('msg', function (data) {
      w.message(data);
  });
});
