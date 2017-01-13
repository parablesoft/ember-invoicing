/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-invoicing',
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
    app.import("bower_components/semantic-ui-statistic/statistic.css");
    app.import("bower_components/semantic-ui-button/button.css");
    app.import("bower_components/semantic-ui-card/card.css");
    app.import("vendor/assets/stylesheets/ember-invoicing.css");
  }
};
