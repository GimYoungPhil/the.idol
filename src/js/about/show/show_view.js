define([
  'idolManager.app',
  'tpl!about/show/templates/aboutShow.tpl',
  'bootstrap'
], function(IdolManager, aboutShowTpl) {

  IdolManager.module('AboutApp.Show.View', function(View, BooksTour, Backbone, Marionette, $, _) {

    View.AboutShow = Marionette.LayoutView.extend({
      template: aboutShowTpl,

      ui: {
        'hiBtn':  '.js-hiAbout',
        'helloBtn': '.js-helloAbout'
      },

      events: {
        'click @ui.hiBtn': 'hiAbout'
      },

      triggers: {
        'click @ui.helloBtn': 'about:hello'
      },

      hiAbout: function(e) {
        e.preventDefault();
        this.trigger('about:hi', 123);
      }
    });

  });

  return IdolManager.AboutApp.Show.View;
});
