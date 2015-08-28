webpackJsonp([3],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idolManager.app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idol/new/new_view\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(IdolManager, View) {

	  IdolManager.module('IdolApp.New', function(New, IdolManager, Backbone, Marionette, $, _) {

	    New.Controller = {

	      newIdol: function() {

	        !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"entities/idol\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"entities/group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())]; (function() {

	          var newIdol = IdolManager.request('idol:entity');
	          var fetchingGroups = IdolManager.request('group:entities');

	          $.when(fetchingGroups).done(function(groups) {

	            var newView = new View.IdolNew({
	              model: newIdol,
	              groups: groups
	            });

	            newView.on('idol:new', function(data) {
	              $.when(newIdol.save(data)).done(function() {
	                IdolManager.trigger('idol:list');
	              }).fail(function() {

	              });
	            });

	            newView.on('idol:list', function() {
	              IdolManager.trigger('idol:list');
	            });

	            IdolManager.regions.main.show(newView);

	          });
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	      }
	    }
	  });

	  return IdolManager.IdolApp.New.Controller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});