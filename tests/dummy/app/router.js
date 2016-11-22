import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("invoices",{path: "/"});
  this.route("invoice",{path: "invoice/:invoice_id"});
  this.route("invoice-new",{path: "invoice/new"});
});

export default Router;
