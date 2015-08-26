define([
  'jquery',
  'underscore'
], function($, _) {

  var contextPath = 'http://the-idol-back-end.herokuapp.com/api/';

  return {

    idol: {
      index:       '/api/idols',
    },

    group: {
      index:       '/api/groups'
    },

    // store: {
    //   basic:           contextPath + '/public/store',
    //   share:           contextPath + '/public/share/status'
    // },
    //
    // book: {
    //   basic:           contextPath + '/public/book',
    //   best:            contextPath + '/public/book/best2',
    //   media:           contextPath + '/public/book/issue2',
    //   store:           contextPath + '/store/book2',
    //   search:          contextPath + '/public/book/search?',
    //   category:        contextPath + '/public/category',
    //   orderPrice:      contextPath + '/order/price?',
    //   order:           contextPath + '/order',
    //   orderExist:      contextPath + '/order/exist?',
    //   own:             contextPath + '/user/book/own',
    //   hope:            contextPath + '/user/book/hope'
    // },
    //
    // bookOrder: {
    //   basic:           contextPath + '/order',
    //   finish:          contextPath + '/order/finish',
    //   remove:          contextPath + '/order/finish?'
    // }
  };
});
