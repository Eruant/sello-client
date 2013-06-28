/*globals requirejs, define, window*/
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
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

define(['Essence', 'Bynd-watermark', 'World', 'socketio', 'Office', 'Debug', 'Person'], function (Essence, Watermark, World, io, Office, Debug, Person) {
	'use strict';

	var el = window.document.body,
		w = window.document.body.clientWidth,
		h = window.document.body.clientHeight,
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
		brighton = new Office({
			label: "Brighton",
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
			modules: [world, london, brighton, newYork, sanFrancisco, watermark, debug]
		});

	window.onresize = function () {
		
		var w = window.document.body.clientWidth,
			h = window.document.body.clientHeight;
			
		scene.resize(w, h);
		world.resize(w, h);
	};
	
	socket.on('msg', function (data) {
		
		var offices = data.offices,
			office_len = offices.length,
			i,
			office,
			people,
			people_len,
			j,
			person;
			
		for (i = 0; i < office_len; i += 1) {
			office = offices[i];
			switch (office.label) {
			case 'London':
				people = office.users;
				people_len = people.length;
				
				for (j = 0; j < people_len; j += 1) {
					person = new Person({ name: people[j], speedX: (Math.random() * 2) });
					london.people.push(person);
				}
				break;
			case 'Brighton':
				people = office.users;
				people_len = people.length;
				
				for (j = 0; j < people_len; j += 1) {
					person = new Person({ name: people[j], speedX: (Math.random() * 2) });
					brighton.people.push(person);
				}
				break;
			case 'New York':
				people = office.users;
				people_len = people.length;
				
				for (j = 0; j < people_len; j += 1) {
					person = new Person({ name: people[j], speedX: (Math.random() * 2) });
					newYork.people.push(person);
				}
				break;
			case 'San Francisco':
				people = office.users;
				people_len = people.length;
				
				for (j = 0; j < people_len; j += 1) {
					person = new Person({ name: people[j], speedX: (Math.random() * 2) });
					sanFrancisco.people.push(person);
				}
				break;
			}
		}
	});
});
