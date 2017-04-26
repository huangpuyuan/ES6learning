/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Created by Administrator on 2017/4/26.
	 */
	{
	    // 2进制0b,8进制0o
	    console.log('B', 503);
	    console.log('o', 503);
	}
	{
	    //是否有尽
	    console.log('is', Number.isFinite(15));
	    console.log('NaN', Number.isFinite(NaN));
	    console.log('1/0', Number.isFinite('true' / 0));
	    console.log('NaN', Number.isNaN(NaN));
	    console.log('NaN', Number.isNaN(0));
	}
	{
	    console.log('25', Number.isInteger(25));
	    console.log('25.0', Number.isInteger(25.0));
	    console.log('25.1', Number.isInteger(25.1));
	    console.log('25', Number.isInteger('25'));
	}
	{
	    // 判断数的上下限2^53次方
	    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
	    console.log('10', Number.isSafeInteger(10));
	    console.log('a', Number.isSafeInteger('a'));
	}
	{
	    console.log(4.1, Math.trunc(4.1));
	    console.log(4.9, Math.trunc(4.9));
	}

/***/ })
/******/ ]);