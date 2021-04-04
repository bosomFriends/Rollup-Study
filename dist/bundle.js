(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LFL = {}));
}(this, (function (exports) { 'use strict';

	const time = new Date();

	const qs = require('qs');

	exports.qs = qs;
	exports.time = time;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
