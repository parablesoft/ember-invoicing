import { Model,belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  invoice: belongsTo(),
  invoiceItem: belongsTo(),
});
