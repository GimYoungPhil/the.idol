define([
  'idolManager.app',
  'tpl!group/list/templates/groupLayout.tpl',
  'tpl!group/list/templates/groupEmpty.tpl',
  'tpl!group/list/templates/groupItem.tpl',
  'tpl!group/list/templates/groupComp.tpl',
  'bootstrap'
], function(IdolManager, groupLayoutTpl, groupEmptyTpl, groupItemTpl, groupCompTpl) {

  IdolManager.module('GroupApp.List.View', function(View, IdolManager, Backbone, Marionette, $, _) {

    View.GroupLayout = Marionette.LayoutView.extend({
      template: groupLayoutTpl,

      serializeData: function() {
        var title = Marionette.getOption(this, 'title');
        return {
          title: title
        };
      },

      regions: {
        'listRegion': '#list-region',
        'itemRegion': '#item-region'
      }

    });

    View.GroupEmpty = Marionette.ItemView.extend({
      tagName: 'tr',
      className: '',
      template: groupEmptyTpl
    });

    View.GroupItem = Marionette.ItemView.extend({
      tagName: 'tr',
      className: '',
      template: groupItemTpl,

      triggers: {
        'click .js-showIdol': 'idol:show'
      }
    });

    View.GroupComp = Marionette.CompositeView.extend({
      tagName: 'div',
      className: 'panel panel-default',
      childView: View.GroupItem,
      emptyView: View.GroupEmpty,
      template: groupCompTpl,
      childViewContainer: 'tbody',

      onRender: function() {
        $('body').scrollTop(0);
      },

      events: {
        'click .js-newGroup': 'newGroup'
      },

      ui: {
        'inputName': 'input[name="name"]',
        'inputComp': 'input[name="company"]'
      },

      newGroup: function(e) {
        e.preventDefault();
        var name = this.ui.inputName.val();
        var company = this.ui.inputComp.val();

        if (name && company) {
          this.trigger('group:new', {
            name: name,
            company: company
          });
        }
      },

      onSetClear: function() {
        this.ui.inputName.val('');
        this.ui.inputComp.val('');
      }
    });

  });

  return IdolManager.GroupApp.List.View;
});
