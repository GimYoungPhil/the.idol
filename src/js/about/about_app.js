define([
  'idolManager.app',
  'common/support/routerHelper'
], function(IdolManager, routerHelper) {

  IdolManager.module('AboutApp', function(AboutApp, IdolManager, Backbone, Marionette, $, _) {

    AboutApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'about' : 'showAbout'
      }
    );

    var API = {
      showAbout: function() {

        }
    };

    IdolManager.on('about:show', function() {
      IdolManager.navigate('about');
      API.showAbout();
    });

    AboutApp.on('start', function() {
      new AboutApp.Router({
        controller: API
      });
    });
  });

  return IdolManager.AboutApp;
});
