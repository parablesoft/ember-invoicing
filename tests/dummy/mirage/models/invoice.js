import { Model,belongsTo,hasMany } from 'ember-cli-mirage';

export default Model.extend({
  customer: belongsTo(),
  lineItems: hasMany(),
});
