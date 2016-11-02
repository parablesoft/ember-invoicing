import Ember from 'ember';
import InvoiceListRouteMixin from 'ember-invoicing/mixins/invoice-list-route';
import { module, test } from 'qunit';

module('Unit | Mixin | invoice list route');

// Replace this with your real tests.
test('it works', function(assert) {
  let InvoiceListRouteObject = Ember.Object.extend(InvoiceListRouteMixin);
  let subject = InvoiceListRouteObject.create();
  assert.ok(subject);
});
