define([
  'idolManager.app',
  'common/support/apiHolder'
], function(IdolManager, apiHolder) {

  IdolManager.module('Entities', function(Entities, IdolManager, Backbone, Marionette, $, _){

    Entities.Idol = Backbone.Model.extend({

      urlRoot: apiHolder.idol.index,
      idAttribute: '_id',

      defaults: {
        name: '',
        group: 'solo',
        height: 170,
        weight: 50,
        imageLink: ''
      }
    });

    Entities.IdolCollection = Backbone.Collection.extend({
      model: Entities.Idol,
      url: apiHolder.idol.index,

      // initialize: function(options) {
      //   options || (options = {});
      // },

      // sync: function(method, collection, options) {
      //   if (method === 'read') {
      //     options.data = {
      //       p: _.pick(this.parameters.toJSON(), 'year', 'month', 'categoryUid'),
      //       scale: this.parameters.get('scale'),
      //       page: this.parameters.get('page'),
      //     };
      //   }
      //   return Backbone.Collection.prototype.sync.call(this, method, collection, options);
      // },

      // parse: function(response) {
      //   return response;
      // }
    });

    var API = {
      getIdolEntity: function(id) {
        var idol = new Entities.Idol({_id: id});
        var defer = $.Deferred();
        idol.fetch({
          success: function(data) {
            defer.resolve(data);
          },
          error: function() {
            defer.reject(new Error('Network not work.'));
          }
        });

        return defer.promise();
      },
      getIdolEntities: function(options) {
        var idols = new Entities.IdolCollection(options);
        var defer = $.Deferred();
        idols.fetch({
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

    IdolManager.reqres.setHandler('idol:entity', function(id) {
      if (id) {
        return API.getIdolEntity(id);
      } else {
        return new Entities.Idol();
      }
    });

    IdolManager.reqres.setHandler('idol:entities', function(options) {
      return API.getIdolEntities(options);
    });
  });

  return ;
});
