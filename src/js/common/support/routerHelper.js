define([
  'underscore'
], function(_) {

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
});
