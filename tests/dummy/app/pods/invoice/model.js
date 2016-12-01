import DS from "ember-data";


const {attr,Model,belongsTo,hasMany} = DS;
export default Model.extend({
  number: attr('string'),
  customer: belongsTo('customer',{async: true}),
  lineItems: hasMany("lineItem",{async: true}),
  amount: attr('number'),
  dueOn: attr('date'),
  issuedOn: attr("date"),
  status: attr('string'),
  billToAddress: attr("string"),
  billToCity: attr("string"),
  billToState: attr("string"),
  billToZip: attr("string"),
  billToEmail: attr("string"),
  notes: attr('string'),

});
