/* jshint node: true */
'use strict';

module.exports = {
  init: function(app) {
    this._super.init && this._super.init.apply(this, arguments);

    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.optional = this.options.babel.optional || [];

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators');
    }
  },
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
    app.import("bower_components/downloadjs/download.js");
    app.import("vendor/assets/images/invoice.png");
  }
};
