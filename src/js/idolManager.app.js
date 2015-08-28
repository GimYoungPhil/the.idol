define([
  'marionette'
], function(Marionette) {
  var IdolManager = new Marionette.Application();

  IdolManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  IdolManager.getCurrentRoute = function() {
    return Backbone.history.fragment
  };

  IdolManager.on('before:start', function() {
    var RegionContainer = Marionette.LayoutView.extend({
      el: '#app-container',

      regions: {
        header: '#header-region',
        main:   '#main-region'
      }
    });

    IdolManager.regions = new RegionContainer();
  });

  IdolManager.on('start', function() {
    console.log('App start.');

    if (Backbone.history) {
      Backbone.history.start();
      if (IdolManager.getCurrentRoute() === '') {
        IdolManager.trigger('idol:list');
      }
    }
  });

  return IdolManager;
});
