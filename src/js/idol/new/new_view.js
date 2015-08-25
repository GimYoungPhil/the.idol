define([
  'idolManager.app',
  'tpl!idol/new/templates/idolNew.tpl',
  'syphon',
  'bootstrap'
], function(IdolManager, idolNewTpl) {

  IdolManager.module('IdolApp.New.View', function(View, BooksTour, Backbone, Marionette, $, _) {

    View.IdolNew = Marionette.ItemView.extend({
      template: idolNewTpl,

      events: {
        'click .js-newIdol': 'newIdol',
        'change #imageLink': 'changeImage'
      },

      triggers: {
        'click .js-listIdol': 'idol:list'
      },

      newIdol: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);
        this.trigger('idol:new', data);
      },

      changeImage: function(e) {
        e.preventDefault();
        var imageLink = $(e.target).val();
        this.$el.find('.img-responsive').attr('src', imageLink)
      }
    });

  });

  return IdolManager.IdolApp.New.View;
});
