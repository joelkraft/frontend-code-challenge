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

      view.model.set({
        summary: '',
        description: '',
        editing: true
      });

      view.model.url = '/';
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    // @TODO write tests to match the implementation :)
    it('should contain inputs when first rendered', function() {
      var renderedView = view.render();
      var sumEl = renderedView.$el.find('.summary');
      var descEl = renderedView.$el.find('.description');
      var sumTag, descTag;

      view.model.save({});

      sumTag = sumEl.prop('tagName').toLowerCase();
      descTag = descEl.prop('tagName').toLowerCase();

      expect(sumTag).toEqual('input');
      expect(descTag).toEqual('textarea');
    });

    it('should be able to save', function() {
      var renderedView = view.render();
      var sumVal = 'summaryValue';
      var descVal = 'descriptionValue';

      renderedView.$el.find('.summary').val(sumVal);
      renderedView.$el.find('.description').val(descVal);

      view.saveBug({});

      expect(view.model.get('summary')).toEqual(sumVal);
      expect(view.model.get('description')).toEqual(descVal);
    });

    it('should display saved view upon save', function() {
      var renderedView = view.render();
      var sumVal = 'summaryValue';
      var descVal = 'descriptionValue';

      renderedView.$el.find('.summary').val(sumVal);
      renderedView.$el.find('.description').val(descVal);

      view.saveBug({});

      var sumEl = renderedView.$el.find('.summary');
      var descEl = renderedView.$el.find('.description');
      var sumTag = sumEl.prop('tagName').toLowerCase();
      var descTag = descEl.prop('tagName').toLowerCase();

      expect(sumTag).toEqual('h4');
      expect(descTag).toEqual('div');
      expect(sumEl.html()).toEqual(sumVal);
      expect(descEl.html()).toEqual(descVal);
    });

    it('should display editing view upon edit', function() {
      view.model.set({
        editing: false
      });

      var renderedView = view.render();

      var getTag = function(selector) {
        return renderedView
          .$el
          .find(selector)
          .prop('tagName')
          .toLowerCase();
      }

      // verify we are set up correctly
      expect(getTag('.summary')).toEqual('h4');
      expect(getTag('.description')).toEqual('div');

      view.editBug();

      expect(getTag('.summary')).toEqual('input');
      expect(getTag('.description')).toEqual('textarea');
    });

    it('should be able to remove bug', function() {
      view.removeBug();
      expect(view.isDestroyed).toBe(true);
    });
  });
});
