define([
  'bug_tracker/models/bug'
], function (BugModel) {
  'use strict';

  describe('BugModel', function () {
    var model;
    beforeEach(function () {
      model = new BugModel();
    });

    it('should exist', function () {
      expect(model).toBeDefined();
    });

    // @TODO write tests to match the implementation :)
    it('should have defaults correctly set', function() {
      expect(model.get('summary')).toEqual('');
      expect(model.get('description')).toEqual('');
      expect(model.get('editing')).toBe(true);
    });

    it('should validate summary to not be empty upon save', function() {
      var msg = 'Summary needs to have content.';

      expect(model.validationError).toBe(null);

      model.save();
      
      expect(model.validationError).toEqual(msg);
    });

    it('should correctly set values upon save', function() {
      var summary = 'newSummary';
      var description = 'newDescription';
      model.url = '/';
      
      model.save({
        summary: summary,
        description: description
      })

      expect(model.get('summary')).toEqual(summary);
      expect(model.get('description')).toEqual(description);
    })
  });
});
