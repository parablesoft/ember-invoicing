import Ember from 'ember';
import InvoiceDownloadMixin from 'ember-invoicing/mixins/invoice-download';
import { module, test } from 'qunit';

module('Unit | Mixin | invoice download');

// Replace this with your real tests.
test('it works', function(assert) {
  let InvoiceDownloadObject = Ember.Object.extend(InvoiceDownloadMixin);
  let subject = InvoiceDownloadObject.create();
  assert.ok(subject);
});
