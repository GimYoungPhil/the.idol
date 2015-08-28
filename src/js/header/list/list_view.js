define([
  'idolManager.app',
  'tpl!header/list/templates/list.tpl',
  'tpl!header/list/templates/item.tpl'
], function(IdolManager, listTpl, itemTpl) {

  IdolManager.module('HeaderApp.List.View', function(View, IdolManager, Backbone, Marionette, $, _) {

    View.HeaderItem = Marionette.ItemView.extend({
      template: itemTpl,
      tagName: 'li',

      events: {
        'click a': 'navigate'
      },

      navigate: function(e) {
        e.preventDefault();
        this.trigger('navigate', this.model);
      },

      onRender: function() {
        if (this.model.get('selected')) {
          this.$el.addClass('active');
        }
      }
    });

    View.HeaderComp = Marionette.CompositeView.extend({
      template: listTpl,
      className: 'navbar navbar-default navbar-fixed-top',
      childView: View.HeaderItem,
      childViewContainer: 'ul.nav.navbar-nav',

      collectionEvents: {
        'change': 'render'
      }
    });
  });

  return IdolManager.HeaderApp.List.View;
});
