define([
  'backbone',
], function (Backbone) {
  'use strict';

  var BugModel = Backbone.Model.extend({
    defaults: function () {
      return {
        summary: '',
        description: '',
        editing: this.isNew(),
      };
    },

    validate: function (attrs, options) {
      if (attrs.summary === '') {
        return 'Summary needs to have content.'
      }
    }
  });

  return BugModel;
});
