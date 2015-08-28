define([
  'idolManager.app',
  'header/list/list_controller'
], function(IdolManager, HeaderController) {

  IdolManager.module('HeaderApp', function(HeaderApp, IdolManager, Backbone, Marionette, $, _) {

    var API = {
      listHeader: function() {
        HeaderController.listHeader();
      }
    };

    IdolManager.commands.setHandler('set:active:header', function(headerUrl) {
      HeaderController.setActiveHeader(headerUrl);
    });

    HeaderApp.on('start', function() {
      API.listHeader();
    });
  });

  return IdolManager.HeaderApp;
});
