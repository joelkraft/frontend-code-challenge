define([
  'marionette',
  'bug_tracker/views/templates/bug_item.tpl'
], function (Marionette, BugItemTpl) {
  'use strict';

  var BugItemView = Marionette.ItemView.extend({
    template: BugItemTpl,

    events: {
      'click .js_bug_edit': 'editBug',
      'click .js_bug_save': 'saveBug',
      'click .bug_remove': 'removeBug',
    },

    templateHelpers: function () {
      return {
        error: this.model.validationError,
      };
    },

    initialize: function () {
      if (!this.model) {
        throw new Error('BugItemView requires a model');
      }
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'invalid', this.showError);
    },

    saveBug: function(e) {
      var summary = this.$el.find('.summary').val();
      var description = this.$el.find('.description').val();
      
      this.model.set('editing', false);
      this.model.save({
        summary:summary,
        description:description
      });
    },

    editBug: function() {
      this.model.set('editing', true);
      this.render();
    },

    removeBug: function() {
      this.model.destroy();
      this.destroy();
    },

    showError: function() {
      this.model.set('editing', true);
      this.render();
    }
  });

  return BugItemView;
});
