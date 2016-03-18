define([
  'backbone',
  'bug_tracker/models/bug'
], function (Backbone, BugModel) {
  'use strict';

  var BugCollection = Backbone.Collection.extend({
    model: BugModel,
    url: '/api/bug'
  });

  return BugCollection;
});
