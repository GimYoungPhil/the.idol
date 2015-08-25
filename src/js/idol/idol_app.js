define([
  'idolManager.app'
], function(IdolManager) {

  IdolManager.module('IdolApp', function(IdolApp, IdolManager, Backbone, Marionette, $, _) {

    IdolApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'idols':          'listIdol',
        'idols/new':      'newIdol',
        'idols/:id':      'showIdol',
        'idols/:id/edit': 'editIdol'
      }
    });

    var API = {
      listIdol: function() {
        require(['idol/list/list_controller'], function(ListController) {
          ListController.listIdol();
          IdolManager.execute('set:active', 'idols');
        });
      },
      newIdol: function() {
        require(['idol/new/new_controller'], function(NewController) {
          NewController.newIdol();
          IdolManager.execute('set:active', 'idols');
        });
      },
      showIdol: function(id) {
        require(['idol/show/show_controller'], function(ShowController) {
          ShowController.showIdol(id);
          IdolManager.execute('set:active', 'idols');
        });
      },
      editIdol: function(id) {
        require(['idol/edit/edit_controller'], function(EditController) {
          EditController.editIdol(id);
          IdolManager.execute('set:active', 'idols');
        });
      }
    };

    IdolManager.on('idol:list', function() {
      IdolManager.navigate('idols');
      API.listIdol();
    });

    IdolManager.on('idol:new', function() {
      IdolManager.navigate('idols/new');
      API.newIdol();
    });

    IdolManager.on('idol:show', function(id) {
      IdolManager.navigate('idols/' + id);
      API.showIdol(id);
    });

    IdolManager.on('idol:edit', function(id) {
      IdolManager.navigate('idols/' + id + '/edit');
      API.editIdol(id);
    });

    IdolApp.on('start', function() {
      new IdolApp.Router({
        controller: API
      });
    });
  });

  return IdolManager.IdolApp;
});
