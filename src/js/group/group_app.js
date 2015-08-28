define([
  'idolManager.app'
], function(IdolManager) {

  IdolManager.module('GroupApp', function(GroupApp, IdolManager, Backbone, Marionette, $, _) {

    GroupApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'groups':         'listGroup',
      }
    });

    var API = {
      listGroup: function() {
        require(['group/list/list_controller'], function(ListController) {
          ListController.listGroup();
          IdolManager.execute('set:active:header', 'groups');
        });
      },
    };

    IdolManager.on('group:list', function() {
      IdolManager.navigate('groups');
      API.listGroup();
    });

    GroupApp.on('start', function() {
      new GroupApp.Router({
        controller: API
      });
    });
  });

  return IdolManager.GroupApp;
});
