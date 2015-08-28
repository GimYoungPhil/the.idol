webpackJsonp([4],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idolManager.app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idol/show/show_view\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(IdolManager, View) {

	  IdolManager.module('IdolApp.Show', function(Show, IdolManager, Backbone, Marionette, $, _) {

	    Show.Controller = {

	      showIdol: function(id) {

	        !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"entities/idol\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"entities/group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())]; (function() {

	          var fetchingIdol   = IdolManager.request('idol:entity', id);
	          var fetchingGroups = IdolManager.request('group:entities');

	          $.when(fetchingIdol, fetchingGroups).done(function(idol, groups) {

	            idol.set({group: groups.filter({_id: idol.get('group')})[0].get('name')});

	            var showView = new View.IdolShow({
	              model: idol
	            });

	            showView.on('idol:list', function() {
	              IdolManager.trigger('idol:list');
	            });

	            showView.on('idol:edit', function() {
	              IdolManager.trigger('idol:edit', idol.get('_id'));
	            });

	            showView.on('idol:delete', function() {
	              $.when(idol.destroy()).done(function() {
	                IdolManager.trigger('idol:list');
	              }).fail(function() {

	              });
	            });

	            IdolManager.regions.main.show(showView);

	          }).fail(function(err) {
	            // error
	          });
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	      }
	    }
	  });

	  return IdolManager.IdolApp.Show.Controller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});