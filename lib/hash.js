/**
 * hash.js
 *
 * Copyright (C) 2012 Emmanuel Garcia
 * MIT Licensed
 *
 * ****************************************
 *
 * Hash.pushState(true);
 *
 * Hash.on('/page/([0-9]+)$',
 *	{yep: function(path, parts) { }, nop: function() { }},
 *	'Page $1');
 *
 * Hash.go('/page/1');
 **/

(function() {

'use strict';

var hashes = {},
	regexp = {},
	history = [],
	freq = 100,
	num = 0,
	pushState = false,
	timer = null,
	currentUrl = null,

	freeze = function(obj) {
		if (Object.freeze) return Object.freeze(obj);
		return obj;
	},

	getHashParts = function() {
		return window.location.href.split('#');
	},

	startTimer = function() {
		
		if (!timer)
			timer = setInterval(function() {
				if (num>0 && currentUrl!=window.location.href) {
					currentUrl = window.location.href;
					window.Hash.check();
				}
			}, freq);

	},

	stopTimer = function() {

		if (timer) {
			clearInterval(timer);
			timer = null;
		}

	};

window.Hash = freeze({

		pushState: function(yes) {

			if (window.history && window.history.pushState)
				pushState = yes;

			return this;
		},

		fragment: function() {
			
			var hash = getHashParts();
			return (pushState) ?
				window.location.pathname + ((hash[1]) ? '#' + hash[1] : '')
				: hash[1] || '';

		},
		
		get: function(path, params) {
			
			var p, fragment = '', parameters = [];

			for(p in params) {
				if (!Object.prototype.hasOwnProperty(p))
					continue;
				parameters.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
			}

			if (parameters.length>0)
				parameters = '?' + parameters.join('&');
		
			return (pushState) ? path + parameters :
				getHashParts()[0] + '#' + path + parameters;

		},

		go: function(hash, params) {

			if (this.fragment()!=hash) {
				var to = this.get(hash, params);

				if (pushState)
					window.history.pushState(null, document.title, to);
				else
					window.location.href = to;
				}
			
			return this;
		},

		update: function () {
			
			currentUrl = window.location.href;
			return this;

		},

		on: function(hash, callback, title) {

			if (!hashes[hash])
				hashes[hash] = {title: title, listeners: []};
			
			hashes[hash].listeners.push(callback);
			num++;
			startTimer();

			return this;
		},

		check: function() {

			var i,
				hash,
				parts,
				fragment = this.fragment();


			for (hash in hashes) {
				if (!Object.prototype.hasOwnProperty.call(hashes, hash))
					continue;

				hashes[hash].regexp = hashes[hash].regexp || new RegExp(hash);

				if ((parts = hashes[hash].regexp.exec(fragment))) {
					if (hashes[hash].title)
						document.title = hashes[hash].title;

					for (i = 0; i<hashes[hash].listeners.length; i++)
						if (hashes[hash].listeners[i].yep)
							hashes[hash].listeners[i].yep(fragment, parts);
				} else {
					for (i = 0; i<hashes[hash].listeners.length; i++)
						if (hashes[hash].listeners[i].nop)
							hashes[hash].listeners[i].nop(fragment);
				}

			}

			return this;
		}
});

})();
