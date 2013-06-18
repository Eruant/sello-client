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

define(['World', 'socketio'], function(World, io) {

  var socket = io.connect('http://sello.herokuapp.com'),
    w = new World(document.body, document.body.clientWidth, document.body.clientHeight);

  window.onresize = function () {
    w.resize(document.body.clientWidth, document.body.clientHeight);
  };

  socket.on('msg', function (data) {
    w.message(data);
  });
});
