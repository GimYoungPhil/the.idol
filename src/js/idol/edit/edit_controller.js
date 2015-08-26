define([
  'idolManager.app',
  'idol/edit/edit_view'
], function(IdolManager, View) {

  IdolManager.module('IdolApp.Edit', function(Edit, IdolManager, Backbone, Marionette, $, _) {

    Edit.Controller = {

      editIdol: function(id) {

        require(['entities/idol', 'entities/group'], function() {

          var fetchingIdol   = IdolManager.request('idol:entity', id);
          var fetchingGroups = IdolManager.request('group:entities');

          $.when(fetchingIdol, fetchingGroups).done(function(idol, groups) {

            var editView = new View.IdolEdit({
              model: idol,
              groups: groups
            });

            editView.on('idol:list', function() {
              IdolManager.trigger('idol:list');
            });

            editView.on('idol:edit', function(data) {
              $.when(idol.save(data)).done(function() {
                IdolManager.trigger('idol:show', idol.get('_id'));
              });
            });

            IdolManager.regions.main.show(editView);

          }).fail(function(err) {
            // error
          });
        });
      }
    }
  });

  return IdolManager.IdolApp.Edit.Controller;
});
