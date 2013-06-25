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

define(['Essence', 'Bynd-watermark', 'World', 'socketio', 'Office', 'Debug'], function(Essence, Watermark, World, io, Office, Debug) {

	var el = document.body,
		w = document.body.clientWidth,
		h = document.body.clientHeight,
		halfW = Math.floor(w / 2),
		halfH = Math.floor(h / 2),
		socket = io.connect('http://sello.herokuapp.com'),
		watermark = new Watermark({
			width: w,
			height: h
		}),
		world = new World({
			width: w,
			height: h
		}),
		london = new Office({
			label: "London",
			x: 10,
			y: 10,
			width: halfW - 15,
			height: halfH - 15,
			color: {
				background: '#363'
			}
		}),
		lewis = new Office({
			label: "Lewis",
			x: halfW + 5,
			y: 10,
			width: halfW - 15,
			height: halfH - 15,
			color: {
				background: '#633'
			}
		}),
		newYork = new Office({
			label: "New York",
			x: 10,
			y: halfH + 5,
			width: halfW - 15,
			height: halfH - 15,
			color: {
				background: '#336'
			}
		}),
		sanFrancisco = new Office({
			label: "San Francisco",
			x: halfW + 5,
			y: halfH + 5,
			width: halfW - 15,
			height: halfH - 15,
			color: {
				background: '#663'
			}
		}),
		debug = new Debug({
			display: true
		}),
		scene = new Essence({
			el: el,
			width: w,
			height: h,
			modules: [world, london, lewis, newYork, sanFrancisco, watermark, debug]
		});

	window.onresize = function () {
		
		var w = document.body.clientWidth,
			h = document.body.clientHeight;
			
		scene.resize(w, h);
		world.resize(w, h);
	};
	
	socket.on('msg', function (data) {
		scene.message(data);
	});
});
