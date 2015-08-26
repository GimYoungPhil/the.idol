define([
  'idolManager.app',
  'group/list/list_view',
  'common/support/routerHelper'
], function(IdolManager, View, routerHelper) {

  IdolManager.module('GroupApp.List', function(List, IdolManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listGroup: function() {

        require(['entities/group'], function() {

          var fetchingGroups  = IdolManager.request('group:entities');

          $.when(fetchingGroups).done(function(groups) {

            var compView = new View.GroupComp({
              collection: groups
            });

            compView.on('group:new', function(data) {
              $.when(groups.create(data, {wait: true})).done(function() {
                groups.fetch();
                compView.triggerMethod('set:clear');
              });
            });

            // listView.on('childview:idol:show', function(childview) {
            //   var idol = childview.model;
            //   IdolManager.trigger('idol:show', idol.get('_id'));
            // });

            var layout = new View.GroupLayout({
              title: '소속그룹'
            });

            // layout.on('idol:new', function() {
            //   IdolManager.trigger('idol:new');
            // });

            layout.on('show', function() {
              layout.listRegion.show(compView);
            });

            IdolManager.regions.main.show(layout);

          }).fail(function(err) {
            // error
          });
        });
      }
    }
  });

  return IdolManager.GroupApp.List.Controller;
});
