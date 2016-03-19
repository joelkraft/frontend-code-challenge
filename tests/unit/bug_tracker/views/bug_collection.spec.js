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
      spyOn(view.collection, 'fetch')
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

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

    it('should be able to refresh', function() {
      view.addBug({});
      var renderedView = view.render();
      expect(renderedView.$el.find('.bug_item').length).toBe(1);
      view.refresh({});
      expect(renderedView.$el.find('.bug_item').length).toBe(1);
    });
  });
});
