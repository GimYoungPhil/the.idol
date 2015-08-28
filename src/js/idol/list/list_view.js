define([
  'idolManager.app',
  'tpl!idol/list/templates/idolLayout.tpl',
  'tpl!idol/list/templates/idolEmpty.tpl',
  'tpl!idol/list/templates/idolItem.tpl',
  'tpl!idol/list/templates/idolComp.tpl',
  'bootstrap'
], function(IdolManager, idolLayoutTpl, idolEmptyTpl, idolItemTpl, idolCompTpl) {

  IdolManager.module('IdolApp.List.View', function(View, IdolManager, Backbone, Marionette, $, _) {

    View.IdolLayout = Marionette.LayoutView.extend({
      template: idolLayoutTpl,

      regions: {
        'listRegion': '#list-region'
      },

      events: {
        'click .js-new-idol': 'newIdol'
      },

      newIdol: function(e) {
        e.preventDefault();
        this.trigger('idol:new');
      }
    });

    View.IdolEmpty = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'panel panel-default',
      template: idolEmptyTpl
    });

    View.IdolItem = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'col-xs-10 col-xs-offset-2 col-sm-4 col-sm-offset-0 col-md-3 col-lg-2',
      template: idolItemTpl,

      triggers: {
        'click .js-showIdol': 'idol:show'
      }
    });

    View.IdolList = Marionette.CollectionView.extend({
      tagName: 'div',
      className: 'row best-list',
      childView: View.IdolItem,
      emptyView: View.IdolEmpty,

      onRender: function() {
        $('body').scrollTop(0);
      }
    });

    View.IdolComponent = Marionette.CollectionView.extend({
      tagName: 'div',
      className: 'row best-list',
      childView: View.IdolItem,
      emptyView: View.IdolEmpty,
      template: idolCompTpl,

      onRender: function() {
        $('body').scrollTop(0);
      }
    });

  });

  return IdolManager.IdolApp.List.View;
});
