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

define(['Essence', 'World', 'socketio'], function(Essence, World, io) {

  var el = document.body,
      w = document.body.clientWidth,
      h = document.body.clientHeight,
      socket = io.connect('http://sello.herokuapp.com'),
      world = new World({
          width: w,
          height: h
      }),
      scene = new Essence({
          el: el,
          width: w,
          height: h,
          modules: [world]
      });

  window.onresize = function () {
      scene.resize(document.body.clientWidth, document.body.clientHeight);
  };

  socket.on('msg', function (data) {
      scene.message(data);
  });
});
