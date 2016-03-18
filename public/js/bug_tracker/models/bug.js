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

    // @TODO Validate that this model's summary is set
    validate: function (attrs, options) {
      if (attrs.summary === '') {
        return 'Summary needs to have content.'
      }
    }
  });

  return BugModel;
});
