define([
  'idolManager.app',
  'idol/list/list_view',
  'common/support/routerHelper'
], function(IdolManager, View, routerHelper) {

  IdolManager.module('IdolApp.List', function(List, IdolManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listIdol: function() {

        require(['entities/idol', 'entities/group'], function() {

          var fetchingIdols  = IdolManager.request('idol:entities');
          var fetchingGroups = IdolManager.request('group:entities');

          $.when(fetchingIdols, fetchingGroups).done(function(idols, groups) {

            idols.each(function(idol, index) {
              idol.set({group: groups.filter({_id: idol.get('group')})[0].get('name')});
            });

            var listView = new View.IdolList({
              collection: idols
            });

            listView.on('childview:idol:show', function(childview) {
              var idol = childview.model;
              IdolManager.trigger('idol:show', idol.get('_id'));
            });

            var layout = new View.IdolLayout({
              title: 'best'
            });

            layout.on('idol:new', function() {
              IdolManager.trigger('idol:new');
            });

            layout.on('show', function() {
              layout.listRegion.show(listView);
            });

            IdolManager.regions.main.show(layout);

          }).fail(function(err) {
            // error
          });
        });
      }
    }
  });

  return IdolManager.IdolApp.List.Controller;
});
