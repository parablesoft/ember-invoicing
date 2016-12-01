import DS from "ember-data";


const {attr,Model,hasMany} = DS;
export default Model.extend({
  name: attr('string'),
  invoices: hasMany('invoice',{async: true}),
  address: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),
  email: attr("string"),

});
