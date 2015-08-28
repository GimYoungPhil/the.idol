webpackJsonp([2],{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(9),
	  __webpack_require__(13),
	  __webpack_require__(14)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(IdolManager, View, routerHelper) {

	  IdolManager.module('IdolApp.List', function(List, IdolManager, Backbone, Marionette, $, _) {

	    List.Controller = {

	      listIdol: function() {

	        !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../entities/idol\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"./../entities/group\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())]; (function() {

	          var fetchingIdols  = IdolManager.request('idol:entities');
	          var fetchingGroups = IdolManager.request('group:entities');

	          $.when(fetchingIdols, fetchingGroups).done(function(idols, groups) {

	            idols.each(function(idol, index) {
	              idol.set({group: groups.filter({_id: idol.get('group')})[0].get('name')});
	            });

	            var listView = new View.IdolList({
	              collection: idols
	            });

	            listView.on('childview:idol:show', function(childview) {
	              var idol = childview.model;
	              IdolManager.trigger('idol:show', idol.get('_id'));
	            });

	            var layout = new View.IdolLayout({
	              title: 'best'
	            });

	            layout.on('idol:new', function() {
	              IdolManager.trigger('idol:new');
	            });

	            layout.on('show', function() {
	              layout.listRegion.show(listView);
	            });

	            IdolManager.regions.main.show(layout);

	          }).fail(function(err) {
	            // error
	          });
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	      }
	    }
	  });

	  return IdolManager.IdolApp.List.Controller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"idolManager.app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"tpl!idol/list/templates/idolLayout.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"tpl!idol/list/templates/idolEmpty.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"tpl!idol/list/templates/idolItem.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"tpl!idol/list/templates/idolComp.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
	  !(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(IdolManager, idolLayoutTpl, idolEmptyTpl, idolItemTpl, idolCompTpl) {

	  IdolManager.module('IdolApp.List.View', function(View, IdolManager, Backbone, Marionette, $, _) {

	    View.IdolLayout = Marionette.LayoutView.extend({
	      template: idolLayoutTpl,

	      regions: {
	        'listRegion': '#list-region'
	      },

	      events: {
	        'click .js-new-idol': 'newIdol'
	      },

	      newIdol: function(e) {
	        e.preventDefault();
	        this.trigger('idol:new');
	      }
	    });

	    View.IdolEmpty = Marionette.ItemView.extend({
	      tagName: 'div',
	      className: 'panel panel-default',
	      template: idolEmptyTpl
	    });

	    View.IdolItem = Marionette.ItemView.extend({
	      tagName: 'div',
	      className: 'col-xs-10 col-xs-offset-2 col-sm-4 col-sm-offset-0 col-md-3 col-lg-2',
	      template: idolItemTpl,

	      triggers: {
	        'click .js-showIdol': 'idol:show'
	      }
	    });

	    View.IdolList = Marionette.CollectionView.extend({
	      tagName: 'div',
	      className: 'row best-list',
	      childView: View.IdolItem,
	      emptyView: View.IdolEmpty,

	      onRender: function() {
	        $('body').scrollTop(0);
	      }
	    });

	    View.IdolComponent = Marionette.CollectionView.extend({
	      tagName: 'div',
	      className: 'row best-list',
	      childView: View.IdolItem,
	      emptyView: View.IdolEmpty,
	      template: idolCompTpl,

	      onRender: function() {
	        $('body').scrollTop(0);
	      }
	    });

	  });

	  return IdolManager.IdolApp.List.View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(2)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {

	  var routerHelper = {

	    // INPUT Object
	    // { categoryUid:1009, page:2, source:JOSUN, bookUid:246686 }
	    // OUTPUT String
	    // "categoryUid:1009+page:2+source:JOSUN+bookUid:246686"
	    serializeParams: function(options) {
	      options = _.pick(options, 'categoryUid', 'page', 'source', 'bookUid');
	      return _.map(_.pairs(options), function(pair) { return pair.join(':'); }).join('+');
	    },

	    // INPUT String
	    // "categoryUid:1009+page:2+source:JOSUN+bookUid:246686"
	    // OUTPUT Object
	    // { categoryUid:1009, page:2, source:JOSUN, bookUid:246686 }
	    parseParams: function(params) {
	      return _.object(_.map(params.split('+'), function(param) { return param.split(':'); }));
	    }
	  }

	  return routerHelper;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});