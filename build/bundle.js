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
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idolManager.app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idol/idol_app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"group/group_app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"about/about_app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"header/header_app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	]; (function(IdolManager) {

	  IdolManager.start();

	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}())


/***/ }
/******/ ]);