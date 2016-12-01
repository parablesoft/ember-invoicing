import DS from "ember-data";
const {attr,Model,hasMany} = DS;
export default Model.extend({
  lineItems: hasMany("lineItem",{async: true}),
  itemCode: attr("string"),
  name: attr("string"),
});
