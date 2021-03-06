(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ChangeTitleOnLeave = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod);
		global.index = mod.exports;
	}
})(this, function (module) {
	'use strict';

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var ChangeTitleOnLeave = function () {
		function ChangeTitleOnLeave(options) {
			_classCallCheck(this, ChangeTitleOnLeave);

			this.resolveAttrs(options);
			this.listenVisibility();
		}

		_createClass(ChangeTitleOnLeave, [{
			key: 'resolveAttrs',
			value: function resolveAttrs() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				this.options = {};
				this.title = document.title;

				if (!options.title || options.title === '') {
					throw Error('The `title` is required and must be a string.');
				}

				this.options.title = options.title;
				this.options.timeout = typeof options.timeout === 'number' ? options.timeout : 0;
				this.options.onHidden = typeof options.onHidden === 'function' ? options.onHidden : null;
				this.options.onVisible = typeof options.onVisible === 'function' ? options.onVisible : null;
			}
		}, {
			key: 'listenVisibility',
			value: function listenVisibility() {
				var _this = this;

				window.addEventListener('visibilitychange', function () {
					return _this.handleVisibility();
				});
			}
		}, {
			key: 'handleVisibility',
			value: function handleVisibility() {
				var _this2 = this;

				var timeout = this.options.timeout;


				setTimeout(function () {
					return _this2.updateTitle();
				}, timeout * 1000);
			}
		}, {
			key: 'updateTitle',
			value: function updateTitle() {
				var state = document.visibilityState;
				var _options = this.options,
				    title = _options.title,
				    onHidden = _options.onHidden,
				    onVisible = _options.onVisible;


				if (state === 'hidden') {
					document.title = title;
					this.useCallback(onHidden);
				}

				if (state === 'visible') {
					document.title = this.title;
					this.useCallback(onVisible);
				}
			}
		}, {
			key: 'useCallback',
			value: function useCallback(callable) {
				if (!callable) return;

				callable();
			}
		}]);

		return ChangeTitleOnLeave;
	}();

	module.exports = ChangeTitleOnLeave;
});

},{}]},{},[1])(1)
});