'use strict';
var test = require('ava');
var yeomanWelcome = require('./');

test(function (t) {
	console.log(yeomanWelcome);
	t.assert(yeomanWelcome.length > 0);
	t.assert(yeomanWelcome.indexOf('Welcome to Yeoman') !== -1);
	t.end();
});
