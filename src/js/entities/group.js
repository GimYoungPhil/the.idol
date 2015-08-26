define([
  'idolManager.app',
  'common/support/apiHolder'
], function(IdolManager, apiHolder) {

  IdolManager.module('Entities', function(Entities, IdolManager, Backbone, Marionette, $, _){

    Entities.Group = Backbone.Model.extend({
      urlRoot: apiHolder.group.index,
      idAttribute: '_id',

      defaults: {
        name: '',
        company: '',
      }
    });

    Entities.GroupCollection = Backbone.Collection.extend({
      model: Entities.Group,
      url: apiHolder.group.index
    });

    var API = {
      getGroupEntity: function(id) {
        var group = new Entities.Group({_id: id});
        var defer = $.Deferred();
        group.fetch({
          success: function(data) {
            defer.resolve(data);
          },
          error: function() {
            defer.reject(new Error('Network not work.'));
          }
        });

        return defer.promise();
      },
      getGroupEntities: function() {
        var groups = new Entities.GroupCollection();
        var defer = $.Deferred();
        groups.fetch({
          success: function(data) {
            defer.resolve(data);
          },
          error: function() {
            defer.reject(new Error('Network not work.'));
          }
        });

        return defer.promise();
      }
    };

    IdolManager.reqres.setHandler('group:entity', function(id) {
      if (id) {
        return API.getGroupEntity(id);
      } else {
        return new Entities.Group();
      }
    });

    IdolManager.reqres.setHandler('group:entities', function() {
      return API.getGroupEntities();
    });
  });

  return ;
});
