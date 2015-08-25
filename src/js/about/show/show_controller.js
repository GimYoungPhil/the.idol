define([
  'idolManager.app',
  'about/show/show_view'
], function(IdolManager, View) {

  IdolManager.module('AboutApp.Show', function(Show, IdolManager, Backbone, Marionette, $, _) {

    Show.Controller = {

      showAbout: function(id) {

        var about = new Backbone.Model({
          title: 'Girl Group Idol'
        });

        var aboutView = new View.AboutShow({
          model: about
        });

        aboutView.on('about:hi', function(data) {
          console.log('hi', data);
        });

        aboutView.on('about:hello', function(data) {
          console.log('hello', data);
        });

        IdolManager.regions.main.show(aboutView);
      }
    }
  });

  return IdolManager.AboutApp.Show.Controller;
});
