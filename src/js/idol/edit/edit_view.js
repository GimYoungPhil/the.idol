define([
  'idolManager.app',
  'tpl!idol/edit/templates/idolEdit.tpl',
  'syphon',
  'bootstrap'
], function(IdolManager, idolEditTpl) {

  IdolManager.module('IdolApp.Edit.View', function(View, BooksTour, Backbone, Marionette, $, _) {

    View.IdolEdit = Marionette.ItemView.extend({
      template: idolEditTpl,

      events: {
        'click .js-editIdol':   'editIdol',
        'change #imageLink':    'changeImage'
      },

      triggers: {
        'click .js-deleteIdol': 'idol:delete',
        'click .js-listIdol':   'idol:list'
      },

      editIdol: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);
        this.trigger('idol:edit', data);
      },

      changeImage: function(e) {
        e.preventDefault();
        var imageLink = $(e.target).val();
        this.$el.find('.img-responsive').attr('src', imageLink)
      }
    });

  });

  return IdolManager.IdolApp.Edit.View;
});
