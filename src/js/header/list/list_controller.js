define([
  'idolManager.app',
  'header/list/list_view'
], function(IdolManager, View) {

  IdolManager.module('HeaderApp.List', function(List, IdolManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listHeader: function() {
        require(['entities/header'], function() {
          var links = IdolManager.request('header:entities');
          var headerView = new View.HeaderComp({
            collection: links
          });

          headerView.on('childview:navigate', function(childView, model) {
            var trigger = model.get('navigationTrigger');
            IdolManager.trigger(trigger);
          });

          IdolManager.regions.header.show(headerView);
        });
      },

      setActiveHeader: function(headerUrl) {
        require(['entities/header'], function() {
          var links = IdolManager.request('header:entities');
          links.each(function(header) {
            if (header.get('url') === headerUrl) {
              header.set('selected', true);
            } else {
              header.set('selected', false);
            }
          });
        });
      }
    };
  });

  return IdolManager.HeaderApp.List.Controller;
});
