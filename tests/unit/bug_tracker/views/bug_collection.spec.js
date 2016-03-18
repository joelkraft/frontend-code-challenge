define([
  'backbone',
  'bug_tracker/views/bug_collection'
], function (Backbone, BugCollectionView) {
  'use strict';

  describe('BugCollectionView', function () {
    var view;
    beforeEach(function () {
      view = new BugCollectionView({
        collection: new Backbone.Collection(),
      });
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    // @TODO write tests to match the implementation :)
    it('should not contain a bug to start', function() {
      var renderedView = view.render();
      var bugs = renderedView.$el.find('.bug_item').length;
      expect(bugs).toBe(0);
    });
    it('should be able to add a bug', function() {
      view.addBug({});
      var bugs = view.render().$el.find('.bug_item').length;
      expect(bugs).toBe(1);
    });
  });
});
