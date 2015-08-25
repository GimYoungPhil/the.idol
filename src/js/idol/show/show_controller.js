define([
  'idolManager.app',
  'idol/show/show_view'
], function(IdolManager, View) {

  IdolManager.module('IdolApp.Show', function(Show, IdolManager, Backbone, Marionette, $, _) {

    Show.Controller = {

      showIdol: function(id) {

        require(['entities/idol'], function() {

          var fetchingIdol  = IdolManager.request('idol:entity', id);

          $.when(fetchingIdol).done(function(idol) {

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
        });
      }
    }
  });

  return IdolManager.IdolApp.Show.Controller;
});
