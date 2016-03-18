define([
  'marionette',
  'bug_tracker/models/bug',
  'bug_tracker/views/bug_item',
  'bug_tracker/views/templates/bug_collection.tpl',
], function (Marionette, BugModel, BugItemView, BugCollectionTpl) {
  'use strict';

  var BugCollectionView = Marionette.CompositeView.extend({
    childView: BugItemView,
    childViewContainer: '#bug_items',

    template: BugCollectionTpl,

    initialize: function () {
      if (!this.collection) {
        throw new Error('BugCollectionView requires a collection');
      }
    },

    events: {
      'click .js_add': 'addBug',
      'click .js_refresh': 'refresh'
    },

    addBug: function(e) {
      var bugModel = new BugModel();
      bugModel.editing = true;
      this.collection.add(bugModel);
    },

    refresh: function(e) {
      this.collection.fetch();
    }

    // @TODO implement functions to handle 'addBug'
    // @TODO implement functions to handle 'refresh'

  });

  return BugCollectionView;
});
