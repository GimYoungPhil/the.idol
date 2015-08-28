webpackJsonp([5],{

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idolManager.app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idol/edit/edit_view\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(IdolManager, View) {

	  IdolManager.module('IdolApp.Edit', function(Edit, IdolManager, Backbone, Marionette, $, _) {

	    Edit.Controller = {

	      editIdol: function(id) {

	        !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"entities/idol\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"entities/group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())]; (function() {

	          var fetchingIdol   = IdolManager.request('idol:entity', id);
	          var fetchingGroups = IdolManager.request('group:entities');

	          $.when(fetchingIdol, fetchingGroups).done(function(idol, groups) {

	            var editView = new View.IdolEdit({
	              model: idol,
	              groups: groups
	            });

	            editView.on('idol:list', function() {
	              IdolManager.trigger('idol:list');
	            });

	            editView.on('idol:edit', function(data) {
	              $.when(idol.save(data)).done(function() {
	                IdolManager.trigger('idol:show', idol.get('_id'));
	              });
	            });

	            IdolManager.regions.main.show(editView);

	          }).fail(function(err) {
	            // error
	          });
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	      }
	    }
	  });

	  return IdolManager.IdolApp.Edit.Controller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});