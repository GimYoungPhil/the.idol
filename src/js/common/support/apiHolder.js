define([
  'jquery',
  'underscore'
], function($, _) {

  var deplolyContextPath = 'http://the-idol-back-end.herokuapp.com/api/';
  var devContextPath     = '/api'

  return {

    idol: {
      index:  devContextPath + '/idols',
    },

    group: {
      index:  devContextPath + '/groups'
    }
  };
});
