define([
  'idolManager.app',
  'tpl!idol/show/templates/idolShow.tpl',
  'bootstrap'
], function(IdolManager, idolShowTpl) {

  IdolManager.module('IdolApp.Show.View', function(View, BooksTour, Backbone, Marionette, $, _) {

    View.IdolShow = Marionette.ItemView.extend({
      template: idolShowTpl,

      triggers: {
        'click .js-deleteIdol': 'idol:delete',
        'click .js-listIdol':   'idol:list',
        'click .js-editIdol':   'idol:edit'
      }
    });

  });

  return IdolManager.IdolApp.Show.View;
});
