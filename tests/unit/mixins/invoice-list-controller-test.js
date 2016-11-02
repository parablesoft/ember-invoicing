import Ember from 'ember';
import InvoiceListControllerMixin from 'ember-invoicing/mixins/invoice-list-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | invoice list controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let InvoiceListControllerObject = Ember.Object.extend(InvoiceListControllerMixin);
  let subject = InvoiceListControllerObject.create();
  assert.ok(subject);
});
