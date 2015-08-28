define([
  'idolManager.app'
], function(IdolManager) {

  IdolManager.module('Entities', function(Entities, IdolManager, Backbone, Marionette, $, _){

    Entities.Header = Backbone.Model.extend();

    Entities.HeaderCollection = Backbone.Collection.extend({
      model: Entities.Header
    });

    var initializeHeaders = function() {
      Entities.headers = new Entities.HeaderCollection([
        { url: 'idols',  navigationTrigger: 'idol:list',  name: 'Idol'  },
        { url: 'groups', navigationTrigger: 'group:list', name: 'Group' },
        { url: 'about',  navigationTrigger: 'about:show', name: 'About' }
      ]);
    };

    var API = {
      getHeaders: function() {
        if (Entities.headers === undefined) {
          initializeHeaders();
        }
        return Entities.headers;
      }
    };

    IdolManager.reqres.setHandler('header:entities', function() {
      return API.getHeaders();
    });
  });

  return ;
});
