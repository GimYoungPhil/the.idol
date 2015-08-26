define([
  'idolManager.app',
  'idol/new/new_view'
], function(IdolManager, View) {

  IdolManager.module('IdolApp.New', function(New, IdolManager, Backbone, Marionette, $, _) {

    New.Controller = {

      newIdol: function() {

        require(['entities/idol', 'entities/group'], function() {

          var newIdol = IdolManager.request('idol:entity');
          var fetchingGroups = IdolManager.request('group:entities');

          $.when(fetchingGroups).done(function(groups) {

            var newView = new View.IdolNew({
              model: newIdol,
              groups: groups
            });

            newView.on('idol:new', function(data) {
              $.when(newIdol.save(data)).done(function() {
                IdolManager.trigger('idol:list');
              }).fail(function() {

              });
            });

            newView.on('idol:list', function() {
              IdolManager.trigger('idol:list');
            });

            IdolManager.regions.main.show(newView);

          });
        });
      }
    }
  });

  return IdolManager.IdolApp.New.Controller;
});
