define([
  'backbone',
  'bug_tracker/views/bug_item'
], function (Backbone, BugItemView) {
  'use strict';

  describe('BugItemView', function () {
    var view;
    beforeEach(function () {
      view = new BugItemView({
        model: new Backbone.Model(),
      });
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    // @TODO write tests to match the implementation :)
    it('should be able to save', function() {
      view.model.urlRoot = '/api/bug';
      var renderedView = view.render();
      renderedView.$el.find('.summary').val('summary');
      renderedView.$el.find('.description').val('description');
      view.saveBug({});
      var s = renderedView.$el.find('.summary').val();
      var d = renderedView.$el.find('.description').val();
      expect(s).toEqual('summary');
    })
  });
});
