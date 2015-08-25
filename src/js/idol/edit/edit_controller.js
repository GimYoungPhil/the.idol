define([
  'idolManager.app',
  'idol/edit/edit_view'
], function(IdolManager, View) {

  IdolManager.module('IdolApp.Edit', function(Edit, IdolManager, Backbone, Marionette, $, _) {

    Edit.Controller = {

      editIdol: function(id) {

        require(['entities/idol'], function() {

          var fetchingIdol  = IdolManager.request('idol:entity', id);

          $.when(fetchingIdol).done(function(idol) {

            var editView = new View.IdolEdit({
              model: idol
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
